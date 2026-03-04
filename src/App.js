import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";
import './App.css';
import Login from "./pages/Login.jsx";
import Dashboard from "./pages/Dashboard.jsx";
import ScanDetail from "./pages/ScanDetail.jsx";

function App() {
   const [theme, setTheme] = useState("light");

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <div className={theme === "dark" ? "dark-theme" : "light-theme"}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login toggleTheme={toggleTheme} />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/scan/:id" element={<ScanDetail />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
  export default App;
