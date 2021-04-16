var text = document.querySelector('.fancy')
var stringtext = text.textContent;
var splittext = stringtext.split("")
text.textContent = ""
for (let i = 0; i < splittext.length; i++) {
    text.innerHTML += "<span>" + splittext[i] + "</span>"
}
let char = 0;
let timer = setInterval(ontick, 50)

function ontick() {
    const span = text.querySelectorAll('span')[char]
    span.classList.add('fade')
    char++;
    if (char === splittext.length) {
        complete();
        return;
    }
}

function complete() {
    clearInterval(timer)
    timer = null;
}