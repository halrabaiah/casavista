function switchLanguage(lang) {
    const elements = document.querySelectorAll('.lang');
    elements.forEach(el => el.style.display = 'none');
    const selectedLang = document.querySelectorAll(`.${lang}`);
    selectedLang.forEach(el => el.style.display = 'block');
}