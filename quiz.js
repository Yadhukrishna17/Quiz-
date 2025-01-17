const quizData = [
    {
        question: "What does CSS stand for?",
    a: "Central Style Sheets",
    b: "Cascading Style Sheets",
    c: "Cascading Simple Sheets",
    d: "Cars SUVs Sailboats",
    correct: "b",
    },
    {

    question: "which language runs in a web browser?",
    a: "java",
    b: "c",
    c: "python",
    d: "javascript",
    correct:"d",
},

{

question: "What does HTML stand for?",
a: "Hypertext Markup Language",
b:"Hypertext Markdown Language", 
c: "Hyperloop Machine Language",
d: "Helicopters Terminals Motorboats Lamborginis",
correct: "a",
},
{
question: "What year was JavaScript launched?",
a: "1996",
c: "1994",
b: "1995",
d: "None of above",
correct: "b",
},
];

const quiz = document.getElementById("quiz");
const answerElements = document.querySelectorAll(".answer");
const questionElement = document.getElementById("question");
const a_text = document.getElementById("atext");
const b_text = document.getElementById("btext");
const c_text = document.getElementById("ctext");
const d_text = document.getElementById("dtext");
const submitButton = document.getElementById("submit");

let currentQuiz = 0
let score = 0


const deselectAnswers = () => {
answerElements.forEach((answer) => (answer.checked = false));
};
const getSelected = () => {
let answer;
answerElements.forEach((answerElement) => {
if (answerElement.checked) answer = answerElement.id;
});
return answer;
};
const loadQuiz = () => {
deselectAnswers();
const currentQuizData = quizData[currentQuiz];
questionElement.innerText = currentQuizData.question;
a_text.innerText = currentQuizData.a;
b_text.innerText = currentQuizData.b;
c_text.innerText = currentQuizData.c;
d_text.innerText = currentQuizData.d;
};
loadQuiz();
submitButton.addEventListener("click", () => {
const answer = getSelected();
if (answer) {
if (answer === quizData[currentQuiz].correct) score++;
currentQuiz++;
if (currentQuiz < quizData.length) loadQuiz();
else {
quiz.innerHTML = `
<h2>You answered ${score}/${quizData.length} questions correctly</h2>
<button onclick="history.go(0)">Play Again</button>
` // location.reload() won't work in CodePen for security reasons;
}
}
});
