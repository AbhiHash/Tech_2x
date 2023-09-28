"use client";

import { MenuItem, Select } from "@mui/material";
import Link from "next/link";
import { useState } from "react";
import AccountCircleIcon from "@mui/icons-material/AccountCircleOutlined";
import NotificationsIcon from "@mui/icons-material/Notifications";
import HomeIcon from "@mui/icons-material/Home";

interface NavbarProps {
  LogOut?: any;
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
      <div className="  flex justify-end align-middle -mt-11 cursor-pointer text-slate-200/100 list-none">
        <li className="mx-5 ">
          <Link href="/">
            <HomeIcon></HomeIcon>
          </Link>
        </li>
        <li className="mx-5 ">
          <NotificationsIcon></NotificationsIcon>
        </li>
        <li className="mx-3 relative">
          <div className="relative mx-3">
            <AccountCircleIcon onClick={handleProfileClick}></AccountCircleIcon>
          </div>
          {isProfileOpen && (
            <div className="absolute top-2 right-0 z-20">
              <Select
                open={isProfileOpen}
                onClose={() => setIsProfileOpen(false)}
                onOpen={() => setIsProfileOpen(true)}
              >
                <Link href="/plan-assessment">Schdeule Test </Link>
                <MenuItem onClick={() => props.LogOut()}>LogOut</MenuItem>
              </Select>
            </div>
          )}
        </li>
      </div>
      <hr className="flex-grow border-t border-neutral-600 relative mt-8" />
    </div>
  );
};
