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

  // 🔥 upgraded form
  const [form, setForm] = useState({
    title: "",
    description: "",
    priority: "medium",
    dueDate: ""
  });

  // GET TASKS
  const fetchTasks = async () => {
    try {
      const q = search ? `?search=${encodeURIComponent(search)}` : "";
      const res = await api.get(`/tasks${q}`);
      setTasks(res.data);
    } catch (err) {
      toast.error("Failed to load tasks");
    }
  };

  useEffect(() => {
    fetchTasks();
  }, [search]);

  // CREATE TASK
  const addTask = async () => {
    if (!form.title) return toast.error("Task title required");

    try {
      const res = await api.post("/tasks", form);

      setTasks((prev) => [res.data, ...prev]);

      setForm({
        title: "",
        description: "",
        priority: "medium",
        dueDate: ""
      });

      setModalOpen(false);
      toast.success("Task created");
    } catch (err) {
      toast.error("Failed to create task");
    }
  };

  // DELETE
  const deleteTask = async (id) => {
    try {
      await api.delete(`/tasks/${id}`);
      setTasks(tasks.filter((t) => t._id !== id));
      toast.info("Task deleted");
    } catch (err) {
      toast.error("Failed to delete task");
    }
  };

  // TOGGLE STATUS
  const toggleComplete = async (id) => {
    try {
      const task = tasks.find((t) => t._id === id);
      const newStatus =
        task.status === "completed" ? "pending" : "completed";

      const res = await api.put(`/tasks/${id}`, {
        status: newStatus,
      });

      setTasks(tasks.map((t) => (t._id === id ? res.data : t)));
      toast.success("Task updated");
    } catch (err) {
      toast.error("Failed to update task");
    }
  };

  // EDIT
  const openEdit = (task) => {
    setEditMode(true);
    setModalOpen(true);
    setCurrentTaskId(task._id);

    setForm({
      title: task.title,
      description: task.description || "",
      priority: task.priority || "medium",
      dueDate: task.dueDate ? task.dueDate.split("T")[0] : "",
    });
  };

  const saveEdit = async () => {
    try {
      const res = await api.put(`/tasks/${currentTaskId}`, form);

      setTasks(
        tasks.map((t) =>
          t._id === currentTaskId ? res.data : t
        )
      );

      setModalOpen(false);
      setEditMode(false);
      toast.success("Task updated");
    } catch (err) {
      toast.error("Failed to update task");
    }
  };

  // FILTER
  const filteredTasks = tasks.filter((task) =>
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

      {/* LIST */}
      <div className="task-list">
        {filteredTasks.length === 0 ? (
          <p className="empty">No tasks found</p>
        ) : (
          filteredTasks.map((task) => (
            <div
              key={task._id}
              className={`task-card ${task.status}`}
            >
              <input
                type="checkbox"
                checked={task.status === "completed"}
                onChange={() => toggleComplete(task._id)}
              />

              <div
                className="task-info"
                onClick={() => openEdit(task)}
              >
                <h4>{task.title}</h4>

                <p className="desc">
                  {task.description || "No description"}
                </p>

                <div className="task-meta">
                  <span
                    className={`priority ${task.priority}`}
                  >
                    {task.priority}
                  </span>

                  <span className="due-date">
                    {" "}
                    {task.dueDate
                      ? new Date(task.dueDate).toLocaleDateString()
                      : "No due date"}
                  </span>
                </div>

                <span className={`badge ${task.status}`}>
                  {task.status}
                </span>
              </div>

              <div className="task-actions-btn">
                <button onClick={() => openEdit(task)}>
                  Edit
                </button>
                <button onClick={() => deleteTask(task._id)}>
                  Delete
                </button>
              </div>
            </div>
          ))
        )}
      </div>

      {/* MODAL */}
      {modalOpen && (
        <div className="modal-overlay">
          <div className="modal-card">

            <h2>
              {editMode ? "Edit Task" : "Create New Task"}
            </h2>

            <p>Fill all required details</p>

            {/* TITLE */}
            <div className="input-group">
              <label>Task Title</label>
              <input
                value={form.title}
                onChange={(e) =>
                  setForm({
                    ...form,
                    title: e.target.value,
                  })
                }
              />
            </div>

            {/* DESCRIPTION */}
            <div className="input-group">
              <label>Description</label>
              <textarea
                value={form.description}
                onChange={(e) =>
                  setForm({
                    ...form,
                    description: e.target.value,
                  })
                }
                placeholder="Task details..."
              />
            </div>

            {/* PRIORITY */}
            <div className="input-group">
              <label>Priority</label>
              <select
                value={form.priority}
                onChange={(e) =>
                  setForm({
                    ...form,
                    priority: e.target.value,
                  })
                }
              >
                <option value="high">High</option>
                <option value="medium">Medium</option>
                <option value="low">Low</option>
              </select>
            </div>

            <div className="input-group">
              <label>Due Date</label>
              <input
                type="date"
                value={form.dueDate}
                onChange={(e) =>
                  setForm({
                    ...form,
                    dueDate: e.target.value,
                  })
                }
              />
            </div>

            
            <div className="modal-buttons">
              <button
                className="secondary-btn"
                onClick={editMode ? saveEdit : addTask}
              >
                {editMode ? "Save Changes" : "Create Task"}
              </button>

              <button
                className="primary-btn "
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