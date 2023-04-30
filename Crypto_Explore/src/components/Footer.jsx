import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronRight,
  faEnvelope,
  faLocationDot,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";
import {
  faFacebookF,
  faLinkedinIn,
  faTwitter,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  const [subscribe, setSubscribe] = useState({
    email: "",
  });

  // const handleSubmit = (event) => {
  //   event.preventDefault();
  //   setSubscribe({
  //     email: "",
  //   });
  // };
  const handleChange = (event) => {
    const { name, value } = event.target;
    setSubscribe((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  return (
    <div>
      <footer className="bg-[#F2F8FE] h-full sm:w-full w-max[540px] mx-auto flex flex-col justify-between px-4 pt-[6em] font-['Open Sans'] md:w-full mx-auto">
        {/* Section 1 */}
        <div className="w-[85%] mx-auto">
          <div className="w-full md:flex justify-around items-center lg:flex">
            <div className="mb-[4em] md:w-1/2 lg:w-1/2">
              <div className="flex w-11 h-11 my-7">
                <img src={`/assets/icon-1.png`} alt="logo" className="w-full" />
                <h2 className="pl-2 text-3xl font-bold text-[#16D5FF]">
                  CryptoCoin
                </h2>
              </div>
              <p className="text-[#999999] font-['Open Sans'] font-[400] md:pr-8 lg:pr-8">
                Diam dolor diam ipsum sit. Aliqu diam amet diam et eos. Clita
                erat ipsum et lorem et sit, sed stet lorem sit clita. Diam dolor
                diam ipsum sit. Aliqu diam amet diam et eos. Clita erat ipsum et
                lorem et sit.
              </p>
            </div>
            <form className="sm:w-full mb-8 md:-mt-10 pr-2 w-1/2 lg:pr-2">
              <h3 className="font-bold text-xl mb-8">Newsletter</h3>
              <p className="text-[#999999] pb-4">
                Clita erat ipsum et lorem et sit, sed stet lorem sit clita.
              </p>
              <div className="flex justify-between rounded form__input focus:border-[#16D5FF]">
                <input
                  type="email"
                  className="bg-transparent border w-full outline-none p-4 form text-[#999] placeholder:text-slate-400"
                  required
                  name="email"
                  onChange={handleChange}
                  value={subscribe.email}
                />
                <span>Your Email</span>
                <button
                  type="button"
                  className="absolute top-0 right-0 my-2 mr-2 text-white bg-[#0dcaf0] px-3 py-2 text-xl rounded"
                >
                  SignUp
                </button>
              </div>
            </form>
          </div>
          {/* group section */}
          <div className="lg:flex justify-between w-full">
            {/* Section 2 */}
            <div className="pb-8 sm:flex-col md:flex lg:w-[50%] flex flex-row justify-start">
              <div className="pb-8 md:w-1/2 lg:mr-16">
                <h3 className="font-bold text-xl mb-8 lg:mb-8">Get In Touch</h3>
                <div className="text-[#999] pb-2">
                  <FontAwesomeIcon icon={faLocationDot} className="pr-4" />
                  <span>123 Street, New York, USA</span>
                </div>
                <div className="text-[#999] pb-2">
                  <FontAwesomeIcon icon={faPhone} className="pr-4" />
                  <span>+012 345 67890</span>
                </div>
                <div className="text-[#999] pb-2">
                  <FontAwesomeIcon icon={faEnvelope} className="pr-4" />
                  <span>Streetinfo@example.com</span>
                </div>
              </div>
              <div className="md:w-1/2">
                <h3 className="font-bold text-xl sm:mb-8 md:mb-4 lg:mb-8">
                  Our Services
                </h3>
                <div className="text-[#999] pb-2 cursor-pointer">
                  <FontAwesomeIcon
                    icon={faChevronRight}
                    className="font-bold pr-4"
                  />
                  <span className="transition-all ease delay-0 duration-200 hover:tracking-wider hover:text-[#16D5FF]">
                    Currency Wallet
                  </span>
                </div>
                <div className="text-[#999] pb-2 cursor-pointer">
                  <FontAwesomeIcon
                    icon={faChevronRight}
                    className="font-bold pr-4"
                  />
                  <span className="transition-all ease delay-0 duration-200 hover:tracking-wider hover:text-[#16D5FF]">
                    Currency Transaction
                  </span>
                </div>
                <div className="text-[#999] pb-2 cursor-pointer">
                  <FontAwesomeIcon
                    icon={faChevronRight}
                    className="font-bold pr-4"
                  />
                  <span className="transition-all ease delay-0 duration-200 hover:tracking-wider hover:text-[#16D5FF]">
                    Bitcoin Investment
                  </span>
                </div>
                <div className="text-[#999] pb-2 cursor-pointer">
                  <FontAwesomeIcon
                    icon={faChevronRight}
                    className="font-bold pr-4"
                  />
                  <span className="transition-all ease delay-0 duration-200 hover:tracking-wider hover:text-[#16D5FF]">
                    Token Sale
                  </span>
                </div>
              </div>
            </div>
            {/* Section 3 */}
            <div className="sm:flex-col md:flex lg:w-1/2 flex flex-row justify-start">
              <div className="md:w-1/2 lg:mr-16">
                <h3 className="font-bold text-xl sm:mb-8 md:mb-4 lg:mb-8">
                  Quick Links
                </h3>
                <div className="text-[#999] pb-2 cursor-pointer">
                  <FontAwesomeIcon
                    icon={faChevronRight}
                    className="font-bold pr-4"
                  />
                  <span className="transition-all ease delay-0 duration-200 hover:tracking-wider hover:text-[#16D5FF]">
                    About Us
                  </span>
                </div>
                <div className="text-[#999] pb-2 cursor-pointer">
                  <FontAwesomeIcon
                    icon={faChevronRight}
                    className="font-bold pr-4"
                  />
                  <span className="transition-all ease delay-0 duration-200 hover:tracking-wider hover:text-[#16D5FF]">
                    Contact Us
                  </span>
                </div>
                <div className="text-[#999] pb-2 cursor-pointer">
                  <FontAwesomeIcon
                    icon={faChevronRight}
                    className="font-bold pr-4"
                  />
                  <span className="transition-all ease delay-0 duration-200 hover:tracking-wider hover:text-[#16D5FF]">
                    Our Services
                  </span>
                </div>
                <div className="text-[#999] pb-2 cursor-pointer">
                  <FontAwesomeIcon
                    icon={faChevronRight}
                    className="font-bold pr-4"
                  />
                  <span className="transition-all ease delay-0 duration-200 hover:tracking-wider hover:text-[#16D5FF]">
                    Terms & Condition
                  </span>
                </div>
              </div>
              <div className="md:w-1/2">
                <h3 className="font-bold text-xl sm:my-8 md:mb-8 lg:mb-8">
                  Follow Us
                </h3>
                <div className="flex justify-between w-[12em] md:w-[12em]">
                  <div className="w-11 h-11 rounded-full border flex justify-center items-center text-[#16D5FF] border-[#16D5FF] cursor-pointer hover:bg-[#16D5FF] hover:text-white">
                    <FontAwesomeIcon icon={faTwitter} />
                  </div>
                  <div className="w-11 h-11 rounded-full border flex justify-center items-center text-[#16D5FF] border-[#16D5FF] cursor-pointer hover:bg-[#16D5FF] hover:text-white">
                    <FontAwesomeIcon icon={faFacebookF} />
                  </div>
                  <div className="w-11 h-11 rounded-full border flex justify-center items-center text-[#16D5FF] border-[#16D5FF] cursor-pointer hover:bg-[#16D5FF] hover:text-white">
                    <FontAwesomeIcon icon={faYoutube} />
                  </div>
                  <div className="w-11 h-11 rounded-full border flex justify-center items-center text-[#16D5FF] border-[#16D5FF] cursor-pointer hover:bg-[#16D5FF] hover:text-white">
                    <FontAwesomeIcon icon={faLinkedinIn} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="border-b-[1px] mt-12"></div>
        <div className="my-10 h-16 flex flex-col justify-between items-center text-[#999]">
          <span>
            © Your <span className="text-[#16D5FF] font-medium">Site Name</span>
            , All Right Reserved.
          </span>
          <span>
            Designed By{" "}
            <span className="text-[#16D5FF] font-medium">HTML Codex</span>
          </span>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
