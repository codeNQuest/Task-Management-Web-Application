import Sidebar from "../../components/Sidebar/Sidebar";
import TaskManager from "../../components/Tasks/TaskManager";
import "./TasksPage.css";

function TasksPage() {
  return (
    <div className="tasks-page">

      <Sidebar />

      <div className="tasks-content">

        <div className="tasks-header">
          <h2>Tasks </h2>
          <p>Manage all your tasks in one place</p>
        </div>

        <div className="tasks-card">
          <TaskManager />
        </div>

      </div>

    </div>
  );
}

export default TasksPage;