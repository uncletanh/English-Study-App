const fs = require('fs');
const path = require('path');

const jsonPath = path.join(__dirname, 'questions.json');
const data = JSON.parse(fs.readFileSync(jsonPath, 'utf8'));

// Dùng Map để giữ lại topic có nội dung dài nhất (đề phòng bản lỗi có nội dung ngắn)
const map = new Map();

data.grammarTopics.forEach(topic => {
    // Sửa lỗi font chữ
    if (topic.title.includes('S-V') || topic.title.includes('Subject-Verb')) {
        topic.title = '2. Subject-Verb Agreement (Sự hòa hợp S-V)';
    }

    // Lấy số đầu tiên trong title để làm key gom nhóm (vd "1. Tenses..." -> "1")
    const match = topic.title.match(/^(\d+)\./);
    if (match) {
        const key = match[1];
        if (!map.has(key)) {
            map.set(key, topic);
        } else {
            // Nếu đã có, giữ lại cái nào có nội dung dài hơn
            const existing = map.get(key);
            const existingLen = existing.contentHTML ? existing.contentHTML.length : 0;
            const currentLen = topic.contentHTML ? topic.contentHTML.length : 0;
            if (currentLen > existingLen) {
                map.set(key, topic);
            }
        }
    }
});

// Chuyển lại thành mảng và sắp xếp
data.grammarTopics = Array.from(map.values()).sort((a, b) => {
    const numA = parseInt(a.title.match(/^(\d+)\./)[1]);
    const numB = parseInt(b.title.match(/^(\d+)\./)[1]);
    return numA - numB;
});

fs.writeFileSync(jsonPath, JSON.stringify(data, null, 4), 'utf8');
console.log('Fixed grammar duplicates! Total topics: ' + data.grammarTopics.length);
