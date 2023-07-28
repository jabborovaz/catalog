import React from "react";
import { Outlet, useLocation, useNavigate } from "react-router-dom";
import Footer from "../footer/Footer";

function Layout() {
  const { pathname } = useLocation();
  const navigate = useNavigate();
  return (
    <div className="w-full h-screen flex flex-col justify-between overflow-y-auto bg-[#F6F8FA]">
      <div className="w-full">
        <header className="w-full sticky top-0 left-0 py-2 bg-[#F6F8FA] z-50 drop-shadow-xl">
          <div className="w-[85%] max-w-[1300px] mx-auto">
            <nav className="w-[40%] mx-auto flex flex-row justify-between items-center">
              <button
                onClick={() => navigate("/")}
                className={`${
                  pathname !== "/"
                    ? "opacity-50 border-transparent"
                    : "border-[#f59e0b]"
                } text-[24px] m-0 text-[#f59e0b] font-[600] py-2 border-b-2 hover:border-[#f59e0b] hover:opacity-100 active:shadow-2xl transition-all ease-in duration-150`}
              >
                Catalogues
              </button>

              <button
                className={`${
                  pathname === "/" ? "hidden" : ""
                } text-[24px] m-0 text-[#f59e0b] font-[600] py-2 border-b-2 border-[#f59e0b]`}
              >
                Choosed Item
              </button>
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
