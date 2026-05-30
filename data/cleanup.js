const fs = require('fs');
const path = require('path');

const jsonPath = path.join(__dirname, 'questions.json');
const data = JSON.parse(fs.readFileSync(jsonPath, 'utf8'));

console.log(`Total topics before: ${data.grammarTopics.length}`);

// We want to keep topics that start with a number, OR the ones we missed (like S-V AGREEMENT if we didn't rewrite it)
const newTopics = data.grammarTopics.filter(t => /^\d+\./.test(t.title));
const svAgreement = data.grammarTopics.find(t => t.title.includes('S-V AGREEMENT') && !/^\d+\./.test(t.title));

// Let's just keep the new topics. We can rewrite S-V AGREEMENT quickly if needed.
const finalTopics = [...newTopics];
if (svAgreement) {
    // Add it as 2. Subject-Verb Agreement so it looks consistent
    svAgreement.title = "2. Subject-Verb Agreement";
    finalTopics.splice(1, 0, svAgreement); // Insert at index 1
}

// Sort topics by the number at the beginning of their title
finalTopics.sort((a, b) => {
    const numA = parseInt(a.title.match(/^\d+/)?.[0] || "99");
    const numB = parseInt(b.title.match(/^\d+/)?.[0] || "99");
    return numA - numB;
});

data.grammarTopics = finalTopics;
console.log(`Total topics after: ${data.grammarTopics.length}`);

fs.writeFileSync(jsonPath, JSON.stringify(data, null, 2), 'utf8');
console.log('Cleanup complete!');
