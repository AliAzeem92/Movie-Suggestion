// MovieTracker.tsx

import React from "react";

const Header: React.FC = () => {
  return (
    <div className="flex">
      {/* Heading */}
      <div className="flex text-white">
        <h1 className="text-[35px] font-[600] mt-[30px] ml-[80px] font-semibold text-black font-caros-bold">
          The <br /> Movie <br /> Tracker
        </h1>
      </div>

      {/* Search Bar */}
      <div className="mt-[50px] ml-[205px] ">
        <input
          type="text"
          placeholder="🔍 Search a movie or a series"
          className="w-[630px] h-[57px]   border border-gray-300 rounded-[30px] bg-[#D9D9D9] text-center text-black-800 focus:outline-none focus:border-blue-500 transition-all duration-300 ease-out"
        />
      </div>
    </div>
  );
};

export default Header;
