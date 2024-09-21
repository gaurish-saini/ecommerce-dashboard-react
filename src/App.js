import React from "react";
import { ThemeProvider } from "./context/ThemeContext";
import Sidebar from "./components/Sidebar";
import TopNav from "./components/TopNav";
import NotificationsPanel from "./components/NotificationsPanel";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import DefaultDashboard from "./pages/DefaultDashboard";

const App = () => {
  return (
    <ThemeProvider>
      <Router>
        <div className="flex">
          <Sidebar />
          <div className="flex-1">
            <TopNav />
            <div className="p-6">
              <Routes>
                <Route path="/dashboard" element={<DefaultDashboard />} />
              </Routes>
            </div>
          </div>
          <NotificationsPanel />
        </div>
      </Router>
    </ThemeProvider>
  );
};

export default App;
