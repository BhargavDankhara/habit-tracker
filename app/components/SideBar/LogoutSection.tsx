"use client";

import React from "react";
import { SignOutButton } from "@clerk/nextjs";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRightFromBracket } from "@fortawesome/free-solid-svg-icons";

export default function LogoutSection() {
  const logOutObject = { name: "logout", icon: faRightFromBracket };

  return (
    <div className="flex gap-2 items-center ml-8 p-2 mt-28 hover:text-customRed transition-all">
      <FontAwesomeIcon width={20} height={20} icon={logOutObject.icon} />
      <div>
        <SignOutButton />
      </div>
    </div>
  );
}
