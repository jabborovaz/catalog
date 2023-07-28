import React from "react";
import phoneIcon from "../../images/phoneIcon.svg";
import emailIcon from "../../images/email.svg";
import locationIcon from "../../images/location.svg";

function Footer() {
  return (
    <footer className="bg-gradient-to-r from-[#15803d] to-[#16a34a] w-full py-6">
      <div className="w-[90%] max-w-[1380px] mx-auto flex flex-col space-y-4">
        <div className="w-full flex sm:flex-col sm:space-y-3 md:space-y-0 md:flex-row sm:justify-center md:justify-between">
          <div className="flex flex-row space-x-2 items-center animation-blog">
            <img src={phoneIcon} alt="phone" />
            <a href="tel:+992487015362" className="m-0 text-white">
              +992 48 701 5362
            </a>
          </div>
          <div className="flex flex-row space-x-2 items-center animation-blog">
            <img src={emailIcon} alt="email" />
            <a href="mailto:some-email@gmail.com" className="m-0 text-white">
              some-email@gmail.com
            </a>
          </div>
          <div className="flex flex-row space-x-2 items-center animation-blog">
            <img src={locationIcon} alt="location" />
            <a
              rel="noreferrer"
              target="_blank"
              href="https://alif.tj/"
              className="m-0 text-white"
            >
              9, Bahovuddinov St.
            </a>
          </div>
        </div>
        <hr />
        <div className="flex flex-row sm:space-x-0 md:space-x-4 sm:justify-between md:justify-end w-full">
          <div className="flex flex-col space-y-2">
            <a
              rel="noreferrer"
              target="_blank"
              href="https://www.linkedin.com/in/ashraf-jabborov-8972b6249/"
              className="text-xs text-white m-0 font-light"
            >
              © 2023 Jabborov A.Z
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
