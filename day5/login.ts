// Type for login credentials
type Credentials = {
    username: string;
    password: string;
};

// Hardcoded valid credentials (for demonstration purposes)
const validCredentials: Credentials = {
    username: "admin",
    password: "password123",
};

// Select DOM elements
const loginForm = document.getElementById("loginForm") as HTMLFormElement;
const errorMessage = document.getElementById("errorMessage") as HTMLParagraphElement;

// Function to handle login
function handleLogin(event: Event): void {
    event.preventDefault();

    // Get input values
    const username = (document.getElementById("username") as HTMLInputElement).value.trim();
    const password = (document.getElementById("password") as HTMLInputElement).value.trim();

    // Validate credentials
    if (username === validCredentials.username && password === validCredentials.password) {
        window.location.href = "index.html"; // Redirect to the index.html page
    } else {
        errorMessage.textContent = "Invalid username or password. Please try again.";
    }
}

// Attach event listener to the login form
loginForm.addEventListener("submit", handleLogin);