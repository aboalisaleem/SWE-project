import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./Schedule.css";

const Schedule = () => {
  const weeks = [
    "Week of Dec 4 - Dec 10",
    "Week of Dec 11 - Dec 17",
    "Week of Dec 18 - Dec 24"
  ];

  const [currentWeekIndex, setCurrentWeekIndex] = useState(1);

  const handlePrev = () => {
    if (currentWeekIndex > 0) {
      setCurrentWeekIndex(currentWeekIndex - 1);
    }
  };

  const handleNext = () => {
    if (currentWeekIndex < weeks.length - 1) {
      setCurrentWeekIndex(currentWeekIndex + 1);
    }
  };

  useEffect(() => {
    const items = document.querySelectorAll(".schedule-item");
    items.forEach((item) => {
      const duration = parseInt(item.getAttribute("data-duration"));
      item.style.height = `calc(${duration} * 60px + ${duration - 1} * 4px)`;
    });
  }, []);

  const handleAddEvent = () => {
    alert("Add event feature would open a form here");
  };

  return (
    <div className="schedule-container">
      <div className="page-header">
        <Link to="/dashboard" className="back-arrow">←</Link>
      </div>

      <h1 className="page-title">Study Schedule</h1>

      <div className="week-nav">
        <button className="nav-btn prev-week" onClick={handlePrev}>◀</button>
        <div className="current-week">{weeks[currentWeekIndex]}</div>
        <button className="nav-btn next-week" onClick={handleNext}>▶</button>
      </div>

      <div className="schedule-grid">
        <div className="time-column">
          <div className="time-header">Time</div>
          {[
            "8:00 AM", "9:00 AM", "10:00 AM", "11:00 AM",
            "12:00 PM", "1:00 PM", "2:00 PM", "3:00 PM",
            "4:00 PM", "5:00 PM"
          ].map((t, i) => (
            <div key={i} className="time-slot">{t}</div>
          ))}
        </div>

        {/* Monday */}
        <div className="day-column">
          <div className="day-header">Mon</div>
          <div className="schedule-item math-class" data-duration="2">
            <span className="subject">Mathematics</span>
            <span className="time">8:00 - 10:00</span>
            <span className="location">Room 204</span>
          </div>

          <div className="schedule-item study-session" data-duration="1">
            <span className="subject">Study: Physics</span>
            <span className="time">2:00 - 3:00</span>
            <span className="location">Library</span>
          </div>
        </div>

        {/* Tuesday */}
        <div className="day-column">
          <div className="day-header">Tue</div>

          <div className="schedule-item physics-class" data-duration="2">
            <span className="subject">Physics</span>
            <span className="time">9:00 - 11:00</span>
            <span className="location">Lab 101</span>
          </div>

          <div className="schedule-item group-study" data-duration="2">
            <span className="subject">Group Study</span>
            <span className="time">3:00 - 5:00</span>
            <span className="location">Study Room B</span>
          </div>
        </div>

        {/* Wednesday */}
        <div className="day-column">
          <div className="day-header">Wed</div>

          <div className="schedule-item chemistry-class" data-duration="3">
            <span className="subject">Chemistry</span>
            <span className="time">10:00 - 1:00</span>
            <span className="location">Lab 203</span>
          </div>
        </div>

        {/* Thursday */}
        <div className="day-column">
          <div className="day-header">Thu</div>

          <div className="schedule-item math-class" data-duration="2">
            <span className="subject">Mathematics</span>
            <span className="time">8:00 - 10:00</span>
            <span className="location">Room 204</span>
          </div>

          <div className="schedule-item self-study" data-duration="3">
            <span className="subject">Self Study</span>
            <span className="time">1:00 - 4:00</span>
            <span className="location">Home</span>
          </div>
        </div>

        {/* Friday */}
        <div className="day-column">
          <div className="day-header">Fri</div>

          <div className="schedule-item physics-class" data-duration="2">
            <span className="subject">Physics</span>
            <span className="time">9:00 - 11:00</span>
            <span className="location">Lab 101</span>
          </div>

          <div className="schedule-item break-time" data-duration="1">
            <span className="subject">Break</span>
            <span className="time">4:00 - 5:00</span>
          </div>
        </div>
      </div>

      <button className="add-event-btn" onClick={handleAddEvent}>
        + Add Event
      </button>

      <nav className="bottom-nav">
        <Link to="/chat" className="nav-icon">💬</Link>
        <Link to="/resources" className="nav-icon">🔍</Link>
        <Link to="/dashboard" className="nav-icon">🏠</Link>
        <Link to="/profile" className="nav-icon">👤</Link>
        <Link to="/notifications" className="nav-icon">🔔</Link>
      </nav>
    </div>
  );
};

export default Schedule;
