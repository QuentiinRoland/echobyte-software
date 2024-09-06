import React from "react";
import { Numbers } from "./Numbers";
const NumberSection = () => {
  return (
    <div className="flex gap-4">
      {Numbers.map((number, index) => (
        <div className="relative flex flex-col gap-2 items-center justify-center text-center text-sm text-gray-300 py-2 px-4 bg-[#15172c] border-gray-700 border rounded-lg shadow-inner-custom w-1/4">
          <strong className="text-xl text-white font-extrabold">
            {number.number}
          </strong>
          <p>{number.paragraph}</p>
        </div>
      ))}
    </div>
  );
};

export default NumberSection;
