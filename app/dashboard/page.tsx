"use client";

import React, { useEffect, useState } from "react";
import Sidebar from "../components/SideBar/Sidebar";
import AllHabits from "../pages/AllHabits/AllHabits";
import Statistics from "../pages/Statistics/Statistics";
import Areas from "../pages/Areas/Areas";
import { useGlobalContextProvider } from "../contextApi";
import { menuItemType } from "../types/MenuItemType";

function Dashboard() {
  const { menuItemsObject } = useGlobalContextProvider();
  const { menuItems } = menuItemsObject;
  const [selectedMenu, setSelectedMenu] = useState<menuItemType | null>(null);
  let selectComponent = null;

  useEffect(() => {
    menuItems.map((singleItem) => {
      if (singleItem.isSelected) {
        setSelectedMenu(singleItem);
      }
    });
  }, [menuItems]);

  switch (selectedMenu?.name) {
    case "All Habits":
      selectComponent = <AllHabits />;
      break;
    case "Statistics":
      selectComponent = <Statistics />;
      break;
    case "Areas":
      selectComponent = <Areas />;
      break;
    case "All Areas":
      break;
  }

  return (
    <div className="flex bg-slate-100">
      <Sidebar />
      {selectComponent}
    </div>
  );
}

export default Dashboard;
