import { UserButton, useUser } from "@clerk/nextjs";
import React from "react";

export default function UserProfile() {
  const userButtonApperarance = {
    elements: {
      userButtonAvatarBox: "w-14 h-14",
      userButtonPopoverActioinButton: "text-red-600",
    },
  };
  const { user } = useUser();

  return (
    <div className="flex flex-col gap-3 items-center justify-center mt-9">
      <UserButton appearance={userButtonApperarance} />
      <div>
        <span>{user?.fullName}</span>
      </div>
    </div>
  );
}
