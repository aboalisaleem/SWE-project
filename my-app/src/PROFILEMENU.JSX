import React from "react";
import { Link } from "react-router-dom";
import "./ProfileMenu.css";

function ProfileMenu() {
  return (
    <div className="profile-container">

      {/* PAGE HEADER */}
      <header className="page-header">
        <Link to="/dashboard" className="back-arrow">&larr;</Link>
      </header>

      {/* USER INFO SECTION */}
      <div className="profile-info">
        <div className="profile-avatar">👤</div>
        <h1 className="profile-heading">Profile</h1>
        <p className="profile-name">Mohammed</p>
      </div>

      {/* NAVIGATION LIST */}
      <nav className="nav-list" role="navigation">

        <Link to="/profile">
          <div className="list-item-group">
            <span className="item-icon">📄</span>
            <span className="item-label">Personal Information</span>
          </div>
          <span className="action-arrow">&gt;</span>
        </Link>

        <Link to="/notifications">
          <div className="list-item-group">
            <span className="item-icon">🔔</span>
            <span className="item-label">Notification</span>
          </div>
          <span className="action-arrow">&gt;</span>
        </Link>

        <Link to="/settings">
          <div className="list-item-group">
            <span className="item-icon">⚙️</span>
            <span className="item-label">Settings</span>
          </div>
          <span className="action-arrow">&gt;</span>
        </Link>

        <Link to="/login" className="logout-link">
          <div className="list-item-group">
            <span className="item-icon logout-icon">🔒</span>
            <span className="item-label logout-label">Log Out</span>
          </div>
          <span className="action-arrow">&gt;</span>
        </Link>

      </nav>

      {/* BOTTOM NAVIGATION */}
      <nav className="bottom-nav">
        <Link to="/chat" className="nav-icon">💬</Link>
        <Link to="/join-room" className="nav-icon">🔍</Link>
        <Link to="/dashboard" className="nav-icon">🏠</Link>
        <Link to="/profile-menu" className="nav-icon active">👤</Link>
        <Link to="/notifications" className="nav-icon">🔔</Link>
      </nav>

    </div>
  );
}

export default ProfileMenu;
