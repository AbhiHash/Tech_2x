"use client";

export const SideNav = () => {
  return (
    <div className="bg-slate-950 h-[90vh] w-60 fixed left-1 top-20 ">
      <h1 className="text-slate-200 flex justify-center m-5 text-2xl">
        <li className="bg-gradient-to-r from-fuchsia-950 to-gray-950 w-12 -ml-9 mr-4 list-none flex justify-center text-slate-100 font-bold border-2 border-fuchsia-950 ">
          A
        </li>
        Abhishek
      </h1>
      <li className="text-slate-200 flex  ml-4 mt-10 text-xl list-none">
        Dashboard
      </li>
      <li className="text-slate-200 flex  m-4 text-xl list-none">
        Notification
      </li>
      <li className="text-slate-200 flex  m-4 text-xl list-none ">Account</li>
      <li className="text-slate-200 flex  m-4 text-xl list-none ">Setting</li>
    </div>
  );
};
