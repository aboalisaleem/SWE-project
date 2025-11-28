import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";

import Login from "./login";
import Signup from "./Signup";
import Dashboard from "./Dashboard";
import MissingPASS from "./MissingPass";
import Profile from "./profile";
import Todo from "./Todo";
import Timer from "./Timer";
import StudyRoomChat from "./StudyRoomChat";
import RoomSetting from "./RoomSetting";
import CreateRoom from "./CreateRoom";
import JoinRoom from "./JoinRoom";
import Resources from "./Resources";
import KfupmResources from "./KfupmResources";
import Schedule from "./Schedule";

// NEW PAGES
import Notifications from "./notifications";
import Settings from "./Settings";
import ProfileMenu from "./PROFILEMENU.JSX";
function App() {
  return (
    <Router>
      <Routes>

        {/* Redirect root to login */}
        <Route path="/" element={<Navigate to="/login" replace />} />

        {/* Auth Pages */}
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/MissingPASS" element={<MissingPASS />} />

        {/* Main */}
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/ProfileMenu" element={<ProfileMenu />} />
        <Route path="/todo" element={<Todo />} />
        <Route path="/timer" element={<Timer />} />
        <Route path="/chat" element={<StudyRoomChat />} />

        {/* Room Related */}
        <Route path="/room-settings" element={<RoomSetting />} />
        <Route path="/create-room" element={<CreateRoom />} />
        <Route path="/join-room" element={<JoinRoom />} />

        {/* Resources */}
        <Route path="/resources" element={<Resources />} />
        <Route path="/kfupm-resources" element={<KfupmResources />} />

        {/* Schedule */}
        <Route path="/schedule" element={<Schedule />} />

        {/* NEW Routes */}
        <Route path="/settings" element={<Settings />} />
        <Route path="/notifications" element={<Notifications />} />

        {/* Catch all */}
        <Route path="*" element={<Navigate to="/login" replace />} />
      </Routes>
    </Router>
  );
}

export default App;

