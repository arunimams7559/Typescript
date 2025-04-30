var VALID_USERNAME = "admin";
var VALID_PASSWORD = "password123";
var loginForm = document.getElementById("login-form");
var usernameInput = document.getElementById("username");
var passwordInput = document.getElementById("password");
var errorMessage = document.getElementById("error-message");
loginForm.addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent form from refreshing the page
    var username = usernameInput.value.trim();
    var password = passwordInput.value.trim();
    if (username === VALID_USERNAME && password === VALID_PASSWORD) {
        window.location.href = "index.html";
    }
    else {
        errorMessage.textContent = "Invalid username or password. Please try again.";
    }
});
