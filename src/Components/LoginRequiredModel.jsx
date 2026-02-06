import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import "./LoginRequiredModel.css";

const LoginRequiredModal = () => {
  const navigate = useNavigate();

  return (
    <div className="login-overlay">
      <motion.div
        className="login-modal"
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
      >
        <h2>Login Required</h2>
        <p>Kindly login first to continue</p>

        <button onClick={() => navigate("/login")}>
          Go to Login
        </button>
      </motion.div>
    </div>
  );
};

export default LoginRequiredModal;
