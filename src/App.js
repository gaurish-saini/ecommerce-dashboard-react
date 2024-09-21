import React from "react";
import { ThemeProvider } from "./context/ThemeContext";
import Sidebar from "./components/Sidebar";
import TopNav from "./components/TopNav";
import NotificationsPanel from "./components/NotificationsPanel";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import DefaultDashboard from "./pages/DefaultDashboard";
import ActivitiesPanel from "./components/ActivitiesPanel";
import ContactsList from "./components/ContactsList";

const App = () => {
  return (
    <ThemeProvider>
      <Router>
        <div className="flex max-w-[1440px] mx-auto">
          <Sidebar />
          <div className="flex-1">
            <div>
              <TopNav />
            </div>
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
          <div className="w-[280px]">
            <NotificationsPanel />
            <ActivitiesPanel />
            <ContactsList />
          </div>
        </div>
      </Router>
    </ThemeProvider>
  );
};

export default App;
