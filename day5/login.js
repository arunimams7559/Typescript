// Hardcoded valid credentials (for demonstration purposes)
var validCredentials = {
    username: "admin",
    password: "password123"
};
// Select DOM elements
var loginForm = document.getElementById("loginForm");
var errorMessage = document.getElementById("errorMessage");
// Function to handle login
function handleLogin(event) {
    event.preventDefault();
    // Get input values
    var username = document.getElementById("username").value.trim();
    var password = document.getElementById("password").value.trim();
    // Validate credentials
    if (username === validCredentials.username && password === validCredentials.password) {
        window.location.href = "index.html"; // Redirect to the index.html page
    }
    else {
        errorMessage.textContent = "Invalid username or password. Please try again.";
    }
}
// Attach event listener to the login form
loginForm.addEventListener("submit", handleLogin);
