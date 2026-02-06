import React, { useEffect, useState } from "react";
import Navigation from "../Navigation";
import { motion } from "framer-motion";
import "./BattleLobby.css";
import ProtectedPage from "../ProtectedPage";

export default function BattleLobby() {
  const [player, setPlayer] = useState("");
  const [leaderboard, setLeaderboard] = useState([]);

  useEffect(() => {
    const username = localStorage.getItem("dsa_logged_in");
    if (username) setPlayer(username);

    buildLeaderboard();
  }, []);

  const buildLeaderboard = () => {
    const scores = [];

    // loop through all localStorage keys
    for (let i = 0; i < localStorage.length; i++) {
      const key = localStorage.key(i);

      if (key.startsWith("dsa_progress_")) {
        const username = key.replace("dsa_progress_", "");
        const progress = JSON.parse(localStorage.getItem(key));

        if (!progress) continue;

        const totalScore =
          (progress.easy?.score || 0) +
          (progress.medium?.score || 0) +
          (progress.hard?.score || 0);

        scores.push({
          username,
          score: totalScore,
        });
      }
    }

    // sort by score DESC
    scores.sort((a, b) => b.score - a.score);

    setLeaderboard(scores);
  };

  return (
    <ProtectedPage>
      <Navigation />

      <div className="home-container">
        {/* Animated background */}
        <div className="home-bg"></div>

        {/* Floating text */}
        <div className="home-symbols">
          LEADERBOARD • DSA CHAMPIONS • RANKINGS
        </div>

        {/* Leaderboard Card */}
        <motion.div
          initial={{ opacity: 0, scale: 0.85 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="home-card"
        >
          <motion.h1
            initial={{ letterSpacing: "0.15em" }}
            animate={{ letterSpacing: "0.35em" }}
            transition={{ duration: 1 }}
            className="home-title"
          >
            🏆 LEADERBOARD
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="home-subtitle"
          >
            Welcome back, <span style={{ color: "#a78bfa" }}>{player}</span>
          </motion.p>

          {/* Leaderboard Table */}
          <div className="leaderboard">
            {leaderboard.length === 0 && (
              <p style={{ marginTop: "16px" }}>No scores yet</p>
            )}

            {leaderboard.map((u, index) => (
              <motion.div
                key={u.username}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
                className={`leaderboard-row ${
                  u.username === player ? "me" : ""
                }`}
              >
                <span className="rank">#{index + 1}</span>
                <span className="name">{u.username}</span>
                <span className="score">{u.score}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Bottom quote */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1 }}
          className="home-quote"
        >
          “Champions are ranked by consistency, not luck.”
        </motion.p>
      </div>
    </ProtectedPage>
  );
}
