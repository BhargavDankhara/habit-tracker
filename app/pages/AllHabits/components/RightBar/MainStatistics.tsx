import React from "react";

export default function MainStatistics() {
  const statisticsInfo = [
    { id: 1, num: 6, subtitle: "Steps" },
    { id: 2, num: 15, subtitle: "Running" },
  ];

  return (
    <div className="flex mx-4 flex-col  justify-center gap-6 mt-20 bg-slate-50 rounded-xl p-5 pt-7 items-center">
      <span className=" font-bold text-xl cursor-pointer hover:text-customRed">
        Statistics
      </span>
      <div className="relative pt-3">
        <CircularProgressBar progress={50} />
        <div className="flex flex-col justify-center items-center absolute top-[54%] left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          <span className="font-bold text-xl text-customRed">50%</span>
          <span className="text-[11px]">{`Todays Progress`}</span>
        </div>
      </div>
      <div className="my-4 flex justify-center gap-6 flex-wrap items-center w-full">
        {statisticsInfo.map((singleItem, singleItemIndex) => (
          <div className="fleex items-center gap-3" key={singleItem}>
            <div className="w-2 h-2 bg-customRed rounded-full"></div>
            <div className="text-[12px]">
              <span className="flex flex-col font-bold">{singleItem.num}</span>
              <span className="text-gray-500">{singleItem.subtitle}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
