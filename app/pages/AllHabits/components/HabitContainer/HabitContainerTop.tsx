import React from "react";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import ArrowCircleLeftIcon from "@mui/icons-material/ArrowCircleLeft";
import ArrowCircleRightIcon from "@mui/icons-material/ArrowCircleRight";

export default function HabitContainerTop() {
  return (
    <div className="p-3 flex justify-between items-center">
      <div className="flex gap-4 items-center">
        <div>
          <h2 className="font-bold text-lg">Sunday</h2>
          <span className="font-light text-[12px]">18 Oct 2024</span>
        </div>
        <div className="flex gap-1 ml-4">
          <div className="text-customRed cursor-pointer">
            <ArrowCircleLeftIcon />
          </div>
          <div className="text-customRed cursor-pointer">
            <ArrowCircleRightIcon />
          </div>
        </div>
      </div>
      <button className="flex gap-2 items-center bg-customRed text-white rounded-md text-sm p-2">
        <FontAwesomeIcon icon={faPlus} />
        <span>New Habit</span>
      </button>
    </div>
  );
}
