import React, { useState } from "react";
import { ThemeProvider } from "./context/ThemeContext";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom"; // Add Navigate for redirect
import TopNav from "./containers/TopNav";
import LeftSidebar from "./containers/LeftSidebar";
import RightSidebar from "./containers/RightSidebar";
import DefaultDashboard from "./pages/DefaultDashboard";
import OrdersList from "./pages/OrdersList";

const App = () => {
  const [isLeftSidebarOpen, setIsLeftSidebarOpen] = useState(true);
  const [isRightSidebarOpen, setIsRightSidebarOpen] = useState(true);

  const toggleLeftSidebar = () => setIsLeftSidebarOpen(!isLeftSidebarOpen);
  const toggleRightSidebar = () => setIsRightSidebarOpen(!isRightSidebarOpen);

  return (
    <ThemeProvider>
      <Router>
        <div className="flex max-w-[1440px] mx-auto">
          {isLeftSidebarOpen && <LeftSidebar isOpen={isLeftSidebarOpen} />}
          <div className="flex-1 bg-white dark:bg-black">
            <TopNav
              toggleLeftSidebar={toggleLeftSidebar}
              toggleRightSidebar={toggleRightSidebar}
            />
            <Routes>
              {/* Redirect root URL to /dashboard/default */}
              <Route path="/" element={<Navigate to="/dashboard/default" />} />

              {/* Default Dashboard Route */}
              <Route path="/dashboard/default" element={<DefaultDashboard />} />
              <Route path="/orders" element={<OrdersList />} />
            </Routes>
          </div>
          {isRightSidebarOpen && <RightSidebar isOpen={isRightSidebarOpen} />}
        </div>
      </Router>
    </ThemeProvider>
  );
};

export default App;
