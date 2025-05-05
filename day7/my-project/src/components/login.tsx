import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./login.css";

const LoginPage: React.FC = () => {
  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [error, setError] = useState<string>("");
  const navigate = useNavigate();

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();

    try {
      // Get existing users from localStorage
      const existingUsers: { username: string; password: string }[] = JSON.parse(localStorage.getItem("users") || "[]");

      const user = existingUsers.find((user) => user.username === username);
      if (user && user.password === password) {
        localStorage.setItem("isAuthenticated", "true"); 
        localStorage.setItem("user", JSON.stringify({ username })); 
        setError("");
        alert("Login successful! Redirecting to the welcome page...");
        navigate("/welcome");
      } else {
        setError("Invalid username or password.");
      }
    } catch (error) {
      console.error("Error during login:", error);
      setError("An error occurred. Please try again.");
    }
  };

  return (
    <div className="login-container">
      <h2>Login</h2>
      <form onSubmit={handleLogin}>
        <div className="form-group">
          <label htmlFor="username">Username:</label>
          <input
            type="text"
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        {error && <p className="error-message">{error}</p>}
        <button type="submit" className="login-button">
          Login
        </button>
      </form>
      <p className="signup-link">
        Don't have an account? <Link to="/signup">Create a new account</Link>
      </p>
    </div>
  );
};

export default LoginPage;