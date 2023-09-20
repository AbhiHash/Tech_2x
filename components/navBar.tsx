"use client";

import { MenuItem, Select } from "@mui/material";
import { useState } from "react";

interface NavbarProps {
  LogIn: any;
}

export const CustomNavbar = (props: NavbarProps) => {
  const [isProfileOpen, setIsProfileOpen] = useState(false);

  const handleProfileClick = () => {
    setIsProfileOpen(!isProfileOpen);
  };

  return (
    <div className="bg-gradient-to-r from-c-purple to-gray-950 h-20">
      <h1 className=" text-purple-600/100 font-bold text-3xl flex align-middle py-5 px-4">
        tecH_2x
      </h1>
      <div className="  flex justify-end align-middle -mt-11">
        <li className="text-slate-200/100 list-none mx-5 cursor-pointer">
          HOME
        </li>
        <li className="text-slate-200/100 list-none mx-5 cursor-pointer">
          MY COURSES
        </li>
        <li className="text-slate-200/100 list-none mx-5 cursor-pointer">
          ABOUT US
        </li>
        <li className="text-slate-200/100 list-none mx-3 cursor-pointer">
          PROFILE
          <span onClick={handleProfileClick}> ▼</span>
          {isProfileOpen && (
            <Select
              open={isProfileOpen}
              onClose={() => setIsProfileOpen(false)}
              onOpen={() => setIsProfileOpen(true)}
            >
              <MenuItem onClick={() => props.LogIn()}>LogOut</MenuItem>
              <MenuItem>Account</MenuItem>
            </Select>
          )}
        </li>
      </div>
      <hr className="flex-grow border-t border-neutral-600 relative mt-8" />

      {/* <hr className="flex-grow border-t border-gray-300"> */}
    </div>
  );
};
