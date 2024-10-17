"use client";

import { useAuth } from "@clerk/nextjs";
import Link from "next/link";
import React from "react";

export default function Navbar() {
  const { userId } = useAuth();

  return (
    <header>
      <div className="p-8 px-20">
        <div className="sm:flex sm:items-center sm:justify-between">
          <div className="text-center sm:text-left mb-7 sm:mb-0">
            <div className="flex gap-2 items-center sm:justify-start justify-center">
              <span className="text-2xl font-light flex items-center gap-2">
                <span className="font-bold text-customRed">Habit</span>
                <span className="font-light">Tracker</span>
              </span>
            </div>
          </div>

          <div>
            {userId ? (
              <Link href={"/dashboard"}>
                <button
                  type="button"
                  className="block rounded-lg px-0 py-3 text-sm font-medium text-white transition-all bg-customRed"
                >
                  Dashboard
                </button>
              </Link>
            ) : (
              <div className="mt-4 flex flex-col gap-4 sm:mt-0 sm:flex-row sm:items-center">
                <Link href={"/sign-in"}>
                  <button
                    type="button"
                    className="bg-customRed block sm:w-32 w-fill rounded-lg px-9 py-3 text-sm font-medium text-white transition focus:outline-none"
                  >
                    Sign In
                  </button>
                </Link>
                <Link href={"/sign-up"}>
                  <button
                    type="button"
                    className="block sm:w-32 w-fill rounded-lg px-9 py-3 text-sm font-medium border transition focus:outline-none hover:bg-customRed hover:text-white border-customRed text-customRed"
                  >
                    Sign Up
                  </button>
                </Link>
              </div>
            )}
          </div>
        </div>
      </div>
    </header>
  );
}
