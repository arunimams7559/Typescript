
type Credentials = {
    username: string;
    password: string;
};

const validCredentials: Credentials = {
    username: "admin",
    password: "password123",
};


const loginForm = document.getElementById("loginForm") as HTMLFormElement;
const errorMessage = document.getElementById("errorMessage") as HTMLParagraphElement;


function handleLogin(event: Event): void {
    event.preventDefault();

   
    const username = (document.getElementById("username") as HTMLInputElement).value.trim();
    const password = (document.getElementById("password") as HTMLInputElement).value.trim();

   
    if (username === validCredentials.username && password === validCredentials.password) {
        window.location.href = "index.html"; 
    } else {
        errorMessage.textContent = "Invalid username or password. Please try again.";
    }
}

loginForm.addEventListener("submit", handleLogin);