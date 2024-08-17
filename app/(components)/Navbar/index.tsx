"use client";

import { Bell, Menu, Sun } from "lucide-react";

const Navbar = () => {
  return (
    <div className="flex justify-between items-center w-full mb-7">
      {/* left side */}
      <div className="flex justify-between items-center gap-5">
        <button
          className="px-3 py-3 bg-gray-100 rounded-full hover:bg-blue-100"
          onClick={() => {}}
        >
          <Menu className="w-4 h-4" />
        </button>
      </div>
      <div className="relative">
        <input
          type="search"
          placeholder="Start type to search groups & products"
          className="pl-10 pr-4 py-2 w-50 md:w-80 border-2 border-gray-300 bg-white rounded-lg focus:outline-none focus:border-blue-500"
        />
        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-non">
            <Bell className=" text-gray-400" size={20}/>
        </div>
      </div>
      {/* right side */}
      <div className="flex justify-between items-center gap-5">
        <div className="hidden md:flex justify-between items-center gap-5">
            <div>
                <button onClick={() => {}}>
                    <Sun className="cusor-pointer text-gray-500" size={24}/>
                </button>
            </div>
            <div className="relative">
                <Bell className="cusor-pointer text-gray-500" size={24}/>
                <span className="absolute -top-2 -right-2 inline-flex items-center justify-center px-[0.4rem] py-1 text-xs font-semibold leading-none text-red-100 bg-red-400 rounded-full">2</span>
            </div>
            <hr className="w-0 h-7 border border-solid border-l border-gray-300 mx-3"/>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
