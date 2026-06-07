import { useState, useEffect } from "react";
import Sidebar from "../../components/Sidebar/Sidebar";
import Navbar from "../../components/Navbar/Navbar";
import StatCard from "../../components/StatCard/StatCard";
import ActivityFeed from "../../components/ActivityFeed/ActivityFeed";
import TaskManager from "../../components/Tasks/TaskManager";
import api from "../../api/axios";
import {
  FaTasks,
  FaCheck,
  FaSpinner,
  FaExclamation,
} from "react-icons/fa";

import "./Dashboard.css";

function Dashboard() {
  const [search, setSearch] = useState("");
  const [stats, setStats] = useState({ total: 0, completed: 0, inProgress: 0, overdue: 0 });
  const [statsLoading, setStatsLoading] = useState(false);

  useEffect(() => {
    const fetchStats = async () => {
      setStatsLoading(true);
      try {
        const res = await api.get('/tasks/stats');
        setStats({ 
          total: res.data.total, 
          completed: res.data.completed, 
          inProgress: res.data.pending, 
          overdue: res.data.overdue 
        });
      } catch (err) {
        console.error('Failed to fetch stats');
      } finally {
        setStatsLoading(false);
      }
    };
    fetchStats();
    // Refresh stats every 30 seconds
    const interval = setInterval(fetchStats, 30000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="dashboard">

      {/* SIDEBAR */}
      <Sidebar />

      {/* MAIN CONTENT */}
      <div className="main-content">

        {/* 🔥 PASS SEARCH TO NAVBAR */}
        <Navbar search={search} setSearch={setSearch} />

        <div className="dashboard-content">

          {/* STATS */}
          <div className="stats-grid">
            <StatCard
              title="Total Tasks"
              count={stats.total}
              icon={<FaTasks />}
              color="#6366f1"
            />

            <StatCard
              title="Completed"
              count={stats.completed}
              icon={<FaCheck />}
              color="#10b981"
            />

            <StatCard
              title="In Progress"
              count={stats.inProgress}
              icon={<FaSpinner />}
              color="#f59e0b"
            />

            <StatCard
              title="Overdue"
              count={stats.overdue}
              icon={<FaExclamation />}
              color="#ef4444"
            />
          </div>

          {/* MAIN SECTION */}
          <div className="dashboard-row">

            <div className="tasks-section">

              {/* PASS SEARCH DOWN TO TASKS */}
              <TaskManager search={search} onStatsChange={() => {
                // Refetch stats when tasks change
                const fetchStats = async () => {
                  try {
                    const res = await api.get('/tasks/stats');
                    setStats({ 
                      total: res.data.total, 
                      completed: res.data.completed, 
                      inProgress: res.data.pending, 
                      overdue: res.data.overdue 
                    });
                  } catch (err) {
                    console.error('Failed to fetch stats');
                  }
                };
                fetchStats();
              }} />

            </div>

            <ActivityFeed />

          </div>

        </div>
      </div>
    </div>
  );
}

export default Dashboard;