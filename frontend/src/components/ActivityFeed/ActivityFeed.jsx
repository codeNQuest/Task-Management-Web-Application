import { useState, useEffect } from "react";
import api from "../../api/axios";
import "./ActivityFeed.css";

function ActivityFeed() {
  const [activities, setActivities] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchActivities = async () => {
      setLoading(true);
      try {
        const res = await api.get('/tasks');
        // Transform tasks into activity items (most recent 5)
        const recentActivities = res.data.slice(0, 5).map((task, idx) => ({
          id: task._id,
          type: task.status === 'completed' ? 'complete' : 'create',
          title: task.status === 'completed' ? 'Task Completed' : 'Task Created',
          description: task.title,
          timestamp: new Date(task.updatedAt),
        }));
        setActivities(recentActivities);
      } catch (err) {
        console.error('Failed to load activities');
      } finally {
        setLoading(false);
      }
    };
    fetchActivities();
  }, []);

  const formatTime = (timestamp) => {
    const now = new Date();
    const diff = now - timestamp;
    const minutes = Math.floor(diff / 60000);
    const hours = Math.floor(diff / 3600000);
    const days = Math.floor(diff / 86400000);

    if (minutes < 1) return 'just now';
    if (minutes < 60) return `${minutes}m ago`;
    if (hours < 24) return `${hours}h ago`;
    return `${days}d ago`;
  };

  return (
    <div className="activity-feed">
      <h3>Recent Activity</h3>

      {loading ? (
        <p className="loading">Loading activities...</p>
      ) : activities.length === 0 ? (
        <p className="empty">No recent activities</p>
      ) : (
        <div className="activity-list">
          {activities.map((activity) => (
            <div key={activity.id} className="activity-item">
              <div className={`dot ${activity.type}`}></div>
              <div>
                <p><b>{activity.title}</b></p>
                <span>{activity.description}</span>
              </div>
              <small>{formatTime(activity.timestamp)}</small>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default ActivityFeed;