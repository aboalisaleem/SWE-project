import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Settings.css";

export default function Settings() {
  const navigate = useNavigate();

  // STATE
  const [darkMode, setDarkMode] = useState(false);
  const [fontSize, setFontSize] = useState("1"); // 0 small, 1 medium, 2 large

  const FONT_MAP = {
    "0": { class: "font-small", label: "Small" },
    "1": { class: "font-medium", label: "Medium" },
    "2": { class: "font-large", label: "Large" },
  };

  // Load preferences on mount
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    const prefersDark = savedTheme === "dark";
    setDarkMode(prefersDark);

    const savedFont = localStorage.getItem("fontSize") || "1";
    setFontSize(savedFont);
  }, []);

  // Apply theme when darkMode changes
  useEffect(() => {
    if (darkMode) {
      document.body.classList.add("dark-mode");
    } else {
      document.body.classList.remove("dark-mode");
    }
    localStorage.setItem("theme", darkMode ? "dark" : "light");
  }, [darkMode]);

  // Apply font size when changed
  useEffect(() => {
    document.body.classList.remove("font-small", "font-medium", "font-large");
    document.body.classList.add(FONT_MAP[fontSize].class);
    localStorage.setItem("fontSize", fontSize);
  }, [fontSize]);

  const handleLogout = () => {
    navigate("/login");
  };

  return (
    <div className="settings-container" id="app-body">
      <header className="page-header">
        <Link to="/profile-menu" className="back-link">
          &larr;
        </Link>
        <h1>Application Settings</h1>
      </header>

      <div className="settings-list">

        {/* DARK MODE */}
        <div className="setting-item">
          <span className="setting-label">
            <span className="setting-icon">🌙</span>
            Dark Mode
          </span>

          <label className="switch">
            <input
              type="checkbox"
              checked={darkMode}
              onChange={(e) => setDarkMode(e.target.checked)}
            />
            <span className="slider"></span>
          </label>
        </div>

        {/* FONT SIZE */}
        <div className="setting-item">
          <span className="setting-label">
            <span className="setting-icon">A</span>
            Font Size
          </span>

          <div className="font-slider-container">
            <span id="current-font-size" className="font-slider-display">
              {FONT_MAP[fontSize].label}
            </span>

            <input
              type="range"
              min="0"
              max="2"
              value={fontSize}
              id="font-size-slider"
              onChange={(e) => setFontSize(e.target.value)}
            />
          </div>
        </div>

        {/* PUSH NOTIFICATIONS */}
        <div className="setting-item">
          <span className="setting-label">
            <span className="setting-icon">🔔</span>
            Push Notifications
          </span>

          <label className="switch">
            <input type="checkbox" defaultChecked />
            <span className="slider"></span>
          </label>
        </div>

        {/* LOG OUT */}
        <div className="setting-item logout-item" onClick={handleLogout}>
          <span className="setting-label logout-text">
            <span className="setting-icon logout-icon">🚪</span>
            Log Out
          </span>

          <span className="logout-arrow">&gt;</span>
        </div>
      </div>
    </div>
  );
}
