 import React, { useState, useEffect, useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./StudyRoomChat.css";

export default function StudyRoomChat() {
  const navigate = useNavigate();
  const chatAreaRef = useRef(null);
  
  const [messages, setMessages] = useState([
    { 
      type: "partner", 
      text: "what task are you working on?",
      time: "10:30 AM"
    },
    { 
      type: "partner", 
      text: "do you want help?",
      time: "10:31 AM"
    },
    { 
      type: "user", 
      text: "no thanks, I'm working on debugging.",
      time: "10:32 AM"
    },
    { 
      type: "user", 
      text: "I'll join the timer in 10 minutes.",
      time: "10:33 AM"
    },
    {
      type: "system",
      text: "📎 Work Stuff",
      time: "10:34 AM"
    },
  ]);

  const [chatInput, setChatInput] = useState("");
  const [menuOpen, setMenuOpen] = useState(false);
  const [pinned, setPinned] = useState([
    "http://teem29.swe363.com",
    "Study File: Chapter 5 PDF",
  ]);

  const getCurrentTime = () => {
    return new Date().toLocaleTimeString('en-US', { 
      hour: 'numeric', 
      minute: '2-digit',
      hour12: true 
    });
  };

  const scrollToBottom = (instant = false) => {
    const el = chatAreaRef.current;
    if (!el) return;
    
    setTimeout(() => {
      if (instant) {
        el.scrollTop = el.scrollHeight;
      } else {
        el.scrollTo({ top: el.scrollHeight, behavior: "smooth" });
      }
    }, 100);
  };

  useEffect(() => {
    scrollToBottom(true);
  }, []);

  const sendMessage = () => {
    const messageText = chatInput.trim();
    if (!messageText) return;

    const userMsg = { 
      type: "user", 
      text: messageText,
      time: getCurrentTime()
    };
    
    setMessages(prev => [...prev, userMsg]);
    setChatInput("");
    scrollToBottom();
  };

  const handleKey = (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      sendMessage();
    }
  };

  const addPinned = () => {
    const newLink = prompt("Enter URL or resource name to pin:");
    if (!newLink) return;

    setPinned(prev => [...prev, newLink]);
    setMenuOpen(false);
  };

  useEffect(() => {
    const closeMenuOnClick = (e) => {
      if (!e.target.closest(".settings-button-wrap")) {
        setMenuOpen(false);
      }
    };
    document.addEventListener("click", closeMenuOnClick);
    return () => document.removeEventListener("click", closeMenuOnClick);
  }, []);

  const renderMessage = (msg, index) => {
    if (msg.type === "system") {
      return (
        <div key={index} className="message system">
          <div className="bubble">
            {msg.text}
            <div className="message-time">{msg.time}</div>
          </div>
        </div>
      );
    }

    return (
      <div key={index} className={`message ${msg.type}`}>
        <div className="bubble">
          {msg.text}
          <div className="message-time">{msg.time}</div>
        </div>
      </div>
    );
  };

  return (
    <div className="chat-container">
      {/* HEADER */}
      <header className="top-header">
        <Link to="/dashboard" className="back-btn">
          ‹
        </Link>

        <div className="room-name">Study Group</div>

        <div className="settings-button-wrap">
          <button
            className="settings-btn"
            aria-expanded={menuOpen}
            aria-haspopup="true"
            onClick={(e) => {
              e.stopPropagation();
              setMenuOpen(prev => !prev);
            }}
          >
            ⋮
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
              🛠️ Room Settings
            </button>

            <button
              type="button"
              onClick={addPinned}
            >
              📌 Add Pinned Resource
            </button>
            
            <button
              type="button"
              onClick={() => {
                setMenuOpen(false);
                alert("Group info opened");
              }}
            >
              👥 Group Info
            </button>
          </div>
        </div>
      </header>

      {/* PINNED LINKS */}
      <section className="pinned-links">
        <div className="pinned-title">📌 Pinned Resources</div>
        <div className="pinned-row">
          {pinned.map((item, index) => (
            <a 
              key={index} 
              className="pinned-item" 
              href={item.startsWith('http') ? item : '#'} 
              target={item.startsWith('http') ? "_blank" : "_self"}
              rel="noopener noreferrer"
              title={item}
            >
              {item}
            </a>
          ))}
        </div>
      </section>

      {/* CHAT AREA */}
      <main className="chat-area" ref={chatAreaRef}>
        {messages.map((msg, index) => renderMessage(msg, index))}
      </main>

      {/* INPUT BAR */}
      <div className="input-bar">
        <input
          value={chatInput}
          onChange={(e) => setChatInput(e.target.value)}
          onKeyDown={handleKey}
          placeholder="Type a message..."
          aria-label="Type your message"
        />
        <button 
          className="send-btn" 
          onClick={sendMessage}
          disabled={!chatInput.trim()}
          aria-label="Send message"
        >
          ➤
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