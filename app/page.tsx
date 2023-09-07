import { CustomNavbar } from "@/components/CustomNavbar";
import { MainContent } from "@/components/main";

export const metadata = {
  title: "Tech-2X : Dashboard",
};

export const AppComponent = () => {
  return (
    <div>
      <CustomNavbar></CustomNavbar>,
      <MainContent></MainContent>
    </div>
  );
};

export default AppComponent;
