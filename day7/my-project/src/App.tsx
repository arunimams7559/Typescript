import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./components/login";
import Signup from "./components/signup";
import Welcome from "./components/welcome";

const App: React.FC = () => {
  const isAuthenticated = (() => {
    try {
      return localStorage.getItem("isAuthenticated") === "true";
    } catch (error) {
      console.error("Error accessing localStorage:", error);
      return false;
    }
  })();

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route
          path="/welcome"
          element={isAuthenticated ? <Welcome /> : <Login />}
        />
        <Route path="*" element={<Login />} />
      </Routes>
    </Router>
  );
};

export default App;