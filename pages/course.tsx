"use client";

import Link from "next/link";
import LinearProgress, {
  LinearProgressProps,
} from "@mui/material/LinearProgress";

export default function Course() {
  const renderCustomDiv = (
    gradientColor: any,
    text: any,
    width: any,
    height: any
  ) => (
    <div
      className={`bg-gradient-to-r ${gradientColor} to-gray-950 h-${height} w-${width} relative left-1 mt-8 `}
    >
      {text}
    </div>
  );

  const divData = [
    { text: "Array", id: 1 },
    { text: "String", id: 2 },
    { text: "Stack", id: 3 },
    { text: "Linked List", id: 4 },
    { text: "Graph", id: 5 },
  ];

  return (
    <div>
      <div className="bg-gradient-to-r from-c-purple to-gray-950 h-[91.5vh] w-full">
        <div className="bg-custom-purple w-[98vw] h-40 relative z-0 top-6 left-5 right-5 rounded-lg text-white text-4xl py-4 px-6">
          DATA STRUCTURES AND ALGORITHMS
          <LinearProgress color="secondary" className="w-96 pt-3 mt-4" />
          <div className="flex text-base list-none pt-12 pl-4 cursor-pointer">
            <li> CONTENT</li>
            <li className="ml-8"> CONTEST</li>
            <li className="ml-8"> NOTICEBOARD</li>
          </div>
          <p
            className={`bg-gradient-to-r from-c-purple to-gray-950 h-12 w-[12vw] fixed right-12 top-32 cursor-pointer`}
          ></p>
          <p
            className={`bg-gradient-to-r from-c-purple to-gray-950 h-12 w-[12vw] fixed right-12 top-48 cursor-pointer`}
          ></p>
        </div>
        <div className="relative z-0 top-10 left-[10vw] rounded-lg border-2 border-b-purple h-[63vh] w-[60vw] text-white text-lg flex-col align-middle">
          {divData.map((item, index) => (
            <Link
              key={item.id}
              href={{
                pathname: `course/${item.id}`,
                query: { id: item.id },
              }}
            >
              <p
                className={`bg-gradient-to-r from-c-purple to-gray-950 h-20 w-[58vw] relative left-4 right-4 mt-4 cursor-pointer pt-6 px-8`}
              >
                {item.text}
              
              </p>
            </Link>
          ))}
        </div>
        <div className="relative z-0 top-[-29.3vw] left-[71vw] rounded-lg border-2 border-b-purple h-[40vh] w-[17vw] text-white">
          <h1 className=" text-purple-600/100 font-bold text-3xl flex align-middle py-5 px-4">
            tecH_2x
          </h1>
        </div>
        <div className="relative z-0 top-[-28.3vw] left-[71vw] rounded-lg border-2 border-b-purple h-[21vh] w-[17vw] text-white">
          {renderCustomDiv(
            "from-c-purple",
            "Download Certificate",
            "30vw",
            "12"
          )}
          {renderCustomDiv("from-c-purple", "Share Feedback", "2vw", "12")}
        </div>
      </div>
    </div>
  );
}
