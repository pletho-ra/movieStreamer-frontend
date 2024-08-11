import { Outlet } from "react-router-dom";
import Header from "../components/Header";

const Layout = () => {
  return (
    <div className="flex justify-center py-4 px-6 mx-4">
      <div className=" bg-white flex flex-col items-center justify-center w-full">
        <Header />
        <Outlet />
      </div>
    </div>
  );
};

export default Layout;
