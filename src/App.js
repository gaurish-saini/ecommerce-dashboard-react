import React from "react";
import { ThemeProvider } from "./context/ThemeContext";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import TopNav from "./containers/TopNav";
import LeftSidebar from "./containers/LeftSidebar";
import RightSidebar from "./containers/RightSidebar";
import DefaultDashboard from "./pages/DefaultDashboard";

const App = () => {
  return (
    <ThemeProvider>
      <Router>
        <div className="flex max-w-[1440px] mx-auto">
          <LeftSidebar />
          <div className="flex-1">
            <TopNav />
            {/* Main content area where we show different dashboards */}
            <Routes>
              {/* Default Dashboard Route */}
              <Route path="/dashboard/default" element={<DefaultDashboard />} />

              {/* Add routes for other dashboards (eCommerce, Projects, etc.) here */}
              {/* Example:
              <Route path="/dashboard/ecommerce" element={<EcommerceDashboard />} />
              <Route path="/dashboard/projects" element={<ProjectsDashboard />} />
              <Route path="/dashboard/online-courses" element={<OnlineCoursesDashboard />} />
            */}
            </Routes>
          </div>
          <RightSidebar />
        </div>
      </Router>
    </ThemeProvider>
  );
};

export default App;
