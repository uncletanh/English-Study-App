// --- DỮ LIỆU NGỮ PHÁP (23 CHỦ ĐỀ) ---
const grammarTopics = [
    {
        "title": "1. Tenses (Các thì cơ bản)",
        "chips": [
            "Always",
            "Now",
            "Yesterday",
            "Since"
        ],
        "formula": "",
        "example": "",
        "contentHTML": "\n        <div class='bg-white p-4 rounded-xl shadow-sm border border-funSky-200 mb-4'>\n            <h4 class='font-black text-funSky-600 mb-2'>A. Hiện Tại Đơn (Simple Present)</h4>\n            <p class='text-sm text-gray-700 mb-2'>Diễn tả thói quen, sự thật hiển nhiên.</p>\n            <div class='bg-funSky-50 p-3 rounded-lg mb-2 font-mono text-funSky-700 text-sm'>\n                (+) S + V1 / V(s/es)<br>\n                (-) S + don't / doesn't + V1<br>\n                (?) Do / Does + S + V1?\n            </div>\n            <p class='text-sm text-gray-600'><strong>Dấu hiệu:</strong> always, usually, often, every...</p>\n            <p class='text-sm text-gray-800 italic mt-2'>\"She often goes to school late.\"</p>\n        </div>\n\n        <div class='bg-white p-4 rounded-xl shadow-sm border border-funAmber-200 mb-4'>\n            <h4 class='font-black text-funAmber-600 mb-2'>B. Hiện Tại Tiếp Diễn (Present Continuous)</h4>\n            <p class='text-sm text-gray-700 mb-2'>Hành động đang diễn ra lúc nói hoặc dự định tương lai gần.</p>\n            <div class='bg-funAmber-50 p-3 rounded-lg mb-2 font-mono text-funAmber-700 text-sm'>\n                (+) S + am/is/are + V-ing<br>\n                (-) S + am/is/are + not + V-ing\n            </div>\n            <p class='text-sm text-gray-600'><strong>Dấu hiệu:</strong> now, right now, at the moment, Look!</p>\n            <p class='text-sm text-gray-800 italic mt-2'>\"I am having a bath right now.\"</p>\n        </div>\n\n        <div class='bg-white p-4 rounded-xl shadow-sm border border-funEmerald-200 mb-4'>\n            <h4 class='font-black text-funEmerald-600 mb-2'>C. Quá Khứ Đơn (Simple Past)</h4>\n            <p class='text-sm text-gray-700 mb-2'>Hành động đã xảy ra và kết thúc trong quá khứ.</p>\n            <div class='bg-funEmerald-50 p-3 rounded-lg mb-2 font-mono text-funEmerald-700 text-sm'>\n                (+) S + V2 / V-ed<br>\n                (-) S + didn't + V1\n            </div>\n            <p class='text-sm text-gray-600'><strong>Dấu hiệu:</strong> yesterday, last week, ago, in 1990...</p>\n            <p class='text-sm text-gray-800 italic mt-2'>\"She went to London last year.\"</p>\n        </div>\n        "
    },
    {
        "title": "2. Subject-Verb Agreement (Sự hòa hợp S-V)",
        "chips": [
            "số ít",
            "số nhiều"
        ],
        "formula": "",
        "example": "",
        "contentHTML": "\n        <ul class='list-disc pl-5 space-y-2 text-gray-700 text-sm'>\n            <li><strong>Chủ ngữ số ít:</strong> Động từ chia số ít (VD: She walks to school).</li>\n            <li><strong>Chủ ngữ nối bằng AND:</strong> Động từ số nhiều (VD: Tom and Jerry are friends).<br>\n                <span class='text-red-500 font-bold'>⛔ Ngoại lệ:</span> Nếu chỉ cùng 1 món ăn/khái niệm thì dùng số ít (VD: Bread and butter is his favorite).</li>\n            <li><strong>Either...or / Neither...nor:</strong> Động từ chia theo chủ ngữ gần nhất.</li>\n            <li><strong>Each/Every/Everyone/Someone:</strong> Luôn đi với động từ số ít!</li>\n            <li><strong>The number of:</strong> + V số ít. <br><strong>A number of:</strong> + V số nhiều.</li>\n        </ul>\n        "
    },
    {
        "title": "3. Passive Voice (Câu bị động)",
        "chips": [
            "by + O",
            "be + Vp2"
        ],
        "formula": "",
        "example": "",
        "contentHTML": "\n        <div class='bg-purple-50 p-4 rounded-xl border border-purple-200 mb-4'>\n            <h4 class='font-black text-purple-600 mb-2'>Cấu trúc chung</h4>\n            <div class='font-mono text-purple-800 font-bold text-center mb-2'>\n                S + BE + Vp2/ed + (by O)\n            </div>\n            <ul class='space-y-1 text-sm text-gray-700 mt-4'>\n                <li><strong>Hiện tại đơn:</strong> am/is/are + Vp2</li>\n                <li><strong>Quá khứ đơn:</strong> was/were + Vp2</li>\n                <li><strong>Tương lai đơn:</strong> will be + Vp2</li>\n                <li><strong>Hiện tại hoàn thành:</strong> have/has been + Vp2</li>\n            </ul>\n        </div>\n        <p class='text-sm italic text-gray-600'>* Lưu ý: Các chủ ngữ someone, people, he, she... có thể bỏ \"by + O\".</p>\n        "
    },
    {
        "title": "4. Wish Clauses (Mệnh đề mong ước)",
        "chips": [
            "wish",
            "if only"
        ],
        "formula": "",
        "example": "",
        "contentHTML": "\n        <div class='space-y-3 text-sm text-gray-700'>\n            <div class='bg-white p-3 rounded-lg border-l-4 border-funSky-500 shadow-sm'>\n                <strong>1. Ước ở Hiện tại (Trái với hiện tại):</strong><br>\n                <code class='text-funSky-600'>S + wish + S + V2/ed (To be: were)</code><br>\n                <em>VD: I wish I could swim.</em>\n            </div>\n            <div class='bg-white p-3 rounded-lg border-l-4 border-funAmber-500 shadow-sm'>\n                <strong>2. Ước ở Quá khứ (Trái với quá khứ):</strong><br>\n                <code class='text-funAmber-600'>S + wish + S + had + V3/ed</code><br>\n                <em>VD: She wishes she hadn't failed her exam.</em>\n            </div>\n            <div class='bg-white p-3 rounded-lg border-l-4 border-funEmerald-500 shadow-sm'>\n                <strong>3. Ước ở Tương lai:</strong><br>\n                <code class='text-funEmerald-600'>S + wish + S + would/could + V1</code><br>\n                <em>VD: I wish you would stop smoking.</em>\n            </div>\n        </div>\n        "
    },
    {
        "title": "5. Conditional Sentences (Câu điều kiện)",
        "chips": [
            "If",
            "Unless"
        ],
        "formula": "",
        "example": "",
        "contentHTML": "\n        <table class='w-full text-sm text-left border-collapse mt-2 bg-white rounded-lg overflow-hidden shadow-sm'>\n            <thead class='bg-funSky-100 text-funSky-700'>\n                <tr><th class='p-2 border'>Loại</th><th class='p-2 border'>If Clause</th><th class='p-2 border'>Main Clause</th></tr>\n            </thead>\n            <tbody>\n                <tr>\n                    <td class='p-2 border font-bold'>Loại 1 (Có thật)</td>\n                    <td class='p-2 border font-mono'>S + V (Hiện tại)</td>\n                    <td class='p-2 border font-mono'>S + will/can + V1</td>\n                </tr>\n                <tr>\n                    <td class='p-2 border font-bold'>Loại 2 (Không thật HT)</td>\n                    <td class='p-2 border font-mono'>S + V2/ed (To be: were)</td>\n                    <td class='p-2 border font-mono'>S + would/could + V1</td>\n                </tr>\n                <tr>\n                    <td class='p-2 border font-bold'>Loại 3 (Không thật QK)</td>\n                    <td class='p-2 border font-mono'>S + had + V3/ed</td>\n                    <td class='p-2 border font-mono'>S + would have + V3/ed</td>\n                </tr>\n            </tbody>\n        </table>\n        <p class='mt-3 text-sm text-gray-700'><strong>Mẹo:</strong> <code>Unless = If ... not</code> (Trừ phi)</p>\n        "
    },
    {
        "title": "6. Reported Speech (Câu tường thuật)",
        "chips": [
            "lùi thì",
            "said",
            "told"
        ],
        "formula": "",
        "example": "",
        "contentHTML": "\n        <p class='text-sm text-gray-700 mb-2'>Khi đổi từ trực tiếp sang gián tiếp, cần thực hiện 3 bước:</p>\n        <ul class='list-decimal pl-5 text-sm text-gray-700 space-y-1 mb-3'>\n            <li>Đổi ngôi (I -> He/She, My -> His/Her...)</li>\n            <li>Lùi thì (Hiện tại -> Quá khứ, Quá khứ -> Quá khứ hoàn thành)</li>\n            <li>Đổi trạng từ (Now -> Then, Today -> That day, Here -> There)</li>\n        </ul>\n        <div class='bg-yellow-50 p-3 rounded-lg border border-yellow-200 text-sm'>\n            <strong>Câu hỏi Yes/No:</strong> Thêm <code>If/Whether</code><br>\n            <em>\"Do you like apples?\" -> He asked me if I liked apples.</em>\n        </div>\n        "
    },
    {
        "title": "7. Relative Clauses (Mệnh đề quan hệ)",
        "chips": [
            "who",
            "which",
            "that"
        ],
        "formula": "",
        "example": "",
        "contentHTML": "\n        <div class='grid grid-cols-2 gap-2 text-sm'>\n            <div class='bg-blue-50 p-2 rounded border border-blue-100'><strong>WHO</strong>: Thay cho người (Chủ ngữ)</div>\n            <div class='bg-blue-50 p-2 rounded border border-blue-100'><strong>WHOM</strong>: Thay cho người (Tân ngữ)</div>\n            <div class='bg-green-50 p-2 rounded border border-green-100'><strong>WHICH</strong>: Thay cho vật</div>\n            <div class='bg-green-50 p-2 rounded border border-green-100'><strong>WHOSE</strong>: Sở hữu (của ai)</div>\n            <div class='bg-purple-50 p-2 rounded border border-purple-100'><strong>WHERE</strong>: Nơi chốn</div>\n            <div class='bg-purple-50 p-2 rounded border border-purple-100'><strong>WHEN</strong>: Thời gian</div>\n        </div>\n        <p class='mt-3 text-sm text-gray-700'><strong>THAT:</strong> Có thể thay cho Who/Whom/Which trong mệnh đề xác định (không có dấu phẩy).</p>\n        "
    },
    {
        "title": "8. Comparisons (Cấu trúc So sánh)",
        "chips": [
            "-er",
            "more",
            "the -est"
        ],
        "formula": "",
        "example": "",
        "contentHTML": "\n        <ul class='space-y-2 text-sm text-gray-700'>\n            <li><strong>So sánh bằng:</strong> <code>S + be + as + adj + as...</code></li>\n            <li><strong>So sánh hơn (Tính từ ngắn):</strong> <code>adj-er + than</code> (VD: taller than)</li>\n            <li><strong>So sánh hơn (Tính từ dài):</strong> <code>more + adj + than</code> (VD: more beautiful than)</li>\n            <li><strong>So sánh nhất (Ngắn):</strong> <code>the + adj-est</code> (VD: the tallest)</li>\n            <li><strong>So sánh nhất (Dài):</strong> <code>the most + adj</code> (VD: the most expensive)</li>\n        </ul>\n        <div class='bg-red-50 p-2 rounded text-xs mt-2 border border-red-200'>\n            <strong>Bất quy tắc:</strong> good -> better -> best | bad -> worse -> worst\n        </div>\n        "
    },
    {
        "title": "9. Giới từ chỉ thời gian (Prepositions of Time)",
        "chips": ["at", "on", "in"],
        "formula": "",
        "example": "",
        "contentHTML": "\n        <div class='bg-white p-4 rounded-xl shadow-sm border border-funSky-200 mb-4'>\n            <h4 class='font-black text-funSky-600 mb-2'>1. AT: vào lúc</h4>\n            <p class='text-sm text-gray-700 mb-1'>- Dùng chỉ thời gian trong ngày: <b>At + giờ</b> (At 5 o'clock)</p>\n            <p class='text-sm text-gray-700 mb-1'>- At midnight/ night/ lunch time/ noon</p>\n            <p class='text-sm text-gray-700'>- Chỉ dịp lễ hội, thời khắc: At the weekend, At Easter, At the same time, At the age of...</p>\n        </div>\n        <div class='bg-white p-4 rounded-xl shadow-sm border border-funAmber-200 mb-4'>\n            <h4 class='font-black text-funAmber-600 mb-2'>2. ON: vào</h4>\n            <p class='text-sm text-gray-700 mb-1'>- Dùng chỉ thứ trong tuần, ngày trong tháng: <b>On Monday, On 14th February</b></p>\n            <p class='text-sm text-gray-700'>- Buổi trong ngày cụ thể: On Sunday evenings</p>\n        </div>\n        <div class='bg-white p-4 rounded-xl shadow-sm border border-funEmerald-200 mb-4'>\n            <h4 class='font-black text-funEmerald-600 mb-2'>3. IN: trong</h4>\n            <p class='text-sm text-gray-700 mb-1'>- Buổi trong ngày nói chung, kỳ nghỉ, học kỳ: In the morning, in the summer.</p>\n            <p class='text-sm text-gray-700 mb-1'>- Tháng, mùa, năm, thập kỷ, thế kỷ: In August, In 2010, In the 1990s.</p>\n            <p class='text-sm text-gray-700'>- Tương lai: In a moment, in a few minutes, in six months.</p>\n        </div>\n        "
    },
    {
        "title": "10. Tag Questions (Câu hỏi đuôi)",
        "chips": ["aren't I", "shall we", "will you"],
        "formula": "",
        "example": "",
        "contentHTML": "\n        <p class='text-sm text-gray-700 mb-2'><b>Quy tắc chung:</b> Câu nói và phần đuôi luôn ở dạng đối nhau (+ thì -, - thì +).</p>\n        <div class='bg-purple-50 p-3 rounded-lg mb-2 font-mono text-purple-700 text-sm'>\n            S + V, trợ động từ + not + S ?<br>\n            S + trợ động từ + not, trợ động từ + V?\n        </div>\n        <ul class='list-disc pl-5 space-y-1 text-gray-700 text-sm'>\n            <li><b>nothing, everything:</b> thay bằng <i>\"it\"</i> (Everything is ready, isn't it?)</li>\n            <li><b>no one, nobody, someone, everyone:</b> thay bằng <i>\"they\"</i> (Someone called, didn't they?)</li>\n            <li><b>this/that:</b> thay bằng <i>\"it\"</i>. <b>these/those:</b> thay bằng <i>\"they\"</i></li>\n            <li><b>I AM:</b> đuôi là <i>AREN'T I</i></li>\n            <li><b>Let's:</b> đuôi là <i>SHALL WE</i></li>\n            <li><b>Câu mệnh lệnh:</b> đuôi là <i>WILL YOU / WON'T YOU</i></li>\n        </ul>\n        "
    },
    {
        "title": "11. Infinitives and Gerunds (To-V & V-ing)",
        "chips": ["To-inf", "V-ing", "Bare inf"],
        "formula": "",
        "example": "",
        "contentHTML": "\n        <div class='space-y-3 text-sm text-gray-700'>\n            <div class='bg-white p-3 rounded-lg border-l-4 border-funSky-500 shadow-sm'>\n                <strong>1. To-infinitive:</strong><br>\n                - Sau: <i>agree, demand, expect, hope, promise, decide, plan, pretend, want...</i><br>\n                - Cấu trúc: <b>It takes/took + O + time + to-inf</b><br>\n                - Cấu trúc: <b>S + be + adj + to-inf</b> (I'm happy to receive...)\n            </div>\n            <div class='bg-white p-3 rounded-lg border-l-4 border-funAmber-500 shadow-sm'>\n                <strong>2. Bare infinitive (V1 - Không to):</strong><br>\n                - Sau khiếm khuyết: <i>can, will, should...</i><br>\n                - Sau: <i>let, make, would rather, had better</i>\n            </div>\n            <div class='bg-white p-3 rounded-lg border-l-4 border-funEmerald-500 shadow-sm'>\n                <strong>3. Gerund (V-ing):</strong><br>\n                - Sau: <i>enjoy, avoid, admit, mind, finish, suggest, postpone, hate, like, deny...</i><br>\n                - Cụm từ: <i>can't help, can't bear, look forward to, be busy, be worth...</i><br>\n                - Sau giới từ (in, on, at...) và liên từ (after, before...).\n            </div>\n        </div>\n        "
    },
    {
        "title": "12. Adjectives and Adverbs (Tính từ & Trạng từ)",
        "chips": ["Adj", "Adv"],
        "formula": "",
        "example": "",
        "contentHTML": "\n        <ul class='space-y-2 text-sm text-gray-700'>\n            <li><strong>Tính từ (Adj):</strong>\n                <ul class='list-circle pl-5'>\n                    <li>Đứng trước danh từ: <i>adj + N</i></li>\n                    <li>Sau <i>to be</i> và các từ nối: <i>become, feel, look, seem, taste, smell, sound</i>.</li>\n                    <li>Sau đại từ bất định: <i>something, anything...</i></li>\n                </ul>\n            </li>\n            <li><strong>Trạng từ (Adv):</strong>\n                <ul class='list-circle pl-5'>\n                    <li>Đứng sau động từ thường bổ nghĩa cho động từ.</li>\n                    <li>Cấu trúc bị động: <i>be + adv + V3/ed</i>.</li>\n                </ul>\n            </li>\n        </ul>\n        <p class='text-sm text-gray-600 mt-2 italic'>*Lưu ý: Một số từ vừa là tính vừa là trạng: fast, hard, early, late.</p>\n        "
    },
    {
        "title": "13. Adverb Clauses of Reason (Mệnh đề Lý do)",
        "chips": ["Because", "Since", "Due to"],
        "formula": "",
        "example": "",
        "contentHTML": "\n        <div class='bg-blue-50 p-4 rounded-xl border border-blue-200 mb-4'>\n            <h4 class='font-black text-blue-600 mb-2'>1. Mệnh đề (Cộng S + V)</h4>\n            <div class='font-mono text-blue-800 font-bold mb-2'>\n                Because / As / Since + S + V\n            </div>\n            <p class='text-sm'>Ex: <i>Because it was raining, we stayed indoors.</i></p>\n        </div>\n        <div class='bg-green-50 p-4 rounded-xl border border-green-200 mb-4'>\n            <h4 class='font-black text-green-600 mb-2'>2. Cụm từ (Cộng N / V-ing)</h4>\n            <div class='font-mono text-green-800 font-bold mb-2'>\n                Because of / Due to + V-ing / Noun\n            </div>\n            <p class='text-sm'>Ex: <i>Due to the bad weather, the flight was delayed.</i></p>\n        </div>\n        "
    },
    {
        "title": "14. Connectives (Từ nối)",
        "chips": ["And", "But", "Therefore", "However"],
        "formula": "",
        "example": "",
        "contentHTML": "\n        <table class='w-full text-sm text-left border-collapse mt-2 bg-white rounded-lg overflow-hidden shadow-sm'>\n            <thead class='bg-gray-100 text-gray-700'>\n                <tr><th class='p-2 border'>Từ nối</th><th class='p-2 border'>Ý nghĩa</th><th class='p-2 border'>Ví dụ</th></tr>\n            </thead>\n            <tbody>\n                <tr>\n                    <td class='p-2 border font-bold'>and, but, so, or</td>\n                    <td class='p-2 border'>nối 2 mệnh đề (dùng dấu phẩy)</td>\n                    <td class='p-2 border'>He is tired, <b>but</b> he goes to the gym.</td>\n                </tr>\n                <tr>\n                    <td class='p-2 border font-bold'>However, Therefore</td>\n                    <td class='p-2 border'>Tuy nhiên, Do đó (đứng đầu câu mới hoặc sau ;)</td>\n                    <td class='p-2 border'>She didn't study<b>; therefore,</b> she failed.</td>\n                </tr>\n            </tbody>\n        </table>\n        "
    },
    {
        "title": "15. Making Suggestions (Đề nghị)",
        "chips": ["Let's", "How about", "Suggest"],
        "formula": "",
        "example": "",
        "contentHTML": "\n        <ul class='space-y-2 text-sm text-gray-700'>\n            <li><strong>Let's + V1</strong></li>\n            <li><strong>Shall we + V1...?</strong></li>\n            <li><strong>How about / What about + V-ing...?</strong></li>\n            <li><strong>Why don't we + V1...?</strong></li>\n            <li><strong>S + suggest + V-ing</strong></li>\n            <li><strong>S + suggest + that + S + (should) + V1</strong></li>\n        </ul>\n        "
    },
    {
        "title": "16. Clauses of Concession (Nhượng bộ)",
        "chips": ["Although", "Despite"],
        "formula": "",
        "example": "",
        "contentHTML": "\n        <div class='bg-purple-50 p-4 rounded-xl border border-purple-200 mb-4'>\n            <h4 class='font-black text-purple-600 mb-2'>1. Mệnh đề</h4>\n            <div class='font-mono text-purple-800 font-bold mb-2'>\n                Although / Even though / Though + S + V\n            </div>\n            <p class='text-sm'>Ex: <i>Although she was tired, she finished her homework.</i></p>\n        </div>\n        <div class='bg-yellow-50 p-4 rounded-xl border border-yellow-200 mb-4'>\n            <h4 class='font-black text-yellow-600 mb-2'>2. Cụm từ</h4>\n            <div class='font-mono text-yellow-800 font-bold mb-2'>\n                Despite / In spite of + V-ing / Noun Phrase\n            </div>\n            <p class='text-sm'>Ex: <i>Despite the rain, they went out.</i></p>\n        </div>\n        "
    },
    {
        "title": "17. Clauses of Result (Kết quả)",
        "chips": ["so...that", "such...that"],
        "formula": "",
        "example": "",
        "contentHTML": "\n        <ul class='space-y-2 text-sm text-gray-700'>\n            <li><strong>So...that (quá...đến nỗi):</strong> <code>S + be/V + so + adj/adv + that + S + V</code></li>\n            <li><strong>Such...that:</strong> <code>S + V + such + (a/an) + N + that + S + V</code></li>\n            <li><strong>Enough...to (đủ...để):</strong> <code>S + V + adj/adv + enough + (for O) + to-V</code></li>\n            <li><strong>Too...to (quá...không thể):</strong> <code>S + V + too + adj/adv + (for O) + to-V</code></li>\n        </ul>\n        "
    },
    {
        "title": "18. Double Comparisons (So sánh kép)",
        "chips": ["The more...the more", "adj-er and adj-er"],
        "formula": "",
        "example": "",
        "contentHTML": "\n        <p class='text-sm text-gray-700 mb-2'>Dùng để diễn tả sự thay đổi tỷ lệ thuận hoặc tăng dần.</p>\n        <ul class='space-y-2 text-sm text-gray-700'>\n            <li><strong>Càng ngày càng...:</strong><br> \n            Ngắn: <code>adj-er and adj-er</code> (hotter and hotter)<br>\n            Dài: <code>more and more + adj</code> (more and more beautiful)\n            </li>\n            <li><strong>Càng... càng...:</strong><br>\n            <code>The + so sánh hơn + S + V, The + so sánh hơn + S + V</code><br>\n            Ex: <i>The harder you work, the better result you get.</i>\n            </li>\n        </ul>\n        "
    },
    {
        "title": "19. Quantifiers (Từ chỉ số lượng)",
        "chips": ["many", "much", "few", "little"],
        "formula": "",
        "example": "",
        "contentHTML": "\n        <div class='grid grid-cols-2 gap-2 text-sm text-center'>\n            <div class='bg-blue-50 p-2 rounded border border-blue-100'><strong>Many / A few / Few</strong><br>+ N đếm được (số nhiều)</div>\n            <div class='bg-green-50 p-2 rounded border border-green-100'><strong>Much / A little / Little</strong><br>+ N không đếm được</div>\n        </div>\n        <p class='mt-3 text-sm text-gray-700'><strong>Lưu ý:</strong><br> \n        - <i>a few / a little</i>: ít nhưng ĐỦ dùng.<br>\n        - <i>few / little</i>: rất ít, KHÔNG ĐỦ dùng mang nghĩa phủ định.<br>\n        - <i>a lot of / lots of / some</i>: dùng được cho cả hai loại.\n        </p>\n        "
    },
    {
        "title": "20. Participles (Phân từ)",
        "chips": ["V-ing", "V-ed"],
        "formula": "",
        "example": "",
        "contentHTML": "\n        <p class='text-sm text-gray-700 mb-2'>Sử dụng phân từ như tính từ:</p>\n        <ul class='space-y-2 text-sm text-gray-700'>\n            <li><strong>Hiện tại phân từ (V-ing):</strong> Thường dùng miêu tả VẬT, mang ý <b>chủ động</b>, bản chất của sự việc. (Ex: an <i>interesting</i> book)</li>\n            <li><strong>Quá khứ phân từ (V-ed/V3):</strong> Thường dùng miêu tả NGƯỜI, mang ý <b>bị động</b>, cảm xúc bị tác động. (Ex: I am <i>interested</i> in books)</li>\n        </ul>\n        <p class='mt-2 text-xs text-gray-500'>Ví dụ khác: bore -> boring/bored, excite -> exciting/excited, tire -> tiring/tired.</p>\n        "
    },
    {
        "title": "21. Other Structures (Cấu trúc khác)",
        "chips": ["too", "either", "used to"],
        "formula": "",
        "example": "",
        "contentHTML": "\n        <ul class='space-y-2 text-sm text-gray-700'>\n            <li><strong>Đồng ý khẳng định:</strong> <code>S + V(trợ) + too</code> hoặc <code>So + V(trợ) + S</code></li>\n            <li><strong>Đồng ý phủ định:</strong> <code>S + V(trợ, not) + either</code> hoặc <code>Neither + V(trợ) + S</code></li>\n            <li><strong>Used to + V:</strong> Đã từng làm gì trong QK (giờ không làm nữa).</li>\n            <li><strong>Be/Get used to + V-ing:</strong> Quen với việc gì.</li>\n            <li><strong>Would you mind + V-ing?</strong> Bạn có phiền...</li>\n        </ul>\n        "
    },
    {
        "title": "22. Pronunciation -S/-ES (Phát âm S/ES)",
        "chips": ["/s/", "/iz/", "/z/"],
        "formula": "",
        "example": "",
        "contentHTML": "\n        <div class='space-y-3 text-sm text-gray-700'>\n            <div class='bg-white p-3 rounded-lg border-l-4 border-red-500 shadow-sm'>\n                <strong>1. Phát âm /s/:</strong><br>\n                Tận cùng là các âm vô thanh: /p/, /t/, /k/, /f/, /θ/ (Phải Tự Kính Phật Tổ).\n            </div>\n            <div class='bg-white p-3 rounded-lg border-l-4 border-blue-500 shadow-sm'>\n                <strong>2. Phát âm /iz/:</strong><br>\n                Tận cùng là các âm: /s/, /z/, /∫/, /t∫/, /dʒ/ (Sóng gió chẳng sợ zì).\n            </div>\n            <div class='bg-white p-3 rounded-lg border-l-4 border-green-500 shadow-sm'>\n                <strong>3. Phát âm /z/:</strong><br>\n                Các trường hợp còn lại (âm hữu thanh và nguyên âm).\n            </div>\n        </div>\n        "
    },
    {
        "title": "23. Pronunciation -ED (Phát âm ED)",
        "chips": ["/id/", "/t/", "/d/"],
        "formula": "",
        "example": "",
        "contentHTML": "\n        <div class='space-y-3 text-sm text-gray-700'>\n            <div class='bg-white p-3 rounded-lg border-l-4 border-red-500 shadow-sm'>\n                <strong>1. Phát âm /id/:</strong><br>\n                Tận cùng là âm /t/ hoặc /d/ (Tiền Đô).\n            </div>\n            <div class='bg-white p-3 rounded-lg border-l-4 border-blue-500 shadow-sm'>\n                <strong>2. Phát âm /t/:</strong><br>\n                Tận cùng là các âm vô thanh: /p/, /k/, /f/, /s/, /∫/, /t∫/ (Phải Kính Phật Sợ Chó Sói).\n            </div>\n            <div class='bg-white p-3 rounded-lg border-l-4 border-green-500 shadow-sm'>\n                <strong>3. Phát âm /d/:</strong><br>\n                Các âm hữu thanh và nguyên âm còn lại.\n            </div>\n        </div>\n        "
    }
];

// --- DỮ LIỆU CÂU HỎI TRẮC NGHIỆM TỪ PDF ---
const quizTopicsList = ["TENSES", "PASSIVE VOICE", "CONDITIONAL SENTENCES", "REPORTED SPEECH", "TAG QUESTIONS", "TO-INFINITIVE / V-ING", "RELATIVE CLAUSES", "COMPARISONS", "SO SÁNH KÉP", "SUBJECT AND VERB AGREEMENT", "COLLOCATIONS AND PHRASAL VERBS"];

const quizData = {
    "TENSES": [
        {
            "q": "He was writing to his friend when he __________a noise.",
            "options": ["was hearing", "heard", "had heard", "hears"],
            "answer": 1,
            "explanation": "Hành động đang xảy ra (was writing) thì có hành động khác cắt ngang (heard), dùng thì Quá khứ tiếp diễn và Quá khứ đơn."
        },
        {
            "q": "I __________many people since I came here in June.",
            "options": ["met", "has met", "was meeting", "have met"],
            "answer": 3,
            "explanation": "Có dấu hiệu 'since' + mốc thời gian trong quá khứ => Dùng thì Hiện tại hoàn thành (have/has + V3/ed)."
        },
        {
            "q": "We __________ maths at this time last week.",
            "options": ["were learning", "are learning", "was learning", "learnt"],
            "answer": 0,
            "explanation": "Dấu hiệu 'at this time last week' (vào thời điểm này tuần trước) chỉ một thời điểm xác định trong quá khứ => Dùng thì Quá khứ tiếp diễn."
        },
        {
            "q": "She was playing games while he __________a football match.",
            "options": ["watched", "watches", "was watching", "watching"],
            "answer": 2,
            "explanation": "Liên từ 'while' nối hai hành động xảy ra song song cùng lúc trong quá khứ => Cả hai vế đều dùng Quá khứ tiếp diễn."
        },
        {
            "q": "She __________to Ho Chi Minh city last year.",
            "options": ["goes", "has gone", "go", "went"],
            "answer": 3,
            "explanation": "Dấu hiệu 'last year' => Dùng thì Quá khứ đơn."
        },
        {
            "q": "She ______ her dentist this afternoon.",
            "options": ["sees", "is seeing", "saw", "has seen"],
            "answer": 1,
            "explanation": "Một kế hoạch, lịch trình đã được sắp xếp chắc chắn sẽ xảy ra trong tương lai gần => Dùng Hiện tại tiếp diễn mang ý nghĩa tương lai."
        },
        {
            "q": "__________he playing football now?",
            "options": ["Will", "Does", "Was", "Is"],
            "answer": 3,
            "explanation": "Dấu hiệu 'now' kết hợp với động từ V-ing (playing) => Câu hỏi thì Hiện tại tiếp diễn (Is/Are + S + V-ing?)."
        },
        {
            "q": "Every morning, I often sit in my garden and____ to my nightingale sing.",
            "options": ["listening", "listen", "listened", "listens"],
            "answer": 1,
            "explanation": "Thói quen 'Every morning', động từ trước liên từ 'and' chia hiện tại đơn (sit) => động từ sau cũng chia hiện tại đơn (listen)."
        },
        {
            "q": "She __________school when she was six.",
            "options": ["start", "started", "has started", "are starting"],
            "answer": 1,
            "explanation": "Mệnh đề 'when she was six' chỉ một mốc thời gian đã qua trong quá khứ => Dùng thì Quá khứ đơn."
        },
        {
            "q": "I __________TV while my mother was reading a book.",
            "options": ["watched", "was watching", "are watching", "have watched"],
            "answer": 1,
            "explanation": "Liên từ 'while' diễn tả 2 hành động song song trong quá khứ => Dùng thì Quá khứ tiếp diễn (was watching)."
        },
        {
            "q": "I will contact you as soon as I ___________the information.",
            "options": ["will get", "get", "got", "had got"],
            "answer": 1,
            "explanation": "Trong mệnh đề trạng ngữ chỉ thời gian tương lai (bắt đầu bằng as soon as, when, until...), ta không dùng thì tương lai mà dùng Hiện tại đơn (get)."
        },
        {
            "q": "If he's late again, I_____ very angry.",
            "options": ["am going to be", "will be", "would be", "am"],
            "answer": 1,
            "explanation": "Câu điều kiện loại 1 (diễn tả sự việc có thể xảy ra ở HT/TL): If + S + V(hiện tại đơn), S + will + V1."
        },
        {
            "q": "At the moment, we _______ for our daughter’s birthday party.",
            "options": ["prepare", "are preparing", "prepared", "will prepare"],
            "answer": 1,
            "explanation": "Dấu hiệu 'At the moment' (ngay lúc này) => Dùng thì Hiện tại tiếp diễn."
        },
        {
            "q": "We think we________________________ home in time for dinner.",
            "options": ["will come", "came", "are come", "have come"],
            "answer": 0,
            "explanation": "Động từ 'think' (nghĩ rằng) thể hiện một dự đoán, quan điểm cá nhân trong tương lai => Dùng Tương lai đơn (will + V)."
        },
        {
            "q": "While her brother was in the army, Sarah ___________ to him twice a week.",
            "options": ["was writing", "wrote", "has written", "had written"],
            "answer": 1,
            "explanation": "Mệnh đề 'was in the army' ở quá khứ, câu nói về một thói quen trong quá khứ (twice a week) => Dùng Quá khứ đơn."
        },
        {
            "q": "How long ___________they___________here?",
            "options": ["have/ lived", "has/ lived", "did/ live", "do/live"],
            "answer": 0,
            "explanation": "'How long' dùng để hỏi về khoảng thời gian bắt đầu từ quá khứ đến hiện tại => Dùng Hiện tại hoàn thành, chủ ngữ 'they' đi với 'have'."
        },
        {
            "q": "In the 19th century, it _______ two or three months to cross North America by covered wagon.",
            "options": ["took", "had taken", "has taken", "was taking"],
            "answer": 0,
            "explanation": "Mốc thời gian 'In the 19th century' hoàn toàn nằm trong quá khứ => Dùng thì Quá khứ đơn (took)."
        },
        {
            "q": "Last night at this time, they _______ the same thing. She ______ and he _________ the Newspaper.",
            "options": ["are not doing / is cooking / is reading", "were not doing / was cooking / was reading", "was not doing / has cooked / is reading", "had not done / was cooking /read"],
            "answer": 1,
            "explanation": "Dấu hiệu 'Last night at this time' (giờ này tối qua) là một thời điểm cụ thể trong quá khứ => Cả 3 động từ đều dùng Quá khứ tiếp diễn."
        }
    ],
    "PASSIVE VOICE": [
        {
            "q": "Many U.S automobiles .................. in Detroit, Michigan.",
            "options": ["manufacture", "have manufactured", "are manufactured", "are manufacturing"],
            "answer": 2,
            "explanation": "Câu miêu tả sự thật chung mang ý nghĩa bị động (ô tô được sản xuất) => Bị động hiện tại đơn: S + am/is/are + V3."
        },
        {
            "q": "This exercise may .................. with a pencil.",
            "options": ["be written", "be to write", "be writing", "write"],
            "answer": 0,
            "explanation": "Bị động với động từ khiếm khuyết 'may' (có thể được làm gì) => may + be + V3 (be written)."
        },
        {
            "q": "They speak much about this book.",
            "options": ["This book is much spoken about.", "This book is much spoken.", "This book is much about spoken.", "This book are much spoken about."],
            "answer": 0,
            "explanation": "Câu gốc ở thì hiện tại đơn. Đổi sang bị động: Đưa tân ngữ 'this book' lên làm chủ ngữ + is + V3 (spoken) + giới từ 'about'."
        },
        {
            "q": "I ________a nice shirt by my sister on my last birthday.",
            "options": ["gave", "was given", "had been given", "was being given"],
            "answer": 1,
            "explanation": "Dấu hiệu 'last birthday' => Quá khứ đơn. Có 'by my sister' => Bị động của quá khứ đơn (was/were + V3)."
        },
        {
            "q": "The university .................. by private funds as well as by tuition income.",
            "options": ["is supported", "supports", "is supporting", "has supported"],
            "answer": 0,
            "explanation": "Sự thật chung ở hiện tại mang ý nghĩa bị động (được hỗ trợ bởi quỹ tư nhân) => Bị động HTĐ (is supported)."
        },
        {
            "q": "He broke my watch.",
            "options": ["My watch were broken.", "My watch be broken.", "My watch is broken.", "My watch was broken."],
            "answer": 3,
            "explanation": "Câu chủ động dùng 'broke' (quá khứ đơn). Tân ngữ 'My watch' (số ít) lên làm chủ ngữ => was broken."
        },
        {
            "q": "You have to do your homework every day.",
            "options": ["Your homework has been done every day.", "Your homework has to do by you every day.", "Your homework has to be done every day.", "Your homework have to be done every day."],
            "answer": 2,
            "explanation": "Bị động của 'have to' (phải làm gì) => have/has to be + V3. 'Your homework' là số ít nên dùng 'has to be done'."
        },
        {
            "q": "Lots of houses_____________ by the earthquake.",
            "options": ["are destroying", "destroyed", "were destroying", "were destroyed"],
            "answer": 3,
            "explanation": "Sự việc đã xảy ra trong quá khứ mang nghĩa bị động (bị phá hủy bởi động đất) => Bị động quá khứ đơn."
        },
        {
            "q": "The telephone ______________ by Alexander Graham Bell.",
            "options": ["invented", "is inventing", "be invented", "was invented"],
            "answer": 3,
            "explanation": "Sự kiện lịch sử đã xảy ra trong quá khứ => Bị động quá khứ đơn."
        },
        {
            "q": "Your bedroom looks dirty. I think it need ______________.",
            "options": ["cleaned", "cleaning", "clean", "to clean"],
            "answer": 1,
            "explanation": "Cấu trúc 'need + V-ing' mang ý nghĩa bị động (cái gì đó cần được làm)."
        },
        {
            "q": "I don't understand this point of grammar. I wish I ______ it better.",
            "options": ["understood", "would understand", "had understood", "understands"],
            "answer": 0,
            "explanation": "Câu ước trái với sự thật ở HIỆN TẠI ('don't understand') => Dùng thì Quá khứ đơn trong mệnh đề wish."
        },
        {
            "q": "It is raining hard here. I wish it ______ raining.",
            "options": ["stopped", "would stop", "had stopped", "will stop"],
            "answer": 1,
            "explanation": "Câu ước thể hiện mong muốn một điều gì đó thay đổi trong TƯƠNG LAI => Dùng would + V nguyên thể."
        },
        {
            "q": "I miss my friends. I wish my friends ______ here right now.",
            "options": ["were", "would be", "had been", "was"],
            "answer": 0,
            "explanation": "Câu ước trái với hiện tại ('right now'). Với động từ to-be, ta dùng 'were' cho mọi ngôi."
        },
        {
            "q": "I speak terrible English. I wish I ______ English well.",
            "options": ["spoke", "would speak", "had spoken", "speaks"],
            "answer": 0,
            "explanation": "Câu ước trái với hiện tại ('speak terrible English') => Dùng thì Quá khứ đơn."
        },
        {
            "q": "You ___ see a doctor. That cough sounds serious.",
            "options": ["would rather", "should", "prefer", "had"],
            "answer": 1,
            "explanation": "Đưa ra lời khuyên thông thường ('Bạn nên đi khám bác sĩ') => Dùng 'should'."
        },
        {
            "q": "You ___ go out tonight because you will have a test tomorrow.",
            "options": ["must", "mustn’t", "should", "had better not"],
            "answer": 3,
            "explanation": "Đưa ra lời khuyên mạnh mẽ hoặc cảnh báo ('tốt hơn hết là không nên') => Dùng 'had better not'."
        },
        {
            "q": "You ___ forget to lock the door when you leave.",
            "options": ["mustn't", "shouldn’t", "had better", "would rather"],
            "answer": 0,
            "explanation": "Chỉ một sự cấm đoán hoặc nhắc nhở rất mạnh ('không được phép quên') => Dùng 'mustn't'."
        },
        {
            "q": "I ___ tea to coffee.",
            "options": ["prefer", "would rather", "had better", "must"],
            "answer": 0,
            "explanation": "Cấu trúc diễn tả sự yêu thích: prefer + N/V-ing + to + N/V-ing (thích cái gì hơn cái gì)."
        },
        {
            "q": "He ___ be more careful with his words.",
            "options": ["shouldn’t", "had better not", "must", "would rather"],
            "answer": 2,
            "explanation": "Nhấn mạnh sự cần thiết bắt buộc ('Anh ấy phải cẩn thận hơn') => Dùng 'must' (trong các đáp án này 'must' là hợp lý nhất, 'should' cũng đúng nhưng không có)."
        },
        {
            "q": "We ___ not disturb them. They're having a meeting.",
            "options": ["had better", "must", "should", "mustn’t"],
            "answer": 0,
            "explanation": "Lời khuyên 'tốt hơn là không nên làm gì' => had better + not + V."
        },
        {
            "q": "I ___ stay home than go out in this weather.",
            "options": ["had better", "prefer", "would rather", "should"],
            "answer": 2,
            "explanation": "Cấu trúc: would rather + V + than + V (thích làm gì hơn làm gì)."
        },
        {
            "q": "It’s time you ___ more seriously about your career.",
            "options": ["think", "thought", "thinking", "had thought"],
            "answer": 1,
            "explanation": "Cấu trúc 'It's (high) time + S + V(quá khứ đơn)' mang nghĩa 'Đã đến lúc ai đó phải làm gì'."
        },
        {
            "q": "We ___ leave now if we want to catch the bus.",
            "options": ["would rather", "had better", "prefer", "mustn’t"],
            "answer": 1,
            "explanation": "Đưa ra lời khuyên mạnh mẽ trong tình huống cụ thể ('Chúng ta tốt hơn là nên rời đi ngay') => Dùng 'had better'."
        },
        {
            "q": "It’s time we ___ home. It’s getting late.",
            "options": ["go", "went", "going", "had gone"],
            "answer": 1,
            "explanation": "Cấu trúc 'It's time + S + V(quá khứ đơn)' => went."
        },
        {
            "q": "I ___ walking to driving in the city.",
            "options": ["had better", "would prefer", "prefer", "must"],
            "answer": 2,
            "explanation": "Cấu trúc 'prefer V-ing to V-ing' (thích đi bộ hơn lái xe)."
        },
        {
            "q": "I ___ not go there alone at night. It's dangerous.",
            "options": ["should", "must", "had better", "mustn’t"],
            "answer": 2,
            "explanation": "Cấu trúc 'had better not + V' (tốt hơn là không nên làm gì để tránh nguy hiểm)."
        },
        {
            "q": "I ___ stay in bed all day than go out in the rain.",
            "options": ["must", "prefer", "would rather", "should"],
            "answer": 2,
            "explanation": "Cấu trúc 'would rather + V + than + V'."
        }
    ],
    "CONDITIONAL SENTENCES": [
        {
            "q": "She doesn’t live in London because she doesn’t know anyone there.",
            "options": ["If she knew someone in London, she would live there.", "If she had known someone in London, she would have lived there.", "If she knows someone in London, she will live there.", "If she knew someone in London, she will live there."],
            "answer": 0,
            "explanation": "Tình huống cho ở hiện tại (doesn't live / doesn't know) => Viết lại bằng câu điều kiện loại 2 (trái với hiện tại): If + S + V(quá khứ đơn), S + would + V."
        },
        {
            "q": "I don’t have a spare ticket. I can’t take you to the concert.",
            "options": ["If I have a spare ticket, I can take you to the concert.", "If I had a spare ticket, I could take you to the concert.", "If I had had a spare ticket, I could have taken you to the concert.", "If I had a spare ticket, I can take you to the concert."],
            "answer": 1,
            "explanation": "Tình huống ở hiện tại (don't have / can't take) => Dùng câu điều kiện loại 2."
        },
        {
            "q": "The schoolchildren sowed some seeds, but they forgot to water them so they didn’t grow.",
            "options": ["If the children didn't forget to water the seeds, they would grow.", "If the children hadn't forgotten to water the seeds, they would have grown.", "If the children don't forget to water the seeds, they will grow.", "If the children hadn't forgotten to water the seeds, they would grow."],
            "answer": 1,
            "explanation": "Tình huống ở quá khứ (forgot / didn't grow) => Viết lại bằng câu điều kiện loại 3 (trái với quá khứ): If + S + had + V3, S + would have + V3."
        },
        {
            "q": "They don’t understand the problem. They won’t find a solution.",
            "options": ["If they understood the problem, they will find a solution.", "If they understood the problem, they would find a solution.", "If they had understood the problem, they would have found a solution.", "If they understand the problem, they would find a solution."],
            "answer": 1,
            "explanation": "Tình huống cho ở hiện tại/tương lai gần (don't understand / won't find) => Dùng câu điều kiện loại 2 để giả định trái ngược hiện tại."
        },
        {
            "q": "He can’t park near his office; that’s why he doesn’t come by car.",
            "options": ["If he can park near his office, he will come by car.", "If he could park near his office, he would come by car.", "If he could park near his office, he comes by car.", "If he could have parked near his office, he would have come by car."],
            "answer": 1,
            "explanation": "Tình huống hiện tại (can't park / doesn't come) => Dùng câu điều kiện loại 2."
        },
        {
            "q": "The flats are not clearly numbered, so it is very difficult to find anyone.",
            "options": ["If the flats were clearly numbered, it wouldn't be very difficult to find anyone.", "If the flats are clearly numbered, it won't be very difficult to find anyone.", "If the flats had been clearly numbered, it wouldn't have been very difficult to find anyone.", "If the flats were clearly numbered, it won't be very difficult to find anyone."],
            "answer": 0,
            "explanation": "Tình huống hiện tại (are not / is) => Dùng câu điều kiện loại 2 (lưu ý phủ định thành khẳng định và ngược lại)."
        },
        {
            "q": "I don’t know her e-mail address, so I can’t tell you",
            "options": ["If I know her e-mail address, I will tell you.", "If I knew her e-mail address, I could tell you.", "If I had known her e-mail address, I would have told you.", "If I knew her e-mail address, I can tell you."],
            "answer": 1,
            "explanation": "Tình huống hiện tại (don't know / can't tell) => Dùng câu điều kiện loại 2."
        },
        {
            "q": "She works in the evening. She has no time to play with her children",
            "options": ["If she didn't work in the evening, she would have time to play with her children.", "If she doesn't work in the evening, she will have time to play with her children.", "If she hadn't worked in the evening, she would have had time to play with her children.", "If she didn't work in the evening, she will have time to play with her children."],
            "answer": 0,
            "explanation": "Sự thật ở hiện tại (works / has no time) => Dùng câu điều kiện loại 2 (phủ định đi làm buổi tối, khẳng định có thời gian)."
        },
        {
            "q": "He doesn’t see the signal so he doesn’t stop his car",
            "options": ["If he saw the signal, he would stop his car.", "If he sees the signal, he will stop his car.", "If he had seen the signal, he would have stopped his car.", "If he saw the signal, he stops his car."],
            "answer": 0,
            "explanation": "Tình huống hiện tại => Câu điều kiện loại 2."
        },
        {
            "q": "Mary doesn’t have enough money. She can’t buy a new car.",
            "options": ["If Mary had enough money, she could buy a new car.", "If Mary has enough money, she can buy a new car.", "If Mary had had enough money, she could have bought a new car.", "If Mary had enough money, she can buy a new car."],
            "answer": 0,
            "explanation": "Tình huống hiện tại => Câu điều kiện loại 2."
        }
    ]
,
    "REPORTED SPEECH": [
        {
            "q": "Julia said that she ________ there at noon.",
            "options": ["is going to be", "was going to be", "will be", "can be"],
            "answer": 1,
            "explanation": "Lùi thì từ tương lai gần 'is going to be' -> 'was going to be' trong câu gián tiếp."
        },
        {
            "q": "They asked me when _________ .",
            "options": ["did I arrive", "will I arrive", "I had arrived", "I can arrive"],
            "answer": 2,
            "explanation": "Trong câu hỏi gián tiếp không dùng đảo ngữ (không đưa trợ động từ lên trước), và phải lùi thì từ quá khứ đơn sang quá khứ hoàn thành."
        },
        {
            "q": "The farmer said, “I didn’t see her.” ---> The farmer said ____ her.",
            "options": ["he had seen", "I hadn’t seen", "she didn’t see", "he hadn’t seen"],
            "answer": 3,
            "explanation": "Lùi thì: didn't see (QK đơn) -> hadn't seen (QK hoàn thành), và đổi ngôi 'I' thành 'he'."
        },
        {
            "q": "Mr Brown said, “I watched TV last night.” -- -> Mr Brown said that he _______ TV the night before.",
            "options": ["was watching", "watched", "had watched", "has watched"],
            "answer": 2,
            "explanation": "Lùi thì: watched (QK đơn) -> had watched (QK hoàn thành)."
        },
        {
            "q": "The teacher said Columbus ________ America in 1492.",
            "options": ["discovered", "had discovered", "was discovering", "would discover"],
            "answer": 0,
            "explanation": "Sự kiện lịch sử có năm xác định (1492) là một sự thật trong quá khứ nên không lùi thì, vẫn giữ nguyên Quá khứ đơn."
        },
        {
            "q": "Mary said, “ I want to give up my job.” -> Mary said that ...........................",
            "options": ["she wants to give up her job.", "she wanted to give up her job.", "I wanted to give up her job.", "she wanted to give up my job."],
            "answer": 1,
            "explanation": "Đổi ngôi 'I' -> 'she', 'my' -> 'her' và lùi thì 'want' (hiện tại đơn) -> 'wanted' (quá khứ đơn)."
        },
        {
            "q": "Mary said ,”I have not seen Peter since last month .” -> Mary said she ________ Peter since the previous month.",
            "options": ["has not seen", "had not seen", "was not seen", "doesn’t see"],
            "answer": 1,
            "explanation": "Lùi thì Hiện tại hoàn thành (have not seen) -> Quá khứ hoàn thành (had not seen)."
        },
        {
            "q": "“I want to go on holiday but I don’t know where to go.” ---> Tom said that _________________________________________",
            "options": ["he wanted to go on holiday but he doesn’t know where to go.", "he wants to go on holiday but he didn’t know where to go.", "he wanted to go on holiday but he didn’t know where to go.", "I wanted to go on holiday but I didn’t know where to go."],
            "answer": 2,
            "explanation": "Lùi thì cho cả 2 vế (want -> wanted, don't know -> didn't know) và đổi ngôi I -> he."
        },
        {
            "q": "Mary said: “What will you do this evening, John ?”",
            "options": ["Mary asked John what would he do that evening.", "Mary asked John what John did that evening.", "Mary wanted to know what she and John would do that evening.", "Mary wanted to know what John would do that evening."],
            "answer": 3,
            "explanation": "Câu hỏi WH gián tiếp: Không đảo ngữ (S đứng trước V), đổi 'this evening' -> 'that evening', lùi 'will' -> 'would'."
        },
        {
            "q": "He said to them, “Don't tell me such a nonsense!”",
            "options": ["He told them not to tell him such a nonsense.", "He told them to tell him such a nonsense.", "He told them not to tell them such a nonsense.", "He told them to tell them such a nonsense."],
            "answer": 0,
            "explanation": "Cấu trúc câu mệnh lệnh phủ định gián tiếp: tell sb NOT TO V. Đồng thời đổi 'me' -> 'him'."
        },
        {
            "q": "“I don't know what Fred is doing,\" said my sister.",
            "options": ["My sister said that she didn't know what Fred was doing.", "My sister said she doesn't know what Fred is doing.", "My sister said that I don't know what Fred is doing.", "My sister said that she hasn't known what Fred was doing."],
            "answer": 0,
            "explanation": "Đổi 'I' -> 'she', lùi thì HTĐ 'don't know' -> QKĐ 'didn't know' và lùi thì HTTD 'is doing' -> QKTD 'was doing'."
        },
        {
            "q": "“I’ve been playing tennis a lot lately,\" John said.",
            "options": ["John said that I have been playing tennis a lot lately.", "John said that he has been playing tennis a lot lately.", "John said that he had been playing tennis a lot lately.", "John said that she had been playing tennis a lot lately."],
            "answer": 2,
            "explanation": "Đổi 'I' -> 'he', lùi thì HT Hoàn thành tiếp diễn (have been playing) -> QK Hoàn thành tiếp diễn (had been playing)."
        },
        {
            "q": "The mother asked her son _______.",
            "options": ["where he has been", "where he had been", "where has he been", "where had he been"],
            "answer": 1,
            "explanation": "Câu hỏi gián tiếp không dùng đảo ngữ (chủ ngữ 'he' đứng trước động từ) và phải lùi thì về quá khứ hoàn thành (had been)."
        }
    ],
    "TAG QUESTIONS": [
        {
            "q": "You’re going to school tomorrow, ____________?",
            "options": ["aren't you", "are you", "will you", "won't you"],
            "answer": 0,
            "explanation": "Vế trước khẳng định (You are) -> phần đuôi phủ định (aren't you)."
        },
        {
            "q": "Daisy signed the petition, ___________________?",
            "options": ["didn't she", "did she", "doesn't she", "does she"],
            "answer": 0,
            "explanation": "Động từ 'signed' (quá khứ đơn, khẳng định) -> mượn trợ động từ quá khứ ở dạng phủ định là 'didn't'."
        },
        {
            "q": "There’s an exam tomorrow, _________________?",
            "options": ["isn't there", "is there", "isn't it", "is it"],
            "answer": 0,
            "explanation": "Cấu trúc 'There is' -> phần đuôi là 'isn't there'."
        },
        {
            "q": "He will be attending the university in September, ____________?",
            "options": ["won't he", "will he", "isn't he", "is he"],
            "answer": 0,
            "explanation": "Khẳng định 'will' -> phủ định 'won't'."
        },
        {
            "q": "It doesn’t work, _______________?",
            "options": ["does it", "doesn't it", "is it", "isn't it"],
            "answer": 0,
            "explanation": "Phủ định 'doesn't' -> khẳng định 'does'."
        },
        {
            "q": "Let’s go fishing, ____________?",
            "options": ["shall we", "will we", "don't we", "do we"],
            "answer": 0,
            "explanation": "Cấu trúc câu rủ rê 'Let's + V' -> phần đuôi luôn luôn là 'shall we'."
        },
        {
            "q": "Jill and Joe have been to Mexico, _______________?",
            "options": ["haven't they", "have they", "didn't they", "did they"],
            "answer": 0,
            "explanation": "Chủ ngữ 'Jill and Joe' là số nhiều -> they. Hiện tại hoàn thành khẳng định (have) -> phủ định (haven't)."
        },
        {
            "q": "You didn’t know I was an artist, _________________?",
            "options": ["did you", "didn't you", "were you", "weren't you"],
            "answer": 0,
            "explanation": "Mệnh đề chính phủ định 'didn't know' -> phần đuôi khẳng định 'did you'."
        },
        {
            "q": "It is quite warm, ____________?",
            "options": ["isn't it", "is it", "doesn't it", "does it"],
            "answer": 0,
            "explanation": "Khẳng định 'is' -> phủ định 'isn't'."
        },
        {
            "q": "We should call Rita, _______________?",
            "options": ["should we", "shouldn’t we", "shall we", "should not we"],
            "answer": 1,
            "explanation": "Khẳng định 'should' -> phủ định 'shouldn't'."
        },
        {
            "q": "These books aren’t yours, ____________?",
            "options": ["are these", "aren’t these", "are they", "aren’t they"],
            "answer": 2,
            "explanation": "Phủ định 'aren't' -> khẳng định 'are'. Chủ ngữ 'These books' (số nhiều) thay bằng đại từ 'they'."
        },
        {
            "q": "That’s Bod’s, ____________?",
            "options": ["is that", "isn’t it", "isn’t that", "is it"],
            "answer": 1,
            "explanation": "Đại từ chỉ định 'That' khi chuyển sang đuôi biến thành 'it'. Khẳng định 'is' -> 'isn't'."
        },
        {
            "q": "No one died in the accident, ______________?",
            "options": ["did they", "didn’t they", "did he", "didn’t he"],
            "answer": 0,
            "explanation": "Chủ ngữ 'No one' mang nghĩa phủ định sẵn -> đuôi khẳng định. Đại từ thay thế cho 'No one' là 'they'."
        },
        {
            "q": "He hardly has anything nowadays, _________________?",
            "options": ["hasn’t he", "does he", "doesn’t he", "does she"],
            "answer": 1,
            "explanation": "Trạng từ 'hardly' (hầu như không) mang nghĩa phủ định -> đuôi khẳng định. Động từ 'has' ở đây là động từ thường -> mượn trợ động từ 'does'."
        },
        {
            "q": "You’ve never been in Italy, _________________?",
            "options": ["have you", "haven’t you", "been you", "had you"],
            "answer": 0,
            "explanation": "Trạng từ 'never' mang nghĩa phủ định -> đuôi khẳng định 'have you'."
        }
    ],
    "TO-INFINITIVE / V-ING": [
        {
            "q": "It takes me ten minutes _________to school every day.",
            "options": ["walking", "to walk", "walk", "walked"],
            "answer": 1,
            "explanation": "Cấu trúc 'It takes + O + thời gian + to V': Mất bao lâu để làm việc gì."
        },
        {
            "q": "We expect him ______________ tomorrow.",
            "options": ["arrive", "arriving", "to arrive", "will arrive"],
            "answer": 2,
            "explanation": "Cấu trúc 'expect + O + to V': Mong đợi ai làm gì."
        },
        {
            "q": "Would you mind not _________ the radio on until I’ve finished with this phone call?",
            "options": ["turning", "to turn", "being turned", "to be turned"],
            "answer": 0,
            "explanation": "Cấu trúc 'Would you mind (not) + V-ing': Bạn có phiền (không) làm gì."
        },
        {
            "q": "Would you like __________to my birthday party?",
            "options": ["coming", "come", "came", "to come"],
            "answer": 3,
            "explanation": "Cấu trúc 'Would you like + to V': Lời mời lịch sự."
        },
        {
            "q": "I tried ___________the bus, but I missed it.",
            "options": ["catch", "catching", "to catch", "caught"],
            "answer": 2,
            "explanation": "Cấu trúc 'try + to V': Cố gắng làm việc gì."
        },
        {
            "q": "Everyday I spend two hours _________ speaking English.",
            "options": ["practise", "to practise", "practising", "practised"],
            "answer": 2,
            "explanation": "Cấu trúc 'spend + thời gian + V-ing': Dành thời gian làm việc gì."
        },
        {
            "q": "Tommy admitted _________ the rock through the window.",
            "options": ["throwing", "being throwing", "to throw", "to be thrown"],
            "answer": 0,
            "explanation": "Cấu trúc 'admit + V-ing': Thừa nhận đã làm gì."
        },
        {
            "q": "He suggested _________ a double railway tunnel.",
            "options": ["to build", "built", "building", "that building"],
            "answer": 2,
            "explanation": "Cấu trúc 'suggest + V-ing': Đề xuất làm việc gì."
        },
        {
            "q": "The children stopped ___________ games when their mother came home.",
            "options": ["playing", "play", "to play", "played"],
            "answer": 0,
            "explanation": "Cấu trúc 'stop + V-ing': Dừng hẳn một việc đang làm."
        },
        {
            "q": "I can’t go on __________ here any more. I want a different job.",
            "options": ["working", "to work", "work", "worked"],
            "answer": 0,
            "explanation": "Cấu trúc 'go on + V-ing': Tiếp tục làm gì đó."
        },
        {
            "q": "My uncle has given up ___________ for 3 years.",
            "options": ["to smoke", "smoking", "smoke", "smoked"],
            "answer": 1,
            "explanation": "Cấu trúc 'give up + V-ing': Từ bỏ, ngừng thói quen làm gì."
        },
        {
            "q": "Remember _____________Lan a present because today is her birthday.",
            "options": ["send", "sending", "to send", "sent"],
            "answer": 2,
            "explanation": "Cấu trúc 'remember + to V': Nhớ là phải làm việc gì trong tương lai."
        },
        {
            "q": "We were allowed ___________ photographs in this room.",
            "options": ["sell", "to sell", "selling", "sold"],
            "answer": 1,
            "explanation": "Cấu trúc bị động 'be allowed + to V': Được phép làm gì."
        }
    ]
,
    "RELATIVE CLAUSES": [
        {
            "q": "I couldn't remember the time ______ there was no internet.",
            "options": ["what", "who", "which", "when"],
            "answer": 3,
            "explanation": "Dùng 'when' thay thế cho danh từ chỉ thời gian 'the time' (khi mà)."
        },
        {
            "q": "The restaurant ______ we had our dinner was the most expensive in this city.",
            "options": ["where", "which", "when", "that"],
            "answer": 0,
            "explanation": "Dùng 'where' thay cho danh từ chỉ nơi chốn 'The restaurant' (nơi mà)."
        },
        {
            "q": "The top model about ______ I was telling you is on TV now.",
            "options": ["who", "which", "that", "whom"],
            "answer": 3,
            "explanation": "Sau giới từ 'about' bắt buộc phải dùng 'whom' (đối với người) hoặc 'which' (đối với vật). Danh từ 'The top model' chỉ người nên dùng 'whom'."
        },
        {
            "q": "Are you the student ______ mother called me yesterday?",
            "options": ["whose", "who", "that", "when"],
            "answer": 0,
            "explanation": "Chỉ sự sở hữu giữa hai danh từ ('the student' và 'mother') => dùng 'whose'."
        },
        {
            "q": "Mary, _____ has only been in Japan for 3 months, speaks Japanese perfectly.",
            "options": ["that", "whom", "which", "who"],
            "answer": 3,
            "explanation": "Thay thế cho danh từ chỉ người 'Mary' làm chủ ngữ trong mệnh đề quan hệ không xác định => dùng 'who' (không dùng that sau dấu phẩy)."
        },
        {
            "q": "Who is your daughter? She is the child ______ has long, straight hair.",
            "options": ["whose", "who", "which", "when"],
            "answer": 1,
            "explanation": "Thay thế cho danh từ chỉ người 'the child' làm chủ ngữ => dùng 'who'."
        },
        {
            "q": "I don't think my ex-girl friend will remember the day _____ we saw each other for the first time.",
            "options": ["which", "on which", "at which", "why"],
            "answer": 1,
            "explanation": "'the day' thường đi với giới từ 'on' (on that day) => 'on which' tương đương với 'when'."
        },
        {
            "q": "August is the month ______ I always give my birthday parties.",
            "options": ["which", "in which", "what", "why"],
            "answer": 1,
            "explanation": "'the month' thường đi với giới từ 'in' (in that month) => 'in which' tương đương với 'when'."
        },
        {
            "q": "The purse ______ she had lost last week was found yesterday.",
            "options": ["which", "what", "whose", "whom"],
            "answer": 0,
            "explanation": "Thay thế cho danh từ chỉ vật 'The purse' => dùng 'which'."
        },
        {
            "q": "The old lady ______ we were travelling told us her life story.",
            "options": ["of whom", "with whom", "whom", "of whose"],
            "answer": 1,
            "explanation": "Động từ 'travel' đi với giới từ 'with' (travel with somebody). Giới từ 'with' được đảo lên trước đại từ quan hệ => 'with whom'."
        },
        {
            "q": "She says the exam, _________ she took yesterday, was full of hard questions.",
            "options": ["which", "of which", "that", "whose"],
            "answer": 0,
            "explanation": "Mệnh đề quan hệ không xác định (có dấu phẩy) bổ nghĩa cho 'the exam' (vật) => dùng 'which'."
        },
        {
            "q": "I called my cousin, ______ is a mechanic, to fix my car, ______ was broken.",
            "options": ["who/ which", "that/ all of which", "who/ all of which", "who/ what"],
            "answer": 0,
            "explanation": "'cousin' (người) -> who; 'my car' (vật) -> which."
        },
        {
            "q": "My only blue tie, _______ Richard wants to wear, is really an expensive one.",
            "options": ["that", "whose", "which", "whom"],
            "answer": 2,
            "explanation": "Thay thế cho vật 'blue tie' trong mệnh đề có dấu phẩy => chỉ được dùng 'which' (không dùng that)."
        },
        {
            "q": "This is the village ______ my family and I lived for six years.",
            "options": ["in which", "that", "on which", "in where"],
            "answer": 0,
            "explanation": "'the village' (nơi chốn) đi với giới từ 'in' => dùng 'in which' tương đương 'where'."
        },
        {
            "q": "She is a famous actress ______ everybody admires.",
            "options": ["to whom", "whom", "to which", "of whom"],
            "answer": 1,
            "explanation": "Thay thế cho danh từ chỉ người 'famous actress' ở vị trí tân ngữ (đứng trước everybody admires) => dùng 'whom'."
        },
        {
            "q": "The food ______ I like best of all is pie alamode.",
            "options": ["who", "whose", "whom", "that"],
            "answer": 3,
            "explanation": "Thay thế cho danh từ chỉ vật 'The food' => dùng 'that' hoặc 'which'."
        },
        {
            "q": "Justine, ______ parents live in Christchurch, has gone to Southampton.",
            "options": ["whom", "which", "to whom", "whose"],
            "answer": 3,
            "explanation": "Sở hữu cách 'bố mẹ của Justine' => dùng đại từ sở hữu 'whose'."
        },
        {
            "q": "The old building _____ was behind the local church fell down.",
            "options": ["of which", "which", "whose", "whom"],
            "answer": 1,
            "explanation": "Thay thế cho danh từ chỉ vật 'The old building' làm chủ ngữ => dùng 'which'."
        }
    ],
    "COMPARISONS": [
        {
            "q": "Mr. Brown receives a ............. salary than anyone else in the company.",
            "options": ["big", "more bigger", "bigger", "the bigger"],
            "answer": 2,
            "explanation": "Có 'than' => So sánh hơn. Tính từ ngắn 'big' -> 'bigger'."
        },
        {
            "q": "My young brother grew very quickly and soon he was ........... my mother.",
            "options": ["more big than", "so big than", "as big as", "too big than"],
            "answer": 2,
            "explanation": "Cấu trúc so sánh bằng: as + adj + as."
        },
        {
            "q": "John’s grades are ………………..than his sister’s.",
            "options": ["higher", "more high", "high", "the highest"],
            "answer": 0,
            "explanation": "Có 'than' => So sánh hơn. Tính từ ngắn 'high' -> 'higher'."
        },
        {
            "q": "Deana is the …………………… of the three sisters.",
            "options": ["most short", "shorter", "shortest", "more short"],
            "answer": 2,
            "explanation": "So sánh nhất (the + adj-est) vì nhóm có 3 người trở lên."
        },
        {
            "q": "She speaks English as ………………. as her friend does.",
            "options": ["good", "well", "better", "the best"],
            "answer": 1,
            "explanation": "Động từ 'speaks' là động từ thường nên phải dùng trạng từ 'well'. So sánh bằng: as well as."
        },
        {
            "q": "He works more ………………….. than I do.",
            "options": ["slow", "slowly", "slowest", "most slowly"],
            "answer": 1,
            "explanation": "Động từ 'works' là động từ thường nên phải đi với trạng từ 'slowly'. So sánh hơn của trạng từ dài là 'more slowly'."
        },
        {
            "q": "I love you ………………….. than I can say.",
            "options": ["much", "many", "more", "the most"],
            "answer": 2,
            "explanation": "So sánh hơn của 'much' là 'more' (yêu nhiều hơn những gì có thể nói)."
        },
        {
            "q": "It’s ……………… to go by bus than by car.",
            "options": ["cheaper", "cheapest", "more cheap", "more cheaper"],
            "answer": 0,
            "explanation": "Có 'than' => So sánh hơn. Tính từ ngắn 'cheap' -> 'cheaper'."
        }
    ],
    "SO SÁNH KÉP": [
        {
            "q": "The more you practice, ______ you will become.",
            "options": ["the confident", "the more confident", "the most confident", "more confident"],
            "answer": 1,
            "explanation": "Cấu trúc so sánh kép càng... càng...: The + so sánh hơn, The + so sánh hơn. 'confident' là tính từ dài => the more confident."
        },
        {
            "q": "The hotter it is, ______ people go to the beach.",
            "options": ["the most", "the many", "the more", "more"],
            "answer": 2,
            "explanation": "Cấu trúc so sánh kép: The + so sánh hơn, The + so sánh hơn. So sánh hơn của 'many people' là 'more people'."
        },
        {
            "q": "The more I think about it, ______ I get.",
            "options": ["the confusing", "the most confused", "the more confused", "confused more"],
            "answer": 2,
            "explanation": "So sánh kép với tính từ dài 'confused' => the more confused."
        },
        {
            "q": "The more exercise you do, ______ you'll feel.",
            "options": ["the healthier", "the more healthy", "healthier", "more health"],
            "answer": 0,
            "explanation": "Tính từ tận cùng 'y' (healthy) được xem như tính từ ngắn => đổi 'y' thành 'i' và thêm 'er' (the healthier)."
        },
        {
            "q": "The faster we run, ______ we’ll finish the race.",
            "options": ["the quickly", "the more quickly", "the quickest", "quicker"],
            "answer": 1,
            "explanation": "Trạng từ 'quickly' là trạng từ dài => the more quickly."
        }
    ],
    "SUBJECT AND VERB AGREEMENT": [
        {
            "q": "A large number of students in this school………. . English quite fluently.",
            "options": ["speaks", "is speaking", "has spoken", "speak"],
            "answer": 3,
            "explanation": "Cấu trúc 'A number of + N (số nhiều) + V (chia ở số nhiều)'."
        },
        {
            "q": "Beauty as well as health ………. failed her this term.",
            "options": ["has", "have", "is", "are"],
            "answer": 0,
            "explanation": "Cấu trúc 'S1 as well as S2' thì động từ chia theo S1. 'Beauty' là danh từ trừu tượng số ít => dùng 'has'."
        },
        {
            "q": "Each student………. answered the first three questions.",
            "options": ["has", "have", "have to", "must"],
            "answer": 0,
            "explanation": "'Each + N' luôn đi với động từ chia ở số ít."
        },
        {
            "q": "Either John or his wife ………breakfast each morning.",
            "options": ["make", "is making", "makes", "made"],
            "answer": 2,
            "explanation": "Cấu trúc 'Either S1 or S2' thì động từ chia theo S2 (gần động từ nhất). 'his wife' là số ít => 'makes'."
        },
        {
            "q": "Everybody who ………. a fever must go home at once.",
            "options": ["has", "have", "is having", "are having"],
            "answer": 0,
            "explanation": "'Everybody' là đại từ bất định, luôn đi với động từ số ít."
        },
        {
            "q": "Five dollars ………all I have on me.",
            "options": ["are", "is", "will be", "have"],
            "answer": 1,
            "explanation": "Đại lượng tiền bạc (Five dollars), thời gian, khoảng cách luôn chia động từ ở số ít."
        },
        {
            "q": "John, along with twenty friends, ………. planning a party.",
            "options": ["are", "is", "has been", "have been"],
            "answer": 1,
            "explanation": "Cấu trúc 'S1 along with S2' thì động từ chia theo S1. 'John' là số ít => 'is'."
        },
        {
            "q": "Mathematics………. . the science of quantity.",
            "options": ["was", "are", "is", "were"],
            "answer": 2,
            "explanation": "Tên môn học (dù có 's' ở cuối như Mathematics, Physics) luôn chia động từ ở số ít."
        },
        {
            "q": "Neither Mary nor her brothers……a consent form for tomorrow’s field trip.",
            "options": ["need", "needs", "is needing", "has need"],
            "answer": 0,
            "explanation": "Cấu trúc 'Neither S1 nor S2' thì động từ chia theo S2. 'her brothers' là số nhiều => 'need'."
        },
        {
            "q": "Twenty miles………. a long way to walk.",
            "options": ["are", "was", "is", "were"],
            "answer": 2,
            "explanation": "Đại lượng đo lường khoảng cách (Twenty miles) luôn đi với động từ số ít."
        },
        {
            "q": "Mathematics………. . not always an exact science.",
            "options": ["was", "are", "is", "were"],
            "answer": 2,
            "explanation": "Tên môn học chia số ít => 'is'."
        },
        {
            "q": "Both his sisters and his brother ____________ playing football.",
            "options": ["enjoy", "enjoys", "to enjoy", "enjoyed"],
            "answer": 0,
            "explanation": "Cấu trúc 'Both S1 and S2' (Cả A và B) luôn đi với động từ số nhiều."
        },
        {
            "q": "My class _______________50 students.",
            "options": ["have", "has", "having", "is having"],
            "answer": 1,
            "explanation": "Danh từ tập hợp 'class' khi chỉ một đơn vị tập thể chung thì đi với động từ số ít => 'has'."
        },
        {
            "q": "Money ____________important to every one.",
            "options": ["is", "are", "be", "does"],
            "answer": 0,
            "explanation": "'Money' là danh từ không đếm được nên đi với động từ số ít."
        }
    ],
    "COLLOCATIONS AND PHRASAL VERBS": [
        {
            "q": "I wonder if you could ______me a small favor, Tom?",
            "options": ["bring", "make", "give", "do"],
            "answer": 3,
            "explanation": "Cụm từ cố định: do someone a favor (giúp đỡ ai đó một tay)."
        },
        {
            "q": "Although the doctors tried hard, they couldn’t ………………………….. his life.",
            "options": ["save", "bring", "take", "make"],
            "answer": 0,
            "explanation": "Cụm từ: save one's life (cứu sống mạng người)."
        },
        {
            "q": "He still ……………………………. in touch with most of his old school mates.",
            "options": ["keeps", "saves", "takes", "makes"],
            "answer": 0,
            "explanation": "Cụm từ: keep in touch with somebody (giữ liên lạc với ai đó)."
        },
        {
            "q": "Who will ________ the children while you go out to work?",
            "options": ["look for", "look up", "look after", "look at"],
            "answer": 2,
            "explanation": "Phrasal verb: look after = chăm sóc, trông nom."
        },
        {
            "q": "You can __________ the new words in the dictionary.",
            "options": ["look for", "look after", "look up", "look at"],
            "answer": 2,
            "explanation": "Phrasal verb: look up = tra cứu (từ điển, danh bạ)."
        },
        {
            "q": "Fank never turns up on time for a meeting.",
            "options": ["calls", "arrives", "reports", "prepares"],
            "answer": 1,
            "explanation": "Từ đồng nghĩa: turn up = arrive (đến, xuất hiện)."
        },
        {
            "q": "Never put off until tomorrow what you can do today.",
            "options": ["do", "let", "delay", "leave"],
            "answer": 2,
            "explanation": "Từ đồng nghĩa: put off = delay (hoãn lại)."
        },
        {
            "q": "My father still hasn’t really recovered from the death of my mother.",
            "options": ["looked after", "taken after", "gone off", "got over"],
            "answer": 3,
            "explanation": "Từ đồng nghĩa: recover from = get over (vượt qua bệnh tật, cú sốc)."
        },
        {
            "q": "The bomb exploded with a loud bang which could be heard all over the town.",
            "options": ["went on", "went out", "went off", "went away"],
            "answer": 2,
            "explanation": "Từ đồng nghĩa: explode = go off (phát nổ, reo chuông)."
        },
        {
            "q": "John, could you look after my handbag while I go out for a minute.",
            "options": ["take part in", "take over", "take place", "take care of"],
            "answer": 3,
            "explanation": "Từ đồng nghĩa: look after = take care of (chăm sóc, trông coi)."
        },
        {
            "q": "Bill seems unhappy in his job because he doesn’t get _______ his boss.",
            "options": ["up to", "on for", "on well with", "in with"],
            "answer": 2,
            "explanation": "Phrasal verb: get on well with somebody (có mối quan hệ tốt, hòa thuận với ai)."
        },
        {
            "q": "My father gave up smoking two years ago.",
            "options": ["liked", "continued", "stopped", "enjoyed"],
            "answer": 2,
            "explanation": "Từ đồng nghĩa: give up = stop (từ bỏ, ngừng làm gì)."
        },
        {
            "q": "The government hopes to _________ its plans for introducing cable TV.",
            "options": ["turn out", "carry out", "carry on", "keep on"],
            "answer": 1,
            "explanation": "Phrasal verb: carry out (tiến hành, thực hiện một kế hoạch/nhiệm vụ)."
        },
        {
            "q": "In order to save the environment, we should _____ the use of electricity every day.",
            "options": ["cut down", "cut out", "cut off", "cut up"],
            "answer": 0,
            "explanation": "Phrasal verb: cut down (cắt giảm lượng sử dụng)."
        },
        {
            "q": "I was born in Scotland but I ________ in Northern Ireland.",
            "options": ["grew up", "raised", "brought up", "rose"],
            "answer": 0,
            "explanation": "Phrasal verb: grow up (lớn lên, trưởng thành)."
        },
        {
            "q": "Both Ann and her sister look like her mother.",
            "options": ["take after", "take place", "take away", "take on"],
            "answer": 0,
            "explanation": "Từ đồng nghĩa: look like = take after (trông giống với người lớn tuổi hơn trong gia đình)."
        },
        {
            "q": "Billy hasn't been working; he won't________his examinations.",
            "options": ["get off", "get through", "keep up", "keep of"],
            "answer": 1,
            "explanation": "Phrasal verb: get through (vượt qua một bài thi, khó khăn)."
        },
        {
            "q": "I trusted him but then he let me _____________ .",
            "options": ["on", "up", "down", "in"],
            "answer": 2,
            "explanation": "Phrasal verb: let somebody down (làm ai đó thất vọng)."
        },
        {
            "q": "Many hospitals are running _______________ of money.",
            "options": ["on", "out", "down", "in"],
            "answer": 1,
            "explanation": "Phrasal verb: run out of (cạn kiệt, dùng hết sạch cái gì)."
        },
        {
            "q": "My brother asked me to_______ his dog when he works the night shift.",
            "options": ["look out", "look after", "look in", "look forward to"],
            "answer": 1,
            "explanation": "Phrasal verb: look after (chăm sóc)."
        },
        {
            "q": "The computer_______ last week so I can’t send email to you.",
            "options": ["broke off", "broke in", "broke down", "broke up"],
            "answer": 2,
            "explanation": "Phrasal verb: break down (hỏng hóc đối với máy móc)."
        },
        {
            "q": "Jack and Rosie ________for dinner yesterday",
            "options": ["went in", "went out", "went with", "went to"],
            "answer": 1,
            "explanation": "Phrasal verb: go out (đi ra ngoài chơi, đi ăn uống)."
        },
        {
            "q": "Her father_________ when she was 12.",
            "options": ["passed to", "passed away", "passed off", "passed by"],
            "answer": 1,
            "explanation": "Phrasal verb: pass away (qua đời, mất - cách nói lịch sự của 'die')."
        },
        {
            "q": "She finally __________ winning the first prize after months of hard work.",
            "options": ["succeeded on", "succeeded in", "succeeded at", "succeeded for"],
            "answer": 1,
            "explanation": "Cấu trúc: succeed in + V-ing (thành công trong việc gì)."
        },
        {
            "q": "Children often __________ their parents for emotional support.",
            "options": ["depend at", "depend in", "depend on", "depend with"],
            "answer": 2,
            "explanation": "Cấu trúc: depend on (phụ thuộc vào)."
        },
        {
            "q": "The heavy rain didn’t __________ us from going out.",
            "options": ["prevent", "prevent to", "prevent in", "prevent from"],
            "answer": 0,
            "explanation": "Cấu trúc: prevent somebody from V-ing (ngăn cản ai làm việc gì)."
        },
        {
            "q": "The teacher stopped the students __________ making noise in class.",
            "options": ["from", "of", "to", "at"],
            "answer": 0,
            "explanation": "Cấu trúc: stop somebody from V-ing (chặn ai lại không cho làm gì)."
        },
        {
            "q": "I'm really __________ the school trip to Da Nang next week!",
            "options": ["interested", "excited about", "fond", "bored"],
            "answer": 1,
            "explanation": "Cấu trúc: excited about + V-ing/N (vô cùng hào hứng về điều gì)."
        },
        {
            "q": "She felt __________ her exam results because she had tried her best.",
            "options": ["satisfied with", "satisfied of", "satisfying by", "satisfy for"],
            "answer": 0,
            "explanation": "Cấu trúc: satisfied with (cảm thấy hài lòng với điều gì)."
        },
        {
            "q": "He is __________ watching TV all day long.",
            "options": ["interested with", "excited for", "bored with", "bored by"],
            "answer": 2,
            "explanation": "Cấu trúc: bored with + V-ing/N (chán ngấy với việc gì)."
        },
        {
            "q": "It’s time for you to __________ about your future career.",
            "options": ["do a decision", "make your decision", "take decision", "decide your mind"],
            "answer": 1,
            "explanation": "Collocation: make a decision (đưa ra quyết định)."
        },
        {
            "q": "I want to __________ you __________ your help yesterday.",
            "options": ["thank – for", "thank – to", "say – for", "give – to"],
            "answer": 0,
            "explanation": "Cấu trúc: thank somebody for something (cảm ơn ai đó vì điều gì)."
        },
        {
            "q": "My sister is very __________ painting and drawing.",
            "options": ["interested on", "keen in", "keen on", "interested at"],
            "answer": 2,
            "explanation": "Cấu trúc: be keen on + V-ing/N (thích thú, say mê làm gì)."
        },
        {
            "q": "Despite some difficulties, she has __________ in learning English.",
            "options": ["made progress", "done progress", "taken progress", "got progress"],
            "answer": 0,
            "explanation": "Collocation: make progress (có tiến bộ)."
        }
    ]

};
