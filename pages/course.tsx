"use client";

import { CustomNavbar } from "components/navBar";
import { signOut } from "next-auth/react";

export default function Course() {
  const generateDiv = (
    gradientColor: any,
    text: any,
    width: string,
    height: string
  ) => (
    <div
      key={text}
      className={`bg-gradient-to-r ${gradientColor} to-gray-950 h-${height} w-${width} relative left-4 right-4 mt-4`}
    >
      {text}
    </div>
  );
  const divData = [
    { gradientColor: "from-c-purple", text: "sjdoifjljg" },
    { gradientColor: "from-c-purple", text: "sjdoifjljg" },
    { gradientColor: "from-c-purple", text: "sjdoifjljg" },
    { gradientColor: "from-c-purple", text: "sjdoifjljg" },
    { gradientColor: "from-c-purple", text: "sjdoifjljg" },
  ];

  return (
    <div>
      <CustomNavbar LogOut={signOut} />
      <div className="bg-gradient-to-r from-c-purple to-gray-950 h-[91.5vh] w-full">
        <div className="bg-custom-purple w-[98vw] h-52 relative z-0 top-6 left-5 right-5 rounded-lg text-white">
          DATA STRUCTURES AND ALGORITHMS
        </div>
        <div className="relative z-0 top-10 left-[10vw] rounded-lg border-2 border-b-purple h-[63vh] w-[60vw] text-white">
          {divData.map((item, index) => (
            <div
              key={index}
              className={`bg-gradient-to-r ${item.gradientColor} to-gray-950 h-12 w-[58vw] relative left-4 right-4 mt-4`}
            >
              {item.text}
            </div>
          ))}
        </div>
        <div className="relative z-0 top-[-29.3vw] left-[71vw] rounded-lg border-2 border-b-purple h-[40vh] w-[17vw] text-white">
          ewfewfe
        </div>
        <div className="relative z-0 top-[-28.3vw] left-[71vw] rounded-lg border-2 border-b-purple h-[21vh] w-[17vw] text-white">
          {/* <div className="relative z-0 top-[-28.3vw] left-[71vw] rounded-lg border-2 border-b-purple h-[21vh] w-[17vw] text-white">
            {divData
              .slice(1)
              .map((item) =>
                generateDiv(
                  item.gradientColor,
                  item.tex
                )
              )}
          </div> */}
        </div>
      </div>
    </div>
  );
}
