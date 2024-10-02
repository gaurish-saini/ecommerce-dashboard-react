# **Buywind Dashboard - A React Application**

This feature-rich, interactive React dashboard application is designed to handle various components such as dynamic tables, filters, pagination, search functionalities, sidebar navigation, and more. The project uses `react-router-dom` for routing, Tailwind CSS for styling, and state management via `useState`, `useEffect`, and custom hooks.

## **Design**

- Link to Design File: https://www.figma.com/design/6rMhyrUQYgy4NW03QQC3il/UI-Developer-Assignment-(Copy)?node-id=4-2473&t=6iHLhlanCiVgogoR-1.

## **Table of Contents**

- [Features](#features)
- [Technologies](#technologies)
- [Installation](#installation)
- [Custom Components](#custom-components)
- [Custom Hooks](#custom-hooks)
- [Deployment](#deployment)

---

## **Features**

1. **Dark Mode Support**: Complete dark mode styling using Tailwind CSS. Click the Sun icon in the top navigation to toggle between light and dark mode.
2. **Dynamic Order List**: A fully paginated, sortable, and filterable order list with status color codes. Click on the Orders card in the dashboard to view the Order List.
3. **Left and Right Sidebar**: Toggleable left and right sidebars with smooth slide-in and out transitions. Click on the sidebar icons in the top navigation on either side to toggle.
4. **Search Functionality**:
   - Global search functionality with keyboard shortcuts (`Cmd + /` or `Ctrl + /`) to quickly search and up/down key arrows to navigate.
5. **Breadcrumb Navigation**: A dynamic breadcrumb component that reflects the current route and provides a seamless user experience.
6. **Sort and Filter**:
   - Sort functionality to organize the table by user or other parameters.
   - Multi-select filters with interactive pills that allow the removal of applied filters.
7. **Custom Accordion Component**: Smooth accordion transitions for various page components.

---

## **Technologies**

- **React**: The core framework for building UI components.
- **Tailwind CSS**: Utility-first CSS framework for styling.
- **Framer Motion**: To handle animations(for eg: staggered animation) on different elements for a visual appeal.
- **React Router DOM**: For routing and navigation.
- **Recharts**: To implement charts and visualizations.
- **Custom Hooks**: For handling various functionalities such as dropdowns, keyboard shortcuts, and click outside.
- **SVG Icons**: Using scalable vector graphics for icons throughout the app.

---

## **Installation**

To get a local copy of the project up and running, follow these steps:

### **1. Clone the repository**

```bash
git clone https://github.com/gaurish-saini/ecommerce-dashboard-react.git
```

### **2. Navigate to the project directory**

```bash
cd ecommerce-dashboard-react
```

### **3. Install dependencies**

Before starting the project, install all required dependencies:

```bash
npm install
```

### **4. Start the development server**

To start the React development server on your local machine:

```bash
npm start
```

This will open the app in your default browser at `http://localhost:3000/`.

---

## **Custom Components**

### **1. `OverviewCard`**

- A reusable card component used for displaying key metrics (e.g., revenue, sales).

### **2. `Accordion`**

- Custom accordion with smooth animations and dynamic icons.

### **3. `Breadcrumb`**

- Dynamically generated breadcrumbs to match the current route.

### **4. `SearchInput`**

- A search bar with keyboard shortcut support and dropdown search suggestions.

### **5. `OrderList`**

- Handles table data, pagination, sorting, filtering, and row selection.

---

## **Custom Hooks**

### **1. `useOutsideClick`**

- Detects when a click occurs outside of a referenced element and triggers a callback.

### **2. `useKeyboardShortcut`**

- Registers and handles global keyboard shortcuts.

### **3. `useKeyboardNavigation`**

- Handles keyboard navigation for lists or dropdown items using arrow keys.

---

## **Deployment**

- This project is deployed here: https://byewind-juspay.netlify.app/
