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
          <div className="stats-grid">
            <div className="stat-card">
              <h4>Total Tasks</h4>
              <h2>0</h2>
            </div>

            <div className="stat-card">
              <h4>Completed</h4>
              <h2>0</h2>
            </div>

            <div className="stat-card">
              <h4>In Progress</h4>
              <h2>0</h2>
            </div>

            <div className="stat-card">
              <h4>Overdue</h4>
              <h2>0</h2>
            </div>
          </div>

          <div className="dashboard-row">
            <div className="tasks-section">
              <h3>Recent Tasks</h3>

              <table>
                <thead>
                  <tr>
                    <th>Task</th>
                    <th>Status</th>
                    <th>Priority</th>
                  </tr>
                </thead>

                <tbody>
                  <tr>
                    <td>No Tasks Yet</td>
                    <td>-</td>
                    <td>-</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="activity-section">
              <h3>Recent Activity</h3>

              <div className="activity-item">
                No activity yet
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;