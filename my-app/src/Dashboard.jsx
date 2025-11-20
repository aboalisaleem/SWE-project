import React from "react";
import { Link } from "react-router-dom";
import "./Dashboard.css";

export default function Dashboard() {
  return (
    <div className="dashboard-container">
      {/* HEADER */}
      <header className="top-header">
        <div className="left-menu">☰</div>
        <h1 className="header-title">Dashboard</h1>
        <Link to="/profile" className="settings-icon">⚙️</Link>
      </header>

      {/* SEARCH */}
      <section className="search-section">
        <p className="search-label">Search for friends</p>
        <div className="search-input-wrapper">
          <span className="search-icon">🔍</span>
          <input type="search" placeholder="" />
        </div>
      </section>

      {/* MAIN FEATURE GRID */}
      <main className="feature-grid">
        <Link to="/todo" className="feature-card large-card">
          Organize Tasks
        </Link>

        <Link to="/join-room" className="feature-card large-card">
          Collaborate
        </Link>

        <div className="bottom-cards-container">
          <Link to="/kfupm-resources" className="feature-card small-card">
            <span className="card-icon">👑</span>
            KFUPM Resources
          </Link>

          <Link to="/resources" className="feature-card small-card">
            <span className="card-icon">🔍</span>
            Access Resources
          </Link>

          <Link to="/timer" className="feature-card small-card">
            <span className="card-icon">⏱️</span>
            Study Timer
          </Link>

          <Link to="/schedule" className="feature-card small-card">
            <span className="card-icon">➕</span>
            Create Schedule
          </Link>
        </div>
      </main>

      {/* BOTTOM NAV */}
      <nav className="bottom-nav">
        <Link to="/chat" className="nav-icon">💬</Link>
        <Link to="/resources" className="nav-icon">🔍</Link>
        <Link to="/dashboard" className="nav-icon active">🏠</Link>
        <Link to="/profile" className="nav-icon">👤</Link>
        <Link to="/notifications" className="nav-icon">🔔</Link>
      </nav>
    </div>
  );
}
