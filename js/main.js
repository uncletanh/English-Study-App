// Global data variables
let vocabularyData = [];
let quizTopicsList = [];
let quizData = {};
let grammarTopics = [];

// Global state and utility functions
document.addEventListener('DOMContentLoaded', async () => {
    // Initialize icons
    lucide.createIcons();

    // Init Dark Mode (Mặc định Sáng)
    if (localStorage.theme === 'dark') {
        document.documentElement.classList.add('dark');
    } else {
        document.documentElement.classList.remove('dark');
        localStorage.setItem('theme', 'light'); // Ép mặc định là Light
    }
    if (typeof updateDarkModeIcon === 'function') updateDarkModeIcon();

    // Check first visit
    const hasVisited = localStorage.getItem('hasVisited_EnglishApp');
    if (!hasVisited) {
        setTimeout(() => {
            if (typeof startTour === 'function') startTour();
        }, 1000);
    }

    try {
        await loadData();
        
        // Initialize modules
        initXP();
        if (typeof initVocab === 'function') initVocab();
        if (typeof initFlashcards === 'function') initFlashcards();
        if (typeof initQuiz === 'function') initQuiz();
        if (typeof initGrammar === 'function') initGrammar();
        
        // State Persistence: Restore last tab
        const lastTab = localStorage.getItem('lastTab') || 'vocab';
        switchTab(lastTab);
        
        // Show Welcome back toast if not first visit
        if (hasVisited) {
            showToast('👋 Chào mừng trở lại! Đã khôi phục tiến trình học của bạn.');
        }
    } catch (e) {
        console.error("Error loading data:", e);
        alert("Không thể tải dữ liệu! Vui lòng chạy ứng dụng qua Live Server để sử dụng file JSON.");
    }
});

async function loadData() {
    const [vocabRes, questRes] = await Promise.all([
        fetch('data/vocabulary.json'),
        fetch('data/questions.json')
    ]);
    
    vocabularyData = await vocabRes.json();
    const questJSON = await questRes.json();
    
    quizTopicsList = questJSON.quizTopicsList;
    quizData = questJSON.quizData;
    grammarTopics = questJSON.grammarTopics;
}

function showToast(msg) {
    const toast = document.createElement('div');
    toast.className = 'fixed bottom-4 right-4 bg-funEmerald-500 dark:bg-funEmerald-600 text-white px-6 py-3 rounded-xl shadow-lg transition-all duration-500 translate-y-20 opacity-0 z-50 font-bold';
    toast.textContent = msg;
    document.body.appendChild(toast);
    
    // Slide up
    requestAnimationFrame(() => {
        toast.style.transform = 'translateY(0)';
        toast.style.opacity = '1';
    });
    
    setTimeout(() => {
        toast.style.transform = 'translateY(20px)';
        toast.style.opacity = '0';
        setTimeout(() => toast.remove(), 500);
    }, 3000);
}

// Tour Guide Logic
function startTour() {
    if (!window.driver) return;
    
    const driverObj = window.driver.js.driver({
        showProgress: true,
        popoverClass: 'bon-tour-theme',
        doneBtnText: 'Bắt đầu học!',
        closeBtnText: 'Đóng',
        nextBtnText: 'Tiếp theo &rarr;',
        prevBtnText: '&larr; Quay lại',
        steps: [
            { element: 'header h1', popover: { title: '🚀 Trạm Không Gian', description: 'Chào mừng em đến với Trạm Không Gian Tiếng Anh! Nơi đây chúng mình sẽ cùng nhau học từ vựng siêu vui nhé.', side: "bottom", align: 'start' }},
            { element: '#xp-container', popover: { title: '⭐ Rương Điểm', description: 'Đây là điểm kinh nghiệm (XP) của em. Mỗi lần học giỏi em sẽ được thưởng thêm sao!', side: "bottom", align: 'start' }},
            { element: '#nav-vocab', popover: { title: '📚 Kho Từ Vựng', description: 'Nơi cất giữ tất cả các từ tiếng Anh. Em có thể xem, tìm kiếm và thêm từ mới tại đây.', side: "bottom", align: 'start' }},
            { element: '#nav-flashcards', popover: { title: '🃏 Thẻ Lật Thần Kỳ', description: 'Công cụ giúp em nhớ từ siêu tốc. Cứ học ở đây là không bao giờ quên luôn!', side: "bottom", align: 'start' }},
            { element: '#nav-quiz', popover: { title: '🎯 Đấu Trường', description: 'Nơi em thử tài làm trắc nghiệm và gom thật nhiều sao vàng rực rỡ.', side: "bottom", align: 'start' }},
            { element: '#nav-grammar', popover: { title: '📖 Cẩm Nang Ngữ Pháp', description: 'Tất cả những bí kíp võ công siêu hạng về ngữ pháp đều được ghi chép trong này!', side: "bottom", align: 'start' }},
            { element: '#dark-mode-toggle', popover: { title: '☀️ Bảo Vệ Mắt', description: 'Nếu học buổi tối, em nhớ bấm nút này để màn hình dịu lại, giúp bảo vệ đôi mắt nhé!', side: "bottom", align: 'end' }},
            { element: '#tour-help-btn', popover: { title: '🆘 Phao Cứu Sinh', description: 'Nếu có lỡ quên cách dùng, em cứ bấm vào đây để đi tham quan lại từ đầu nhé. Chúc em học thật vui!', side: "right", align: 'end' }}
        ],
        onDestroyStarted: () => {
            if (!driverObj.hasNextStep() || confirm("Em có muốn dừng hướng dẫn tại đây không?")) {
                driverObj.destroy();
                localStorage.setItem('hasVisited_EnglishApp', 'true');
            }
        }
    });

    driverObj.drive();
}

// Tab Switching Logic
function switchTab(tabId) {
    localStorage.setItem('lastTab', tabId);
    
    // Hide all tabs
    document.querySelectorAll('.tab-content').forEach(tab => {
        tab.classList.remove('active');
        setTimeout(() => tab.classList.add('hidden'), 50); // slight delay for smooth transition
    });
    
    // Remove active state from nav buttons
    document.querySelectorAll('.nav-btn').forEach(btn => {
        btn.classList.remove('active');
    });

    // Show selected tab
    const selectedTab = document.getElementById(`tab-${tabId}`);
    selectedTab.classList.remove('hidden');
    setTimeout(() => selectedTab.classList.add('active'), 50);

    // Set active state on button
    document.getElementById(`nav-${tabId}`).classList.add('active');
}

// Reset Data Logic
function resetAllData() {
    if (confirm('Bạn có chắc chắn muốn xóa toàn bộ tiến độ học tập (XP, Trắc nghiệm, Thẻ lật)? Từ vựng cá nhân sẽ ĐƯỢC GIỮ NGUYÊN.')) {
        localStorage.removeItem('globalXP');
        localStorage.removeItem('quizProgress');
        localStorage.removeItem('flashcardsState');
        localStorage.removeItem('srsData');
        localStorage.removeItem('selectedFlashcards');
        location.reload();
    }
}

// Confetti Utility
function triggerConfetti() {
    if (typeof confetti === 'function') {
        const count = 200;
        const defaults = {
            origin: { y: 0.7 }
        };

        function fire(particleRatio, opts) {
            confetti(Object.assign({}, defaults, opts, {
                particleCount: Math.floor(count * particleRatio)
            }));
        }

        fire(0.25, { spread: 26, startVelocity: 55 });
        fire(0.2, { spread: 60 });
        fire(0.35, { spread: 100, decay: 0.91, scalar: 0.8 });
        fire(0.1, { spread: 120, startVelocity: 25, decay: 0.92, scalar: 1.2 });
        fire(0.1, { spread: 120, startVelocity: 45 });
    }
}

// XP System
let globalXP = 0;

function initXP() {
    const savedXP = localStorage.getItem('globalXP');
    if (savedXP) {
        globalXP = parseInt(savedXP);
    }
    updateXPDisplay();
}

function addXP(amount) {
    globalXP += amount;
    localStorage.setItem('globalXP', globalXP);
    updateXPDisplay();
    
    // Animate XP
    const xpContainer = document.getElementById('xp-container');
    if(xpContainer) {
        xpContainer.classList.add('scale-110', 'bg-funAmber-500');
        setTimeout(() => xpContainer.classList.remove('scale-110', 'bg-funAmber-500'), 300);
    }
}

function updateXPDisplay() {
    const xpEl = document.getElementById('xp-value');
    if (xpEl) xpEl.textContent = globalXP;
}

// Audio System (Using Web Audio API)
const audioCtx = new (window.AudioContext || window.webkitAudioContext)();

function playEffectAudio(type) {
    if (audioCtx.state === 'suspended') {
        audioCtx.resume();
    }
    const oscillator = audioCtx.createOscillator();
    const gainNode = audioCtx.createGain();
    
    oscillator.connect(gainNode);
    gainNode.connect(audioCtx.destination);
    
    if (type === 'correct') {
        // "Ting"
        oscillator.type = 'sine';
        oscillator.frequency.setValueAtTime(800, audioCtx.currentTime);
        oscillator.frequency.exponentialRampToValueAtTime(1200, audioCtx.currentTime + 0.1);
        gainNode.gain.setValueAtTime(0.5, audioCtx.currentTime);
        gainNode.gain.exponentialRampToValueAtTime(0.01, audioCtx.currentTime + 0.3);
        oscillator.start(audioCtx.currentTime);
        oscillator.stop(audioCtx.currentTime + 0.3);
    } else if (type === 'wrong') {
        // "Buzz"
        oscillator.type = 'sawtooth';
        oscillator.frequency.setValueAtTime(150, audioCtx.currentTime);
        oscillator.frequency.exponentialRampToValueAtTime(100, audioCtx.currentTime + 0.2);
        gainNode.gain.setValueAtTime(0.3, audioCtx.currentTime);
        gainNode.gain.linearRampToValueAtTime(0.01, audioCtx.currentTime + 0.2);
        oscillator.start(audioCtx.currentTime);
        oscillator.stop(audioCtx.currentTime + 0.2);
    } else if (type === 'flip') {
        // "Flip paper"
        oscillator.type = 'triangle';
        oscillator.frequency.setValueAtTime(200, audioCtx.currentTime);
        gainNode.gain.setValueAtTime(0.1, audioCtx.currentTime);
        gainNode.gain.linearRampToValueAtTime(0.01, audioCtx.currentTime + 0.1);
        oscillator.start(audioCtx.currentTime);
        oscillator.stop(audioCtx.currentTime + 0.1);
    }
}

// Dark Mode Logic
function toggleDarkMode() {
    document.documentElement.classList.toggle('dark');
    const isDark = document.documentElement.classList.contains('dark');
    localStorage.setItem('theme', isDark ? 'dark' : 'light');
    updateDarkModeIcon();
}

function updateDarkModeIcon() {
    const toggleBtn = document.getElementById('dark-mode-toggle');
    if (!toggleBtn) return;
    if (document.documentElement.classList.contains('dark')) {
        toggleBtn.innerHTML = '<span class="text-2xl drop-shadow-md">☀️</span>';
    } else {
        toggleBtn.innerHTML = '<span class="text-2xl drop-shadow-md">🌙</span>';
    }
}

// Letter Modal Logic
function openLetterModal() {
    const modal = document.getElementById('letter-modal');
    const content = document.getElementById('letter-modal-content');
    modal.classList.remove('hidden');
    
    // Trigger animation
    requestAnimationFrame(() => {
        content.classList.remove('scale-95', 'opacity-0');
        content.classList.add('scale-100', 'opacity-100');
    });
    
    if (typeof triggerConfetti === 'function') {
        setTimeout(triggerConfetti, 300); // small delay for dramatic effect
    }
}

function closeLetterModal() {
    const modal = document.getElementById('letter-modal');
    const content = document.getElementById('letter-modal-content');
    
    content.classList.remove('scale-100', 'opacity-100');
    content.classList.add('scale-95', 'opacity-0');
    
    setTimeout(() => {
        modal.classList.add('hidden');
    }, 300);
}

// PWA Service Worker Registration
if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        navigator.serviceWorker.register('./service-worker.js')
            .then(registration => {
                console.log('ServiceWorker registration successful with scope: ', registration.scope);
            })
            .catch(err => {
                console.log('ServiceWorker registration failed: ', err);
            });
    });
}
