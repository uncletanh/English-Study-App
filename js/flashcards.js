let srsData = {}; // { word: { ease: 2.5, interval: 0, nextReview: timestamp, reps: 0 } }

function initFlashcards() {
    // Load state from local storage
    const savedState = localStorage.getItem('srsData');
    if (savedState) {
        srsData = JSON.parse(savedState);
    }

    buildDeck();
    updateFlashcardUI();
}

function buildDeck() {
    let targetIndices = [];
    const selectedWordsJSON = localStorage.getItem('selectedFlashcards');
    if (selectedWordsJSON) {
        const selectedWords = JSON.parse(selectedWordsJSON);
        const combinedVocab = getCombinedVocab();
        combinedVocab.forEach((item, index) => {
            const safeWord = item.word.replace(/'/g, "\\'");
            if (selectedWords.includes(safeWord)) {
                targetIndices.push(index);
            }
        });
    } else {
        targetIndices = [];
    }

    deckToStudy = [];
    const now = Date.now();
    targetIndices.forEach(index => {
        const combinedVocab = getCombinedVocab();
        const word = combinedVocab[index].word.replace(/'/g, "\\'");
        
        let data = srsData[word];
        if (!data) {
            // New card
            deckToStudy.push(index);
        } else {
            // Check if due (nextReview <= now)
            if (data.nextReview <= now || data.interval === 0) {
                deckToStudy.push(index);
            }
        }
    });

    // If no cards are due, but user selected explicitly, show them all
    if (deckToStudy.length === 0 && targetIndices.length > 0) {
        deckToStudy = [...targetIndices];
    }
    
    // Shuffle the deck for variety
    deckToStudy.sort(() => Math.random() - 0.5);
    currentCardIndex = 0;
}

function updateFlashcardUI() {
    const emptyState = document.getElementById('fc-empty-state');
    const mainContainer = document.getElementById('fc-main-container');

    if (deckToStudy.length === 0) {
        if (emptyState) emptyState.classList.remove('hidden');
        if (mainContainer) mainContainer.classList.add('hidden');
        return;
    } else {
        if (emptyState) emptyState.classList.add('hidden');
        if (mainContainer) mainContainer.classList.remove('hidden');
    }

    const wordIdx = deckToStudy[currentCardIndex];
    const combinedVocab = getCombinedVocab();
    const wordData = combinedVocab[wordIdx];

    document.getElementById('fc-word').textContent = wordData.word;
    document.getElementById('fc-phonetic').textContent = wordData.phonetic;
    document.getElementById('fc-type').textContent = wordData.type;
    document.getElementById('fc-meaning').textContent = wordData.meaning;

    // Phục vụ cho tính năng Audio của thẻ lật
    // Mặc định wordData.audio (nếu từ API) hoặc gọi SpeechSynthesis
    window.currentFlashcardAudio = wordData.audio || wordData.word;

    // Reset flip state
    const card = document.getElementById('flashcard');
    card.classList.remove('flipped');
    
    // Reset buttons
    const flipBtn = document.getElementById('fc-flip-btn-container');
    const srsBtns = document.getElementById('srs-buttons');
    if (flipBtn && srsBtns) {
        flipBtn.classList.remove('hidden');
        srsBtns.classList.add('hidden');
        srsBtns.classList.remove('grid');
    }

    updateStats();
}

function flipCard() {
    const card = document.getElementById('flashcard');
    if (!card.classList.contains('flipped')) {
        // First time flip
        card.classList.add('flipped');
        
        // Hide flip button, show SRS buttons
        const flipBtn = document.getElementById('fc-flip-btn-container');
        const srsBtns = document.getElementById('srs-buttons');
        if (flipBtn && srsBtns) {
            flipBtn.classList.add('hidden');
            srsBtns.classList.remove('hidden');
            srsBtns.classList.add('grid');
            
            // Cập nhật nhãn thời gian SRS
            updateSRSTimeLabels();
        }
    } else {
        card.classList.remove('flipped');
    }
}

function updateSRSTimeLabels() {
    const wordIdx = deckToStudy[currentCardIndex];
    const combinedVocab = getCombinedVocab();
    const word = combinedVocab[wordIdx].word.replace(/'/g, "\\'");
    
    let data = srsData[word] || { ease: 2.5, interval: 0, reps: 0 };
    
    // Tính toán thời gian giả định cho từng nút
    // 1: Lại từ đầu, 2: Khó, 3: Tốt, 4: Dễ
    const times = [
        '< 1p', // 1
        formatInterval(calculateNextInterval(data, 2)), // 2
        formatInterval(calculateNextInterval(data, 3)), // 3
        formatInterval(calculateNextInterval(data, 4))  // 4
    ];
    
    for (let i = 1; i <= 4; i++) {
        const lbl = document.getElementById(`srs-time-${i}`);
        if (lbl) lbl.textContent = times[i-1];
    }
}

function calculateNextInterval(data, rating) {
    if (rating === 1) return 0;
    
    let interval = data.interval;
    let ease = data.ease;
    
    if (rating === 2) {
        interval = interval === 0 ? 0.5 : interval * 1.2;
    } else if (rating === 3) {
        interval = interval === 0 ? 1 : interval * ease;
    } else if (rating === 4) {
        interval = interval === 0 ? 4 : interval * ease * 1.3;
    }
    return interval;
}

function formatInterval(days) {
    if (days === 0) return '< 1p';
    if (days < 1) return Math.round(days * 24) + 'h';
    return Math.round(days) + ' ngày';
}

function nextCard() {
    currentCardIndex = (currentCardIndex + 1) % deckToStudy.length;
    updateFlashcardUI();
}

function prevCard() {
    currentCardIndex = (currentCardIndex - 1 + deckToStudy.length) % deckToStudy.length;
    updateFlashcardUI();
}

function processSRS(rating) {
    const card = document.getElementById('flashcard');
    const wordIdx = deckToStudy[currentCardIndex];
    const combinedVocab = getCombinedVocab();
    const word = combinedVocab[wordIdx].word.replace(/'/g, "\\'");
    
    let data = srsData[word] || { ease: 2.5, interval: 0, reps: 0 };
    
    // Update interval
    data.interval = calculateNextInterval(data, rating);
    
    // Update ease
    if (rating === 1) data.ease = Math.max(1.3, data.ease - 0.2);
    else if (rating === 2) data.ease = Math.max(1.3, data.ease - 0.15);
    else if (rating === 4) data.ease += 0.15;
    
    // Reps
    if (rating === 1) data.reps = 0;
    else data.reps++;
    
    // Next review date
    data.nextReview = Date.now() + data.interval * 24 * 60 * 60 * 1000;
    
    srsData[word] = data;
    saveFlashcardState();
    
    // Animation
    card.style.transition = 'all 0.3s ease';
    if (rating >= 3) {
        if (typeof playEffectAudio === 'function') playEffectAudio('correct'); // Optional sound
        if (typeof addXP === 'function') addXP(5);
        card.style.transform = 'translateX(100%) rotate(10deg)';
        card.style.opacity = '0';
    } else {
        card.style.transform = 'translateX(-100%) rotate(-10deg)';
        card.style.opacity = '0';
    }

    setTimeout(() => {
        // Nếu chọn "Chưa nhớ" (rating 1) hoặc interval < 1 ngày, giữ lại để ôn tiếp
        if (data.interval < 1) {
            currentCardIndex = (currentCardIndex + 1) % deckToStudy.length;
        } else {
            deckToStudy.splice(currentCardIndex, 1);
            if (currentCardIndex >= deckToStudy.length) {
                currentCardIndex = 0;
            }
        }

        card.style.transition = 'none';
        card.style.transform = 'translateX(0) rotate(0)';
        
        // Check completion
        if (deckToStudy.length === 0) {

            if (typeof addXP === 'function') addXP(50);
            updateStats();
            document.getElementById('flashcard').innerHTML = '<div class="text-3xl font-bold text-funEmerald-500 dark:text-funEmerald-400 text-center flex flex-col items-center"><span>🎉</span><span>Hoàn thành mục tiêu hôm nay!</span></div>';
            card.style.opacity = '1';
        } else {
            updateFlashcardUI();
            setTimeout(() => {
                card.style.transition = 'all 0.3s ease';
                card.style.opacity = '1';
            }, 50);
        }
    }, 300);
}

function saveFlashcardState() {
    localStorage.setItem('srsData', JSON.stringify(srsData));
    updateStats();
}

function updateStats() {
    let remembered = 0;
    let review = 0;
    
    let targetIndices = [];
    const combinedVocab = getCombinedVocab();
    const selectedWordsJSON = localStorage.getItem('selectedFlashcards');
    if (selectedWordsJSON) {
        const selectedWords = JSON.parse(selectedWordsJSON);
        combinedVocab.forEach((item, index) => {
            const safeWord = item.word.replace(/'/g, "\\'");
            if (selectedWords.includes(safeWord)) {
                targetIndices.push(index);
            }
        });
    } else {
        targetIndices = [];
    }
    
    const now = Date.now();
    targetIndices.forEach(i => {
        const word = combinedVocab[i].word.replace(/'/g, "\\'");
        const data = srsData[word];
        
        if (!data) {
            review++; // New card
        } else if (data.interval >= 1) {
            remembered++;
        } else if (data.nextReview <= now || data.interval < 1) {
            review++;
        }
    });

    const remaining = targetIndices.length - remembered - review;

    document.getElementById('fc-remembered').textContent = remembered;
    document.getElementById('fc-remaining').textContent = remaining > 0 ? remaining : 0;
    document.getElementById('fc-review').textContent = review;
}

function playAudio() {
    const wordIdx = deckToStudy[currentCardIndex];
    const combinedVocab = getCombinedVocab();
    const wordData = combinedVocab[wordIdx];

    if (wordData.audio) {
        const audio = new Audio(wordData.audio);
        audio.play().catch(e => {
            console.warn("Audio file failed to play, falling back to speech synthesis");
            speakText(wordData.word);
        });
    } else {
        speakText(wordData.word);
    }
}

function speakText(text) {
    if ('speechSynthesis' in window) {
        const utterance = new SpeechSynthesisUtterance(text);
        utterance.lang = 'en-US';
        utterance.rate = 0.9;
        window.speechSynthesis.speak(utterance);
    } else {
        alert("Trình duyệt của bạn không hỗ trợ phát âm.");
    }
}
