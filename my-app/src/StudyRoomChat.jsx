import React, { useState, useEffect, useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./StudyRoomChat.css";

export default function StudyRoomChat() {
  const navigate = useNavigate();

  const chatAreaRef = useRef(null);
  const [messages, setMessages] = useState([
    { type: "partner", text: "what task are you working on?" },
    { type: "partner", text: "do you want help?" },
    { type: "user", text: "no thanks, I'm working on debugging." },
    { type: "user", text: "I'll join the timer in 10 minutes." },
    {
      type: "system",
      text: (
        <>
          <strong>Work Stuff</strong>
          <br />
          <a href="#" className="file-link">
            http://teem29.swe363.com
          </a>
          <span className="tag">file</span>
        </>
      ),
    },
  ]);

  const [chatInput, setChatInput] = useState("");

  // Settings menu
  const [menuOpen, setMenuOpen] = useState(false);

  // Scroll to bottom
  const scrollToBottom = (instant = false) => {
    const el = chatAreaRef.current;
    if (!el) return;
    if (instant) {
      el.scrollTop = el.scrollHeight;
    } else {
      el.scrollTo({ top: el.scrollHeight, behavior: "smooth" });
    }
  };

  useEffect(() => {
    scrollToBottom(true);
  }, []);

  // Send message
  const sendMessage = () => {
    if (!chatInput.trim()) return;

    const userMsg = { type: "user", text: chatInput };
    setMessages((prev) => [...prev, userMsg]);
    setChatInput("");

    setTimeout(() => {
      const autoResponse = {
        type: "partner",
        text: `Got it — "${chatInput}" 👍`,
      };
      setMessages((prev) => [...prev, autoResponse]);
      scrollToBottom();
    }, 700);

    scrollToBottom();
  };

  const handleKey = (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      sendMessage();
    }
  };

  // Add pinned resource
  const addPinned = () => {
    const newLink = prompt("Enter URL or resource name to pin:");
    if (!newLink) return;

    setPinned((prev) => [...prev, newLink]);
    alert("Pinned resource added.");
  };

  // Pinned list state
  const [pinned, setPinned] = useState([
    "http://teem29.swe363.com",
    "Study File: Chapter 5 PDF",
  ]);

  // Clicking outside menu closes it
  useEffect(() => {
    const closeMenuOnClick = (e) => {
      if (!e.target.closest(".settings-button-wrap")) {
        setMenuOpen(false);
      }
    };
    document.addEventListener("click", closeMenuOnClick);
    return () => document.removeEventListener("click", closeMenuOnClick);
  }, []);

  return (
    <div className="chat-container">
      {/* HEADER */}
      <header className="top-header">
        <Link to="/dashboard" className="back-btn">
          ←
        </Link>

        <div className="room-name">Room Name</div>

        <div className="settings-button-wrap">
          <button
            className="settings-btn"
            aria-expanded={menuOpen}
            aria-haspopup="true"
            onClick={(e) => {
            e.stopPropagation();
            setMenuOpen((prev) => !prev);
          }}
          >
            ⚙️
          </button>

          <div
            className="settings-menu"
            aria-hidden={!menuOpen}
            style={{ display: menuOpen ? "block" : "none" }}
          >
            <button
              type="button"
              onClick={() => {
                setMenuOpen(false);
                navigate("/room-settings");
              }}
            >
              Open Room Settings
            </button>

            <button
              type="button"
              onClick={() => {
                setMenuOpen(false);
                addPinned();
              }}
            >
              Add Pinned Resource
            </button>
          </div>
        </div>
      </header>

      {/* PINNED LINKS */}
      <section className="pinned-links">
        <div className="pinned-row">
          <div className="pinned-title">Pinned Resources</div>
        </div>

        <div className="pinned-row">
          {pinned.map((item, index) => (
            <a key={index} className="pinned-item" href="#" title={item}>
              {item}
            </a>
          ))}
        </div>
      </section>

      {/* CHAT AREA */}
      <main className="chat-area" ref={chatAreaRef}>
        {messages.map((msg, i) => (
          <div key={i} className={`message ${msg.type}`}>
            <div className="bubble">{msg.text}</div>
          </div>
        ))}
      </main>

      {/* INPUT BAR */}
      <div className="input-bar">
        <input
          value={chatInput}
          onChange={(e) => setChatInput(e.target.value)}
          onKeyDown={handleKey}
          placeholder="Type a message…"
        />
        <button className="send-btn" onClick={sendMessage}>
          ↑
        </button>
      </div>

      {/* NAV BAR */}
      <nav className="bottom-nav">
        <button className="nav-icon active">💬</button>
        <button className="nav-icon">🔍</button>
        <Link to="/dashboard" className="nav-icon">
          🏠
        </Link>
        <Link to="/profile" className="nav-icon">
          👤
        </Link>
        <Link to="/notifications" className="nav-icon">
          🔔
        </Link>
      </nav>
    </div>
  );
}
