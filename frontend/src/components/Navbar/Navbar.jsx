import "./Navbar.css";

function Navbar() {
  return (
    <div className="navbar">
      <h2>Dashboard</h2>

      <div className="profile">
        <img
          src="https://i.pravatar.cc/40"
          alt="profile"
        />

        <span>Admin</span>
      </div>
    </div>
  );
}

export default Navbar;