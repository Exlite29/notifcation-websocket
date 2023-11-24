import React from "react";
import { BellIcon, ChatAltIcon, CogIcon } from "@heroicons/react/outline";
export const NavBar = () => {
  return (
    <div className="flex justify-around bg-green-500 h-14 items-center text-black">
      <span className="font-bold text-sm">Avryx App</span>
      <div className="flex items-center">
        <div className="flex relative ">
          <BellIcon className=" ml-2 h-6 w-6 text-blue-500 cursor-pointer hover" />
          <span className="w-4 h-4 bg-red-800 rounded-full py-[-0.5px] px-1  font-bold text-xs flex absolute">
            2
          </span>
          <ChatAltIcon className=" ml-2 h-6 w-6 text-blue-500 cursor-pointer hover:bg-sky-700 " />
          <span className="w-4 h-4 bg-red-800 rounded-full py-[-0.5px] px-1 font-bold text-xs flex absolute ml-8">
            2
          </span>
          <CogIcon className=" ml-2 h-6 w-6 text-blue-500 cursor-pointer hover:bg-sky-700 " />
          <span className="w-4 h-4 bg-red-800 rounded-full py-[-0.5px] px-1 font-bold  text-xs flex absolute ml-16 mb-5 ">
            2
          </span>
        </div>
      </div>
    </div>
  );
};
