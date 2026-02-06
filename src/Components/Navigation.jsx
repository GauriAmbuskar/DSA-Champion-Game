import React from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import "../App.css";
const Navigation = () => {
  const nvg = useNavigate();

  const user = localStorage.getItem("dsa_logged_in");

  const handleLogout = () => {
    localStorage.removeItem("dsa_logged_in");
    nvg("/login");
  };

  const handleLogin = () => {
    nvg("/login");
  };

  return (
    <nav className="container">
      <div className="logo">
       <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTEMeV8_gq8fq8h4I097ywPpdbHjQWn592ozg&s" alt="logo" />
        </div>

      <ul>
        <li>
          <button className="nav" onClick={() => nvg("/")}>
          Home
        </button>
        </li>
        <li>
          <button className="nav" onClick={() => nvg("/lobby")}>
          Lobby
        </button>
        </li>
        <li>
          <button className="nav" onClick={() => nvg("/game")}>
          Game Areana
        </button>
        </li>
        <li>
          <button className="nav" onClick={() => nvg("/vs")}>
          VS
        </button>
        </li>
      </ul>

      {/* <Link to="/login">
        <button className="nav" onClick={() => nvg("/login")}>
          Login
        </button>
      </Link> */}

      <div className="nav-right">
        {!user && (
          <button className="login-btn" onClick={handleLogin}>
            Login
          </button>
        )}

        {user && (
          <>
            <span className="player">👤 {user}</span>
            <button className="logout-btn" onClick={handleLogout}>
              Logout
            </button>
          </>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
