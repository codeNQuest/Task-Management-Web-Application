import Sidebar from "../../components/Sidebar/Sidebar";
import Navbar from "../../components/Navbar/Navbar";

import "./Dashboard.css";

function Dashboard() {
  return (
    <div className="dashboard">
      <Sidebar />

      <div className="main-content">
        <Navbar />

        <div className="dashboard-content">
          <div className="card">
            <h3>Total Tasks</h3>
            <h1>0</h1>
          </div>

          <div className="card">
            <h3>Completed</h3>
            <h1>0</h1>
          </div>

          <div className="card">
            <h3>Pending</h3>
            <h1>0</h1>
          </div>

          <div className="card">
            <h3>In Progress</h3>
            <h1>0</h1>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;