import './TaskList.css';

function TaskList({ tasks, onDelete, onToggle, onEdit }) {
  if (tasks.length === 0) {
    return (
      <div className="empty-state">
        <p>No tasks yet! Create one to get started.</p>
      </div>
    );
  }

  return (
    <div className="task-list">
      {tasks.map(task => (
        <div key={task._id} className={`task-item ${task.status}`}>
          <div className="task-content">
            <div className="task-header">
              <input
                type="checkbox"
                checked={task.status === 'completed'}
                onChange={() => onToggle(task._id)}
                className="task-checkbox"
              />
              <h3 className={`task-title ${task.status === 'completed' ? 'completed' : ''}`}>
                {task.title}
              </h3>
            </div>
            {task.description && (
              <p className="task-description">{task.description}</p>
            )}
            <div className="task-meta">
              <span className={`status-badge ${task.status}`}>
                {task.status === 'completed' ? '✓ Completed' : '○ Pending'}
              </span>
            </div>
          </div>
          <div className="task-actions">
            <button
              className="btn-edit"
              onClick={() => onEdit(task)}
              title="Edit task"
            >
              ✎
            </button>
            <button
              className="btn-delete"
              onClick={() => onDelete(task._id)}
              title="Delete task"
            >
              ✕
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default TaskList;
