var number1 = document.getElementById("num1");
var number2 = document.getElementById("num2");
var addBtn = document.getElementById("addBtn");
var subBtn = document.getElementById("subBtn");
var mulBtn = document.getElementById("mulBtn");
var divBtn = document.getElementById("divBtn");
var printResult = document.getElementById("result");
function addNumbers() {
    var first = parseFloat(number1.value);
    var second = parseFloat(number2.value);
    // Check if the inputs are valid numbers
    if (isNaN(first) || isNaN(second)) {
        printResult.textContent = "Please enter valid numbers!";
        return;
    }
    var result = first + second;
    printResult.textContent = "The result is: ".concat(result);
}
function substractnumbers() {
    var first = parseFloat(number1.value);
    var second = parseFloat(number2.value);
    // Check if the inputs are valid numbers
    if (isNaN(first) || isNaN(second)) {
        printResult.textContent = "Please enter valid numbers!";
        return;
    }
    var result = first - second;
    printResult.textContent = "The result is: ".concat(result);
}
function multiplyNumbers() {
    var first = parseFloat(number1.value);
    var second = parseFloat(number2.value);
    if (isNaN(first) || isNaN(second)) {
        printResult.textContent = "Please enter valid numbers!";
        return;
    }
    var result = first * second;
    printResult.textContent = "The result is: ".concat(result);
}
function divideNumbers() {
    var first = parseFloat(number1.value);
    var second = parseFloat(number2.value);
    // Check if the inputs are valid numbers
    if (isNaN(first) || isNaN(second)) {
        printResult.textContent = "Please enter valid numbers!";
        return;
    }
    // Check for division by zero
    if (second === 0) {
        printResult.textContent = "Division by zero is not allowed!";
        return;
    }
    var result = first / second;
    printResult.textContent = "The result is: ".concat(result);
}
// Add event listeners to the buttons
addBtn.addEventListener("click", addNumbers);
subBtn.addEventListener("click", substractnumbers);
mulBtn.addEventListener("click", multiplyNumbers);
divBtn.addEventListener("click", divideNumbers);
