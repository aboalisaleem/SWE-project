import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./JoinRoom.css";

const JoinRoom = () => {
  const navigate = useNavigate();

 
  const roomsData = [
    { id: 1, name: "SWE 363 Project Group", description: "Final Project Discussion and Debugging.", privacy: "public", members: 4 },
    { id: 2, name: "Math 101 Exam Review", description: "Calculus I last-minute cram session.", privacy: "public", members: 12 },
    { id: 3, name: "Web Dev Study Hall", description: "General coding questions and help.", privacy: "public", members: 8 },
    { id: 4, name: "Private Admins Lounge", description: "Room for admins only.", privacy: "private", members: 3 },
    { id: 5, name: "Physics 201 Problem Set", description: "Working through the new assignment.", privacy: "private", members: 6 }
  ];

  const [searchTerm, setSearchTerm] = useState("");
  const [filteredRooms, setFilteredRooms] = useState(roomsData);

  // Filter rooms when the user types
  useEffect(() => {
    const query = searchTerm.toLowerCase().trim();

    const filtered = roomsData.filter(
      (room) =>
        room.name.toLowerCase().includes(query) ||
        room.description.toLowerCase().includes(query)
    );

    setFilteredRooms(filtered);
  }, [searchTerm]);

  // Handle join button click
  const handleJoin = (room) => {
    if (room.privacy === "private") {
      alert(`Request sent to join "${room.name}". You will be notified when accepted.`);
    } else {
      alert(`Joining "${room.name}"...`);
      navigate(`/chat?room=${encodeURIComponent(room.name)}`);
    }
  };

  return (
    <div className="collaborate-container">
      {/* Header */}
      <header className="page-header">
        <Link to="/dashboard" className="back-link">← Back</Link>
        <h1>Join Study Rooms</h1>

        <div className="header-actions">
          <Link to="/create_room" id="create-room-btn">Create Room</Link>
        </div>
      </header>

      {/* Search */}
      <div className="search-area">
        <input
          type="search"
          id="room-search-input"
          placeholder="Search by Room Name or Topic (e.g., SWE 363)"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>

      {/* Rooms List */}
      <div id="room-list-container">
        {filteredRooms.length === 0 && (
          <p style={{ textAlign: "center", padding: "30px", color: "#999" }}>
            No rooms found matching your search.
          </p>
        )}

        {filteredRooms.map((room) => {
          const isPrivate = room.privacy === "private";
          const buttonText = isPrivate ? "Request Join" : "Join Room";
          const buttonClass = isPrivate ? "join-button private" : "join-button";

          return (
            <div className="room-item" key={room.id}>
              <div className="room-details">
                <div className="room-title">
                  {room.name} ({room.members} members)
                </div>
                <div className="room-description">{room.description}</div>

                {isPrivate ? (
                  <div className="room-status private">🔒 Private Room</div>
                ) : (
                  <div className="room-status">Public Room</div>
                )}
              </div>

              <button
                className={buttonClass}
                onClick={() => handleJoin(room)}
              >
                {buttonText}
              </button>
            </div>
          );
        })}
      </div>

      {/* Bottom Navigation */}
      <nav className="bottom-nav">
        <Link to="/chat" className="nav-icon" title="Chat">💬</Link>
        <Link to="/join_room" className="nav-icon active" title="Search">🔍</Link>
        <Link to="/dashboard" className="nav-icon" title="Home">🏠</Link>
        <Link to="/profile" className="nav-icon" title="Profile">👤</Link>
        <Link to="/notifications" className="nav-icon" title="Notifications">🔔</Link>
      </nav>
    </div>
  );
};

export default JoinRoom;
