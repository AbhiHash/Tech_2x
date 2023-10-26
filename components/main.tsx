"use client";

import { CustomCard } from "./card";
import { courses } from "../data/course";
export const MainContent = () => {
  return (
    <div className="bg-gradient-to-r from-c-purple to-gray-950 min-h-screen md:min-h-[93.5vh] mt-[-2vh]">
      <div>
        <h1 className="text-slate-200 flex justify-start text-2xl font-bold ml-10 pt-10">
          COURSES
        </h1>
<<<<<<< HEAD
        <div className="flex flex-col md:flex-row justify-evenly align-middle cursor-pointer">
          <CustomCard></CustomCard>
          <CustomCard></CustomCard>
          <CustomCard></CustomCard>
=======
        <div className="flex flex-col md:flex-row justify-evenly align-middle">
          {courses.map((data: any) => (
            <CustomCard key={data._id} courseData={data}></CustomCard>
          ))}
>>>>>>> 3058cea320c59f89d3c1367824b5fb86b43f8638
        </div>

        <h1 className="text-slate-200 flex justify-start text-2xl font-bold ml-10 mt-5 md:mt-10">
          QUIZ
        </h1>
        <div className="flex flex-col md:flex-row justify-evenly align-middle">
        {/* <CustomCard ></CustomCard> */}
        </div>
      </div>
    </div>
  );
};
