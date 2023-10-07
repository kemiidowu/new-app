import { Navbar } from "./Navbar";
import Sidebar from "./Sidebar";

export const Layout = ({ children }) => {
  return (
    <div className={`h-full min-h-screen  w-full`}>
      {/* // sidebar goes here */}
      <div className="bg-white  hidden md:block shadow-lg md:w-[18vw] first:py-5 md:h-[100vh] fixed z-[200] overflow-auto">
        <Sidebar />
      </div>

      {/*  nav bar and main content here */}

      <div className="md:ml-[18vw] bg-[#F9F9FB] md:h-[100vh]">
        <div className="w-full md:max-w-[82vw] bg-white z-[150]">
          <Navbar />
        </div>

        <main className={` px-2.5 py-[30px]`}>{children}</main>
      </div>
    </div>
  );
};
