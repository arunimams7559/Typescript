import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./signup.css";

const SignupPage: React.FC = () => {
  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [confirmPassword, setConfirmPassword] = useState<string>("");
  const [error, setError] = useState<string>("");
  const navigate = useNavigate();

  const handleSignup = (e: React.FormEvent) => {
    e.preventDefault();

    // Validate passwords match
    if (password !== confirmPassword) {
      setError("Passwords do not match.");
      return;
    }

    try {
      const existingUsers: { username: string; password: string }[] = JSON.parse(localStorage.getItem("users") || "[]");

      
      const userExists = existingUsers.some((user) => user.username === username);
      if (userExists) {
        setError("Username already exists.");
        return;
      }

      // Add new user
      const newUser = { username, password };
      const updatedUsers = [...existingUsers, newUser];
      localStorage.setItem("users", JSON.stringify(updatedUsers));

   
      setUsername("");
      setPassword("");
      setConfirmPassword("");
      setError("");
      alert("Sign up successful! You can now log in.");

     
      navigate("/login");
    } catch (error) {
      console.error("Error during signup:", error);
      setError("An error occurred. Please try again.");
    }
  };

  return (
    <div className="signup-container">
      <h2>Sign Up</h2>
      <form onSubmit={handleSignup}>
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
        <div className="form-group">
          <label htmlFor="confirmPassword">Confirm Password:</label>
          <input
            type="password"
            id="confirmPassword"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            required
          />
        </div>
        {error && <p className="error-message">{error}</p>}
        <button type="submit" className="signup-button">
          Sign Up
        </button>
      </form>
    </div>
  );
};

export default SignupPage;