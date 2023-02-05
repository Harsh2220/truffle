import React from "react";

export default function Navbar() {
  return (
    <div className="flex w-full justify-between items-center h-[83px] border-b-2 border-[#F5F5F5] px-6 py-7">
      <h1 className="text-[#252F40] font-bold text-2xl">Dashboard</h1>
      <div className="flex items-center gap-2">
        <img src="avatar.svg" alt="avatar" />
        <p className="text-[#67748E] font-medium">Evan Winter</p>
        <div className="relative">
          <img src="bell.svg" alt="notification" />
          <p className="absolute text-xs bottom-2 left-1 px-1 bg-[#F5222D] rounded-full text-white">
            4
          </p>
        </div>
      </div>
    </div>
  );
}
