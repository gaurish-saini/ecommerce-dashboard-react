import React from "react";
import QuickInfoPanel from "../components/QuickInfoPanel";
import notificationsData from "../data/notificationsData";
import activitiesData from "../data/activitiesData";
import contactsData from "../data/contactsData";

const RightSidebar = ({ isOpen }) => {
  return (
    <div
      className={`max-w-[280px] flex flex-col gap-6 p-5 bg-white dark:bg-black border-l border-black/10 dark:border-white/10 transition-transform duration-300 ${
        isOpen ? "translate-x-0" : "translate-x-full"
      }`}
    >
      <QuickInfoPanel
        sectionTitle="Notifications"
        sectionData={notificationsData}
        verticleDivision={false}
        roundedIcon={false}
        timeStamp={true}
      />
      <QuickInfoPanel
        sectionTitle="Activities"
        sectionData={activitiesData}
        verticleDivision={true}
        roundedIcon={true}
        timeStamp={true}
      />
      <QuickInfoPanel
        sectionTitle="Contacts"
        sectionData={contactsData}
        verticleDivision={false}
        roundedIcon={true}
        timeStamp={false}
      />
    </div>
  );
};

export default RightSidebar;
