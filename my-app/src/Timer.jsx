import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import "./Timer.css";

export default function Timer() {
  const [totalTimeSeconds, setTotalTimeSeconds] = useState(1500); // 25 min
  const [timeRemainingSeconds, setTimeRemainingSeconds] = useState(1500);
  const intervalRef = useRef(null);

  const [inputH, setInputH] = useState(0);
  const [inputM, setInputM] = useState(25);
  const [inputS, setInputS] = useState(0);

  function formatTime(seconds) {
    const h = Math.floor(seconds / 3600);
    const m = Math.floor((seconds % 3600) / 60);
    const s = seconds % 60;

    return h > 0
      ? `${String(h).padStart(2, "0")}:${String(m).padStart(2, "0")}:${String(
          s
        ).padStart(2, "0")}`
      : `${String(m).padStart(2, "0")}:${String(s).padStart(2, "0")}`;
  }

  function updateDisplay() {
    return formatTime(timeRemainingSeconds);
  }

  // Countdown logic
  useEffect(() => {
    if (timeRemainingSeconds <= 0 && intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
      alert("Time's up! Great job studying!");
    }
  }, [timeRemainingSeconds]);

  function startTimer() {
    if (!intervalRef.current && timeRemainingSeconds > 0) {
      intervalRef.current = setInterval(() => {
        setTimeRemainingSeconds((prev) => prev - 1);
      }, 1000);
    }
  }

  function stopTimer() {
    clearInterval(intervalRef.current);
    intervalRef.current = null;
  }

  function resetTimer() {
    stopTimer();
    setTimeRemainingSeconds(totalTimeSeconds);
  }

  function handleSetTimer(e) {
    e.preventDefault();

    const h = parseInt(inputH) || 0;
    const m = parseInt(inputM) || 0;
    const s = parseInt(inputS) || 0;
    const newTotal = h * 3600 + m * 60 + s;

    if (newTotal <= 0) {
      alert("Please enter a valid time.");
      return;
    }

    stopTimer();
    setTotalTimeSeconds(newTotal);
    setTimeRemainingSeconds(newTotal);
  }

  return (
    <div className="timer-container">

      <div className="top-header-bar"></div>

      <div className="timer-display">
        <div id="time-display" className="time-remaining">
          {updateDisplay()}
        </div>

        <div id="total-time-display" className="time-total">
          {Math.floor(totalTimeSeconds / 60)}min
        </div>
      </div>

      <div className="controls-group">
        <button id="reset-btn" onClick={resetTimer}>
          Reset
        </button>

        <button id="stop-btn" onClick={stopTimer}>
          Stop
        </button>

        <button id="start-btn" onClick={startTimer}>
          Start
        </button>
      </div>

      <form id="set-timer-form" className="new-timer-group" onSubmit={handleSetTimer}>
        <label>New:</label>

        <div className="time-input-fields">
          <input
            type="number"
            placeholder="H"
            min="0"
            max="99"
            value={inputH}
            onChange={(e) => setInputH(e.target.value)}
          />
          <input
            type="number"
            placeholder="Min"
            min="0"
            max="59"
            value={inputM}
            onChange={(e) => setInputM(e.target.value)}
          />
          <input
            type="number"
            placeholder="S"
            min="0"
            max="59"
            value={inputS}
            onChange={(e) => setInputS(e.target.value)}
          />
        </div>

        <button type="submit" id="set-time-btn">
          SET
        </button>
      </form>

      {/* Back Button */}
      <Link to="/dashboard" id="back-btn">
        Back
      </Link>
    </div>
  );
}
