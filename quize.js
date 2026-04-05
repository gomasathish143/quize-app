const startScreen = document.getElementById("start-screen");
const quizScreen = document.getElementById("quiz-screen");
const resultScreen = document.getElementById("result-screen");
const startButton = document.getElementById("start-btn");
const questionText = document.getElementById("question-text");
const answersContainer = document.getElementById("answers-container");
const currentQuestionSpan = document.getElementById("current-question");
const totalQuestionsSpan = document.getElementById("total-questions");
const scoreSpan = document.getElementById("score");
const finalScoreSpan = document.getElementById("final-score");
const maxScoreSpan = document.getElementById("max-score");
const resultMessage = document.getElementById("result-message");
const restartButton = document.getElementById("restart-btn");
const progressBar = document.getElementById("progress");
const quizQuestions = [
    {
        question: "Dr. A.P.J. Abdul Kalam was born in which state of India?",
        answers: [
            { text: "Kerala", correct: false },
            { text: "Karnataka", correct: false },
            { text: "Tamil Nadu", correct: true },
            { text: "Andhra Pradesh", correct: false }
        ]
    },
    {
        question: "What is Dr. Abdul Kalam popularly known as?",
        answers: [
            { text: "Iron Man of India", correct: false },
            { text: "Missile Man of India", correct: true },
            { text: "Father of Nation", correct: false },
            { text: "Space Scientist", correct: false }
        ]
    },
    {
        question: "Which position did Dr. Abdul Kalam hold?",
        answers: [
            { text: "Prime Minister", correct: false },
            { text: "Chief Minister", correct: false },
            { text: "President of India", correct: true },
            { text: "Governor", correct: false }
        ]
    },
    {
        question: "In which year did Dr. Abdul Kalam become President of India?",
        answers: [
            { text: "1997", correct: false },
            { text: "2002", correct: true },
            { text: "2005", correct: false },
            { text: "2010", correct: false }
        ]
    },
    {
        question: "Which book was written by Dr. A.P.J. Abdul Kalam?",
        answers: [
            { text: "Wings of Fire", correct: true },
            { text: "Discovery of India", correct: false },
            { text: "India 2020", correct: false },
            { text: "Ignited Minds", correct: false }
        ]
    }
];
     
let currentQuestionIndex=0;
let score=0;
let answersDisabled=false;

totalQuestionsSpan.textContent=quizQuestions.length;
maxScoreSpan.textContent=quizQuestions.length;

startButton.addEventListener("click",startQuiz);
restartButton.addEventListener("click",restartQuiz);

function startQuiz(){
    currentQuestionIndex=0;
    scoreSpan.textContent=0;

    startScreen.classList.remove("active");
    quizScreen.classList.add("active");

    showQuestion()
}
function showQuestion(){
    answersDisabled=false
    const currentQuestion=quizQuestions[currentQuestionIndex];
    currentQuestionSpan.textContent=currentQuestionIndex + 1;
    const progressPercent = ((currentQuestionIndex + 0) / quizQuestions.length) * 100;
    progressBar.style.width=progressPercent +"%" ;
    questionText.textContent=currentQuestion.question;
    answersContainer.innerHTML="";
    currentQuestion.answers.forEach(answer=>{
        const button=document.createElement("button");
        button.textContent=answer.text;
        button.classList.add("answer-btn");
        button.dataset.correct=answer.correct;
        button.addEventListener("click",selectAnswer);
        answersContainer.appendChild(button);
    });
}
function selectAnswer(event){
    if(answersDisabled)return;
    answersDisabled=true;
    const selectedButton = event.target;
    const isCorrect=selectedButton.dataset.correct==="true";
    Array.from(answersContainer.children).forEach((button)=>{
        if(button.dataset.correct==="true"){
            button.classList.add("correct");
        }else if(button===selectedButton){
            button.classList.add("incorrect");
        }
    });
    if(isCorrect){
    score++;  
    scoreSpan.textContent = score;
}
    
    setTimeout(() => {
    currentQuestionIndex++;
    if(currentQuestionIndex < quizQuestions.length){
        showQuestion();
    } else {
        showResults();
    }
}, 1000);
}
function showResults(){
    quizScreen.classList.remove("active");
    resultScreen.classList.add("active");
    finalScoreSpan.textContent=score;
    
    const percentage = (score / quizQuestions.length) * 100;

if(percentage === 100){
    resultMessage.textContent = "Excellent!";
} else if(percentage >= 60){
    resultMessage.textContent = "Good Job!";
} else {
    resultMessage.textContent = "Try Again!";
}
}
function restartQuiz(){
    resultScreen.classList.remove("active");
    startQuiz();
}