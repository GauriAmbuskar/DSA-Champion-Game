import { useState, useEffect } from "react";
 import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import Navigation from "../Navigation";
// import { motion } from "motion/react";
import "./Login.css";

export default function Login(){
  const [mode, setMode] = useState("login");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const nvg = useNavigate();

  useEffect(() => {
    setMessage("");
    setUsername("");
    setPassword("");
  }, [mode]);

  const handleSubmit = () => {
    const users = JSON.parse(localStorage.getItem("dsa_users") || "{}");
    if (!username || !password) {
      setMessage("⚠️ Enter all fields");
      return;
    }
    if (mode === "register") {
      if (users[username]) {
        setMessage("❌ Player already exists");
        return;
      }
      users[username] = { password, score: 0 };
      localStorage.setItem("dsa_users", JSON.stringify(users));
      setMessage("✅ Registered successfully! Switch to login.");
    } else {
      if (!users[username] || users[username].password !== password) {
        setMessage("❌ Invalid credentials");
        return;
      }
      localStorage.setItem("dsa_logged_in", username);
       setMessage("🏆 Login successful");
      setMessage(`🏆 Welcome back, ${username}!`);

    // ✅ Small delay so message is visible
    setTimeout(() => {
      nvg("/lobby");
    }, 1200);
      
    }
  };
  

  return (
    <>
    <Navigation />
    <div className="min-h-screen flex items-center justify-center bg-black text-white">
      <motion.div className="absolute inset-0 login-bg" />
      <motion.div className="login-card">
        <h2 className="text-purple-400">DSA CHAMPION</h2>
        <input placeholder="Player ID" value={username} onChange={e => setUsername(e.target.value)} />
        <input type="password" placeholder="Secret Key" value={password} onChange={e => setPassword(e.target.value)} />
        {message && <p>{message}</p>}
        <button type="button" className="login" onClick={handleSubmit}>
          {mode === "login" ? "LOGIN" : "REGISTER"}
        </button>
        <p onClick={() => setMode(mode === "login" ? "register" : "login")}>
          {mode === "login" ? "Create Profile" : "Back to Login"}
        </p>
      </motion.div>
    </div>
    </>
  );
}