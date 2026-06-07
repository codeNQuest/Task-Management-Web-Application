import Sidebar from "../../components/Sidebar/Sidebar";

function TasksPage() {
  return (
    <div style={{ display: "flex" }}>
      <Sidebar />
      <div style={{ padding: "20px" }}>
        <h1>Tasks Page</h1>
      </div>
    </div>
  );
}

export default TasksPage;