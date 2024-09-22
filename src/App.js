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
        <link
          rel="stylesheet"
          href="https://unpkg.com/leaflet@1.7.1/dist/leaflet.css"
          integrity="sha512-xodZBNTC5n17Xt2XYg5KU+wr1b4zLFpHk6Wf5eV0eN1U1zEvJ+vAr5U5tcTz4Vfiit/fmxtd/jr6MEhPeHKxwA=="
          crossorigin=""
        />
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
