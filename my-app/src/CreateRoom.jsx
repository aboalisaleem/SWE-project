import React from "react";
import { useNavigate, Link } from "react-router-dom";
import "./CreateRoom.css";

const CreateRoom = () => {
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();

    const roomName = event.target.roomName.value.trim();
    const description = event.target.description.value.trim();
    const access = event.target["access-control"].value;
    const privacy = event.target.privacy.value;

    if (roomName === "") {
      alert("Please enter a room name.");
      return;
    }

    console.log("Room Data Submitted:");
    console.log({ roomName, description, access, privacy });

    alert(`Study Room "${roomName}" successfully created as a ${privacy} room!`);

    // redirect to chat with room name
    navigate(`/chat?room=${encodeURIComponent(roomName)}`);
  };

  const handleCancel = () => {
    if (window.confirm("Are you sure you want to cancel room creation?")) {
      navigate("/dashboard");
    }
  };

  return (
    <div className="room-settings-container">
      <div className="page-header">Create Room</div>

      <form id="create-room-form" className="settings-card" onSubmit={handleSubmit}>
        {/* Room Name Input */}
        <div className="room-name-group">
          <label htmlFor="room-name">Room name:</label>
          <input
            type="text"
            id="room-name"
            name="roomName"
            placeholder="cs students"
            required
          />
        </div>

        {/* Settings Grid */}
        <div className="settings-grid">
          {/* Row 1: Description */}
          <div className="setting-label">Description:</div>
          <div className="setting-value">
            <input
              type="text"
              id="description"
              name="description"
              placeholder="Study group for CS students"
              style={{
                width: "100%",
                padding: "5px",
                borderRadius: "5px",
                border: "1px solid #ccc",
              }}
            />
          </div>

          {/* Row 2: Access Control */}
          <div className="setting-label">Members Access:</div>
          <div className="setting-value">
            <div className="radio-option-group">
              <label>
                <input type="radio" name="access-control" value="all" defaultChecked />
                editing group settings: all
              </label>
              <label>
                <input type="radio" name="access-control" value="admins" />
                editing group settings: just admins
              </label>
            </div>
          </div>

          {/* Row 3: Privacy */}
          <div className="setting-label">Privacy:</div>
          <div className="setting-value">
            <div className="radio-option-group">
              <label>
                <input type="radio" name="privacy" value="public" defaultChecked />
                public
              </label>
              <label>
                <input type="radio" name="privacy" value="private" />
                private
              </label>
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="action-buttons">
          <button type="button" id="cancel-btn" onClick={handleCancel}>
            cancel
          </button>
          <button type="submit" id="create-btn">
            Create
          </button>
        </div>
      </form>
    </div>
  );
};

export default CreateRoom;
