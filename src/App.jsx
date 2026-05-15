import Status from "./pages/Dashboard/pages/Status/Status.jsx";
import Dashboard from "./pages/Dashboard/Dashboard.jsx";
import {  Route, Routes } from "react-router-dom";
import Users from "./pages/Dashboard/pages/User/User.jsx";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Dashboard />}>
        <Route index element={<Status />} />
        <Route path="user" element={<Users></Users>} />
        <Route path="projects" element={<h3>Projects Management</h3>} />
        <Route path="developers" element={<h3>Developers Management</h3>} />
        <Route path="website-cms" element={<h3>Website CMS</h3>} />
        <Route path="live-chat" element={<h3>Live Chat</h3>} />
      </Route>
    </Routes>
  );
}

export default App;
