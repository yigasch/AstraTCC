let talkBackOn = false;

function talk(msg) {
    const utterance = new SpeechSynthesisUtterance(msg);
    speechSynthesis.speak(utterance);
}

function checkTalk() {
    const state = localStorage.getItem('talkBackOn');
    talkBackOn = (state === 'true');
}

function handleClick(event) {
    if (talkBackOn) {
        const textToRead = event.target.innerText || event.target.alt || "";
        talk(textToRead);
    }
}

function readPlaceHolder(event) {
    if (talkBackOn) {
        const placeText = event.target.placeholder;
        if (placeText) {
            talk(placeText);
        }
    }
}

window.addEventListener('load', function() {
    const inputs = document.querySelectorAll('input');
    
    inputs.forEach(input => {
        input.addEventListener('focus', readPlaceHolder);
    });
});

function setBold(isBold) {
    document.body.style.fontWeight = isBold ? 'bold' : 'normal';
    localStorage.setItem('boldOn', isBold);
}

function checkBold() {
    const boldState = localStorage.getItem('boldOn');
    document.body.style.fontWeight = (boldState === 'true') ? 'bold' : 'normal';
}

window.addEventListener('load', function() {
    checkTalk();
    checkBold();
    document.addEventListener('click', function(event) {
        const validTags = ['P', 'H1', 'H2', 'H3', 'BUTTON', 'A', 'DIV'];
        if (validTags.includes(event.target.tagName)) {
            handleClick(event);
        }
    });
});

function changeFontSize(size) {
    document.body.style.fontSize = size + 'px';
}

function setInitialFontSize() {
    const savedFontSize = localStorage.getItem('fontSize');
    document.body.style.fontSize = savedFontSize ? savedFontSize + 'px' : '16px';
}

window.addEventListener('load', setInitialFontSize);
