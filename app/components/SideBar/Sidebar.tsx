import React from "react";
import MenuSelection from "./MenuSelection";
import LogoutSection from "./LogoutSection";

export default function Sidebar() {
  return (
    <div className="border-r-2 h-screen p-10 bg-white">
      <div className="text-center sm:text-left mb-7 sm:mb-0">
        <div className="flex gap-2 items-center sm:justify-start justify-center">
          <span className="text-2xl font-light flex items-center gap-2">
            <span className="font-bold text-customRed">Habit</span>
            <span className="font-light">Tracker</span>
          </span>
        </div>
      </div>
      <MenuSelection />
      <LogoutSection />
    </div>
  );
}
