const header_title = document.querySelector('.header__title');
const text = header_title.textContent;
const words = text.split('');
header_title.textContent = '';

for(let i=0; i<words.length; i++) {
    header_title.innerHTML += "<span>" + words[i] + "</span>";
}

let timer = setInterval(setClass, 50);
let char = 0;

function setClass() {
    let span = header_title.querySelectorAll('span')[char];
    span.classList.add('fade');
    char++;
    if(char === words.length) {
        clear();
        return;
    }
}

function clear() {
    clearInterval(timer);
    timer = null;
}
