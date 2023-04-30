import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faLinkedinIn,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { faBars, faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { NavLink } from "react-router-dom";
//! calc(1.375rem + 1.5vw)
const Nav = () => {
  const [isShow, setIsShow] = useState(false);
  const [stickyTop, setStickyTop] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false);

  const toggleNav = () => {
    console.log(isShow);
    setIsShow(!isShow);
  };

  useEffect(() => {
    const handleScroll = () => {
      setStickyTop(window.scrollY >= 200);
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  });

  const toggleDropdown = () => {
    setShowDropdown(!showDropdown);
  };
  return (
    // sticky top-0 shadow-lg font-['Roboto'] transition duration-300 w-full flex justify-between items-center sm:px-8 flex-col md:px-8 lg:flex-row px-12 py-4 bg-white
    <div className={stickyTop ? "sticky top-0 z-[1000] shadow-md" : ""}>
      <nav
        className={`font-['Roboto'] transition duration-300 w-full flex justify-between items-center sm:px-8 flex-col md:px-8 lg:flex-row px-12 py-4 bg-white
        `}
      >
        <div className="flex justify-between w-full">
          <NavLink to="/">
            <div className="flex w-11 h-11">
              <img src={`/assets/icon-1.png`} alt="logo" className="w-full" />
              <h2 className="pl-2 text-3xl font-bold text-[#16D5FF]">
                CryptoCoin
              </h2>
            </div>
          </NavLink>
          <div className="lg:hidden" onClick={toggleNav}>
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
          <div
            className={`flex items-start ${
              showDropdown ? "sm:h-[22rem]" : "sm:h-64"
            } w-full flex-col justify-between mt-4 ${
              showDropdown ? "md:h-[22rem]" : "md:h-64"
            } lg:hidden`}
          >
            <NavLink to="/" className="hover:text-[#16D5FF] cursor-pointer">
              Home
            </NavLink>
            <NavLink
              to="/aboutus"
              className="hover:text-[#16D5FF] cursor-pointer"
            >
              About
            </NavLink>
            <NavLink
              to="/service"
              className="hover:text-[#16D5FF] cursor-pointer"
            >
              Service
            </NavLink>
            <NavLink
              to="/roadmap"
              className="hover:text-[#16D5FF] cursor-pointer"
            >
              Roadmap
            </NavLink>
            <div className="w-full">
              <NavLink
                className="hover:text-[#16D5FF] cursor-pointer dropdown"
                onClick={toggleDropdown}
              >
                Pages
                <FontAwesomeIcon icon={faChevronDown} className="pl-2" />
              </NavLink>
              {showDropdown && (
                <div>
                  <div
                    className="flex flex-col bg-white pt-[0.75em] pl-[1em]
                w-full"
                  >
                    <NavLink
                      to="/features"
                      className="w-full px-2 hover:bg-gray-200"
                    >
                      Features
                    </NavLink>
                    <NavLink to="/token" className="w-full px-2 hover:bg-gray-200">
                      Token Sale
                    </NavLink>
                    <NavLink to="/faqs" className="w-full px-2 hover:bg-gray-200">
                      FAQs
                    </NavLink>
                    <NavLink
                      to="/error_404"
                      className="w-full px-2 hover:bg-gray-200"
                    >
                      404 Page
                    </NavLink>
                  </div>
                </div>
              )}
            </div>
            <NavLink
              to="/contact"
              className="hover:text-[#16D5FF] cursor-pointer"
            >
              Contact
            </NavLink>
            <div className="flex justify-between w-1/5 -mt-2 sm:hidden md:hidden">
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
        <div className="sm:hidden md:hidden lg:flex items-start flex-row h-full justify-between w-full">
          <NavLink to="/" className="hover:text-[#16D5FF] cursor-pointer">
            Home
          </NavLink>
          <NavLink
            to="/aboutus"
            className="hover:text-[#16D5FF] cursor-pointer"
          >
            About
          </NavLink>
          <NavLink
            to="/service"
            className="hover:text-[#16D5FF] cursor-pointer"
          >
            Service
          </NavLink>
          <NavLink
            to="/roadmap"
            className="hover:text-[#16D5FF] cursor-pointer"
          >
            Roadmap
          </NavLink>
          <div className="relative dropdown">
            <NavLink className="pb-8 hover:text-[#16D5FF] cursor-pointer">
              Pages
              <FontAwesomeIcon icon={faChevronDown} className="pl-2" />
            </NavLink>
            <section className="dropdown__list">
              <div className="flex absolute right-0 top-0 z-50 w-[10rem] pt-3 pb-2 mt-[3.2rem] -mr-[5rem] rounded-b flex-col bg-white">
                <NavLink
                  to="/features"
                  className="w-full hover:bg-gray-200 px-4"
                >
                  Features
                </NavLink>
                <NavLink to="/token" className="w-full hover:bg-gray-200 px-4">
                  Token Sale
                </NavLink>
                <NavLink to="/faqs" className="w-full hover:bg-gray-200 px-4">
                  FAQs
                </NavLink>
                <NavLink
                  to="/error_404"
                  className="w-full hover:bg-gray-200 px-4"
                >
                  404 Page
                </NavLink>
              </div>
            </section>
          </div>
          <NavLink
            to="/contact"
            className="hover:text-[#16D5FF] cursor-pointer"
          >
            Contact
          </NavLink>
          <div className="flex justify-between w-1/5 -mt-2 sm:hidden md:hidden">
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
      </nav>
    </div>
  );
};

export default Nav;
