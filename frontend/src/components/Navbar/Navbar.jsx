import { FaBell, FaSearch } from "react-icons/fa";
import "./Navbar.css";

function Navbar() {
  return (
    <div className="navbar">
      <div className="navbar-left">
        <h2>Dashboard</h2>
      </div>

      <div className="navbar-center">
        <div className="search-box">
          <FaSearch />
          <input
            type="text"
            placeholder="Search tasks..."
          />
        </div>
      </div>

      <div className="navbar-right">
        <button className="notification-btn">
          <FaBell />
        </button>

        <div className="profile">
          <img
            src="https://i.pravatar.cc/40"
            alt="profile"
          />
          <span>Admin</span>
        </div>
      </div>
    </div>
  );
}

export default Navbar;