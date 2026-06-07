import { NavLink } from "react-router-dom";

import {
  FaHome,
  FaTasks,
  FaChartBar,
  FaCog,
} from "react-icons/fa";

import "./Sidebar.css";

function Sidebar() {
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
    </div>
  );
}

export default Sidebar;