import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faTwitter,
  faLinkedinIn,
} from "@fortawesome/free-brands-svg-icons";
import { faBars } from "@fortawesome/free-solid-svg-icons";
//! calc(1.375rem + 1.5vw)
const Nav = () => {
  const [isShow, setIsShow] = useState(true);
  const click = () => {
    console.log(isShow);
    setIsShow(!isShow);
  };
  return (
    <div>
      <nav className="font-['Roboto'] w-full flex justify-between items-center sm:px-8 flex-col md:px-8 lg:flex-row px-12 py-4 bg-white">
        <div className="flex justify-between w-full">
          <div className="flex w-11 h-11">
            <img
              src={require(`../assets/icon-1.png`)}
              alt="logo"
              className="w-full"
            />
            <h2 className="pl-2 text-3xl font-bold text-[#16D5FF]">
              CryptoCoin
            </h2>
          </div>
          <div className="lg:hidden" onClick={click}>
            <FontAwesomeIcon
              icon={faBars}
              className="w-10 h-10 flex justify-center items-center"
            />
          </div>
        </div>

        {isShow && (
          <div className="mt-4 border-b-[1px] bg-red-500 w-full lg:hidden"></div>
        )}
        {isShow && (
          <div className="flex sm:h-64 w-full flex-col justify-between items-start mt-4 md:h-64 lg:flex-row h-full">
            <a className="hover:text-[#16D5FF] cursor-pointer">Home</a>
            <a className="hover:text-[#16D5FF] cursor-pointer">About</a>
            <a className="hover:text-[#16D5FF] cursor-pointer">Service</a>
            <a className="hover:text-[#16D5FF] cursor-pointer">Roadmap</a>
            <a className="hover:text-[#16D5FF] cursor-pointer">Pages</a>
            <a className="hover:text-[#16D5FF] cursor-pointer">Contact</a>
            <div className="flex justify-between w-1/5 sm:hidden md:hidden">
              <div className="w-9 h-9 bg-[#F2F8FE] rounded-full flex justify-center items-center text-[#16D5FF] cursor-pointer hover:bg-[#16D5FF] hover:text-white">
                <FontAwesomeIcon icon={faFacebookF} />
              </div>
              <div className="w-9 h-9 bg-[#F2F8FE] rounded-full flex justify-center items-center text-[#16D5FF] cursor-pointer hover:bg-[#16D5FF] hover:text-white">
                <FontAwesomeIcon icon={faTwitter} />
              </div>
              <div className="w-9 h-9 bg-[#F2F8FE] rounded-full flex justify-center items-center text-[#16D5FF] cursor-pointer hover:bg-[#16D5FF] hover:text-white">
                <FontAwesomeIcon icon={faLinkedinIn} />
              </div>
            </div>
          </div>
        )}
      </nav>
    </div>
  );
};

export default Nav;
