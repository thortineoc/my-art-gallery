const header_title = document.querySelector('.header__title');
const header_text = header_title.textContent;
const header_words = header_text.split('');
header_title.textContent = '';

for(let i=0; i<header_words.length; i++) {
    header_title.innerHTML += "<span>" + header_words[i] + "</span>";
}

const header_description = document.querySelector('.header__description');
let timer = setInterval(setClass, 50);
let char = 0;

function setClass() {
    let span = header_title.querySelectorAll('span')[char];
    span.classList.add('appear');
    char++;
    if(char === header_words.length) {
        clear();
        slideAndShow(header_description);
        return;
    }
}

function clear() {
    clearInterval(timer);
    timer = null;
}

function slideAndShow(text) {
    text.classList.add('slide');
}