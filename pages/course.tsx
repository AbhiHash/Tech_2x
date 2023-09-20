"use client";

import { CustomNavbar } from "components/navBar";
import { signOut } from "next-auth/react";

export default function Course() {
  return (
    <div>
      <CustomNavbar LogOut={signOut} />
      <div className="bg-gradient-to-r from-c-purple to-gray-950 h-[91.5vh] w-full">
        <div className="bg-custom-purple w-[98vw] h-52 relative z-0 top-6 left-5 right-5 rounded-lg text-white">
          DATA STRUCTURES AND ALGORITHMS
        </div>
        <div className="relative z-0 top-10 left-5 rounded-lg border-2 border-b-purple h-[63vh] w-[80vw] text-white">
          ewfewfe
        </div>
        <div className="relative z-0 top-[-29.3vw] left-[82vw] rounded-lg border-2 border-b-purple h-[40vh] w-[17vw] text-white">
          ewfewfe
        </div>
        <div className="relative z-0 top-[-28.3vw] left-[82vw] rounded-lg border-2 border-b-purple h-[21vh] w-[17vw] text-white">
          ewfewfe
        </div>
      </div>
    </div>
  );
}
