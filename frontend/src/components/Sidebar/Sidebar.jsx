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
      <div className="logo">
        TaskFlow
      </div>

      <ul>
        <li className="active">
          <FaHome />
          Dashboard
        </li>

        <li>
          <FaTasks />
          Tasks
        </li>

        <li>
          <FaChartBar />
          Analytics
        </li>

        <li>
          <FaCog />
          Settings
        </li>
      </ul>
    </div>
  );
}

export default Sidebar;