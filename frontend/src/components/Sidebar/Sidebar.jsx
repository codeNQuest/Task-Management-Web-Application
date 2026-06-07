import { useContext } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";
import {
  FaHome,
  FaTasks,
  FaChartBar,
  FaCog,
  FaSignOutAlt,
} from "react-icons/fa";

import "./Sidebar.css";

function Sidebar() {
  const { logout } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/");
  };

  return (
    <div className="sidebar">
      <div className="logo">TaskFlow</div>

      <ul>

        <NavLink to="/dashboard" className="link">
          <li>
            <FaHome />
            Dashboard
          </li>
        </NavLink>

        <NavLink to="/tasks" className="link">
          <li>
            <FaTasks />
            Tasks
          </li>
        </NavLink>

        <NavLink to="/analytics" className="link">
          <li>
            <FaChartBar />
            Analytics
          </li>
        </NavLink>

        <NavLink to="/settings" className="link">
          <li>
            <FaCog />
            Settings
          </li>
        </NavLink>

      </ul>

      {/* LOGOUT BUTTON */}
      <div className="sidebar-footer">
        <button onClick={handleLogout} className="logout-btn">
          <FaSignOutAlt />
          Logout
        </button>
      </div>
    </div>
  );
}

export default Sidebar;