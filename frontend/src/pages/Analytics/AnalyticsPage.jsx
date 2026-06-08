import { useState, useEffect } from "react";
import {
  PieChart,
  Pie,
  Cell,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

import Sidebar from "../../components/Sidebar/Sidebar";
import api from "../../api/axios";
import "./AnalyticsPage.css";

function AnalyticsPage() {
  const [taskStatusData, setTaskStatusData] = useState([]);
  const [priorityData, setPriorityData] = useState([]);
  const [loading, setLoading] = useState(false);

  const COLORS = ["#10b981", "#f59e0b", "#6366f1"];

  useEffect(() => {
    const fetchAnalytics = async () => {
      setLoading(true);
      try {
        const res = await api.get('/tasks');
        const tasks = res.data;

        // Task Status Data
        const completed = tasks.filter(t => t.status === 'completed').length;
        const pending = tasks.filter(t => t.status === 'pending').length;
        const inProgress = tasks.filter(t => t.status === 'pending' && t.priority === 'high').length;

        setTaskStatusData([
          { name: "Completed", value: completed },
          { name: "Pending", value: pending },
          { name: "In Progress", value: inProgress },
        ]);

        // Priority Data
        const highCount = tasks.filter(t => t.priority === 'high').length;
        const mediumCount = tasks.filter(t => t.priority === 'medium').length;
        const lowCount = tasks.filter(t => t.priority === 'low').length;

        setPriorityData([
          { name: "High", value: highCount },
          { name: "Medium", value: mediumCount },
          { name: "Low", value: lowCount },
        ]);
      } catch (err) {
        console.error('Failed to fetch analytics');
      } finally {
        setLoading(false);
      }
    };
    fetchAnalytics();
  }, []);

  if (loading) {
    return (
      <div className="analytics-page">
        <Sidebar />
        <div className="analytics-content">
          <h2>Analytics Dashboard 📊</h2>
          <p>Loading analytics...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="analytics-page">

      <Sidebar />

      <div className="analytics-content">

        <h2>Analytics Dashboard </h2>

        <div className="charts-grid">

          {/* PIE CHART */}
          <div className="chart-card">
            <h3>Task Status</h3>

            {taskStatusData.length > 0 ? (
              <ResponsiveContainer width="100%" height={300}>
                <PieChart>
                  <Pie
                    data={taskStatusData}
                    dataKey="value"
                    nameKey="name"
                    outerRadius={100}
                    label
                  >
                    {taskStatusData.map((entry, index) => (
                      <Cell
                        key={`cell-${index}`}
                        fill={COLORS[index % COLORS.length]}
                      />
                    ))}
                  </Pie>
                  <Tooltip />
                </PieChart>
              </ResponsiveContainer>
            ) : (
              <p className="no-data">No data available</p>
            )}
          </div>

          {/* BAR CHART */}
          <div className="chart-card">
            <h3>Priority Breakdown</h3>

            {priorityData.length > 0 ? (
              <ResponsiveContainer width="100%" height={300}>
                <BarChart data={priorityData}>
                  <XAxis dataKey="name" />
                  <YAxis />
                  <Tooltip />
                  <Bar dataKey="value" fill="#6366f1" />
                </BarChart>
              </ResponsiveContainer>
            ) : (
              <p className="no-data">No data available</p>
            )}
          </div>

        </div>
      </div>

    </div>
  );
}

export default AnalyticsPage;