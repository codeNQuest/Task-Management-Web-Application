import Sidebar from "../../components/Sidebar/Sidebar";
import Navbar from "../../components/Navbar/Navbar";
import StatCard from "../../components/StatCard/StatCard";
import ActivityFeed from "../../components/ActivityFeed/ActivityFeed";
import TaskManager from "../../components/Tasks/TaskManager";

import {
  FaTasks,
  FaCheck,
  FaSpinner,
  FaExclamation,
} from "react-icons/fa";

import "./Dashboard.css";

function Dashboard() {
  return (
    <div className="dashboard">

      {/* SIDEBAR */}
      <Sidebar />

      {/* MAIN CONTENT */}
      <div className="main-content">

        <Navbar />

        <div className="dashboard-content">

          {/* STATS */}
          <div className="stats-grid">
            <StatCard
              title="Total Tasks"
              count="0"
              icon={<FaTasks />}
              color="#6366f1"
            />

            <StatCard
              title="Completed"
              count="0"
              icon={<FaCheck />}
              color="#10b981"
            />

            <StatCard
              title="In Progress"
              count="0"
              icon={<FaSpinner />}
              color="#f59e0b"
            />

            <StatCard
              title="Overdue"
              count="0"
              icon={<FaExclamation />}
              color="#ef4444"
            />
          </div>

          {/* TASK MANAGER (IMPORTANT FIX) */}
          <div className="dashboard-row">

            <div className="tasks-section">
              <TaskManager />
            </div>

            <ActivityFeed />

          </div>

        </div>
      </div>
    </div>
  );
}

export default Dashboard;