import { CustomNavbar } from "@/components/navBar";
import { MainContent } from "@/components/main";
import { SideNav } from "@/components/sideNav";

export const metadata = {
  title: "Tech-2X : Dashboard",
};

export const AppComponent = () => {
  return (
    <div>
      <CustomNavbar></CustomNavbar>,
      <MainContent></MainContent>
      {/* <SideNav></SideNav> */}
    </div>
  );
};

export default AppComponent;
