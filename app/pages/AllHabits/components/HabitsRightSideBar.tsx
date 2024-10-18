import React from "react";
import UserProfile from "./RightBar/UserProfile";
import MainStatistics from "./RightBar/MainStatistics";

export default function HabitsRightSideBar() {
  return (
    <div className="w-[30%] flex flex-col items-center bg-white">
      <UserProfile />
      <MainStatistics />
    </div>
  );
}
