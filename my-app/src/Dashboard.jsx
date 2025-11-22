import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Dashboard.css";

export default function Dashboard() {
  const [menuOpen, setMenuOpen] = useState(false);

  const openMenu = () => setMenuOpen(true);
  const closeMenu = () => setMenuOpen(false);

  return (
    <>
      {/* OVERLAY */}
      <div
        className={`overlay ${menuOpen ? "show" : ""}`}
        onClick={closeMenu}
      ></div>

      {/* SIDEBAR MENU */}
      <aside className={`sidebar-menu ${menuOpen ? "open" : ""}`}>
        <div className="sidebar-header">
          <h2 className="sidebar-title">Student Hub Menu</h2>
          <button className="close-btn" onClick={closeMenu}>
            X
          </button>
        </div>

        <div className="sidebar-content">
          <Link to="/ProfileMenu" className="sidebar-link" onClick={closeMenu}>
            <span className="link-icon">👤</span> My Profile
          </Link>

          <Link
            to="/notifications"
            className="sidebar-link"
            onClick={closeMenu}
          >
            <span className="link-icon">🔔</span> Notifications
          </Link>

          <Link to="/settings" className="sidebar-link" onClick={closeMenu}>
            <span className="link-icon">⚙️</span> Settings
          </Link>

          <hr className="sidebar-divider" />

          <Link to="/login" className="sidebar-link logout-link">
            <span className="link-icon">🚪</span> Log Out
          </Link>
        </div>
      </aside>

      {/* MAIN DASHBOARD */}
      <div className="dashboard-container">
        {/* HEADER */}
{/* HEADER */}
<header className="top-header" style={{
  background: '#2c7da0',
  color: 'white',
  display: 'flex',
  justifyContent: 'space-between', 
  alignItems: 'center',
  padding: '15px 20px',
  position: 'relative',
  minHeight: '60px',
  width: '100%'
}}>
  <div className="left-menu" onClick={openMenu} style={{
    fontSize: '24px',
    cursor: 'pointer',
    color: 'white',
    zIndex: '1'
  }}>
    ☰
  </div>
  <h1 className="header-title" style={{
    margin: '0',
    fontSize: '20px',
    fontWeight: '600', 
    position: 'absolute',
    left: '50%',
    transform: 'translateX(-50%)',
    color: 'white'
  }}>
    Dashboard
  </h1>
  <Link to="/profile" className="settings-icon" style={{
    fontSize: '22px',
    textDecoration: 'none',
    color: 'white',
    zIndex: '1'
  }}>
    ⚙️
  </Link>
</header>

        {/* SEARCH */}
        <section className="search-section">
          <div className="search-input-wrapper">
            <span className="search-icon">🔍</span>
            <input type="search" placeholder="Search for friends..."/>
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
          <Link to="/chat" className="nav-icon">
            💬
          </Link>
          <Link to="/join-room" className="nav-icon">
            🔍
          </Link>
          <Link to="/dashboard" className="nav-icon active">
            🏠
          </Link>
          <Link to="/ProfileMenu" className="nav-icon">
            👤
          </Link>
          <Link to="/notifications" className="nav-icon">
            🔔
          </Link>
        </nav>
      </div>
    </>
  );
}

