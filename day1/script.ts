const number1 = document.getElementById("num1") as HTMLInputElement;
const number2 = document.getElementById("num2") as HTMLInputElement;
const addBtn = document.getElementById("addBtn") as HTMLButtonElement;
const subBtn = document.getElementById("subBtn") as HTMLButtonElement;
const mulBtn = document.getElementById("mulBtn") as HTMLButtonElement; 
const divBtn = document.getElementById("divBtn") as HTMLButtonElement; // Added division button
const printResult = document.getElementById("result") as HTMLHeadingElement;

function addNumbers(): void {
  const first = parseFloat(number1.value);
  const second = parseFloat(number2.value);

  // Check if the inputs are valid numbers
  if (isNaN(first) || isNaN(second)) {
    printResult.textContent = "Please enter valid numbers!";
    return;
  }

  const result = first + second;
  printResult.textContent = `The result is: ${result}`; // Fixed template literal
}

function substractnumbers(): void {
  const first = parseFloat(number1.value);
  const second = parseFloat(number2.value);

  // Check if the inputs are valid numbers
  if (isNaN(first) || isNaN(second)) {
    printResult.textContent = "Please enter valid numbers!";
    return;
  }

  const result = first - second;
  printResult.textContent = `The result is: ${result}`; // Used template literal for consistency
}
function multiplyNumbers(): void {
  const first = parseFloat(number1.value);
  const second = parseFloat(number2.value);
  if (isNaN(first) || isNaN(second)) {
    printResult.textContent = "Please enter valid numbers!";
    return;
  }
  const result = first * second;
  printResult.textContent = `The result is: ${result}`; // Used template literal for consistency
  }

  function divideNumbers(): void {
    const first = parseFloat(number1.value);
    const second = parseFloat(number2.value);
  
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
  
    const result = first / second;
    printResult.textContent = `The result is: ${result}`;
  }

// Add event listeners to the buttons
addBtn.addEventListener("click", addNumbers);
subBtn.addEventListener("click", substractnumbers);
mulBtn.addEventListener("click", multiplyNumbers); 
divBtn.addEventListener("click", divideNumbers); // Added event listener for division button