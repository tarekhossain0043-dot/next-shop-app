import React from "react";
import Btn from "./Btn";

export default function BlackFridayOfer() {
  return (
    <div className="bg-gray-900 py-4.5 text-white relative">
      <div className="mx-auto px-2 sm:max-w-xl md:max-w-2xl lg:max-w-4xl xl:max-w-6xl">
        <div className="flex items-center justify-between">
          {/* left */}
          <div className="flex items-center gap-3">
            <div className="px-2.5 py-1.5 flex items-center capitalize cursor-pointer justify-center -rotate-2 bg-yellow-600 text-black font-semibold text-[20px] leading-7">
              black
            </div>
            <span className="text-[24px] leading-8 font-semibold text-white capitalize">
              friday
            </span>
          </div>
          {/* middle */}
          <div className="flex items-center gap-2">
            <span className="font-medium text-[14px] leading-5 text-white">
              Up to
            </span>
            <h4 className="mb-0 font-semibold text-[40px] leading-12 text-[#EBC80C]">
              59%
            </h4>
            <span className="font-semibold text-[20px] leading-7 text-white">
              OFF
            </span>
          </div>
          {/* right */}
          <div>
            <Btn typed="" />
          </div>
        </div>
      </div>
    </div>
  );
}
