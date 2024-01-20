// Add these variables at the top of your script.js
const timerElement = document.getElementById("timer");
let timeLeft = 15; // Set the initial time in seconds

// Modify the showQuestion() function
function showQuestion(){
    resetState();
    timeLeft = 15; // Reset the timer for each new question
    updateTimerDisplay();
    
    // ... (existing code)

    // Add this line to update the timer display
    setInterval(updateTimerDisplay, 1000);
}

// Add this function to update the timer display
function updateTimerDisplay() {
    timerElement.innerHTML = `Time left: ${timeLeft}s`;
    if (timeLeft === 0) {
        // Call a function to handle when time runs out
        handleTimeOut();
    } else {
        timeLeft--;
    }
}

// Add this function to handle what happens when time runs out
function handleTimeOut() {
    // Your logic when time runs out (e.g., marking the answer as incorrect)
    // ...
    // Move to the next question
    handleNextButton();
}

// Add these variables at the top of your script.js
const scoreElement = document.getElementById("score");

// Modify the startQuiz function
function startQuiz() {
    currentQuestionIndex = 0;
    score = 0;
    nextButton.innerHTML = "Next";
    showQuestion();
}



function showScore(){
    resetState();
    questionElement.innerHTML = `You scored ${score} out of ${questions.length}!`;
    nextButton.innerHTML = "Play Again";
    nextButton.style.display = "block";
    updateScoreDisplay();
}

// Add this function to update the score display
function updateScoreDisplay() {
    scoreElement.innerHTML = `Score: ${score}`;
}

// Add these variables at the top of your script.js
const introAnimation = document.getElementById("intro-animation");

// Modify the playIntroAnimation function
function playIntroAnimation() {
    introAnimation.style.display = "block";

    // Wait for the intro animation to finish
    setTimeout(() => {
        introAnimation.style.animation = "exitAnimation 1s ease-out forwards";

        // Wait for the exit animation to finish
        setTimeout(() => {
            introAnimation.style.display = "none";
            introAnimation.style.animation = ""; // Reset animation for future use

            // Start displaying the first question
            showQuestion();
        }, 1000); // Adjust the time to match the exit animation duration (in milliseconds)
    }, 2000); // Adjust the time to match the initial animation duration (in milliseconds)
}

// Call playIntroAnimation before starting the quiz
playIntroAnimation();








const questions = [
    {
        question: "What is the name of the mosque that was the first in Islam and was built by Prophet Muhammad in Medina?",
        answers: [
            {
                text: "Masjid Quba",
                correct: true,
            },
            {
                text: "Masjid al-Aqsa",
                correct: false,
            },
            {
                text: "Masjid an-Nabawi",
                correct: false,
            },
            {
                text: "Masjid al-Haram",
                correct: false,
            },
        ],
    },
    {
        question: "Where did Prophet Muhammad receive his first revelation from Allah, marking the beginning of his prophethood?",
        answers: [
            {
                text: "Mount Sinai",
                correct: false,
            },
            {
                text: "Mount Thawr",
                correct: false,
            },
            {
                text: "Mount Uhud",
                correct: false,
            },
            {
                text: "Mount Hira",
                correct: true,
            },
        ],
    },
    {
        question: "What is the name of the angel who brought revelations to Prophet Muhammad?",
        answers: [
            {
                text: "Angel Azrael",
                correct: false,
            },
            {
                text: "Angel Israfil",
                correct: false,
            },
            {
                text: "Angel Jibreel",
                correct: true,
            },
            {
                text: "Angel Mikail",
                correct: false,
            },
        ],
    },
    {
        question: "Which Surah in the Quran is named after a woman and primarily addresses the issues faced by women in society?",
        answers: [
            {
                text: "Surah Maryam",
                correct: false,
            },
            {
                text: "Surah An-Nisa",
                correct: true,
            },
            {
                text: "Surah Al-Mumtahanah",
                correct: false,
            },
            {
                text: "Surah Al-Mujadila",
                correct: false,
            },
        ],
    },
    {
        question: "Which Prophet is often referred to as Khalilullah meaning Friend of Allah?",
        answers: [
            {
                text: "Prophet Ibrahim",
                correct: true,
            },
            {
                text: "Prophet Nuh",
                correct: false,
            },
            {
                text: "Prophet Isma'il",
                correct: false,
            },
            {
                text: "Prophet Lut",
                correct: false,
            },
        ],
    },
    {
        question: "What is the name of the Islamic concept that refers to seeking Allah's guidance before making an important decision?",
        answers: [
            {
                text: "Taqwa",
                correct: false,
            },
            {
                text: " Ihsan",
                correct: false,
            },
            {
                text: "Istikhara",
                correct: true,
            },
            {
                text: " Tawakkul",
                correct: false,
            },
        ],
    },
    {
        question: "What is the name of the famous battle in which Ali ibn Abi Talib fought valiantly and earned the title Lion of Allah?",
        answers: [
            {
                text: "Battle of Uhud",
                correct: false,
            },
            {
                text: "Battle of Khaybar",
                correct: true,
            },
            {
                text: "Battle of Khandaq",
                correct: false,
            },
            {
                text: "Battle of Badr",
                correct: false,
            },
        ],
    },
    {
        question: " In Islamic history, what is the event known as The Battle of Siffin in which Ali ibn Abi Talib fought against the forces of Muawiyah?",
        answers: [
            {
                text: "The Battle of Uhud",
                correct: false,
            },
            {
                text: "The Battle of Badr",
                correct: false,
            },
            {
                text: "The Battle of Khandaq",
                correct: false,
            },
            {
                text: "The Battle of Siffin",
                correct: true,
            },
        ],
    },
    {
        question: "What is the title given to Prophet Muhammad, emphasizing his role as the final prophet in Islam?",
        answers: [
            {
                text: "Al-Mustafa",
                correct: true,
            },
            {
                text: "Al-Ameen",
                correct: false,
            },
            {
                text: " Al-Murtadha",
                correct: false,
            },
            {
                text: "Al-Mujtaba",
                correct: false,
            },
        ],
    },
    {
        question: " What is the commonly used name for the conflict between Ali ibn Abi Talib and Aisha?",
        answers: [
            {
                text: "Battle of the Jamal",
                correct: true,
            },
            {
                text: "Battle of Siffin",
                correct: false,
            },
            {
                text: "Battle of Badr",
                correct: false,
            },
            {
                text: " Battle of Uhud",
                correct: false,
            },
        ],
    },

    {
        question: "How many times the word Muhammad (SAW) as a name has been mentioned in Quran?",
        answers: [
            {
                text: "Four",
                correct: true,
            },
            {
                text: "Three",
                correct: false,
            },
            {
                text: "Six",
                correct: false,
            },
            {
                text: "Two",
                correct: false,
            },
        ],
    },
    {
        question: "At what age did Prophet Muhammad receive his first revelation from Allah through the angel Jibreel?",
        answers: [
            {
                text: "40 years",
                correct: true,
            },
            {
                text: "35 years",
                correct: false,
            },
            {
                text: "45 years",
                correct: false,
            },
            {
                text: "23 years",
                correct: false,
            },
        ],
    },
];

const questionElement = document.getElementById("question");
const answerButtons = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");

let currentQuestionIndex = 0;
let score = 0;

function startQuiz(){
    currentQuestionIndex = 0;
    score = 0;
    nextButton.innerHTML = "Next";
    showQuestion();
}

function showQuestion(){
    resetState();
    let currentQuestion = questions[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;
    questionElement.innerHTML = questionNo + "." + currentQuestion.question;

    currentQuestion.answers.forEach(answer => {
        const button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("btn");
        answerButtons.appendChild(button);
        if(answer.correct){
            button.dataset.correct = answer.correct;
        }
        button.addEventListener("click", selectAnswer);
    });
}

function resetState(){
    nextButton.style.display ="none";
    while(answerButtons.firstChild){
        answerButtons.removeChild(answerButtons.firstChild);
    }
}

function selectAnswer(e) {
    const selectedBtn = e.target;
    const isCorrect = selectedBtn.dataset.correct === "true";
    if (isCorrect) {
        selectedBtn.classList.add("correct");
        score++;
    } else {
        selectedBtn.classList.add("incorrect");
    }
    Array.from(answerButtons.children).forEach(button => {
        if(button.dataset.correct === "true"){
            button.classList.add("correct");
        }
        button.disabled = true;
    });
    nextButton.style.display = "block";
}

function showScore(){
    resetState();
    questionElement.innerHTML = `You scored ${score} out of ${questions.length}!`;
    nextButton.innerHTML = "Play Again";
    nextButton.style.display = "block";
}


function handleNextButton(){
    currentQuestionIndex++;
    if(currentQuestionIndex < questions.length){
        showQuestion();
    }else{
        showScore();
    }
}

nextButton.addEventListener("click", ()=>{
    if(currentQuestionIndex < questions.length){
        handleNextButton();
    }else{
        startQuiz();
    }
});

startQuiz();
