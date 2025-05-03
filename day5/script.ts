
type Question = {
    question: string;
    answers: string[];
    correctAnswer: string;
};


type UserInput = string | number;


type Result = {
    score: number;
} & {
    userName: string;
};


function isResult(obj: any): obj is Result {
    return obj?.score !== undefined && obj?.userName !== undefined;
}


const questions: Question[] = [
    {
        question: "What is the chemical symbol for water?",
        answers: ["H2O", "O2", "CO2", "NaCl"],
        correctAnswer: "H2O",
    },
    {
        question: "What is the capital of India?",
        answers: ["Delhi", "Mumbai", "Chennai", "Kolkata"],
        correctAnswer: "Delhi",
    },
    {
        question: "What is the largest planet in our solar system?",
        answers: ["Earth", "Mars", "Jupiter", "Saturn"],
        correctAnswer: "Jupiter",
    },
];


let currentQuestionIndex = 0;
let score = 0;


const startButton = document.getElementById("start-btn") as HTMLButtonElement;
const quizContainer = document.getElementById("quiz") as HTMLDivElement;
const questionElement = document.getElementById("question") as HTMLParagraphElement;
const answersContainer = document.getElementById("answers") as HTMLDivElement;
const resultContainer = document.getElementById("result") as HTMLDivElement;
const scoreElement = document.getElementById("score") as HTMLParagraphElement;
const restartButton = document.getElementById("restart-btn") as HTMLButtonElement;


function startQuiz(): void {
    startButton.classList.add("hidden"); // Hide the start button
    quizContainer.classList.remove("hidden"); // Show the quiz container
    showQuestion(); // Display the first question
}

// Function to show a question
function showQuestion(): void {
    const currentQuestion = questions[currentQuestionIndex];
    questionElement.textContent = currentQuestion.question;

   
    answersContainer.innerHTML = "";

    // Add answer buttons
    currentQuestion.answers.forEach((answer) => {
        const button = document.createElement("button");
        button.textContent = answer;
        button.className = "btn";
        button.addEventListener("click", () => selectAnswer(answer));
        answersContainer.appendChild(button);
    });
}

// Function to handle answer selection
function selectAnswer(selectedAnswer: string): void {
    const currentQuestion = questions[currentQuestionIndex];
    if (selectedAnswer === currentQuestion.correctAnswer) {
        score++;
    }

    currentQuestionIndex++;

    if (currentQuestionIndex < questions.length) {
        showQuestion();
    } else {
        showResult();
    }
}

// Function to show the result
function showResult(): void {
    quizContainer.classList.add("hidden");
    resultContainer.classList.remove("hidden");

    // Create a Result object
    const result: Result = { score, userName: "Quiz User" };

    // Use Type Guard to verify the Result object
    if (isResult(result)) {
        scoreElement.textContent = `${result.userName}, your score is ${result.score} / ${questions.length}`;
    }
}
//  restart the quiz
function restartQuiz(): void {
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