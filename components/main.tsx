"use client";

import { CustomCard } from "./card";

export const MainContent = () => {
  return (
    <div className="bg-gradient-to-r from-fuchsia-950 to-gray-950 h-[94.5vh] mt-[-3vh]">
      <div>
        <h1 className="text-slate-200 flex justify-start text-2xl font-bold ml-10 pt-10">COURSES</h1>
        <div className="flex justify-evenly align-middle">
          <CustomCard></CustomCard>
          <CustomCard></CustomCard>
          <CustomCard></CustomCard>
        </div>

        <h1 className="text-slate-200 flex justify-start text-2xl font-bold ml-10">QUIZ</h1>
        <div className="flex justify-evenly align-middle">
          <CustomCard></CustomCard>
          <CustomCard></CustomCard>
          <CustomCard></CustomCard>
        </div>
      </div>
    </div>
  );
};
