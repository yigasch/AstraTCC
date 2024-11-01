function talk(msg) {
    const utterance = new SpeechSynthesisUtterance(msg);
    speechSynthesis.speak(utterance);
}

function checkTalk() {
    const state = localStorage.getItem('talkBackOn');
    return state === 'true';
}

function readElementText(element) {
    const textToRead = element.innerText || element.alt || "";
    if (textToRead) talk(textToRead);
}

function initializeTalkBack() {
    if (checkTalk()) {
        document.addEventListener('click', event => {
            const target = event.target;
            if (target.matches('a, button, input[type="button"], p, h1, h2, h3, span, div, section')) {
                readElementText(target);
            }
        });
    }
}

function toggleTalkBack() {
    const talkBackToggle = document.getElementById('Talkback');
    
    if (!talkBackToggle) {
        console.error("Elemento Talkback não encontrado");
        return;
    }

    const isEnabled = checkTalk();
    talkBackToggle.checked = isEnabled;

    talkBackToggle.addEventListener('change', function () {
        const isChecked = this.checked;
        localStorage.setItem('talkBackOn', isChecked);

        if (isChecked) {
            talk("TalkBack ativado");
            initializeTalkBack();
        } else {
            speechSynthesis.cancel();
        }
    });
}

document.addEventListener('DOMContentLoaded', function () {
    toggleTalkBack();
    initializeTalkBack();
});
