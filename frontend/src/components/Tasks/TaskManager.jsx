import { useState, useEffect } from "react";
import { toast } from "react-toastify";
import "./TaskManager.css";

function TaskManager({ onStatsChange }) {
  const [tasks, setTasks] = useState([]);
  const [filter, setFilter] = useState("all");

  const [modalOpen, setModalOpen] = useState(false);
  const [editMode, setEditMode] = useState(false);
  const [currentTaskId, setCurrentTaskId] = useState(null);

  const [form, setForm] = useState({
    title: "",
    priority: "medium",
  });

  useEffect(() => {
    if (onStatsChange) {
      const stats = {
        total: tasks.length,
        completed: tasks.filter(t => t.status === "completed").length,
        inProgress: tasks.filter(t => t.status === "pending").length,
        overdue: 0,
      };

      onStatsChange(stats);
    }
  }, [tasks]);

  const addTask = () => {
    if (!form.title) return toast.error("Task title required");

    setTasks([
      {
        id: Date.now(),
        title: form.title,
        priority: form.priority,
        status: "pending",
      },
      ...tasks,
    ]);

    setForm({ title: "", priority: "medium" });
    setModalOpen(false);

    toast.success("Task created");
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter(t => t.id !== id));
    toast.info("Task deleted");
  };

  const toggleComplete = (id) => {
    setTasks(
      tasks.map(task =>
        task.id === id
          ? {
              ...task,
              status:
                task.status === "completed" ? "pending" : "completed",
            }
          : task
      )
    );

    toast.success("Task updated");
  };

  const openEdit = (task) => {
    setEditMode(true);
    setModalOpen(true);
    setCurrentTaskId(task.id);
    setForm({ title: task.title, priority: task.priority });
  };

  const saveEdit = () => {
    setTasks(
      tasks.map(task =>
        task.id === currentTaskId
          ? { ...task, title: form.title, priority: form.priority }
          : task
      )
    );

    setModalOpen(false);
    setEditMode(false);
    toast.success("Task updated");
  };

  const filteredTasks = tasks.filter(task =>
    filter === "all" ? true : task.status === filter
  );

  return (
    <div className="task-manager">

      {/* HEADER */}
      <div className="task-header">
        <h3>Tasks</h3>

        <div className="task-actions">
          <select onChange={(e) => setFilter(e.target.value)}>
            <option value="all">All</option>
            <option value="pending">Pending</option>
            <option value="completed">Completed</option>
          </select>

          <button onClick={() => setModalOpen(true)}>
            + Add Task
          </button>
        </div>
      </div>

      {/* TASK LIST */}
      <div className="task-list">
        {filteredTasks.length === 0 ? (
          <p className="empty">No tasks found</p>
        ) : (
          filteredTasks.map(task => (
            <div key={task.id} className={`task-card ${task.status}`}>

              <input
                type="checkbox"
                checked={task.status === "completed"}
                onChange={() => toggleComplete(task.id)}
              />

              <div className="task-info" onClick={() => openEdit(task)}>
                <h4>{task.title}</h4>
                <span className={`priority ${task.priority}`}>
                  {task.priority}
                </span>
                <span className={`badge ${task.status}`}>
                  {task.status}
                </span>
              </div>

              <div className="task-actions-btn">
                <button onClick={() => openEdit(task)}>Edit</button>
                <button onClick={() => deleteTask(task.id)}>Delete</button>
              </div>

            </div>
          ))
        )}
      </div>

      {/* MODAL (UPGRADED UI) */}
      {modalOpen && (
        <div className="modal-overlay">

          <div className="modal-card">

            <h2>{editMode ? "Edit Task" : "Create New Task"}</h2>
            <p>Fill in the details below</p>

            {/* INPUT GROUP */}
            <div className="input-group">
              <label>Task Title</label>
              <input
                type="text"
                placeholder="Enter task name..."
                value={form.title}
                onChange={(e) =>
                  setForm({ ...form, title: e.target.value })
                }
              />
            </div>

            {/* PRIORITY */}
            <div className="input-group">
              <label>Priority</label>
              <select
                value={form.priority}
                onChange={(e) =>
                  setForm({ ...form, priority: e.target.value })
                }
              >
                <option value="high">🔥 High</option>
                <option value="medium">⚡ Medium</option>
                <option value="low">🌱 Low</option>
              </select>
            </div>

            {/* BUTTONS */}
            <div className="modal-buttons">
              <button
                className="primary-btn"
                onClick={editMode ? saveEdit : addTask}
              >
                {editMode ? "Save Changes" : "Create Task"}
              </button>

              <button
                className="secondary-btn"
                onClick={() => {
                  setModalOpen(false);
                  setEditMode(false);
                }}
              >
                Cancel
              </button>
            </div>

          </div>
        </div>
      )}

    </div>
  );
}

export default TaskManager;