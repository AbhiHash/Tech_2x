import { CustomNavbar } from "@/components/navBar";
import { MainContent } from "@/components/Main/main";
import { SideNav } from "@/components/sideNav";
import SignInPage from "@/components/Login/signIn";

export const metadata = {
  title: "Tech-2X : Dashboard",
};

export const AppComponent = () => {
  return (
    <div>
      {/* <CustomNavbar></CustomNavbar>,
      <MainContent></MainContent> */
      /* <SideNav></SideNav> */}
      <SignInPage></SignInPage>
    </div>
  );
};

export default AppComponent;
