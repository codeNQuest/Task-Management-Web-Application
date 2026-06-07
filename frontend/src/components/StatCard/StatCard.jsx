import "./StatCard.css";

function StatCard({ title, count, icon, color }) {
  return (
    <div className="stat-card">
      <div
        className="icon-box"
        style={{ background: color }}
      >
        {icon}
      </div>

      <div>
        <h4>{title}</h4>
        <h2>{count}</h2>
      </div>
    </div>
  );
}

export default StatCard;