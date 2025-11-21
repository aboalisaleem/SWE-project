import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./profile.css";

const Profile = () => {
  
  const [userData, setUserData] = useState({
    name: "Mohammed Abdullah",
    phone: "+966 500 050 055",
    email: "mohammed@kfupm.edu.sa",
    gender: "Male",
    dob: "2003-05-11",
  });

 
  const [isEditing, setIsEditing] = useState(false);

  // (DD-MM-YYYY)
  const formatDobDisplay = (dob) => {
    const [year, month, day] = dob.split("-");
    return `${day}-${month}-${year}`;
  };

  // Save changes
  const handleSave = (e) => {
    e.preventDefault();

    const newData = {
      name: e.target.inputName.value.trim(),
      phone: e.target.inputPhone.value.trim(),
      gender: e.target.inputGender.value,
      dob: e.target.inputDob.value,
      email: userData.email, 
    };

    setUserData(newData);
    setIsEditing(false);
  };

  return (
    <div className="profile-container">
      {/* Header */}
      <div className="page-header">
        <Link to="/dashboard" className="back-arrow">
          &lt;
        </Link>
      </div>

      <h1 className="profile-heading">Personal Information</h1>

      {/* DISPLAY MODE */}
      {!isEditing && (
        <div id="display-mode" className="profile-card">
          <ul className="info-list">
            <li className="info-item">
              <div className="info-label-group">
                <span className="item-icon">👤</span>
                <span className="info-label">Name</span>
              </div>
              <div className="info-value">{userData.name}</div>
              <span className="action-arrow">&gt;</span>
            </li>

            <li className="info-item">
              <div className="info-label-group">
                <span className="item-icon">📞</span>
                <span className="info-label">Phone Number</span>
              </div>
              <div className="info-value">{userData.phone}</div>
              <span className="action-arrow">&gt;</span>
            </li>

            <li className="info-item">
              <div className="info-label-group">
                <span className="item-icon">📧</span>
                <span className="info-label">Email</span>
              </div>
              <div className="info-value">{userData.email}</div>
              <span className="action-arrow">&gt;</span>
            </li>

            <li className="info-item action-link">
              <div className="info-label-group">
                <span className="item-icon">🔒</span>
                <span className="info-label">Change your password</span>
              </div>
              <span className="info-value action-arrow">&gt;</span>
            </li>

            <li className="info-item">
              <div className="info-label-group">
                <span className="item-icon">♂️/♀️</span>
                <span className="info-label">Gender</span>
              </div>
              <div className="info-value">{userData.gender}</div>
              <span className="action-arrow">&gt;</span>
            </li>

            <li className="info-item">
              <div className="info-label-group">
                <span className="item-icon">🎂</span>
                <span className="info-label">Date of birth</span>
              </div>
              <div className="info-value">{formatDobDisplay(userData.dob)}</div>
              <span className="action-arrow">&gt;</span>
            </li>
          </ul>

          <button id="edit-btn" className="btn-primary" onClick={() => setIsEditing(true)}>
            Edit Profile
          </button>
        </div>
      )}

      {/* EDIT MODE */}
      {isEditing && (
        <form id="edit-profile-form" className="profile-card" onSubmit={handleSave}>
          <div className="form-input-group">
            <label htmlFor="input-name">Name</label>
            <input
              type="text"
              id="input-name"
              name="inputName"
              defaultValue={userData.name}
              required
            />
          </div>

          <div className="form-input-group">
            <label htmlFor="input-phone">Phone Number</label>
            <input
              type="tel"
              id="input-phone"
              name="inputPhone"
              defaultValue={userData.phone}
            />
          </div>

          <div className="form-input-group">
            <label htmlFor="input-gender">Gender</label>
            <select id="input-gender" name="inputGender" defaultValue={userData.gender}>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
              <option value="Other">Other</option>
            </select>
          </div>

          <div className="form-input-group">
            <label htmlFor="input-dob">Date of Birth</label>
            <input
              type="date"
              id="input-dob"
              name="inputDob"
              defaultValue={userData.dob}
            />
          </div>

          <button type="submit" className="btn-primary">
            Save Changes
          </button>

          <button
            type="button"
            id="cancel-btn"
            className="btn-primary"
            style={{ backgroundColor: "#ff4d4d", marginTop: "10px" }}
            onClick={() => setIsEditing(false)}
          >
            Cancel
          </button>
        </form>
      )}
    </div>
  );
};

export default Profile;
