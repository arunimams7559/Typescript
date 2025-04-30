
const VALID_USERNAME: string = "admin";
const VALID_PASSWORD: string = "password123";


const loginForm = document.getElementById("login-form") as HTMLFormElement;
const usernameInput = document.getElementById("username") as HTMLInputElement;
const passwordInput = document.getElementById("password") as HTMLInputElement;
const errorMessage = document.getElementById("error-message") as HTMLParagraphElement;


loginForm.addEventListener("submit", (event: Event): void => {
  event.preventDefault(); 

  const username: string = usernameInput.value.trim();
  const password: string = passwordInput.value.trim();

 
  if (username === VALID_USERNAME && password === VALID_PASSWORD) {
    
    window.location.href = "index.html";
  } else {
   
    errorMessage.textContent = "Invalid username or password. Please try again.";
  }
});