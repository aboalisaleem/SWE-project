import React, { useState } from "react";
import { Link } from "react-router-dom";

const Resources = () => {
  const [searchTerm, setSearchTerm] = useState("");

  // Hard-coded resource 
  const resources = [
    {
      title: "Calculus Chapter 5 Notes",
      meta: "Mathematics • 2.4 MB • 3 days ago",
      icon: "📄",
      type: "pdf",
    },
    {
      title: "Quantum Mechanics Lecture",
      meta: "Physics • 45 min • 1 week ago",
      icon: "🎥",
      type: "video",
    },
    {
      title: "Organic Chemistry Reference",
      meta: "Chemistry • Link • 2 weeks ago",
      icon: "🔗",
      type: "link",
    },
    {
      title: "Python Exercises",
      meta: "Programming • 1.1 MB • 3 weeks ago",
      icon: "📝",
      type: "doc",
    },
  ];

  // Category click handler
  const handleCategoryClick = (name) => {
    alert(`Showing resources for: ${name}`);
  };

  // Download button click handler
  const handleDownload = (title) => {
    alert(`Downloading: ${title}`);
  };

  // Upload button
  const handleUpload = () => {
    alert("Upload resource feature would open here");
  };

  return (
    <div className="resources-container">
      {/* Header */}
      <div className="page-header">
        <Link to="/dashboard" className="back-arrow">←</Link>
      </div>

      <h1 className="page-title">Study Resources</h1>

      {/* Search */}
      <div className="search-section">
        <div className="search-input-wrapper">
          <span className="search-icon">🔍</span>
          <input
            type="search"
            placeholder="Search resources..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value.toLowerCase())}
          />
        </div>
      </div>

      {/* Categories */}
      <div className="categories-section">
        <h2 className="section-title">Categories</h2>

        <div className="categories-grid">
          {[
            { icon: "📐", name: "Mathematics", className: "math" },
            { icon: "⚛️", name: "Physics", className: "physics" },
            { icon: "🧪", name: "Chemistry", className: "chemistry" },
            { icon: "💻", name: "Programming", className: "programming" },
            { icon: "🧬", name: "Biology", className: "biology" },
            { icon: "📚", name: "Literature", className: "literature" },
          ].map((cat) => (
            <div
              key={cat.name}
              className={`category-card ${cat.className}`}
              onClick={() => handleCategoryClick(cat.name)}
            >
              <div className="category-icon">{cat.icon}</div>
              <span className="category-name">{cat.name}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Recent Resources */}
      <div className="recent-section">
        <h2 className="section-title">Recent Resources</h2>

        <div className="resources-list">
          {resources
            .filter((r) =>
              r.title.toLowerCase().includes(searchTerm)
            )
            .map((res, index) => (
              <div className="resource-item" key={index}>
                <div className={`resource-icon ${res.type}`}>{res.icon}</div>

                <div className="resource-details">
                  <h3 className="resource-title">{res.title}</h3>
                  <p className="resource-meta">{res.meta}</p>
                </div>

                <button
                  className="download-btn"
                  onClick={() =>
                    res.type === "link"
                      ? alert("Opening link...")
                      : handleDownload(res.title)
                  }
                >
                  {res.type === "link" ? "↗" : "↓"}
                </button>
              </div>
            ))}
        </div>
      </div>

      {/* Upload button */}
      <button className="upload-btn" onClick={handleUpload}>
        + Upload Resource
      </button>

      {/* Bottom Navigation */}
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

export default Resources;
