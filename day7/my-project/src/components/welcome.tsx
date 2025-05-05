import React from "react";
import { useNavigate } from "react-router-dom";
import "./welcome.css";

const Welcome: React.FC = () => {
  const navigate = useNavigate();

  let username: string | null = null;
  try {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      username = JSON.parse(storedUser).username;
    }
  } catch (error) {
    console.error("Error parsing user data from localStorage:", error);
  }

  const handleLogout = () => {
    localStorage.removeItem("isAuthenticated");
    localStorage.removeItem("user");
    navigate("/");
  };

  return (
    <div className="welcome-page">
   
      <div className="welcome-container">
        <h1>Welcome, {username || "Guest"}!</h1>
        <p>You are successfully logged in.</p>
        <button className="logout-button" onClick={handleLogout}>
          Logout
        </button>
      </div>
    </div>
  );
};

export default Welcome;