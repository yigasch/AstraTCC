document.getElementById('Talkback').addEventListener('change', function() {
    talkBackOn = this.checked;
    localStorage.setItem('talkBackOn', talkBackOn);

    if (talkBackOn) {
        talk("TalkBack ativado");
    } else {
        speechSynthesis.cancel();
    }
});

window.addEventListener('load', function() {
    const boldState = localStorage.getItem('boldOn');
    const boldCheckbox = document.getElementById('negrito');
    boldCheckbox.checked = (boldState === 'true');

    boldCheckbox.addEventListener('change', function() {
        const isChecked = this.checked;
        setBold(isChecked);
        if (talkBackOn) {
            talk(isChecked ? "Negrito ativado" : "Negrito desativado");
        }
    });
});

window.addEventListener('load', function() {
    const smallButton = document.getElementById('pequeno');
    const mediumButton = document.getElementById('medio');
    const largeButton = document.getElementById('grande');

    function changeFontSizeAndTalk(size, msg) {
        changeFontSize(size);
        localStorage.setItem('fontSize', size);
        if (talkBackOn) {
            talk(msg);
        }
    }

    if (smallButton) {
        smallButton.addEventListener('click', function() {
            changeFontSizeAndTalk(17, "Tamanho em pequeno");
        });
    }

    if (mediumButton) {
        mediumButton.addEventListener('click', function() {
            changeFontSizeAndTalk(16, "Tamanho em médio");
        });
    }

    if (largeButton) {
        largeButton.addEventListener('click', function() {
            changeFontSizeAndTalk(20, "Tamanho em grande");
        });
    }
});
