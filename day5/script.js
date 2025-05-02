// Type guard to check if an object is of type Result
function isResult(obj) {
    return (obj === null || obj === void 0 ? void 0 : obj.score) !== undefined && (obj === null || obj === void 0 ? void 0 : obj.userName) !== undefined;
}
var questions = [
    {
        question: "What is the chemical symbol for water?",
        answers: ["H2O", "O2", "CO2", "NaCl"],
        correctAnswer: "H2O"
    },
    {
        question: "What is the capital of India?",
        answers: ["Delhi", "Mumbai", "Chennai", "Kolkata"],
        correctAnswer: "Delhi"
    },
    {
        question: "What is the largest planet in our solar system?",
        answers: ["Earth", "Mars", "Jupiter", "Saturn"],
        correctAnswer: "Jupiter"
    },
];
// current question and score
var currentQuestionIndex = 0;
var score = 0;
var startButton = document.getElementById("start-btn");
var quizContainer = document.getElementById("quiz");
var questionElement = document.getElementById("question");
var answersContainer = document.getElementById("answers");
var resultContainer = document.getElementById("result");
var scoreElement = document.getElementById("score");
var restartButton = document.getElementById("restart-btn");
// Function to start the quiz
function startQuiz() {
    startButton.classList.add("hidden"); // Hide the start button
    quizContainer.classList.remove("hidden"); // Show the quiz container
    showQuestion(); // Display the first question
}
// Function to show a question
function showQuestion() {
    var currentQuestion = questions[currentQuestionIndex];
    questionElement.textContent = currentQuestion.question;
    answersContainer.innerHTML = "";
    // Add answer buttons
    currentQuestion.answers.forEach(function (answer) {
        var button = document.createElement("button");
        button.textContent = answer;
        button.className = "btn";
        button.addEventListener("click", function () { return selectAnswer(answer); });
        answersContainer.appendChild(button);
    });
}
// Function to handle answer selection
function selectAnswer(selectedAnswer) {
    var currentQuestion = questions[currentQuestionIndex];
    if (selectedAnswer === currentQuestion.correctAnswer) {
        score++;
    }
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        showQuestion();
    }
    else {
        showResult();
    }
}
// Function to show the result
function showResult() {
    quizContainer.classList.add("hidden");
    resultContainer.classList.remove("hidden");
    // Create a Result object
    var result = { score: score, userName: "Quiz User" };
    // Use Type Guard to verify the Result object
    if (isResult(result)) {
        scoreElement.textContent = "".concat(result.userName, ", your score is ").concat(result.score, " / ").concat(questions.length);
    }
}
//  restart the quiz
function restartQuiz() {
    currentQuestionIndex = 0;
    score = 0;
    resultContainer.classList.add("hidden");
    startButton.classList.remove("hidden");
}
// Example function to demonstrate union types and type narrowing
// function handleUserInput(input: UserInput): void {
//     if (typeof input === "string") {
//         console.log(`You entered a string: ${input}`);
//     } else if (typeof input === "number") {
//         console.log(`You entered a number: ${input}`);
//     }
// }
// // Call the function to demonstrate its behavior
// handleUserInput("Hello, Quiz!");
// handleUserInput(42);
// Event listeners
startButton.addEventListener("click", startQuiz);
restartButton.addEventListener("click", restartQuiz);
