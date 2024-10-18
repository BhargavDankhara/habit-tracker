import { faCode } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { CheckCircle, RadioButtonChecked } from "@mui/icons-material";
import { Checkbox } from "@mui/material";
import React from "react";

export default function HabitCompleted() {
  return (
    <div className="bg-white mt-7 p-8 rounded-md">
      <span className="font-bold text-lg mb-2">Habit Completed</span>
      <div className="mt-4 opacity-50">
        <HabitCard />
        <HabitCard />
        <HabitCard />
        <HabitCard />
      </div>
    </div>
  );
}

function HabitCard() {
  return (
    <div className="flex p-3 items-center justify-between">
      <Checkbox icon={<RadioButtonChecked />} checkedIcon={<CheckCircle />} />

      <div className="flex justify-between gap-2 w-full p-3 py-4 rounded-md bg-slate-50">
        <div className="w-full">
          <div className="flex gap-2 justif">
            <div className="flex gap-2 items-center">
              <FontAwesomeIcon
                className="p-3 rounded-full w-4 h-4 bg-customRed text-white"
                height={20}
                width={20}
                icon={faCode}
              />
              <span>Coading</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
