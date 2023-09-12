import { CustomNavbar } from "@/components/navBar";
import { MainContent } from "@/components/Main/main";
import { SideNav } from "@/components/sideNav";
import { CustomCard } from "@/components/Main/card";

export const metadata = {
  title: "Tech-2X : Dashboard",
};

export const AppComponent = () => {
  return (
    <div>
      <CustomNavbar></CustomNavbar>,
      <MainContent></MainContent>
      {/* <SideNav></SideNav> */}
      {/* <CustomCard></CustomCard> */}
    </div>
  );
};

export default AppComponent;
