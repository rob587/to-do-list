import { Outlet } from "react-router-dom";
import NavigationBar from "../src/components/NavigationBar";

const DefaultLayout = () => {
  return (
    <>
      <NavigationBar />

      <Outlet />
    </>
  );
};

export default DefaultLayout;
