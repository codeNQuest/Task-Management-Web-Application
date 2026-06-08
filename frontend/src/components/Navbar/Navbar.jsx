import { useEffect, useState, useContext } from "react";
import { FaBell, FaSearch, FaMoon, FaSun } from "react-icons/fa";
import { ThemeContext } from "../../context/ThemeContext";
import api from "../../api/axios";
import "./Navbar.css";

function Navbar({ search, setSearch }) {
  const [showNotifications, setShowNotifications] = useState(false);
  const [user, setUser] = useState(null);
  const { isDark, toggleTheme } = useContext(ThemeContext);

  const notifications = [
    "New task assigned",
    "Project deadline updated",
    "Team meeting at 5 PM",
  ];

  useEffect(() => {
    const fetchMe = async () => {
      try {
        const res = await api.get('/auth/me');
        setUser(res.data);
      } catch (err) {
       
      }
    };
    fetchMe();
  }, []);

  return (
    <div className="navbar">
      {/* LEFT */}
      <div className="navbar-left">
        <h2>Dashboard</h2>
      </div>

      {/* CENTER SEARCH */}
      <div className="navbar-center">
        <div className="search-box">
          <FaSearch />
          <input value={search} onChange={(e) => setSearch(e.target.value)} type="text" placeholder="Search tasks..." />
        </div>
      </div>

      {/* RIGHT */}
      <div className="navbar-right">

        {/* DARK MODE TOGGLE */}
        <button className="icon-btn" onClick={toggleTheme}>
          {isDark ? <FaSun /> : <FaMoon />}
        </button>

        {/* NOTIFICATIONS */}
        <div className="notification-wrapper">
          <button
            className="icon-btn"
            onClick={() => setShowNotifications(!showNotifications)}
          >
            <FaBell />
          </button>

          {showNotifications && (
            <div className="notification-dropdown">
              <h4>Notifications</h4>
              {notifications.map((note, index) => (
                <div key={index} className="notification-item">
                  {note}
                </div>
              ))}
            </div>
          )}
        </div>

        {/* PROFILE */}
        <div className="profile">
          <img src={user?.avatarUrl || 'https://i.pravatar.cc/40'} alt="profile" />
          <span>{user?.name || 'Guest'}</span>
        </div>
      </div>
    </div>
  );
}

export default Navbar;