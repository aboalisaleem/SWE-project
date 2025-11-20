import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./KfupmResources.css";

const KfupmResources = () => {
  // Original JS data
  const resourcesData = {
    services: [
      {
        title: "KFUPM Blackboard",
        subtitle: "Access all course materials and assignments.",
        url: "https://blackboard.kfupm.edu.sa/",
        keywords: "blackboard, learning, assignments",
      },
      {
        title: "Registrar Services",
        subtitle: "Course registration, drop/add, official records.",
        url: "https://registrar.kfupm.edu.sa/",
        keywords: "registration, grades, records",
      },
      {
        title: "KFUPM Email Access",
        subtitle: "Official university email portal.",
        url: "https://outlook.office.com/",
        keywords: "email, office 365",
      },
    ],

    academics: [
      {
        title: "Course Catalog",
        subtitle: "View prerequisites and course descriptions.",
        url: "https://catalog.kfupm.edu.sa/",
        keywords: "catalog, courses, plan",
      },
      {
        title: "Academic Calendar",
        subtitle: "Important dates for semesters, exams, and holidays.",
        url: "https://kfupm.edu.sa/academic-calendar",
        keywords: "calendar, dates, exams",
      },
    ],

    notes: [
      {
        title: "SWE 363 Notes - Ch 5",
        subtitle: "Software Engineering - Shared by CS Students group.",
        url: "#",
        keywords: "swe 363, software, notes",
      },
      {
        title: "MATH 101 Practice Exam",
        subtitle: "Calculus I practice sheet.",
        url: "#",
        keywords: "math 101, calculus, exam, practice",
      },
    ],
  };

  const [activeTab, setActiveTab] = useState("services");
  const [searchTerm, setSearchTerm] = useState("");
  const [displayList, setDisplayList] = useState([]);

  // Render resources matching the current tab and search
  useEffect(() => {
    filterResources();
  }, [activeTab, searchTerm]);

  const filterResources = () => {
    let list = resourcesData[activeTab];

    if (searchTerm.trim() === "") {
      setDisplayList(list);
      return;
    }

    const query = searchTerm.toLowerCase();

    const filtered = list.filter(
      (item) =>
        item.title.toLowerCase().includes(query) ||
        item.subtitle.toLowerCase().includes(query) ||
        item.keywords.toLowerCase().includes(query)
    );

    setDisplayList(filtered);
  };

  return (
    <div className="resources-container">
      <div className="page-header">
        <Link to="/dashboard" className="back-arrow">
          ←
        </Link>
        KFUPM Student Resources
      </div>

      <div className="search-area">
        <input
          type="search"
          id="resource-search"
          placeholder="Search by Course Code (e.g., SWE 363) or Link Name"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>

      <div className="tab-bar">
        <button
          className={`tab-button ${activeTab === "services" ? "active" : ""}`}
          data-tab="services"
          onClick={() => {
            setActiveTab("services");
            setSearchTerm("");
          }}
        >
          University Services
        </button>

        <button
          className={`tab-button ${activeTab === "academics" ? "active" : ""}`}
          data-tab="academics"
          onClick={() => {
            setActiveTab("academics");
            setSearchTerm("");
          }}
        >
          Academic Tools
        </button>

        <button
          className={`tab-button ${activeTab === "notes" ? "active" : ""}`}
          data-tab="notes"
          onClick={() => {
            setActiveTab("notes");
            setSearchTerm("");
          }}
        >
          Shared Notes
        </button>
      </div>

      <div id="resource-content">
        {displayList.map((item, index) => (
          <a
            href={item.url}
            target="_blank"
            rel="noopener noreferrer"
            className="resource-item"
            key={index}
          >
            <div className="resource-details">
              <span className="item-title">{item.title}</span>
              <span className="item-subtitle">{item.subtitle}</span>
            </div>
            <span className="item-icon">→</span>
          </a>
        ))}
      </div>
    </div>
  );
};

export default KfupmResources;
