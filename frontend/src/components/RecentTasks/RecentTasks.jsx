import "./RecentTasks.css";

function RecentTasks() {
  return (
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
  );
}

export default RecentTasks;