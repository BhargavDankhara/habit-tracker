import React from "react";

export default function HeroSection() {
  return (
    <div className="flex flex-col mx-16 items-center mt-[100px] gap-6">
      <span className="font-bold text-3xl text-center">
        Build the habits that <span className="text-customRed">Matters!</span>
      </span>
      <p className="text-center text-sm sm:w-[430px] w-[370px]">
        &quot;Transform your routines, one habit at a time. Track, improve, and
        celebrate progress on your journey to a better you.&quot;
      </p>

      <button
        type="button"
        className="block text-sm font-light rounded-lg px-9 py-3 text-white transition bg-customRed focus:outline-none"
      >
        Let&apos;s get started!
      </button>
    </div>
  );
}
