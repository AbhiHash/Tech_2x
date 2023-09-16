"use client";
import { CustomNavbar } from "../components/navBar";
import { MainContent } from "../components/main";
import {signIn} from "next-auth/react"
export const metadata = {
  title: "Tech-2X : Dashboard",
};

const HomePage = () => {
  return (
    <div>
      <CustomNavbar LogIn={signIn} />
      <MainContent />
    </div>
  );
};
export default HomePage;
