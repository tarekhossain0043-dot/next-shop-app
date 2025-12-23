import { ArrowRight } from "lucide-react";
import React from "react";

export default function Btn({ typed }: { typed: string }) {
  return (
    <button
      className={`px-6 rounded-sm  ${
        // typed === "orange" ? "bg-['#FA8232']" : "bg-['#fff']"
        typed === "orange" ? "bg-[#FA8232]" : "bg-[#EBC80C]"
      } flex items-center gap-2 group text-gray-900 uppercase text-[14px] font-bold leading-12 cursor-pointer transition-all duration-500 ease-in-out`}
    >
      shop now
      <ArrowRight className="w-4.5 h-4.5 cursor-pointer group-hover:translate-x-2 font-bold text-gray-900 transition-all duration-300 ease-in-out" />
    </button>
  );
}
