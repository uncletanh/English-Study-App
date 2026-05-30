let currentQuizTopic = localStorage.getItem('currentQuizTopic') || null;
let currentQuizPage = parseInt(localStorage.getItem('currentQuizPage')) || 1;
const questionsPerPage = 5;
let quizProgress = {}; // { "TopicName": { score: number, answers: { qIndex: selectedOption } } }

function initQuiz() {
    shuffleQuizData();
    // Load progress
    const savedProgress = localStorage.getItem('quizProgress');
    if (savedProgress) {
        quizProgress = JSON.parse(savedProgress);
    }
    
    if (!currentQuizTopic || !quizTopicsList.includes(currentQuizTopic)) {
        currentQuizTopic = quizTopicsList[0];
        currentQuizPage = 1;
    }

    renderQuizTopics();
    loadQuizTopic(currentQuizTopic, true);
}

function renderQuizTopics() {
    const container = document.getElementById('quiz-topics');
    container.innerHTML = '';

    quizTopicsList.forEach(topic => {
        const isCompleted = quizProgress[topic] && quizProgress[topic].score !== undefined;
        
        const btn = document.createElement('button');
        btn.className = `px-4 py-2 rounded-full text-sm font-semibold transition shadow-sm border-2 ${
            topic === currentQuizTopic 
                ? 'bg-pastelPink-400 text-white border-pastelPink-400 dark:bg-pastelPink-500 dark:border-pastelPink-500' 
                : 'bg-white text-pastelPink-500 border-pastelPink-200 hover:bg-pastelPink-50 dark:bg-slate-700 dark:text-pastelPink-400 dark:border-slate-600 dark:hover:bg-slate-600'
        }`;
        
        btn.innerHTML = `${topic} ${isCompleted ? '<i data-lucide="check-circle" class="inline w-4 h-4 ml-1 text-green-300"></i>' : ''}`;
        btn.onclick = () => loadQuizTopic(topic);
        container.appendChild(btn);
    });
    
    lucide.createIcons();
}

function loadQuizTopic(topic, isReload = false) {
    currentQuizTopic = topic;
    localStorage.setItem('currentQuizTopic', topic);
    
    if (!isReload) {
        currentQuizPage = 1;
        localStorage.setItem('currentQuizPage', 1);
    }
    
    // Initialize progress for topic if not exists
    if (!quizProgress[topic]) {
        quizProgress[topic] = { answers: {} };
    }

    document.getElementById('quiz-results').classList.add('hidden');
    document.getElementById('quiz-container').classList.remove('hidden');
    document.getElementById('quiz-pagination').classList.remove('hidden');

    renderQuizTopics();
    renderQuizQuestions();
}

function renderQuizQuestions() {
    const container = document.getElementById('quiz-container');
    container.innerHTML = '';
    
    const questions = quizData[currentQuizTopic] || [];
    if (questions.length === 0) {
        container.innerHTML = '<p class="text-center text-gray-500">Chưa có dữ liệu cho chủ đề này.</p>';
        document.getElementById('quiz-pagination').innerHTML = '';
        return;
    }

    const startIndex = (currentQuizPage - 1) * questionsPerPage;
    const endIndex = Math.min(startIndex + questionsPerPage, questions.length);
    const pageQuestions = questions.slice(startIndex, endIndex);

    pageQuestions.forEach((q, idx) => {
        const globalIndex = startIndex + idx;
        const savedAnswer = quizProgress[currentQuizTopic].answers[globalIndex];
        const isAnswered = savedAnswer !== undefined;

        const qCard = document.createElement('div');
        qCard.className = 'bg-white dark:bg-slate-800 p-6 rounded-3xl shadow-md mb-6 border-2 border-pastelPink-100 dark:border-slate-700 transition-colors';
        
        let optionsHTML = '';
        if (q.type === 'text') {
            if (isAnswered) {
                const isCorrect = savedAnswer.toString().toLowerCase().trim() === q.answer.toString().toLowerCase().trim();
                const inputClass = isCorrect 
                    ? 'border-green-400 bg-green-50 text-green-700 dark:bg-green-900/40 dark:border-green-500 dark:text-green-300' 
                    : 'border-red-400 bg-red-50 text-red-700 dark:bg-red-900/40 dark:border-red-500 dark:text-red-300';
                optionsHTML = `
                    <div class="mb-4">
                        <input type="text" class="w-full p-4 rounded-xl border-2 font-medium ${inputClass}" value="${savedAnswer.replace(/"/g, '&quot;')}" disabled>
                        ${!isCorrect ? `<div class="mt-2 text-sm text-green-600 font-bold">Đáp án đúng: ${q.answer}</div>` : ''}
                    </div>
                `;
            } else {
                optionsHTML = `
                    <div class="mb-4 flex gap-2">
                        <input type="text" id="q-input-${globalIndex}" class="flex-1 p-4 rounded-xl border-2 border-pastelPink-200 dark:border-slate-600 dark:bg-slate-700 dark:text-white focus:border-pastelPink-400 outline-none font-medium transition-colors" placeholder="Nhập câu trả lời của bạn..." onkeydown="if(event.key === 'Enter') submitTextAnswer(${globalIndex})">
                        <button onclick="submitTextAnswer(${globalIndex})" class="bg-pastelPink-400 text-white px-6 rounded-xl font-bold hover:bg-pastelPink-500 transition shadow-sm">Kiểm tra</button>
                    </div>
                `;
            }
        } else {
            q.options.forEach((opt, optIdx) => {
                let btnClass = 'w-full text-left p-4 rounded-xl border-2 mb-2 transition font-medium ';
                
                if (isAnswered) {
                    if (optIdx === q.answer) {
                        btnClass += 'bg-green-100 border-green-400 text-green-700 dark:bg-green-900/40 dark:border-green-500 dark:text-green-300'; // Correct
                    } else if (optIdx === savedAnswer) {
                        btnClass += 'bg-red-100 border-red-400 text-red-700 dark:bg-red-900/40 dark:border-red-500 dark:text-red-300'; // Wrong chosen
                    } else {
                        btnClass += 'border-gray-200 text-gray-500 dark:border-slate-600 dark:text-gray-400 opacity-60'; // Neutral
                    }
                } else {
                    btnClass += 'border-pastelPink-200 hover:bg-pastelPink-50 text-gray-700 dark:text-gray-200 dark:border-slate-600 dark:hover:bg-slate-700 cursor-pointer';
                }

                optionsHTML += `<button class="${btnClass}" ${isAnswered ? 'disabled' : `onclick="selectAnswer(${globalIndex}, ${optIdx})"`}>
                    <span class="inline-block w-6 h-6 text-center rounded-full bg-white dark:bg-slate-700 border border-gray-300 dark:border-slate-500 mr-3 text-sm leading-5">${String.fromCharCode(65 + optIdx)}</span>
                    ${opt}
                </button>`;
            });
        }

        let explanationHTML = '';
        if (isAnswered) {
            explanationHTML = `
                <div class="mt-4 p-4 bg-blue-50 dark:bg-blue-900/30 rounded-xl border border-blue-100 dark:border-blue-800 text-blue-800 dark:text-blue-300 text-sm transition-colors">
                    <strong><i data-lucide="info" class="inline w-4 h-4 mr-1"></i> Giải thích:</strong> ${q.explanation}
                </div>
            `;
        }

        qCard.innerHTML = `
            <h3 class="text-lg font-bold text-gray-800 dark:text-white mb-4"><span class="text-pastelPink-400 dark:text-pastelPink-500">Câu ${globalIndex + 1}:</span> ${q.q}</h3>
            <div class="space-y-2">
                ${optionsHTML}
            </div>
            ${explanationHTML}
        `;
        container.appendChild(qCard);
    });

    lucide.createIcons();
    renderPagination(questions.length);
    checkTopicCompletion();
}

function selectAnswer(qIndex, optIdx) {
    const q = quizData[currentQuizTopic][qIndex];
    if (optIdx === q.answer) {
        if (typeof playEffectAudio === 'function') playEffectAudio('correct');
        if (typeof addXP === 'function') addXP(10);
    } else {
        if (typeof playEffectAudio === 'function') playEffectAudio('wrong');
    }

    quizProgress[currentQuizTopic].answers[qIndex] = optIdx;
    saveQuizProgress();
    renderQuizQuestions();
}

function submitTextAnswer(qIndex) {
    const inputEl = document.getElementById(`q-input-${qIndex}`);
    if (!inputEl || !inputEl.value.trim()) return;
    
    const q = quizData[currentQuizTopic][qIndex];
    const userAnswer = inputEl.value.trim();
    
    if (userAnswer.toLowerCase() === q.answer.toString().toLowerCase().trim()) {
        if (typeof playEffectAudio === 'function') playEffectAudio('correct');
        if (typeof addXP === 'function') addXP(10);
    } else {
        if (typeof playEffectAudio === 'function') playEffectAudio('wrong');
    }
    
    quizProgress[currentQuizTopic].answers[qIndex] = userAnswer;
    saveQuizProgress();
    renderQuizQuestions();
}

function renderPagination(totalQuestions) {
    const totalPages = Math.ceil(totalQuestions / questionsPerPage);
    const pagination = document.getElementById('quiz-pagination');
    pagination.innerHTML = '';

    if (totalPages <= 1) return;

    for (let i = 1; i <= totalPages; i++) {
        const btn = document.createElement('button');
        btn.className = `w-10 h-10 rounded-full font-bold transition shadow-sm ${
            i === currentQuizPage 
                ? 'bg-pastelPink-400 text-white dark:bg-pastelPink-500' 
                : 'bg-white text-pastelPink-400 hover:bg-pastelPink-100 dark:bg-slate-700 dark:text-pastelPink-400 dark:border-slate-600 dark:hover:bg-slate-600'
        }`;
        btn.textContent = i;
        btn.onclick = () => {
            currentQuizPage = i;
            localStorage.setItem('currentQuizPage', i);
            renderQuizQuestions();
            window.scrollTo({ top: 0, behavior: 'smooth' });
        };
        pagination.appendChild(btn);
    }
}

function checkTopicCompletion() {
    const questions = quizData[currentQuizTopic] || [];
    const answeredCount = Object.keys(quizProgress[currentQuizTopic].answers).length;
    
    if (questions.length > 0 && answeredCount === questions.length) {
        // Calculate score
        let score = 0;
        questions.forEach((q, idx) => {
            if (quizProgress[currentQuizTopic].answers[idx] === q.answer) {
                score++;
            }
        });
        
        quizProgress[currentQuizTopic].score = score;
        saveQuizProgress();
        
        // Show results
        document.getElementById('quiz-container').classList.add('hidden');
        document.getElementById('quiz-pagination').classList.add('hidden');
        
        const resultsDiv = document.getElementById('quiz-results');
        resultsDiv.classList.remove('hidden');
        document.getElementById('quiz-score').textContent = `${score}/${questions.length}`;
        

        
        // Update chips to show checkmark
        renderQuizTopics();
    }
}

function resetQuiz() {
    if(confirm('Bạn có muốn làm lại chủ đề này không?')) {
        quizProgress[currentQuizTopic] = { answers: {} };
        saveQuizProgress();
        currentQuizPage = 1;
        document.getElementById('quiz-results').classList.add('hidden');
        document.getElementById('quiz-container').classList.remove('hidden');
        document.getElementById('quiz-pagination').classList.remove('hidden');
        renderQuizTopics();
        renderQuizQuestions();
    }
}

function saveQuizProgress() {
    localStorage.setItem('quizProgress', JSON.stringify(quizProgress));
}

function shuffleQuizData() {
    for (const topic in quizData) {
        quizData[topic].forEach(q => {
            if (q._shuffled) return;
            
            let opts = q.options.map((text, index) => ({ text, isCorrect: index === q.answer }));
            
            for (let i = opts.length - 1; i > 0; i--) {
                const j = Math.floor(Math.random() * (i + 1));
                [opts[i], opts[j]] = [opts[j], opts[i]];
            }
            
            q.options = opts.map(o => o.text);
            q.answer = opts.findIndex(o => o.isCorrect);
            q._shuffled = true;
        });
    }
}
