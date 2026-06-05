import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../hooks/useAuth';
import { taskAPI } from '../../utils/api';
import TaskForm from '../../components/TaskForm';
import TaskList from '../../components/TaskList';
import './Dashboard.css';

function Dashboard() {
  const { user, logout } = useAuth();
  const navigate = useNavigate();
  const [tasks, setTasks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [editingTask, setEditingTask] = useState(null);

  useEffect(() => {
    fetchTasks();
  }, []);

  const fetchTasks = async () => {
    try {
      setLoading(true);
      const response = await taskAPI.getTasks();
      setTasks(response.data.tasks);
      setError('');
    } catch (err) {
      setError(err.response?.data?.message || 'Failed to fetch tasks');
    } finally {
      setLoading(false);
    }
  };

  const handleAddTask = async (taskData) => {
    try {
      const response = await taskAPI.createTask(taskData.title, taskData.description);
      setTasks([response.data.task, ...tasks]);
      setError('');
    } catch (err) {
      setError(err.response?.data?.message || 'Failed to create task');
    }
  };

  const handleUpdateTask = async (taskData) => {
    try {
      const response = await taskAPI.updateTask(
        editingTask._id,
        taskData.title,
        taskData.description,
        editingTask.status
      );
      setTasks(tasks.map(t => t._id === editingTask._id ? response.data.task : t));
      setEditingTask(null);
      setError('');
    } catch (err) {
      setError(err.response?.data?.message || 'Failed to update task');
    }
  };

  const handleDeleteTask = async (taskId) => {
    try {
      await taskAPI.deleteTask(taskId);
      setTasks(tasks.filter(t => t._id !== taskId));
      setError('');
    } catch (err) {
      setError(err.response?.data?.message || 'Failed to delete task');
    }
  };

  const handleToggleStatus = async (taskId) => {
    try {
      const response = await taskAPI.toggleTaskStatus(taskId);
      setTasks(tasks.map(t => t._id === taskId ? response.data.task : t));
      setError('');
    } catch (err) {
      setError(err.response?.data?.message || 'Failed to update task status');
    }
  };

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  return (
    <div className="dashboard">
      <div className="dashboard-header">
        <div className="header-content">
          <h1>Task Management Dashboard</h1>
          <div className="user-info">
            <span className="user-name">Welcome, {user?.name}!</span>
            <button className="logout-btn" onClick={handleLogout}>
              Logout
            </button>
          </div>
        </div>
      </div>

      <div className="dashboard-container">
        <div className="task-form-section">
          <h2>{editingTask ? 'Edit Task' : 'Add New Task'}</h2>
          <TaskForm
            onSubmit={editingTask ? handleUpdateTask : handleAddTask}
            initialData={editingTask}
            onCancel={() => setEditingTask(null)}
          />
        </div>

        {error && <div className="error-message">{error}</div>}

        <div className="task-list-section">
          <h2>Your Tasks ({tasks.length})</h2>
          {loading ? (
            <div className="loading">Loading tasks...</div>
          ) : (
            <TaskList
              tasks={tasks}
              onDelete={handleDeleteTask}
              onToggle={handleToggleStatus}
              onEdit={setEditingTask}
            />
          )}
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
