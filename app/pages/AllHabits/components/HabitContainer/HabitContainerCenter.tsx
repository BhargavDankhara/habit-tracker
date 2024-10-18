import { faCode } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  CheckCircle,
  MoreVert,
  RadioButtonUnchecked,
} from "@mui/icons-material";
import { Checkbox, IconButton } from "@mui/material";
import React from "react";

export default function HabitContainerCenter() {
  return (
    <div>
      <HabitCard />
    </div>
  );

  function HabitCard() {
    return (
      <div className="flex p-3 items-center justify-between ">
        <Checkbox
          icon={<RadioButtonUnchecked />}
          checkedIcon={<CheckCircle />}
        />

        <div className="flex justify-between gap-2 w-full p-3 rounded-md bg-slate-50">
          <div className=" w-full">
            <div className="flex gap-2 justify-between">
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

            <div className="flex gap-2 mt-3 ">
              <div className="p-1 text-white text-[12px] rounded-md px-2 bg-red-300">
                <span className="text-customRed">Areas</span>
              </div>
              <div className="p-1 text-white text-[12px] rounded-md px-2 bg-red-300">
                <span className="text-customRed">Areas</span>
              </div>
            </div>
          </div>

          <div className="w-10 flex items-center justify-center">
            <IconButton>
              <MoreVert />
            </IconButton>
          </div>
        </div>
      </div>
    );
  }
}
