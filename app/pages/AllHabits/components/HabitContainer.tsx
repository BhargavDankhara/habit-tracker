import React from "react";
import HabitContainerTop from "./HabitContainer/HabitContainerTop";
import HabitContainerCenter from "./HabitContainer/HabitContainerCenter";

export default function HabitContainer() {
  return (
    <div className="mt-5 bg-white rounded-md p-5 flex flex-col gap-3">
      <HabitContainerTop />
      <HabitContainerCenter />
    </div>
  );
}
