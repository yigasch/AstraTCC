const questions = [
    {
        question: "Como você lida com estresse?",
        theme: "autocontrole",
        options: ["Pratico técnicas de relaxamento", "Converso com alguém de confiança", "Mantenho um diário pessoal", "Uso de distrações temporárias"]
    },

    {
        question: "Você toma decisões impulsivas?",
        theme: "autocontrole",
        options: ["Não", "Muito raramente", "Sim, às vezes", "Sim, frequentemente"]
    },

    {
        question: "Como voce se sente no seu dia a dia?",
        theme: "energia",
        options: ["Muito energetico", "Relativamente energetico", "Cansado", "Totalmente esgotado"]
    },

    {
        question: "O quão frequentemente voce se sente consado ou desanimado?",
        theme: "energia",
        options: ["Raramente", "Ocasionalmente", "frequentemente", "Muito frequentemente"]
    },

    {
        question: "Você consegue se concentrar facilmente?",
        theme: "foco",
        options: ["consigo me concentrar facilmente", "Na maioria das vezes consigo me concentrar", "Às vezes tenho dificuldade para me concentrar", "Raramente consigo me concentrar"]
    },

    {
        question: "Ao fazer uma tarefa chata ou desanimadora, você se destrai facilmente com seu telefone?",
        theme: "foco",
        options: ["Raramente", "Ocasionalmente", "frequentemente", "Muito frequentemente"]
    },

    {
        question: "Você considera a sua alimentação saldavel?",
        theme: "alimentacao",
        options: ["Sim considero", "Na maioria das vezes", "Raramente considero", "Não, não considero"]
    },

    {
        question: "O quão comumente você come porcarias? Ex: fastfood, doces e Etc...",
        theme: "alimentacao",
        options: ["Raramente", "Ocasionalmente", "frequentemente", "Muito frequentemente"]
    }
];

let Index = 0;
let scores = {
    autocontrole: 0,
    energia: 0,
    foco: 0,
    alimentacao: 0
};

function loadQuestion() {
    const question = questions[Index];
    document.getElementById('questions').textContent = question.question;

    const options = document.querySelectorAll('input[name="option"]');
    options.forEach((option, index) => {
        const label = document.querySelector(`label[for="option${index + 1}"]`);
        label.textContent = question.options[index];
        option.checked = false;
        document.getElementById('next').disabled = true;
    });
}

function nextQuestion() {
    const selectedOption = document.querySelector('input[name="option"]:checked');
    const score = parseInt(selectedOption.value);
    if (selectedOption) {
        const question = questions[Index];
        scores[question.theme] += score;
    }

    Index++;
    if (Index < questions.length) {
        loadQuestion();
    } else {
        localStorage.setItem('quizResults', JSON.stringify(scores));
        window.location.href = 'questionario_fim.html';
    }
    passprogressbar();
}

function enableNextButton() {
    const selectedOption = document.querySelector('input[name="option"]:checked'); 4

    document.getElementById('next').disabled = !selectedOption;
}

const progressbar = document.querySelector('.progressbar div')
function passprogressbar() {
    const bar = parseFloat(progressbar.style.width)
    progressbar.style.width = `${bar + 12.5}%`
}
window.onload = loadQuestion;