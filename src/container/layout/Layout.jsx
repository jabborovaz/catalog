import React from "react";
import { Outlet, useLocation } from "react-router-dom";
import Footer from "../footer/Footer";

function Layout() {
  const { pathname } = useLocation();
  return (
    <div className="w-full h-screen flex flex-col justify-between overflow-y-auto bg-[#F6F8FA]">
      <div className="w-full">
        <header className="w-full sticky top-0 left-0 py-2 bg-[#F6F8FA] z-50 drop-shadow-xl">
          <div className="w-[85%] max-w-[1300px] mx-auto">
            <nav className="w-[60%] mx-auto flex flex-row justify-between items-center">
              <p
                className={`${
                  pathname !== "/" ? "opacity-60" : ""
                } text-[22px] m-0 text-[#f59e0b] font-[600] py-2 border-b-2 border-transparent hover:border-[#f59e0b] hover:opacity-100 active:shadow-2xl transition-all ease-in duration-150`}
              >
                Catalogues
              </p>
            </nav>
          </div>
        </header>

        <Outlet />
      </div>

      <Footer />
    </div>
  );
}

export default Layout;
