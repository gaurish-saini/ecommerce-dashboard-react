import React from "react";
import NotificationsPanel from "../components/NotificationsPanel";
import ActivitiesPanel from "../components/ActivitiesPanel";
import ContactsList from "../components/ContactsList";

const RightSidebar = ({ isOpen }) => {
  return (
    <div
      className={`max-w-[280px] flex flex-col gap-4 px-4 py-5 h-screen bg-white dark:bg-black border-l border-black/10 dark:border-white/10 transition-transform duration-300 ${
        isOpen ? "translate-x-0" : "translate-x-full"
      }`}
    >
      <NotificationsPanel />
      <ActivitiesPanel />
      <ContactsList />
    </div>
  );
};

export default RightSidebar;
