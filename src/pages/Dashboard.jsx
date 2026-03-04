
import { useNavigate } from "react-router-dom";
import "./Dashboard.css";

// Mock Data
const scanData = [
  {
    id: 1,
    name: "Website Scan",
    type: "Full",
    status: "Completed",
    progress: 100,
    vulnerabilities: { critical: 2, high: 4, medium: 7, low: 12 },
    lastScan: "2026-03-03 08:30 AM",
  },
  {
    id: 2,
    name: "API Scan",
    type: "Quick",
    status: "Scheduled",
    progress: 0,
    vulnerabilities: { critical: 0, high: 1, medium: 3, low: 5 },
    lastScan: "2026-03-02 02:45 PM",
  },
  {
    id: 3,
    name: "Mobile App Scan",
    type: "Full",
    status: "Failed",
    progress: 50,
    vulnerabilities: { critical: 3, high: 2, medium: 1, low: 0 },
    lastScan: "2026-03-03 09:15 AM",
  },
];

const Dashboard = () => {
  const navigate = useNavigate();

  const handleRowClick = (id) => {
    navigate(`/scan/${id}`);
  };

  return (
    <div className="dashboard-page">
      {/* Sidebar */}
      <div className="sidebar">
        <h2>Fenrir</h2>
        <nav>
          <ul>
            <li>Dashboard</li>
            <li>Projects</li>
            <li>Scans</li>
            <li>Schedule</li>
            <li>Notifications</li>
            <li>Settings</li>
            <li>Support</li>
          </ul>
        </nav>
        <div className="profile">
          <div className="avatar">U</div>
          <span>Username</span>
        </div>
      </div>

      {/* Main Content */}
      <div className="main-content">
        {/* Stats Bar */}
        <div className="stats-bar">
          <div className="stat critical">
            <span>Critical</span>
            <strong>5</strong>
          </div>
          <div className="stat high">
            <span>High</span>
            <strong>7</strong>
          </div>
          <div className="stat medium">
            <span>Medium</span>
            <strong>11</strong>
          </div>
          <div className="stat low">
            <span>Low</span>
            <strong>20</strong>
          </div>
        </div>

        {/* Scan Table */}
        <table className="scan-table">
          <thead>
            <tr>
              <th>Scan Name</th>
              <th>Type</th>
              <th>Status</th>
              <th>Progress</th>
              <th>Vulnerabilities</th>
              <th>Last Scan</th>
            </tr>
          </thead>
          <tbody>
            {scanData.map((scan) => (
              <tr key={scan.id} onClick={() => handleRowClick(scan.id)}>
                <td>{scan.name}</td>
                <td>{scan.type}</td>
                <td>
                  <span className={`status-chip ${scan.status.toLowerCase()}`}>
                    {scan.status}
                  </span>
                </td>
                <td>{scan.progress}%</td>
                <td>
                  <span className="badge critical">{scan.vulnerabilities.critical}</span>
                  <span className="badge high">{scan.vulnerabilities.high}</span>
                  <span className="badge medium">{scan.vulnerabilities.medium}</span>
                  <span className="badge low">{scan.vulnerabilities.low}</span>
                </td>
                <td>{scan.lastScan}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Dashboard;