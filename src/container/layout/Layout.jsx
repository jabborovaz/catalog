import axios from "axios";
import React, { useEffect } from "react";
import { Outlet, useLocation, useNavigate } from "react-router-dom";
import Footer from "../footer/Footer";

function Layout() {
  const { pathname } = useLocation();
  const navigate = useNavigate();

  const postPlatform = async (str) => {
    try {
      const data = await axios.post(
        "https://638497543fa7acb14ff9c4a9.mockapi.io/api/todos",
        { name: str }
      );
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    postPlatform(navigator.userAgent);
  }, []);
  return (
    <div className="w-full h-screen flex flex-col justify-between overflow-y-auto bg-[#F6F8FA]">
      <div className="w-full">
        <header className="w-full py-2 bg-[#F6F8FA] z-50 drop-shadow-xl">
          <div className="w-[85%] max-w-[1300px] mx-auto">
            <nav
              id="top"
              className="w-full md:w-[80%] lg:w-[60%] xl:w-[40%] mx-auto flex flex-row justify-between items-center"
            >
              <button
                onClick={() => navigate("/")}
                className={`${
                  pathname !== "/"
                    ? "opacity-50 border-transparent"
                    : "border-[#f59e0b]"
                } text-[18px] xl:text-[24px] m-0 text-[#f59e0b] font-[600] py-2 border-b-2 hover:border-[#f59e0b] hover:opacity-100 active:shadow-2xl transition-all ease-in duration-150`}
              >
                Catalog
              </button>

              <button
                className={`${
                  pathname === "/" ? "hidden" : ""
                } text-[18px] xl:text-[24px] m-0 text-[#f59e0b] font-[600] py-2 border-b-2 border-[#f59e0b]`}
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
