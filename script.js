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
        question: "What is the capital of France?",
        answers: [
            {
                text: "Paris",
                correct: true,
            },
            {
                text: "London",
                correct: false,
            },
            {
                text: "Rome",
                correct: false,
            },
            {
                text: "Berlin",
                correct: false,
            },
        ],
    },
    {
        question: "Who wrote the play 'Romeo and Juliet'?",
        answers: [
            {
                text: "William Shakespeare",
                correct: true,
            },
            {
                text: "Charles Dickens",
                correct: false,
            },
            {
                text: "George Orwell",
                correct: false,
            },
            {
                text: "Jane Austen",
                correct: false,
            },
        ],
    },
    {
        question: "What is the chemical symbol for water?",
        answers: [
            {
                text: "H2O",
                correct: true,
            },
            {
                text: "O2",
                correct: false,
            },
            {
                text: "CO2",
                correct: false,
            },
            {
                text: "H2SO4",
                correct: false,
            },
        ],
    },
    {
        question: "Who was the first President of the United States?",
        answers: [
            {
                text: "George Washington",
                correct: true,
            },
            {
                text: "Thomas Jefferson",
                correct: false,
            },
            {
                text: "Abraham Lincoln",
                correct: false,
            },
            {
                text: "John Adams",
                correct: false,
            },
        ],
    },
    {
        question: "What is the largest planet in our solar system?",
        answers: [
            {
                text: "Jupiter",
                correct: true,
            },
            {
                text: "Saturn",
                correct: false,
            },
            {
                text: "Earth",
                correct: false,
            },
            {
                text: "Mars",
                correct: false,
            },
        ],
    },
    {
        question: "What is the powerhouse of the cell?",
        answers: [
            {
                text: "Mitochondria",
                correct: true,
            },
            {
                text: "Nucleus",
                correct: false,
            },
            {
                text: "Ribosome",
                correct: false,
            },
            {
                text: "Golgi apparatus",
                correct: false,
            },
        ],
    },
    {
        question: "Which element has the atomic number 1?",
        answers: [
            {
                text: "Hydrogen",
                correct: true,
            },
            {
                text: "Oxygen",
                correct: false,
            },
            {
                text: "Carbon",
                correct: false,
            },
            {
                text: "Helium",
                correct: false,
            },
        ],
    },
    {
        question: "Who painted the Mona Lisa?",
        answers: [
            {
                text: "Leonardo da Vinci",
                correct: true,
            },
            {
                text: "Vincent van Gogh",
                correct: false,
            },
            {
                text: "Pablo Picasso",
                correct: false,
            },
            {
                text: "Claude Monet",
                correct: false,
            },
        ],
    },
    {
        question: "What is the longest river in the world?",
        answers: [
            {
                text: "Nile River",
                correct: true,
            },
            {
                text: "Amazon River",
                correct: false,
            },
            {
                text: "Yangtze River",
                correct: false,
            },
            {
                text: "Mississippi River",
                correct: false,
            },
        ],
    },
    {
        question: "What is the largest ocean on Earth?",
        answers: [
            {
                text: "Pacific Ocean",
                correct: true,
            },
            {
                text: "Atlantic Ocean",
                correct: false,
            },
            {
                text: "Indian Ocean",
                correct: false,
            },
            {
                text: "Arctic Ocean",
                correct: false,
            },
        ],
    },
    {
        question: "Which planet is known as the Red Planet?",
        answers: [
            {
                text: "Mars",
                correct: true,
            },
            {
                text: "Venus",
                correct: false,
            },
            {
                text: "Jupiter",
                correct: false,
            },
            {
                text: "Mercury",
                correct: false,
            },
        ],
    },
    {
        question: "Who developed the theory of relativity?",
        answers: [
            {
                text: "Albert Einstein",
                correct: true,
            },
            {
                text: "Isaac Newton",
                correct: false,
            },
            {
                text: "Galileo Galilei",
                correct: false,
            },
            {
                text: "Nikola Tesla",
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

