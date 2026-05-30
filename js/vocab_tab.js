function getCombinedVocab() {
    const customJSON = localStorage.getItem('customVocab');
    if (customJSON) {
        return [...vocabularyData, ...JSON.parse(customJSON)];
    }
    return vocabularyData;
}

function initVocab() {
    renderVocabList(getCombinedVocab());
}

function renderVocabList(data) {
    const tbody = document.getElementById('vocab-list-body');
    tbody.innerHTML = '';

    if (data.length === 0) {
        tbody.innerHTML = '<tr><td colspan="7" class="text-center p-4 text-gray-500 font-bold">Không tìm thấy từ vựng nào.</td></tr>';
        return;
    }

    data.forEach((item, index) => {
        const tr = document.createElement('tr');
        tr.className = 'hover:bg-funSky-50 dark:hover:bg-slate-700 transition border-b border-gray-100 dark:border-slate-700';
        
        // Escape quotes to prevent HTML injection issues if any
        const safeWord = item.word.replace(/'/g, "\\'");
        
        tr.innerHTML = `
            <td class="p-4 text-center"><input type="checkbox" class="vocab-checkbox w-5 h-5 accent-funAmber-500 rounded cursor-pointer" value="${safeWord}"></td>
            <td class="p-4 font-black text-funSky-600 dark:text-funSky-400 text-lg">${item.word}</td>
            <td class="p-4 text-gray-500 dark:text-gray-400 font-medium">${item.phonetic}</td>
            <td class="p-4"><span class="bg-funAmber-100 dark:bg-funAmber-900/50 text-funAmber-600 dark:text-funAmber-400 px-3 py-1 rounded-full text-xs font-bold uppercase">${item.type}</span></td>
            <td class="p-4 font-bold text-gray-700 dark:text-gray-200">${item.meaning}</td>
            <td class="p-4 text-center tracking-widest">${getWordMasteryHTML(safeWord)}</td>
            <td class="p-4 text-center">
                <div class="flex justify-center items-center gap-2">
                    <button onclick="playVocabAudio('${safeWord}')" class="p-2 bg-funSky-100 dark:bg-slate-700 rounded-full hover:bg-funSky-200 dark:hover:bg-slate-600 text-funSky-600 dark:text-funSky-400 transition hover:scale-110">
                        <i data-lucide="volume-2" class="w-5 h-5"></i>
                    </button>
                    ${item.isCustom ? `
                    <button onclick="deleteCustomVocab('${safeWord}')" class="p-2 bg-red-100 dark:bg-red-900/50 rounded-full hover:bg-red-200 dark:hover:bg-red-900 text-red-600 dark:text-red-400 transition hover:scale-110">
                        <i data-lucide="trash-2" class="w-5 h-5"></i>
                    </button>
                    ` : ''}
                </div>
            </td>
        `;
        tbody.appendChild(tr);
    });

    lucide.createIcons();
}

function getWordMasteryHTML(wordText) {
    let srsDataJSON = localStorage.getItem('srsData');
    if (!srsDataJSON) return '<span class="text-gray-300">☆☆☆☆☆</span>';
    let srsData = JSON.parse(srsDataJSON);
    let wordData = srsData[wordText];
    if (!wordData) return '<span class="text-gray-300">☆☆☆☆☆</span>';
    
    let level = 1;
    if (wordData.interval >= 1) level = 2;
    if (wordData.interval >= 3) level = 3;
    if (wordData.interval >= 7) level = 4;
    if (wordData.interval >= 14) level = 5;
    
    return '⭐'.repeat(level) + '<span class="text-gray-300">' + '☆'.repeat(5 - level) + '</span>';
}

function deleteCustomVocab(wordText) {
    if (confirm(`Bạn có chắc muốn xóa từ "${wordText}"?`)) {
        let customJSON = localStorage.getItem('customVocab');
        if (customJSON) {
            let customList = JSON.parse(customJSON);
            customList = customList.filter(item => item.word.replace(/'/g, "\\'") !== wordText);
            localStorage.setItem('customVocab', JSON.stringify(customList));
            
            // Nếu từ này đang nằm trong flashcard, loại ra
            let selectedJSON = localStorage.getItem('selectedFlashcards');
            if (selectedJSON) {
                let selectedList = JSON.parse(selectedJSON);
                selectedList = selectedList.filter(w => w !== wordText);
                localStorage.setItem('selectedFlashcards', JSON.stringify(selectedList));
                if (typeof initFlashcards === 'function') initFlashcards();
            }
            
            initVocab();
            showToast("Đã xóa từ vựng!");
        }
    }
}

function filterVocabList() {
    const query = document.getElementById('vocab-search').value.toLowerCase();
    const combined = getCombinedVocab();
    const filtered = combined.filter(item => 
        item.word.toLowerCase().includes(query) || 
        item.meaning.toLowerCase().includes(query)
    );
    renderVocabList(filtered);
}

function playVocabAudio(wordText) {
    const combined = getCombinedVocab();
    const wordData = combined.find(w => w.word.replace(/'/g, "\\'") === wordText);
    
    if (wordData && wordData.audio) {
        const audio = new Audio(wordData.audio);
        audio.play().catch(e => {
            console.warn("Lỗi phát audio API, chuyển sang phát âm tự động");
            speakTextFallback(wordText);
        });
    } else {
        speakTextFallback(wordText);
    }
}

function speakTextFallback(text) {
    if ('speechSynthesis' in window) {
        const utterance = new SpeechSynthesisUtterance(text);
        utterance.lang = 'en-US';
        utterance.rate = 0.9;
        window.speechSynthesis.speak(utterance);
    } else {
        alert("Trình duyệt của bạn không hỗ trợ phát âm.");
    }
}

function toggleAllVocab(source) {
    const checkboxes = document.querySelectorAll('.vocab-checkbox');
    checkboxes.forEach(cb => {
        cb.checked = source.checked;
    });
}

function createCustomFlashcards() {
    const checkboxes = document.querySelectorAll('.vocab-checkbox:checked');
    if (checkboxes.length === 0) {
        alert("Vui lòng chọn ít nhất một từ vựng để tạo thẻ lật!");
        return;
    }
    const selectedWords = Array.from(checkboxes).map(cb => cb.value);
    
    // Lưu vào localStorage
    localStorage.setItem('selectedFlashcards', JSON.stringify(selectedWords));
    
    // Gọi hàm initFlashcards() từ js/flashcards.js để cập nhật lại danh sách flashcard
    if (typeof initFlashcards === 'function') {
        initFlashcards();
    }
    
    // Chuyển sang tab flashcards
    switchTab('flashcards');
}

// --- Thêm Từ Vựng Logic ---
function openAddVocabModal() {
    document.getElementById('add-vocab-modal').classList.remove('hidden');
    document.getElementById('new-word-input').value = '';
    document.getElementById('new-word-phonetic').value = '';
    document.getElementById('new-word-type').value = '';
    document.getElementById('new-word-meaning').value = '';
    document.getElementById('new-word-audio').value = '';
}

function closeAddVocabModal() {
    document.getElementById('add-vocab-modal').classList.add('hidden');
}

async function fetchWordData() {
    const word = document.getElementById('new-word-input').value.trim();
    if (!word) {
        alert("Vui lòng nhập từ tiếng Anh cần tìm!");
        return;
    }
    
    const btn = document.getElementById('fetch-word-btn');
    btn.textContent = "Đang tìm...";
    
    try {
        const response = await fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${word}`);
        if (!response.ok) throw new Error("Không tìm thấy từ");
        
        const data = await response.json();
        const entry = data[0];
        
        let phonetic = entry.phonetic || (entry.phonetics && entry.phonetics.find(p => p.text)?.text) || '';
        let audio = '';
        if (entry.phonetics) {
            const audioPhonetic = entry.phonetics.find(p => p.audio && p.audio.length > 0);
            if (audioPhonetic) audio = audioPhonetic.audio;
        }
        
        let type = '';
        if (entry.meanings && entry.meanings.length > 0) {
            type = entry.meanings[0].partOfSpeech || '';
            // Map common parts of speech
            if (type === 'noun') type = 'n';
            if (type === 'verb') type = 'v';
            if (type === 'adjective') type = 'adj';
            if (type === 'adverb') type = 'adv';
        }

        document.getElementById('new-word-phonetic').value = phonetic;
        document.getElementById('new-word-type').value = type;
        document.getElementById('new-word-audio').value = audio;
        
        alert("Đã lấy được phiên âm và file nghe! Vui lòng nhập thêm nghĩa tiếng Việt.");
    } catch (e) {
        alert("Không tìm thấy từ này trong từ điển. Bạn có thể nhập thủ công!");
    } finally {
        btn.textContent = "Tìm";
    }
}

function saveNewVocab() {
    const word = document.getElementById('new-word-input').value.trim();
    const phonetic = document.getElementById('new-word-phonetic').value.trim();
    const type = document.getElementById('new-word-type').value.trim();
    const meaning = document.getElementById('new-word-meaning').value.trim();
    const audio = document.getElementById('new-word-audio').value.trim();
    
    if (!word || !meaning) {
        alert("Từ tiếng Anh và Nghĩa tiếng Việt không được để trống!");
        return;
    }
    
    const newVocab = {
        word,
        phonetic: phonetic || `/${word}/`,
        type: type || 'n',
        meaning,
        audio,
        isCustom: true
    };
    
    let customJSON = localStorage.getItem('customVocab');
    let customList = customJSON ? JSON.parse(customJSON) : [];
    
    // Kiểm tra trùng
    if (customList.some(v => v.word.toLowerCase() === word.toLowerCase()) || 
        vocabularyData.some(v => v.word.toLowerCase() === word.toLowerCase())) {
        alert("Từ vựng này đã tồn tại!");
        return;
    }
    
    customList.push(newVocab);
    localStorage.setItem('customVocab', JSON.stringify(customList));
    
    closeAddVocabModal();
    initVocab(); // Render lại danh sách
    showToast("Thêm từ vựng thành công! 🎉");
}
