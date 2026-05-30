function initGrammar() {
    renderGrammarTopics(grammarTopics);
}

function renderGrammarTopics(topicsList) {
    const container = document.getElementById('grammar-accordion');
    container.innerHTML = '';

    if (topicsList.length === 0) {
        container.innerHTML = '<p class="text-center text-gray-500">Không tìm thấy chủ đề nào.</p>';
        return;
    }

    topicsList.forEach((topic, idx) => {
        const item = document.createElement('div');
        item.className = 'accordion-item bg-white dark:bg-slate-800 rounded-2xl shadow-sm border border-pastelPink-100 dark:border-slate-700 overflow-hidden transition-colors';

        // Chips HTML
        const chipsHTML = topic.chips.map(chip => 
            `<span class="bg-yellow-100 dark:bg-yellow-900/50 text-yellow-700 dark:text-yellow-400 text-xs px-2 py-1 rounded-md font-semibold mr-2">${chip}</span>`
        ).join('');

        item.innerHTML = `
            <div class="p-4 cursor-pointer hover:bg-funSky-50 dark:hover:bg-slate-700 transition flex justify-between items-center" onclick="toggleAccordion(this)">
                <div>
                    <h3 class="text-lg font-black text-gray-800 dark:text-white">${topic.title}</h3>
                    <div class="mt-2">${chipsHTML}</div>
                </div>
                <i data-lucide="chevron-down" class="accordion-icon w-6 h-6 text-funSky-400"></i>
            </div>
            <div class="accordion-content bg-funSky-50 dark:bg-slate-900/50 px-4 transition-colors">
                <div class="py-4 border-t border-funSky-200 dark:border-slate-700">
                    ${topic.contentHTML ? topic.contentHTML : `
                    <div class="bg-blue-50 dark:bg-blue-900/30 border-l-4 border-blue-400 dark:border-blue-600 p-3 rounded-r-lg mb-3">
                        <p class="text-xs text-blue-500 dark:text-blue-400 font-bold uppercase mb-1">Công thức</p>
                        <div class="font-mono text-blue-700 dark:text-blue-300 whitespace-pre-line">${topic.formula}</div>
                    </div>
                    <div class="bg-white dark:bg-slate-800 p-3 rounded-lg border border-gray-200 dark:border-slate-600 transition-colors">
                        <p class="text-xs text-gray-500 dark:text-gray-400 font-bold uppercase mb-1">Ví dụ</p>
                        <p class="text-gray-800 dark:text-gray-200 italic">"${topic.example}"</p>
                    </div>`}
                </div>
            </div>
        `;
        container.appendChild(item);
    });

    lucide.createIcons();
}

function toggleAccordion(element) {
    const item = element.parentElement;
    
    // Close others (optional, if we want strict accordion)
    // document.querySelectorAll('.accordion-item').forEach(el => {
    //     if (el !== item) el.classList.remove('open');
    // });

    item.classList.toggle('open');
}

function filterGrammar() {
    const query = document.getElementById('grammar-search').value.toLowerCase();
    const filtered = grammarTopics.filter(topic => 
        topic.title.toLowerCase().includes(query) || 
        topic.formula.toLowerCase().includes(query)
    );
    renderGrammarTopics(filtered);
}
