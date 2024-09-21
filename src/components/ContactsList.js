import React from "react";
import contactsData from "../data/contactsData";

const ContactsList = () => {
  return (
    <div className="p-4 bg-white dark:bg-gray-800 shadow-md rounded-lg">
      <h4 className="text-gray-500 dark:text-gray-300 text-sm font-semibold mb-4">
        Contacts
      </h4>
      <ul className="space-y-4">
        {contactsData.map((contact, index) => (
          <li key={index} className="flex items-center">
            <img
              src={contact.avatar}
              alt={contact.name}
              className="w-10 h-10 rounded-full mr-3"
            />
            <div className="text-gray-900 dark:text-white">{contact.name}</div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ContactsList;
