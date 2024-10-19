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
  const [isLeftSidebarOpen, setIsLeftSidebarOpen] = useState(false);
  const [isRightSidebarOpen, setIsRightSidebarOpen] = useState(false);

  const toggleLeftSidebar = () => setIsLeftSidebarOpen(!isLeftSidebarOpen);
  const toggleRightSidebar = () => setIsRightSidebarOpen(!isRightSidebarOpen);

  return (
    <ThemeProvider>
      <Router>
        <div className="relative flex overflow-x-hidden">
          <LeftSidebar isOpen={isLeftSidebarOpen} />
          <div
            className={`
              max-lg:w-full max-lg:m-0 flex flex-col basis-full transition-margin-x duration-1000 bg-white dark:bg-black
              ${!isLeftSidebarOpen ? "" : "ml-[14.75%]"} 
              ${!isRightSidebarOpen ? "" : "mr-[19.44%]"}
            `}
          >
            <TopNav
              toggleLeftSidebar={toggleLeftSidebar}
              toggleRightSidebar={toggleRightSidebar}
            />
            <main>
              <Routes>
                {/* Redirect root URL to /dashboards/default */}
                <Route
                  path="/"
                  element={<Navigate to="/dashboards/default" />}
                />

                {/* Default Dashboard Route */}
                <Route
                  path="/dashboards/default"
                  element={<DefaultDashboard />}
                />
                <Route path="/orders" element={<OrdersList />} />
              </Routes>
            </main>
          </div>
          <RightSidebar isOpen={isRightSidebarOpen} />
        </div>
      </Router>
    </ThemeProvider>
  );
};

export default App;
