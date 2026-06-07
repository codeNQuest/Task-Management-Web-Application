import Sidebar from "../../components/Sidebar/Sidebar";

function SettingsPage() {
  return (
    <div style={{ display: "flex" }}>
      <Sidebar />
      <div style={{ padding: "20px" }}>
        <h1>Settings</h1>
        <p>User preferences will go here ⚙️</p>
      </div>
    </div>
  );
}

export default SettingsPage;