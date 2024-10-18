import React from "react";
import AllHabitsTopBar from "./components/AllHabitsTopBar";
import HabitContainer from "./components/HabitContainer";
import HabitCompleted from "./components/HabitCompleted";
import HabitsRightSideBar from "./components/HabitsRightSideBar";

export default function AllHabits() {
  return (
    <div className="w-full flex">
      <div className="w-[80%] m-5">
        <AllHabitsTopBar />
        <HabitContainer />
        <HabitCompleted />
      </div>
      <HabitsRightSideBar />
    </div>
  );
}
