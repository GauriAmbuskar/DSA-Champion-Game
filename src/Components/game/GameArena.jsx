import React from "react";
import Navigation from "../Navigation";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import "./GameArena.css";
import ProtectedPage from "../ProtectedPage";

const levels = [
  { name: "easy", total: 10 },
  { name: "medium", total: 10 },
  { name: "hard", total: 10 },
];

const GameArena = () => {
  const nvg = useNavigate();
  const user = localStorage.getItem("dsa_logged_in");

  const progressKey = `dsa_progress_${user}`;
  const progress = JSON.parse(localStorage.getItem(progressKey)) || {
    easy: { score: 0, total: 10, completed: false },
    medium: { score: 0, total: 10, completed: false },
    hard: { score: 0, total: 10, completed: false },
  };

  const handleEnter = (level) => {
    nvg(`/vs/${level}`);
  };

  const getButtonText = (solved, total) => {
    if (solved === 0) return "START";
    if (solved < total) return "RESUME";
    return "COMPLETED";
  };

  return (
    <ProtectedPage>
      <Navigation />

      <div className="arena-container">
        <div className="arena-bg"></div>

        <div className="arena-symbols">
          ARRAY • STACK • QUEUE • TREE • GRAPH • DP
        </div>

        <motion.h1
          initial={{ opacity: 0, scale: 0.85 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="arena-heading"
        >
          GAME ARENA
        </motion.h1>

        <div className="arena-sections">
          {levels.map((lvl, i) => {
            const solved = progress[lvl.name].score;
            const btnText = getButtonText(solved, lvl.total);

            return (
              <motion.div
                key={lvl.name}
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.2 }}
                className="arena-card"
              >
                <h2 className={`arena-title ${lvl.name}`}>
                  {lvl.name.toUpperCase()}
                </h2>

                <p className="arena-score">
                  Score: {solved}/{lvl.total}
                </p>

                <div className="arena-progress-bar">
                  <div
                    className={`arena-progress-fill ${lvl.name}`}
                    style={{ width: `${(solved / lvl.total) * 100}%` }}
                  />
                </div>

                {btnText !== "COMPLETED" ? (
                  <motion.button
                    whileHover={{ scale: 1.08 }}
                    whileTap={{ scale: 0.95 }}
                    className={`arena-btn ${lvl.name}`}
                    onClick={() => handleEnter(lvl.name)}
                  >
                    {btnText} ⚔️
                  </motion.button>
                ) : (
                  <p className="arena-complete">✔ COMPLETED</p>
                )}
              </motion.div>
            );
          })}
        </div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1 }}
          className="arena-quote"
        >
          “Choose your difficulty. Every level sharpens your mind.”
        </motion.p>
      </div>
    </ProtectedPage>
  );
};

export default GameArena;

