const questions = [
    // AUTOCONTROLE
    {
        question: "Como você reage a situações inesperadas?",
        theme: "autocontrole",
        options: [
            "Mantenho a calma e procuro soluções",
            "Fico ansioso(a), mas tento lidar",
            "Sinto muita dificuldade para lidar",
            "Evito lidar com a situação"
        ]
    },
    {
        question: "Você reserva um tempo para refletir antes de tomar decisões importantes?",
        theme: "autocontrole",
        options: [
            "Sempre",
            "Na maioria das vezes",
            "Raramente",
            "Nunca"
        ]
    },

    // ENERGIA
    {
        question: "Você tem uma rotina de sono regular?",
        theme: "energia",
        options: [
            "Sim, sempre",
            "Na maioria dos dias",
            "Raramente",
            "Nunca"
        ]
    },
    {
        question: "Quantas horas de sono você costuma ter por noite?",
        theme: "energia",
        options: [
            "Mais de 8 horas",
            "Entre 6 e 8 horas",
            "Entre 4 e 6 horas",
            "Menos de 4 horas"
        ]
    },

    // FOCO
    {
        question: "Você tem o hábito de planejar suas atividades do dia?",
        theme: "foco",
        options: [
            "Sempre planejo",
            "Planejo na maioria dos dias",
            "Raramente planejo",
            "Nunca planejo"
        ]
    },
    {
        question: "Você consegue finalizar tarefas sem procrastinar?",
        theme: "foco",
        options: [
            "Sim, sempre",
            "Na maioria das vezes",
            "Às vezes",
            "Raramente"
        ]
    },

    // ALIMENTAÇÃO
    {
        question: "Com que frequência você prepara suas próprias refeições?",
        theme: "alimentacao",
        options: [
            "Diariamente",
            "Algumas vezes por semana",
            "Raramente",
            "Nunca"
        ]
    },
    {
        question: "Quantas porções de frutas e vegetais você consome por dia?",
        theme: "alimentacao",
        options: [
            "Mais de 5 porções",
            "Entre 3 e 5 porções",
            "Menos de 3 porções",
            "Quase nunca como"
        ]
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