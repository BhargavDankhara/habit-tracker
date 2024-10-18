import React from "react";
import AllHabitsTopBar from "./components/AllHabitsTopBar";
import RightSidebar from "./components/RightSidebar";
import HabitContainer from "./components/HabitContainer";
import HabitCompleted from "./components/HabitCompleted";

export default function AllHabits() {
  return (
    <div className="w-full flex">
      <div className="w-[80%] m-5">
        <AllHabitsTopBar />
        <HabitContainer />
        <HabitCompleted />
      </div>
      <RightSidebar />
    </div>
  );
}
