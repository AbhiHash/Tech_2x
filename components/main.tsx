"use client";

import { CustomCard } from "./card";

export const MainContent = () => {
  return (
    <div className="bg-gradient-to-r from-fuchsia-950 to-gray-950 h-[92vh] mt-[-3vh]">
      <div>
        <h1 className="text-slate-200 flex justify-starttext-2xl">COURSES</h1>
        <CustomCard></CustomCard>
      </div>
    </div>
  );
};
