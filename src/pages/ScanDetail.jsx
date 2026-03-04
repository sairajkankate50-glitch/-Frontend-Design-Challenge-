import { useState } from "react";
// import { useParams } from "react-router-dom";
import "./ScanDetail.css";

// Mock Data
const scanDetails = {
  id: 1,
  type: "Full",
  targets: ["https://example.com", "https://api.example.com"],
  startedAt: "2026-03-03 08:30 AM",
  credentials: "None",
  files: 3,
  checklists: 5,
  progress: 45,
  currentStep: 2,
  steps: ["Spidering", "Mapping", "Testing", "Validating", "Reporting"],
  consoleLogs: [
    { time: "08:31", message: "Started scan..." },
    { time: "08:32", message: "Found vulnerability at /login" },
    { time: "08:33", message: "Scanning /dashboard endpoint" },
  ],
  verificationLoops: [
    { time: "08:34", message: "Rechecking /login" },
  ],
  findings: [
    {
      severity: "Critical",
      title: "SQL Injection",
      endpoint: "/login",
      description: "Possible SQL injection vulnerability found.",
      timestamp: "08:32",
    },
    {
      severity: "High",
      title: "Insecure Cookie",
      endpoint: "/dashboard",
      description: "Cookie lacks HttpOnly flag.",
      timestamp: "08:33",
    },
    {
      severity: "Medium",
      title: "XSS",
      endpoint: "/profile",
      description: "Reflected XSS found in search input.",
      timestamp: "08:34",
    },
  ],
};

const ScanDetail = () => {
//   const { id } = useParams();
  const [activeTab, setActiveTab] = useState("activity");

  return (
    <div className="scan-detail-page">
      {/* Top Section */}
      <div className="top-section">
        <div className="progress-circle">
          <svg viewBox="0 0 36 36">
            <path
              className="circle-bg"
              d="M18 2.0845
                 a 15.9155 15.9155 0 0 1 0 31.831
                 a 15.9155 15.9155 0 0 1 0 -31.831"
            />
            <path
              className="circle"
              strokeDasharray={`${scanDetails.progress}, 100`}
              d="M18 2.0845
                 a 15.9155 15.9155 0 0 1 0 31.831
                 a 15.9155 15.9155 0 0 1 0 -31.831"
            />
            <text x="18" y="20.35" className="percentage">{scanDetails.progress}%</text>
          </svg>
        </div>
        <div className="step-tracker">
          {scanDetails.steps.map((step, index) => (
            <div
              key={index}
              className={`step ${index === scanDetails.currentStep ? "active" : ""}`}
            >
              {step}
            </div>
          ))}
        </div>
      </div>

      {/* Metadata */}
      <div className="metadata">
        <div><strong>Type:</strong> {scanDetails.type}</div>
        <div><strong>Targets:</strong> {scanDetails.targets.join(", ")}</div>
        <div><strong>Started At:</strong> {scanDetails.startedAt}</div>
        <div><strong>Credentials:</strong> {scanDetails.credentials}</div>
        <div><strong>Files:</strong> {scanDetails.files}</div>
        <div><strong>Checklists:</strong> {scanDetails.checklists}</div>
      </div>

      {/* Lower Section */}
      <div className="lower-section">
        {/* Live Console */}
        <div className="console-panel">
          <div className="tabs">
            <div
              className={`tab ${activeTab === "activity" ? "active" : ""}`}
              onClick={() => setActiveTab("activity")}
            >
              Activity Log
            </div>
            <div
              className={`tab ${activeTab === "verification" ? "active" : ""}`}
              onClick={() => setActiveTab("verification")}
            >
              Verification Loops
            </div>
          </div>
          <div className="log-output">
            {(activeTab === "activity"
              ? scanDetails.consoleLogs
              : scanDetails.verificationLoops
            ).map((log, index) => (
              <div key={index} className="log-entry">
                <span className="timestamp">{log.time}</span> - {log.message}
              </div>
            ))}
          </div>
        </div>

        {/* Finding Log */}
        <div className="finding-panel">
          {scanDetails.findings.map((find, index) => (
            <div key={index} className="finding-card">
              <span className={`badge ${find.severity.toLowerCase()}`}>{find.severity}</span>
              <div className="finding-header">
                <strong>{find.title}</strong>
                <span className="timestamp">{find.timestamp}</span>
              </div>
              <div className="endpoint">{find.endpoint}</div>
              <div className="description">{find.description}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom Status Bar */}
      <div className="status-bar">
        <div>Sub-agents: 3</div>
        <div>Parallel Executions: 2</div>
        <div>Operations: 12</div>
        <div>Critical: 1 | High: 1 | Medium: 1 | Low: 0</div>
      </div>
    </div>
  );
};

export default ScanDetail;