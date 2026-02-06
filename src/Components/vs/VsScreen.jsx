import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useParams, useNavigate } from "react-router-dom";
import "./VsScreen.css";
import ProtectedPage from "../ProtectedPage";
import { QUESTIONS_BY_LEVEL } from "./questions";

export default function VsScreen() {
  const { level } = useParams(); // easy | medium | hard
  const navigate = useNavigate();
  const username = localStorage.getItem("dsa_logged_in") || "PLAYER";

  const [questions, setQuestions] = useState([]);
  useEffect(() => {
  if (!QUESTIONS_BY_LEVEL[level]) return;

  const shuffled = [...QUESTIONS_BY_LEVEL[level]]
    .sort(() => Math.random() - 0.5)
    .slice(0, 10);

  setQuestions(shuffled);
}, [level]);


  const [idx, setIdx] = useState(0);
  const [selected, setSelected] = useState(null);
  const [locked, setLocked] = useState(false);
  const [score, setScore] = useState(0);
  const [showPopup, setShowPopup] = useState(false);

  const progressKey = `dsa_progress_${username}`;

  /* 🚫 No section selected popup */
  useEffect(() => {
  if (!QUESTIONS_BY_LEVEL[level]) {
    setShowPopup(true);
  }
}, [level]);


  /* 🔐 Save progress */
  const updateProgress = (finalScore, completed = false) => {
    const stored =
      JSON.parse(localStorage.getItem(progressKey)) || {
        easy: { score: 0, total: 10, completed: false },
        medium: { score: 0, total: 10, completed: false },
        hard: { score: 0, total: 10, completed: false },
      };

    stored[level] = {
      score: finalScore,
      total: questions?.length || 0,
      completed,
    };

    localStorage.setItem(progressKey, JSON.stringify(stored));
  };

  /* ❌ Poster Popup Screen */
  if (!QUESTIONS_BY_LEVEL[level]) {
    return (
      <ProtectedPage>
        <div className="vs-container center-screen">
          <AnimatePresence>
            {showPopup && (
              <motion.div
                initial={{ opacity: 0, y: -120, rotate: -5 }}
                animate={{ opacity: 1, y: 0, rotate: 0 }}
                exit={{ opacity: 0, y: 120 }}
                transition={{ type: "spring", stiffness: 120 }}
                className="poster-wrapper"
              >

                {/* Poster */}
                <div className="poster-card">
                  <h2>⚠️ Difficulty Level Not Selected!</h2>
                  <p>Kindly select your difficulty level to continue</p>

                  <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    className="poster-btn"
                    onClick={() => navigate("/game")}
                  >
                    Back to Arena
                  </motion.button>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </ProtectedPage>
    );
  }

  if (!questions.length) return null;
  const q = questions[idx];

  const handleClick = (i) => {
    if (locked) return;

    setSelected(i);
    setLocked(true);

    let updatedScore = score;
    if (i === q.answer) {
      updatedScore += 1;
      setScore(updatedScore);
    }

    updateProgress(updatedScore);

    setTimeout(() => {
      setSelected(null);
      setLocked(false);
      setIdx((prev) => prev + 1);
    }, 1000);
  };

  /* 🏁 End Screen (80% rule) */
  if (idx >= questions.length) {
    const percentage = (score / questions.length) * 100;
    const isCleared = percentage >= 80;

    updateProgress(score, isCleared);

    return (
      <ProtectedPage>
        <div className="vs-container">
          <div className="victory-bg" />

          <motion.div
            initial={{ opacity: 0, scale: 0.7 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="victory-card"
          >
            <h1 className="victory-title">
              {isCleared ? `${level.toUpperCase()} CLEARED` : "TRY AGAIN"}
            </h1>

            <p className="victory-sub">
              Score: {score}/{questions.length} ({Math.round(percentage)}%)
            </p>

            {!isCleared && (
              <p className="victory-fail-msg">
                Time to work harder. Better luck next time 💪
              </p>
            )}

            <motion.button
              whileHover={{ scale: 1.08 }}
              whileTap={{ scale: 0.95 }}
              className="victory-btn"
              onClick={() => navigate("/game")}
            >
              Back to Arena →
            </motion.button>
          </motion.div>
        </div>
      </ProtectedPage>
    );
  }

  return (
    <ProtectedPage>
      <div className="vs-container">
        <div className="vs-bg" />

        <AnimatePresence mode="wait">
          <motion.div
            key={idx}
            initial={{ opacity: 0, scale: 0.85 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.6 }}
            className="vs-card"
          >
            <h1 className="vs-title">
              {username} ⚔️ {q.title}
            </h1>

            <p className="vs-question">{q.question}</p>

            <div className="vs-options">
              {q.options.map((op, i) => {
                let cls = "vs-option";
                if (locked) {
                  if (i === q.answer) cls += " correct";
                  else if (i === selected) cls += " wrong";
                }

                return (
                  <motion.button
                    key={i}
                    whileHover={!locked ? { scale: 1.07 } : {}}
                    whileTap={{ scale: 0.95 }}
                    className={cls}
                    onClick={() => handleClick(i)}
                  >
                    {op}
                  </motion.button>
                );
              })}
            </div>

            <p className="vs-progress">
              Question {idx + 1} / {questions.length}
            </p>
            <motion.button
            className="back-arena-btn"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => navigate("/game")}
            >
            ← Back to Arena
          </motion.button>
          </motion.div>
        </AnimatePresence>
      </div>
    </ProtectedPage>
  );
}
