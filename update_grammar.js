const fs = require('fs');
const path = require('path');

const jsonPath = path.join(__dirname, 'data', 'questions.json');
let rawData = fs.readFileSync(jsonPath, 'utf8');
if (rawData.charCodeAt(0) === 0xFEFF) {
    rawData = rawData.slice(1);
}
let data = JSON.parse(rawData);

// 1. Update Topic 1 (Tenses)
const tensesTopic = data.grammarTopics.find(t => t.title.includes('Tenses'));
if (tensesTopic) {
    tensesTopic.contentHTML = `
<div class='bg-white p-5 rounded-2xl shadow-sm border border-funSky-200 mb-5'>
    <h3 class='text-xl font-black text-funSky-600 mb-3'>1. Khái niệm siêu dễ hiểu về "Thì"</h3>
    <p class='text-gray-700 leading-relaxed mb-4'>
        "Thì" trong Tiếng Anh giống như một <strong>chiếc máy thời gian</strong>. Nó giúp em cho người khác biết hành động đó đang diễn ra <em>bây giờ</em>, đã xong ở <em>quá khứ</em>, hay sắp làm trong <em>tương lai</em>. 
    </p>
    
    <div class='bg-funSky-50 p-4 rounded-xl mb-4 border-l-4 border-funSky-500'>
        <h4 class='font-bold text-funSky-700 mb-2'>A. Thì Hiện Tại Đơn (Simple Present)</h4>
        <p class='text-sm text-gray-700 mb-2'><strong>Hiểu đơn giản:</strong> Dùng để kể về những thói quen lặp đi lặp lại hằng ngày của em, hoặc một sự thật hiển nhiên (như mặt trời mọc ở đằng Đông).</p>
        
        <div class='bg-white p-3 rounded-lg mb-2 font-mono text-sm shadow-sm'>
            <div class='text-green-600 font-bold mb-1'>(+) Khẳng định: S + V1 / V(s/es)</div>
            <p class='text-xs text-gray-600 italic mb-2'>Ví dụ: I <strong>play</strong> football. (Em chơi bóng đá.) | She <strong>plays</strong> football. (Cô ấy chơi bóng đá.)</p>
            
            <div class='text-red-500 font-bold mb-1'>(-) Phủ định: S + don't / doesn't + V1</div>
            <p class='text-xs text-gray-600 italic mb-2'>Ví dụ: I <strong>don't like</strong> fish. (Em không thích cá.) | He <strong>doesn't like</strong> fish. (Cậu ấy không thích cá.)</p>
            
            <div class='text-blue-600 font-bold mb-1'>(?) Câu hỏi: Do / Does + S + V1?</div>
            <p class='text-xs text-gray-600 italic'>Ví dụ: <strong>Do</strong> you <strong>like</strong> apples? (Em có thích táo không?)</p>
        </div>
        
        <p class='text-sm text-gray-700'><strong>💡 Mẹo nhận biết:</strong> Thấy các chữ chỉ tần suất như <em>always (luôn luôn), usually (thường xuyên), every day (mỗi ngày)</em> thì 99% là Hiện tại đơn!</p>
    </div>

    <div class='bg-funAmber-50 p-4 rounded-xl mb-4 border-l-4 border-funAmber-500'>
        <h4 class='font-bold text-funAmber-700 mb-2'>B. Thì Hiện Tại Tiếp Diễn (Present Continuous)</h4>
        <p class='text-sm text-gray-700 mb-2'><strong>Hiểu đơn giản:</strong> Giống như em đang cầm máy quay phim và miêu tả <strong>ngay lúc này</strong> ai đang làm gì.</p>
        
        <div class='bg-white p-3 rounded-lg mb-2 font-mono text-sm shadow-sm'>
            <div class='text-green-600 font-bold mb-1'>(+) Khẳng định: S + am/is/are + V-ing</div>
            <p class='text-xs text-gray-600 italic mb-2'>Ví dụ: I <strong>am eating</strong> now. (Em đang ăn lúc này.)</p>
            
            <div class='text-red-500 font-bold mb-1'>(-) Phủ định: S + am/is/are + not + V-ing</div>
            <p class='text-xs text-gray-600 italic mb-2'>Ví dụ: She <strong>is not (isn't) sleeping</strong>. (Cô ấy đang không ngủ.)</p>
            
            <div class='text-blue-600 font-bold mb-1'>(?) Câu hỏi: Am/Is/Are + S + V-ing?</div>
            <p class='text-xs text-gray-600 italic'>Ví dụ: <strong>Are</strong> you <strong>watching</strong> TV? (Em đang xem TV à?)</p>
        </div>
        
        <p class='text-sm text-gray-700'><strong>💡 Mẹo nhận biết:</strong> Thấy <em>now, right now, at the moment</em> hoặc câu cảm thán như <em>Look! (Nhìn kìa!), Listen! (Nghe kìa!)</em> thì dùng ngay V-ing nhé!</p>
        <p class='text-sm text-red-500 mt-1'><strong>🚨 Bẫy (Traps):</strong> Không bao giờ thêm "ing" vào các từ chỉ cảm giác, suy nghĩ như: <em>like, love, want, know, understand</em>. (Không viết: I am loving you ❌ -> I love you ✅).</p>
    </div>

    <div class='bg-funEmerald-50 p-4 rounded-xl mb-4 border-l-4 border-funEmerald-500'>
        <h4 class='font-bold text-funEmerald-700 mb-2'>C. Thì Hiện Tại Hoàn Thành (Present Perfect)</h4>
        <p class='text-sm text-gray-700 mb-2'><strong>Hiểu đơn giản:</strong> Hành động đã xảy ra trong quá khứ nhưng <strong>kết quả vẫn còn dính líu đến hiện tại</strong>, hoặc em vừa mới làm xong việc gì đó tức thì.</p>
        
        <div class='bg-white p-3 rounded-lg mb-2 font-mono text-sm shadow-sm'>
            <div class='text-green-600 font-bold mb-1'>(+) Khẳng định: S + have/has + V3/ed</div>
            <p class='text-xs text-gray-600 italic mb-2'>Ví dụ: I <strong>have learnt</strong> English for 5 years. (Em đã học Tiếng Anh được 5 năm - và bây giờ vẫn học.)</p>
            
            <div class='text-red-500 font-bold mb-1'>(-) Phủ định: S + haven't/hasn't + V3/ed</div>
            <p class='text-xs text-gray-600 italic mb-2'>Ví dụ: She <strong>hasn't finished</strong> her homework. (Cô ấy vẫn chưa làm xong bài tập.)</p>
            
            <div class='text-blue-600 font-bold mb-1'>(?) Câu hỏi: Have/Has + S + V3/ed?</div>
            <p class='text-xs text-gray-600 italic'>Ví dụ: <strong>Have</strong> you <strong>eaten</strong> dinner? (Em đã ăn tối chưa?)</p>
        </div>
        
        <p class='text-sm text-gray-700'><strong>💡 Mẹo nhận biết:</strong> Thấy <em>since (từ khi), for (trong khoảng), already (rồi), yet (chưa), just (vừa mới), ever (đã từng), never (chưa từng)</em> thì auto Hiện tại hoàn thành!</p>
    </div>

    <div class='bg-pastelPink-50 p-4 rounded-xl mb-4 border-l-4 border-pastelPink-500'>
        <h4 class='font-bold text-pastelPink-700 mb-2'>D. Thì Quá Khứ Đơn (Simple Past)</h4>
        <p class='text-sm text-gray-700 mb-2'><strong>Hiểu đơn giản:</strong> Hành động đã xảy ra và <strong>kết thúc hoàn toàn</strong> trong quá khứ, không còn dính líu gì tới bây giờ.</p>
        
        <div class='bg-white p-3 rounded-lg mb-2 font-mono text-sm shadow-sm'>
            <div class='text-green-600 font-bold mb-1'>(+) Khẳng định: S + V2 / V-ed</div>
            <p class='text-xs text-gray-600 italic mb-2'>Ví dụ: I <strong>went</strong> to school yesterday. (Hôm qua em đã đi học - "went" là V2 của "go").</p>
            
            <div class='text-red-500 font-bold mb-1'>(-) Phủ định: S + didn't + V1 (Nguyên mẫu)</div>
            <p class='text-xs text-gray-600 italic mb-2'>Ví dụ: I <strong>didn't play</strong> game. (Em đã không chơi game. Nhớ là có "didn't" thì V phải trả về nguyên mẫu nhé!)</p>
            
            <div class='text-blue-600 font-bold mb-1'>(?) Câu hỏi: Did + S + V1?</div>
            <p class='text-xs text-gray-600 italic'>Ví dụ: <strong>Did</strong> you <strong>go</strong> out? (Em đã đi chơi à?)</p>
        </div>
        
        <p class='text-sm text-gray-700'><strong>💡 Mẹo nhận biết:</strong> Dấu hiệu thời gian rất rõ ràng: <em>yesterday (hôm qua), last week/month/year (tuần/tháng/năm trước), ...ago (cách đây...).</em></p>
    </div>

    <div class='bg-purple-50 p-4 rounded-xl mb-4 border-l-4 border-purple-500'>
        <h4 class='font-bold text-purple-700 mb-2'>E. Thì Quá Khứ Tiếp Diễn (Past Continuous)</h4>
        <p class='text-sm text-gray-700 mb-2'><strong>Hiểu đơn giản:</strong> Kể về một hành động <strong>đang diễn ra tại một thời điểm cụ thể</strong> trong quá khứ (Ví dụ: Lúc 8h tối qua em đang tắm), hoặc một hành động đang xảy ra thì có hành động khác xen vào.</p>
        
        <div class='bg-white p-3 rounded-lg mb-2 font-mono text-sm shadow-sm'>
            <div class='text-green-600 font-bold mb-1'>(+) Khẳng định: S + was/were + V-ing</div>
            <p class='text-xs text-gray-600 italic mb-2'>Ví dụ: I <strong>was taking</strong> a bath at 8 PM yesterday. (Lúc 8h tối qua em đang tắm.)</p>
            
            <div class='text-red-500 font-bold mb-1'>(-) Phủ định: S + wasn't/weren't + V-ing</div>
            <p class='text-xs text-gray-600 italic mb-2'>Ví dụ: We <strong>weren't sleeping</strong> when he came. (Lúc anh ấy đến, chúng em đang không ngủ.)</p>
            
            <div class='text-blue-600 font-bold mb-1'>(?) Câu hỏi: Was/Were + S + V-ing?</div>
            <p class='text-xs text-gray-600 italic'>Ví dụ: <strong>Were</strong> you <strong>watching</strong> TV at that time? (Lúc đó em đang xem TV à?)</p>
        </div>
        
        <p class='text-sm text-gray-700'><strong>💡 Mẹo nhận biết:</strong> Thường đi kèm với giờ giấc cụ thể ở quá khứ (at 8 PM yesterday), hoặc cấu trúc <em>When / While</em> (When I came, he was sleeping - Khi tôi đến, anh ấy đang ngủ).</p>
    </div>

    <div class='bg-teal-50 p-4 rounded-xl border-l-4 border-teal-500'>
        <h4 class='font-bold text-teal-700 mb-2'>F. Thì Tương Lai Đơn (Simple Future)</h4>
        <p class='text-sm text-gray-700 mb-2'><strong>Hiểu đơn giản:</strong> Dùng để nói về một hành động sẽ xảy ra trong tương lai (không có dự định từ trước), hoặc một lời hứa, một dự đoán.</p>
        
        <div class='bg-white p-3 rounded-lg mb-2 font-mono text-sm shadow-sm'>
            <div class='text-green-600 font-bold mb-1'>(+) Khẳng định: S + will + V1 (Nguyên mẫu)</div>
            <p class='text-xs text-gray-600 italic mb-2'>Ví dụ: I <strong>will help</strong> you. (Em sẽ giúp anh - quyết định ngay lúc nói.)</p>
            
            <div class='text-red-500 font-bold mb-1'>(-) Phủ định: S + won't + V1</div>
            <p class='text-xs text-gray-600 italic mb-2'>Ví dụ: I <strong>won't tell</strong> anyone. (Em hứa sẽ không nói cho ai đâu.)</p>
            
            <div class='text-blue-600 font-bold mb-1'>(?) Câu hỏi: Will + S + V1?</div>
            <p class='text-xs text-gray-600 italic'>Ví dụ: <strong>Will</strong> you <strong>marry</strong> me? (Em sẽ lấy anh chứ?)</p>
        </div>
        
        <p class='text-sm text-gray-700'><strong>💡 Mẹo nhận biết:</strong> Thấy <em>tomorrow (ngày mai), next week/month/year (tuần/tháng/năm tới), in the future (trong tương lai), think/hope (nghĩ/hi vọng)</em> thì dùng Tương lai đơn nhé!</p>
    </div>
</div>
`;
    tensesTopic.chips = ["always", "usually", "now", "yesterday", "since", "tomorrow", "while"];
}

// 2. Update Topic 2 (Subject-Verb Agreement)
const svTopic = data.grammarTopics.find(t => t.title.includes('Subject-Verb Agreement'));
if (svTopic) {
    svTopic.contentHTML = `
<div class='bg-white p-5 rounded-2xl shadow-sm border border-yellow-200 mb-5'>
    <h3 class='text-xl font-black text-yellow-600 mb-3'>Sự Hòa Hợp Giữa Chủ Ngữ & Động Từ</h3>
    <p class='text-gray-700 leading-relaxed mb-4'>
        Trong Tiếng Anh, Chủ ngữ và Động từ giống như một đôi bạn thân, chúng phải luôn "hòa hợp" với nhau. Tức là <strong>Chủ ngữ số ít thì Động từ chia số ít</strong>, và <strong>Chủ ngữ số nhiều thì Động từ chia số nhiều</strong>. Anh sẽ liệt kê cho em các bẫy hay gặp nhất nhé!
    </p>
    
    <ul class='space-y-4'>
        <li class='bg-yellow-50 p-4 rounded-xl border border-yellow-100'>
            <div class='font-bold text-yellow-700 mb-1'>1. Chủ ngữ nối bằng "AND" 🤝</div>
            <p class='text-sm text-gray-700'>Bình thường nối bằng "and" thì là <strong>số nhiều</strong>.<br><em class='text-gray-500 text-xs'>VD: Tom and Jerry <strong>are</strong> friends.</em></p>
            <p class='text-sm text-red-500 mt-2 font-bold'>🚨 Ngoại lệ (Bẫy!):</p>
            <p class='text-sm text-gray-700'>Nếu 2 thứ đó tạo thành một món ăn hoặc một khái niệm duy nhất thì là <strong>số ít</strong>.<br><em class='text-gray-500 text-xs'>VD: Bread and butter <strong>is</strong> his favorite breakfast. (Bánh mì bơ là 1 món).</em></p>
        </li>
        
        <li class='bg-yellow-50 p-4 rounded-xl border border-yellow-100'>
            <div class='font-bold text-yellow-700 mb-1'>2. Nhóm "Bất định" (Mỗi, Mọi, Không ai) 👤</div>
            <p class='text-sm text-gray-700'>Gặp các từ như: <em>Each, Every, Everyone, Someone, Nobody, Nothing...</em> em luôn chia <strong>số ít</strong> nhé!</p>
            <p class='text-xs text-gray-500 italic mt-1'>VD: Everyone <strong>is</strong> happy. (Mọi người đều vui.)</p>
        </li>

        <li class='bg-yellow-50 p-4 rounded-xl border border-yellow-100'>
            <div class='font-bold text-yellow-700 mb-1'>3. Nhóm "Hoặc cái này, hoặc cái kia" ⚖️</div>
            <p class='text-sm text-gray-700'>Khi dùng: <em>Or, Either...or, Neither...nor, Not only...but also</em>, động từ sẽ chia theo <strong>chủ ngữ đứng gần nó nhất</strong>.</p>
            <p class='text-xs text-gray-500 italic mt-1'>VD: Neither the teacher nor the students <strong>are</strong> here. (Chia theo "students" số nhiều).</p>
        </li>

        <li class='bg-yellow-50 p-4 rounded-xl border border-yellow-100'>
            <div class='font-bold text-yellow-700 mb-1'>4. Danh từ chỉ số lượng, đo lường 📏</div>
            <p class='text-sm text-gray-700'>Khoảng thời gian, số tiền, khoảng cách, trọng lượng... luôn được coi là một khối thống nhất nên dùng <strong>số ít</strong>.</p>
            <p class='text-xs text-gray-500 italic mt-1'>VD: Five million dollars <strong>is</strong> a lot of money. (5 triệu đô là rất nhiều tiền - nghe thì to nhưng chia số ít nhé).</p>
        </li>

        <li class='bg-yellow-50 p-4 rounded-xl border border-yellow-100'>
            <div class='font-bold text-yellow-700 mb-1'>5. The number of vs. A number of 🔢</div>
            <p class='text-sm text-gray-700'>
                - <strong>The number of</strong> (Số lượng của...): chia <strong>số ít</strong>.<br>
                - <strong>A number of</strong> (Một vài...): chia <strong>số nhiều</strong>.
            </p>
            <p class='text-xs text-gray-500 italic mt-1'>VD: A number of students <strong>are</strong> playing. | The number of students <strong>is</strong> 40.</p>
        </li>
    </ul>
</div>
`;
}

// 3. Inject Dark Mode classes into all HTML content
const replacements = {
    'bg-white': 'bg-white dark:bg-slate-800',
    'text-gray-800': 'text-gray-800 dark:text-gray-100',
    'text-gray-700': 'text-gray-700 dark:text-gray-200',
    'text-gray-600': 'text-gray-600 dark:text-gray-300',
    'text-gray-500': 'text-gray-500 dark:text-gray-400',
    'border-gray-200': 'border-gray-200 dark:border-slate-600',
    
    'text-funSky-700': 'text-funSky-700 dark:text-funSky-300',
    'text-funSky-600': 'text-funSky-600 dark:text-funSky-400',
    'text-funSky-500': 'text-funSky-500 dark:text-funSky-400',
    'bg-funSky-50': 'bg-funSky-50 dark:bg-slate-700',
    'border-funSky-200': 'border-funSky-200 dark:border-slate-600',
    'border-funSky-500': 'border-funSky-500 dark:border-funSky-400',
    
    'text-funAmber-700': 'text-funAmber-700 dark:text-funAmber-300',
    'text-funAmber-600': 'text-funAmber-600 dark:text-funAmber-400',
    'bg-funAmber-50': 'bg-funAmber-50 dark:bg-funAmber-900/40',
    'border-funAmber-200': 'border-funAmber-200 dark:border-funAmber-700',
    'border-funAmber-500': 'border-funAmber-500 dark:border-funAmber-400',
    
    'text-funEmerald-700': 'text-funEmerald-700 dark:text-funEmerald-300',
    'text-funEmerald-600': 'text-funEmerald-600 dark:text-funEmerald-400',
    'bg-funEmerald-50': 'bg-funEmerald-50 dark:bg-funEmerald-900/40',
    'border-funEmerald-200': 'border-funEmerald-200 dark:border-funEmerald-700',
    'border-funEmerald-500': 'border-funEmerald-500 dark:border-funEmerald-400',
    
    'text-pastelPink-700': 'text-pastelPink-700 dark:text-pastelPink-300',
    'text-pastelPink-600': 'text-pastelPink-600 dark:text-pastelPink-400',
    'bg-pastelPink-50': 'bg-pastelPink-50 dark:bg-pastelPink-900/40',
    'border-pastelPink-100': 'border-pastelPink-100 dark:border-pastelPink-800',
    'border-pastelPink-200': 'border-pastelPink-200 dark:border-pastelPink-700',
    'border-pastelPink-300': 'border-pastelPink-300 dark:border-pastelPink-600',
    'border-pastelPink-500': 'border-pastelPink-500 dark:border-pastelPink-400',

    'text-purple-800': 'text-purple-800 dark:text-purple-200',
    'text-purple-700': 'text-purple-700 dark:text-purple-300',
    'text-purple-600': 'text-purple-600 dark:text-purple-400',
    'bg-purple-100': 'bg-purple-100 dark:bg-purple-900/60',
    'bg-purple-50': 'bg-purple-50 dark:bg-purple-900/40',
    'border-purple-200': 'border-purple-200 dark:border-purple-700',
    'border-purple-500': 'border-purple-500 dark:border-purple-400',

    'text-emerald-800': 'text-emerald-800 dark:text-emerald-200',
    'text-emerald-700': 'text-emerald-700 dark:text-emerald-300',
    'text-emerald-600': 'text-emerald-600 dark:text-emerald-400',
    'bg-emerald-50': 'bg-emerald-50 dark:bg-emerald-900/40',
    'border-emerald-200': 'border-emerald-200 dark:border-emerald-700',
    'border-emerald-500': 'border-emerald-500 dark:border-emerald-400',
    
    'text-teal-800': 'text-teal-800 dark:text-teal-200',
    'text-teal-700': 'text-teal-700 dark:text-teal-300',
    'bg-teal-50': 'bg-teal-50 dark:bg-teal-900/40',
    'border-teal-500': 'border-teal-500 dark:border-teal-400',
    
    'text-cyan-800': 'text-cyan-800 dark:text-cyan-200',
    'text-cyan-700': 'text-cyan-700 dark:text-cyan-300',
    'bg-cyan-50': 'bg-cyan-50 dark:bg-cyan-900/40',
    'border-cyan-500': 'border-cyan-500 dark:border-cyan-400',

    'text-green-800': 'text-green-800 dark:text-green-200',
    'text-green-700': 'text-green-700 dark:text-green-300',
    'text-green-600': 'text-green-600 dark:text-green-400',
    'bg-green-50': 'bg-green-50 dark:bg-green-900/40',
    'border-green-200': 'border-green-200 dark:border-green-700',
    'border-green-500': 'border-green-500 dark:border-green-400',

    'text-yellow-800': 'text-yellow-800 dark:text-yellow-200',
    'text-yellow-700': 'text-yellow-700 dark:text-yellow-300',
    'text-yellow-600': 'text-yellow-600 dark:text-yellow-400',
    'bg-yellow-100': 'bg-yellow-100 dark:bg-yellow-900/60',
    'bg-yellow-50': 'bg-yellow-50 dark:bg-yellow-900/40',
    'border-yellow-200': 'border-yellow-200 dark:border-yellow-700',
    'border-yellow-500': 'border-yellow-500 dark:border-yellow-400',
    'border-yellow-100': 'border-yellow-100 dark:border-yellow-800',

    'text-red-800': 'text-red-800 dark:text-red-200',
    'text-red-700': 'text-red-700 dark:text-red-300',
    'bg-red-50': 'bg-red-50 dark:bg-red-900/40',
    'border-red-200': 'border-red-200 dark:border-red-700',
    'border-red-500': 'border-red-500 dark:border-red-400',

    'text-blue-800': 'text-blue-800 dark:text-blue-200',
    'text-blue-700': 'text-blue-700 dark:text-blue-300',
    'text-blue-600': 'text-blue-600 dark:text-blue-400',
    'text-blue-500': 'text-blue-500 dark:text-blue-400',
    'bg-blue-50': 'bg-blue-50 dark:bg-blue-900/40',
    'border-blue-200': 'border-blue-200 dark:border-blue-700',
    'border-blue-400': 'border-blue-400 dark:border-blue-500',
    
    'text-indigo-700': 'text-indigo-700 dark:text-indigo-300',
    'text-indigo-600': 'text-indigo-600 dark:text-indigo-400',
    'bg-indigo-50': 'bg-indigo-50 dark:bg-indigo-900/40',
    'border-indigo-200': 'border-indigo-200 dark:border-indigo-700',
    'border-indigo-100': 'border-indigo-100 dark:border-indigo-800',
};

data.grammarTopics.forEach(topic => {
    if (topic.contentHTML) {
        let html = topic.contentHTML;
        // prevent double replace if already has dark
        // we will just do a simple regex replace if the word is not followed by dark:
        
        // Remove existing dark classes if any (just to be safe and clean)
        html = html.replace(/dark:[a-zA-Z0-9/-]+/g, '');
        // collapse spaces
        html = html.replace(/ +/g, ' ');

        for (const [light, lightDark] of Object.entries(replacements)) {
            // regex to match the exact class word
            const regex = new RegExp(`\\b${light}\\b`, 'g');
            html = html.replace(regex, lightDark);
        }
        topic.contentHTML = html;
    }
});

fs.writeFileSync(jsonPath, JSON.stringify(data, null, 4), 'utf8');
console.log('Successfully updated questions.json!');
