import React from "react";
import Navigation from "../Navigation";
import { motion } from "framer-motion";
import "./Home.css";
import { useNavigate } from "react-router-dom";
import ProtectedPage from "../ProtectedPage";


const Home = () => {
  const nvg = useNavigate();
  return (
    <>
      <Navigation /><div className="home-container">

      {/* Animated background */}
      <div className="home-bg"></div>

      {/* Floating symbols */}
      <div className="home-symbols">
        STACK • QUEUE • TREE • GRAPH • DP
      </div>

      {/* Main content */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
        className="home-card"
      >
        <motion.h1
          initial={{ letterSpacing: "0.2em" }}
          animate={{ letterSpacing: "0.45em" }}
          transition={{ duration: 1.2 }}
          className="home-title"
        >
          DSA CHAMPION
        </motion.h1>

        <p className="home-subtitle">
          Train • Battle • Conquer Algorithms
        </p>

        <motion.button
          whileHover={{ scale: 1.08 }}
          whileTap={{ scale: 0.95 }}
          className="enter-btn"
          onClick={() => nvg("/game")}
        >
          ENTER ARENA ⚔️
        </motion.button>
      </motion.div>

      {/* Bottom quote */}
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1 }}
        className="home-quote"
      >
        “Every algorithm mastered is a battle won.”
      </motion.p>
    </div>
    </>
  );
};

export default Home;

