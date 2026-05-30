const fs = require('fs');
const path = require('path');

const newTopics = [
    {
        title: "9. Giới từ chỉ thời gian (Prepositions of Time)",
        chips: ["at", "on", "in"],
        formula: "",
        example: "",
        contentHTML: `
        <div class='bg-white p-4 rounded-xl shadow-sm border border-funSky-200 mb-4'>
            <h4 class='font-black text-funSky-600 mb-2'>1. AT: vào lúc</h4>
            <p class='text-sm text-gray-700 mb-1'>- Dùng chỉ thời gian trong ngày: <b>At + giờ</b> (At 5 o'clock)</p>
            <p class='text-sm text-gray-700 mb-1'>- At midnight/ night/ lunch time/ noon</p>
            <p class='text-sm text-gray-700'>- Chỉ dịp lễ hội, thời khắc: At the weekend, At Easter, At the same time, At the age of...</p>
        </div>
        <div class='bg-white p-4 rounded-xl shadow-sm border border-funAmber-200 mb-4'>
            <h4 class='font-black text-funAmber-600 mb-2'>2. ON: vào</h4>
            <p class='text-sm text-gray-700 mb-1'>- Dùng chỉ thứ trong tuần, ngày trong tháng: <b>On Monday, On 14th February</b></p>
            <p class='text-sm text-gray-700'>- Buổi trong ngày cụ thể: On Sunday evenings</p>
        </div>
        <div class='bg-white p-4 rounded-xl shadow-sm border border-funEmerald-200 mb-4'>
            <h4 class='font-black text-funEmerald-600 mb-2'>3. IN: trong</h4>
            <p class='text-sm text-gray-700 mb-1'>- Buổi trong ngày nói chung, kỳ nghỉ, học kỳ: In the morning, in the summer.</p>
            <p class='text-sm text-gray-700 mb-1'>- Tháng, mùa, năm, thập kỷ, thế kỷ: In August, In 2010, In the 1990s.</p>
            <p class='text-sm text-gray-700'>- Tương lai: In a moment, in a few minutes, in six months.</p>
        </div>
        `
    },
    {
        title: "10. Tag Questions (Câu hỏi đuôi)",
        chips: ["aren't I", "shall we", "will you"],
        formula: "",
        example: "",
        contentHTML: `
        <p class='text-sm text-gray-700 mb-2'><b>Quy tắc chung:</b> Câu nói và phần đuôi luôn ở dạng đối nhau (+ thì -, - thì +).</p>
        <div class='bg-purple-50 p-3 rounded-lg mb-2 font-mono text-purple-700 text-sm'>
            S + V, trợ động từ + not + S ?<br>
            S + trợ động từ + not, trợ động từ + V?
        </div>
        <ul class='list-disc pl-5 space-y-1 text-gray-700 text-sm'>
            <li><b>nothing, everything:</b> thay bằng <i>"it"</i> (Everything is ready, isn't it?)</li>
            <li><b>no one, nobody, someone, everyone:</b> thay bằng <i>"they"</i> (Someone called, didn't they?)</li>
            <li><b>this/that:</b> thay bằng <i>"it"</i>. <b>these/those:</b> thay bằng <i>"they"</i></li>
            <li><b>I AM:</b> đuôi là <i>AREN'T I</i></li>
            <li><b>Let's:</b> đuôi là <i>SHALL WE</i></li>
            <li><b>Câu mệnh lệnh:</b> đuôi là <i>WILL YOU / WON'T YOU</i></li>
        </ul>
        `
    },
    {
        title: "11. Infinitives and Gerunds (To-V & V-ing)",
        chips: ["To-inf", "V-ing", "Bare inf"],
        formula: "",
        example: "",
        contentHTML: `
        <div class='space-y-3 text-sm text-gray-700'>
            <div class='bg-white p-3 rounded-lg border-l-4 border-funSky-500 shadow-sm'>
                <strong>1. To-infinitive:</strong><br>
                - Sau: <i>agree, demand, expect, hope, promise, decide, plan, pretend, want...</i><br>
                - Cấu trúc: <b>It takes/took + O + time + to-inf</b><br>
                - Cấu trúc: <b>S + be + adj + to-inf</b> (I'm happy to receive...)
            </div>
            <div class='bg-white p-3 rounded-lg border-l-4 border-funAmber-500 shadow-sm'>
                <strong>2. Bare infinitive (V1 - Không to):</strong><br>
                - Sau khiếm khuyết: <i>can, will, should...</i><br>
                - Sau: <i>let, make, would rather, had better</i>
            </div>
            <div class='bg-white p-3 rounded-lg border-l-4 border-funEmerald-500 shadow-sm'>
                <strong>3. Gerund (V-ing):</strong><br>
                - Sau: <i>enjoy, avoid, admit, mind, finish, suggest, postpone, hate, like, deny...</i><br>
                - Cụm từ: <i>can't help, can't bear, look forward to, be busy, be worth...</i><br>
                - Sau giới từ (in, on, at...) và liên từ (after, before...).
            </div>
        </div>
        `
    },
    {
        title: "12. Adjectives and Adverbs (Tính từ & Trạng từ)",
        chips: ["Adj", "Adv"],
        formula: "",
        example: "",
        contentHTML: `
        <ul class='space-y-2 text-sm text-gray-700'>
            <li><strong>Tính từ (Adj):</strong>
                <ul class='list-circle pl-5'>
                    <li>Đứng trước danh từ: <i>adj + N</i></li>
                    <li>Sau <i>to be</i> và các từ nối: <i>become, feel, look, seem, taste, smell, sound</i>.</li>
                    <li>Sau đại từ bất định: <i>something, anything...</i></li>
                </ul>
            </li>
            <li><strong>Trạng từ (Adv):</strong>
                <ul class='list-circle pl-5'>
                    <li>Đứng sau động từ thường bổ nghĩa cho động từ.</li>
                    <li>Cấu trúc bị động: <i>be + adv + V3/ed</i>.</li>
                </ul>
            </li>
        </ul>
        <p class='text-sm text-gray-600 mt-2 italic'>*Lưu ý: Một số từ vừa là tính vừa là trạng: fast, hard, early, late.</p>
        `
    },
    {
        title: "13. Adverb Clauses of Reason (Mệnh đề Lý do)",
        chips: ["Because", "Since", "Due to"],
        formula: "",
        example: "",
        contentHTML: `
        <div class='bg-blue-50 p-4 rounded-xl border border-blue-200 mb-4'>
            <h4 class='font-black text-blue-600 mb-2'>1. Mệnh đề (Cộng S + V)</h4>
            <div class='font-mono text-blue-800 font-bold mb-2'>
                Because / As / Since + S + V
            </div>
            <p class='text-sm'>Ex: <i>Because it was raining, we stayed indoors.</i></p>
        </div>
        <div class='bg-green-50 p-4 rounded-xl border border-green-200 mb-4'>
            <h4 class='font-black text-green-600 mb-2'>2. Cụm từ (Cộng N / V-ing)</h4>
            <div class='font-mono text-green-800 font-bold mb-2'>
                Because of / Due to + V-ing / Noun
            </div>
            <p class='text-sm'>Ex: <i>Due to the bad weather, the flight was delayed.</i></p>
        </div>
        `
    },
    {
        title: "14. Connectives (Từ nối)",
        chips: ["And", "But", "Therefore", "However"],
        formula: "",
        example: "",
        contentHTML: `
        <table class='w-full text-sm text-left border-collapse mt-2 bg-white rounded-lg overflow-hidden shadow-sm'>
            <thead class='bg-gray-100 text-gray-700'>
                <tr><th class='p-2 border'>Từ nối</th><th class='p-2 border'>Ý nghĩa</th><th class='p-2 border'>Ví dụ</th></tr>
            </thead>
            <tbody>
                <tr>
                    <td class='p-2 border font-bold'>and, but, so, or</td>
                    <td class='p-2 border'>nối 2 mệnh đề (dùng dấu phẩy)</td>
                    <td class='p-2 border'>He is tired, <b>but</b> he goes to the gym.</td>
                </tr>
                <tr>
                    <td class='p-2 border font-bold'>However, Therefore</td>
                    <td class='p-2 border'>Tuy nhiên, Do đó (đứng đầu câu mới hoặc sau ;)</td>
                    <td class='p-2 border'>She didn't study<b>; therefore,</b> she failed.</td>
                </tr>
            </tbody>
        </table>
        `
    },
    {
        title: "15. Making Suggestions (Đề nghị)",
        chips: ["Let's", "How about", "Suggest"],
        formula: "",
        example: "",
        contentHTML: `
        <ul class='space-y-2 text-sm text-gray-700'>
            <li><strong>Let's + V1</strong></li>
            <li><strong>Shall we + V1...?</strong></li>
            <li><strong>How about / What about + V-ing...?</strong></li>
            <li><strong>Why don't we + V1...?</strong></li>
            <li><strong>S + suggest + V-ing</strong></li>
            <li><strong>S + suggest + that + S + (should) + V1</strong></li>
        </ul>
        `
    },
    {
        title: "16. Clauses of Concession (Nhượng bộ)",
        chips: ["Although", "Despite"],
        formula: "",
        example: "",
        contentHTML: `
        <div class='bg-purple-50 p-4 rounded-xl border border-purple-200 mb-4'>
            <h4 class='font-black text-purple-600 mb-2'>1. Mệnh đề</h4>
            <div class='font-mono text-purple-800 font-bold mb-2'>
                Although / Even though / Though + S + V
            </div>
            <p class='text-sm'>Ex: <i>Although she was tired, she finished her homework.</i></p>
        </div>
        <div class='bg-yellow-50 p-4 rounded-xl border border-yellow-200 mb-4'>
            <h4 class='font-black text-yellow-600 mb-2'>2. Cụm từ</h4>
            <div class='font-mono text-yellow-800 font-bold mb-2'>
                Despite / In spite of + V-ing / Noun Phrase
            </div>
            <p class='text-sm'>Ex: <i>Despite the rain, they went out.</i></p>
        </div>
        `
    },
    {
        title: "17. Clauses of Result (Kết quả)",
        chips: ["so...that", "such...that"],
        formula: "",
        example: "",
        contentHTML: `
        <ul class='space-y-2 text-sm text-gray-700'>
            <li><strong>So...that (quá...đến nỗi):</strong> <code>S + be/V + so + adj/adv + that + S + V</code></li>
            <li><strong>Such...that:</strong> <code>S + V + such + (a/an) + N + that + S + V</code></li>
            <li><strong>Enough...to (đủ...để):</strong> <code>S + V + adj/adv + enough + (for O) + to-V</code></li>
            <li><strong>Too...to (quá...không thể):</strong> <code>S + V + too + adj/adv + (for O) + to-V</code></li>
        </ul>
        `
    },
    {
        title: "18. Double Comparisons (So sánh kép)",
        chips: ["The more...the more", "adj-er and adj-er"],
        formula: "",
        example: "",
        contentHTML: `
        <p class='text-sm text-gray-700 mb-2'>Dùng để diễn tả sự thay đổi tỷ lệ thuận hoặc tăng dần.</p>
        <ul class='space-y-2 text-sm text-gray-700'>
            <li><strong>Càng ngày càng...:</strong><br> 
            Ngắn: <code>adj-er and adj-er</code> (hotter and hotter)<br>
            Dài: <code>more and more + adj</code> (more and more beautiful)
            </li>
            <li><strong>Càng... càng...:</strong><br>
            <code>The + so sánh hơn + S + V, The + so sánh hơn + S + V</code><br>
            Ex: <i>The harder you work, the better result you get.</i>
            </li>
        </ul>
        `
    },
    {
        title: "19. Quantifiers (Từ chỉ số lượng)",
        chips: ["many", "much", "few", "little"],
        formula: "",
        example: "",
        contentHTML: `
        <div class='grid grid-cols-2 gap-2 text-sm text-center'>
            <div class='bg-blue-50 p-2 rounded border border-blue-100'><strong>Many / A few / Few</strong><br>+ N đếm được (số nhiều)</div>
            <div class='bg-green-50 p-2 rounded border border-green-100'><strong>Much / A little / Little</strong><br>+ N không đếm được</div>
        </div>
        <p class='mt-3 text-sm text-gray-700'><strong>Lưu ý:</strong><br> 
        - <i>a few / a little</i>: ít nhưng ĐỦ dùng.<br>
        - <i>few / little</i>: rất ít, KHÔNG ĐỦ dùng mang nghĩa phủ định.<br>
        - <i>a lot of / lots of / some</i>: dùng được cho cả hai loại.
        </p>
        `
    },
    {
        title: "20. Participles (Phân từ)",
        chips: ["V-ing", "V-ed"],
        formula: "",
        example: "",
        contentHTML: `
        <p class='text-sm text-gray-700 mb-2'>Sử dụng phân từ như tính từ:</p>
        <ul class='space-y-2 text-sm text-gray-700'>
            <li><strong>Hiện tại phân từ (V-ing):</strong> Thường dùng miêu tả VẬT, mang ý <b>chủ động</b>, bản chất của sự việc. (Ex: an <i>interesting</i> book)</li>
            <li><strong>Quá khứ phân từ (V-ed/V3):</strong> Thường dùng miêu tả NGƯỜI, mang ý <b>bị động</b>, cảm xúc bị tác động. (Ex: I am <i>interested</i> in books)</li>
        </ul>
        <p class='mt-2 text-xs text-gray-500'>Ví dụ khác: bore -> boring/bored, excite -> exciting/excited, tire -> tiring/tired.</p>
        `
    },
    {
        title: "21. Other Structures (Cấu trúc khác)",
        chips: ["too", "either", "used to"],
        formula: "",
        example: "",
        contentHTML: `
        <ul class='space-y-2 text-sm text-gray-700'>
            <li><strong>Đồng ý khẳng định:</strong> <code>S + V(trợ) + too</code> hoặc <code>So + V(trợ) + S</code></li>
            <li><strong>Đồng ý phủ định:</strong> <code>S + V(trợ, not) + either</code> hoặc <code>Neither + V(trợ) + S</code></li>
            <li><strong>Used to + V:</strong> Đã từng làm gì trong QK (giờ không làm nữa).</li>
            <li><strong>Be/Get used to + V-ing:</strong> Quen với việc gì.</li>
            <li><strong>Would you mind + V-ing?</strong> Bạn có phiền...</li>
        </ul>
        `
    },
    {
        title: "22. Pronunciation -S/-ES (Phát âm S/ES)",
        chips: ["/s/", "/iz/", "/z/"],
        formula: "",
        example: "",
        contentHTML: `
        <div class='space-y-3 text-sm text-gray-700'>
            <div class='bg-white p-3 rounded-lg border-l-4 border-red-500 shadow-sm'>
                <strong>1. Phát âm /s/:</strong><br>
                Tận cùng là các âm vô thanh: /p/, /t/, /k/, /f/, /θ/ (Phải Tự Kính Phật Tổ).
            </div>
            <div class='bg-white p-3 rounded-lg border-l-4 border-blue-500 shadow-sm'>
                <strong>2. Phát âm /iz/:</strong><br>
                Tận cùng là các âm: /s/, /z/, /∫/, /t∫/, /dʒ/ (Sóng gió chẳng sợ zì).
            </div>
            <div class='bg-white p-3 rounded-lg border-l-4 border-green-500 shadow-sm'>
                <strong>3. Phát âm /z/:</strong><br>
                Các trường hợp còn lại (âm hữu thanh và nguyên âm).
            </div>
        </div>
        `
    },
    {
        title: "23. Pronunciation -ED (Phát âm ED)",
        chips: ["/id/", "/t/", "/d/"],
        formula: "",
        example: "",
        contentHTML: `
        <div class='space-y-3 text-sm text-gray-700'>
            <div class='bg-white p-3 rounded-lg border-l-4 border-red-500 shadow-sm'>
                <strong>1. Phát âm /id/:</strong><br>
                Tận cùng là âm /t/ hoặc /d/ (Tiền Đô).
            </div>
            <div class='bg-white p-3 rounded-lg border-l-4 border-blue-500 shadow-sm'>
                <strong>2. Phát âm /t/:</strong><br>
                Tận cùng là các âm vô thanh: /p/, /k/, /f/, /s/, /∫/, /t∫/ (Phải Kính Phật Sợ Chó Sói).
            </div>
            <div class='bg-white p-3 rounded-lg border-l-4 border-green-500 shadow-sm'>
                <strong>3. Phát âm /d/:</strong><br>
                Các âm hữu thanh và nguyên âm còn lại.
            </div>
        </div>
        `
    }
];

const filePath = path.join(__dirname, 'questions.js');
let content = fs.readFileSync(filePath, 'utf8');

// The array grammarTopics ends at line 88 with `];`
// We will replace `];` with `, ...newTopics ];`

const insertionString = newTopics.map(t => JSON.stringify(t, null, 4)).join(',\\n');
content = content.replace(/];/, ',\\n' + insertionString + '\\n];');

fs.writeFileSync(filePath, content);
console.log('Successfully appended topics');
