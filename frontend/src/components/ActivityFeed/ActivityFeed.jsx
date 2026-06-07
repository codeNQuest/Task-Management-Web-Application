import "./ActivityFeed.css";

function ActivityFeed() {
  return (
    <div className="activity-feed">
      <h3>Recent Activity</h3>

      <div className="activity-list">

        <div className="activity-item">
          <div className="dot create"></div>
          <div>
            <p><b>Task Created</b></p>
            <span>Design login page</span>
          </div>
          <small>2m ago</small>
        </div>

        <div className="activity-item">
          <div className="dot complete"></div>
          <div>
            <p><b>Task Completed</b></p>
            <span>Fix navbar UI</span>
          </div>
          <small>10m ago</small>
        </div>

        <div className="activity-item">
          <div className="dot update"></div>
          <div>
            <p><b>Task Updated</b></p>
            <span>Dashboard redesign</span>
          </div>
          <small>1h ago</small>
        </div>

      </div>
    </div>
  );
}

export default ActivityFeed;