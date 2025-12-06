import React, { useState } from "react";
import "./RoomSetting.css";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

export default function RoomSetting() {
  const navigate = useNavigate();

  // Simulated initial data
  const [roomSettings, setRoomSettings] = useState({
    name: "CS Students",
    description: "Study group for CS courses",
    access: "admins",   // 'admins' or 'all'
    privacy: "public",  // 'public' or 'private'
  });

  const [isEditing, setIsEditing] = useState(false);

  // Local form state in edit mode
  const [editData, setEditData] = useState({
    name: "",
    description: "",
    access: "",
    privacy: "",
  });

  // Convert access text
  const formatAccess = (x) =>
    x === "admins" ? "Just Admins" : "All Members";

  // Open edit mode
  const openEditMode = () => {
    setEditData({
      name: roomSettings.name,
      description: roomSettings.description,
      access: roomSettings.access,
      privacy: roomSettings.privacy,
    });
    setIsEditing(true);
  };

  // Cancel edit
  const cancelEdit = () => {
    setIsEditing(false);
  };

  // Save settings
  const saveSettings = (e) => {
    e.preventDefault();

    if (!editData.name.trim()) {
      alert("Room name cannot be empty.");
      return;
    }

    setRoomSettings({ ...editData });
    setIsEditing(false);
    alert("Settings saved! (Simulated)");
  };

  return (
    <div className="settings-container">
      <div className="page-header">Room Setting</div>

      {/* ---------- DISPLAY MODE ---------- */}
      {!isEditing && (
        <div id="display-mode">
          <div className="settings-card">
            <div id="current-room-name" className="room-name-display">
              {roomSettings.name}
            </div>

            <div className="display-grid">
              <div className="setting-label">Room Name:</div>
              <div className="setting-value">{roomSettings.name}</div>

              <div className="setting-label">Description:</div>
              <div className="setting-value">{roomSettings.description}</div>

              <div className="setting-label">Members Access:</div>
              <div className="setting-value">
                {formatAccess(roomSettings.access)}
              </div>

              <div className="setting-label">Privacy:</div>
              <div className="setting-value">
                {roomSettings.privacy.charAt(0).toUpperCase() +
                  roomSettings.privacy.slice(1)}
              </div>
            </div>
          </div>

          <div className="action-buttons">
            <button id="edit-display-btn" onClick={() => {}}>
              Edit
            </button>
          </div>

          <Link to="/chat" id="back-btn">
            Back
          </Link>
        </div>
      )}

      {/* ---------- EDIT MODE ---------- */}
      {isEditing && (
        <form id="edit-form" className="settings-card" onSubmit={saveSettings}>
          <div className="room-name-group">
            <label>Room name:</label>
            <input
              type="text"
              value={editData.name}
              onChange={(e) =>
                setEditData({ ...editData, name: e.target.value })
              }
              required
            />
          </div>

          <div className="form-input-row">
            <label>Description:</label>
            <input
              type="text"
              value={editData.description}
              onChange={(e) =>
                setEditData({ ...editData, description: e.target.value })
              }
            />
          </div>

          <div className="form-input-row">
            <label>Members Access:</label>
            <div className="radio-option-group">
              <label>
                <input
                  type="radio"
                  value="all"
                  checked={editData.access === "all"}
                  onChange={() =>
                    setEditData({ ...editData, access: "all" })
                  }
                />
                editing group settings: all
              </label>
              <label>
                <input
                  type="radio"
                  value="admins"
                  checked={editData.access === "admins"}
                  onChange={() =>
                    setEditData({ ...editData, access: "admins" })
                  }
                />
                editing group settings: just admins
              </label>
            </div>
          </div>

          <div className="form-input-row">
            <label>Privacy:</label>
            <div className="radio-option-group">
              <label>
                <input
                  type="radio"
                  value="public"
                  checked={editData.privacy === "public"}
                  onChange={() =>
                    setEditData({ ...editData, privacy: "public" })
                  }
                />
                public
              </label>

              <label>
                <input
                  type="radio"
                  value="private"
                  checked={editData.privacy === "private"}
                  onChange={() =>
                    setEditData({ ...editData, privacy: "private" })
                  }
                />
                private
              </label>
            </div>
          </div>

          <div className="action-buttons" style={{ flexDirection: "column" }}>
            <button id="save-btn" type="submit">
              Save Changes
            </button>

            <button
              type="button"
              id="cancel-edit-btn"
              onClick={cancelEdit}
              style={{ backgroundColor: "#ff4d4d" }}
            >
              Cancel Edit
            </button>
          </div>
        </form>
      )}
    </div>
  );
}
