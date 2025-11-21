import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Notifications.css";

function Notifications() {
  const navigate = useNavigate();

  const [notifications, setNotifications] = useState([
    { sender: "Ali", message: "hello", read: false, time: "5 min ago" },
    { sender: "Mohammad", message: "send me when you finish the project....", read: false, time: "1 hour ago" },
    { sender: "KFUPM Registrar", message: "Course registration deadline is tomorrow.", read: true, time: "1 day ago" },
    { sender: "SWE 363 Group", message: "New file pinned: Project Phase 4 Plan.", read: true, time: "2 days ago" }
  ]);

  const markAsRead = (index) => {
    const updated = [...notifications];
    updated[index].read = true;
    setNotifications(updated);
  };

  return (
    <div className="notifications-container">
      
      <header className="page-header">
        <span className="back-link" onClick={() => navigate(-1)}>&larr;</span>
        <h1>Notification</h1>
      </header>

      <ul id="notification-list">
        {notifications.map((item, index) => (
          <li
            key={index}
            className={`notification-item ${item.read ? "read" : ""}`}
            onClick={() => markAsRead(index)}
          >
            <div className="notification-content">
              <span className={`status-dot ${item.read ? "read" : ""}`} />
              <div className="message-details">
                <div className="message-sender">{item.sender}</div>
                <div className="message-summary">{item.message}</div>
              </div>
            </div>
            <span className="item-arrow">&gt;</span>
          </li>
        ))}
      </ul>

      {/* Bottom nav for mobile */}
      <nav className="bottom-nav">
        <Link to="/chat" className="nav-icon">💬</Link>
        <Link to="/join-room" className="nav-icon">🔍</Link>
        <Link to="/dashboard" className="nav-icon">🏠</Link>
        <Link to="/profile" className="nav-icon">👤</Link>
        <Link to="/notifications" className="nav-icon active">🔔</Link>
      </nav>
    </div>
  );
}

export default Notifications;
