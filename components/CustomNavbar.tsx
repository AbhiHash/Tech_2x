"use client";

export const CustomNavbar = () => {
  return (
    <div className="bg-gradient-to-r from-fuchsia-950 via-gray-950 to-green-950 h-20">
      <h1 className=" text-purple-600/100 font-bold text-3xl flex align-middle py-5 px-4">
        tecH_2x
      </h1>
      <div className="  flex justify-end align-middle -mt-11">
        <li className="text-slate-200/100 list-none mx-5">HOME</li>
        <li className="text-slate-200/100 list-none mx-5">COURSES</li>
        <li className="text-slate-200/100 list-none mx-5">ABOUT US</li>
        <li className="text-slate-200/100 list-none mx-3">PROFILE</li>
        {/* <div className=" inline-flex w-1/12 justify-between text-slate-200/100 ">
        <button>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M5.636 5.636a9 9 0 1012.728 0M12 3v9"
            />
          </svg>
          LOGOUT
        </button>
      </div> */}
      </div>
    </div>
  );
};