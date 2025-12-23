import React, { useState } from "react";
import Btn from "./Btn";
import { X } from "lucide-react";

export default function BlackFridayOfer() {
  const [blackFridayOffer, setBlackFridayOffer] = useState(true);
  return (
    <div
      className="bg-gray-900 py-4.5 text-white relative transition-all duration-300 ease-in-out scroll-smooth"
      style={blackFridayOffer ? { display: "block" } : { display: "none" }}
    >
      <div className="mx-auto px-2 sm:max-w-xl md:max-w-2xl lg:max-w-4xl xl:max-w-6xl">
        <div className="flex items-center justify-between">
          {/* left */}
          <div className="hidden sm:flex items-center gap-3">
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
          <div className="max-[600px]:hidden">
            <Btn typed="" />
          </div>
          <span
            onClick={() => setBlackFridayOffer((prev) => !prev)}
            className="md:absolute top-1/2 bg-[#303639] md:-translate-y-1/2 right-6 w-8 h-8 flex items-center justify-center cursor-pointer rounded-sm cursor-pointer transition-all duration-300 ease-in-out hover:text-white hover:scale-105 transform"
          >
            <X className="w-4 h-4" />
          </span>
        </div>
      </div>
    </div>
  );
}
