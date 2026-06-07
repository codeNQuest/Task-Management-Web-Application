import { useState, useEffect } from "react";
import { toast } from "react-toastify";
import "./TaskManager.css";
import api from "../../api/axios";

function TaskManager({ search }) {
  const [tasks, setTasks] = useState([]);
  const [filter, setFilter] = useState("all");

  const [modalOpen, setModalOpen] = useState(false);
  const [editMode, setEditMode] = useState(false);
  const [currentTaskId, setCurrentTaskId] = useState(null);

  const [form, setForm] = useState({ title: "", priority: "medium", description: "" });

  const fetchTasks = async () => {
    try {
      const q = search ? `?search=${encodeURIComponent(search)}` : '';
      const res = await api.get(`/tasks${q}`);
      setTasks(res.data);
    } catch (err) {
      toast.error('Failed to load tasks');
    }
  };

  useEffect(() => { fetchTasks(); }, [search]);

  const addTask = async () => {
    if (!form.title) return toast.error("Task title required");
    try {
      const res = await api.post('/tasks', { title: form.title, description: form.description, priority: form.priority, dueDate: form.dueDate });
      setTasks(prev => [res.data, ...prev]);
      setForm({ title: "", priority: "medium", description: "" });
      setModalOpen(false);
      toast.success("Task created");
    } catch (err) {
      toast.error('Failed to create task');
    }
  };

  const deleteTask = async (id) => {
    try {
      await api.delete(`/tasks/${id}`);
      setTasks(tasks.filter(t => t._id !== id));
      toast.info("Task deleted");
    } catch (err) {
      toast.error('Failed to delete task');
    }
  };

  const toggleComplete = async (id) => {
    try {
      const task = tasks.find(t => t._id === id);
      const newStatus = task.status === 'completed' ? 'pending' : 'completed';
      const res = await api.put(`/tasks/${id}`, { status: newStatus });
      setTasks(tasks.map(t => t._id === id ? res.data : t));
      toast.success('Task updated');
    } catch (err) {
      toast.error('Failed to update task');
    }
  };

  const openEdit = (task) => {
    setEditMode(true);
    setModalOpen(true);
    setCurrentTaskId(task._id);
    setForm({ title: task.title, priority: task.priority || 'medium', description: task.description || '' });
  };

  const saveEdit = async () => {
    try {
      const res = await api.put(`/tasks/${currentTaskId}`, { title: form.title, priority: form.priority, description: form.description });
      setTasks(tasks.map(t => t._id === currentTaskId ? res.data : t));
      setModalOpen(false);
      setEditMode(false);
      toast.success('Task updated');
    } catch (err) {
      toast.error('Failed to update task');
    }
  };

  const filteredTasks = tasks.filter(task => filter === "all" ? true : task.status === filter);

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
          <>
            {filteredTasks.map(task => (
              <div key={task._id} className={`task-card ${task.status}`}>

              <input
                type="checkbox"
                checked={task.status === "completed"}
                onChange={() => toggleComplete(task._id)}
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
                <button onClick={() => deleteTask(task._id)}>Delete</button>
              </div>

            </div>
            ))}
          </>
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