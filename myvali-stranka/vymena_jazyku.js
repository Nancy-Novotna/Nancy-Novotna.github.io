(function() {
    const buttons = document.querySelectorAll('.jazyky [data-lang]');
    function setLanguage(lang) {
        document.documentElement.lang = lang;
        localStorage.setItem('siteLang', lang);
        document.querySelectorAll('.story').forEach(el => {
            el.style.display = (el.getAttribute('lang') === lang) ? '' : 'none';
        });
    }
    buttons.forEach(b => {
        b.style.cursor = 'pointer';
        b.addEventListener('click', () => setLanguage(b.dataset.lang));
    });
    const saved = localStorage.getItem('siteLang') || document.documentElement.lang || 'cs';
    setLanguage(saved);
})();