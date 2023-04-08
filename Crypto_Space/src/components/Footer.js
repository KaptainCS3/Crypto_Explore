import React from "react";
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
  return (
    <div>
      <footer className="h-full sm:w-full flex flex-col justify-between px-4 pt-[6em]">
        <div className="mb-[4em]">
          <div className="mb-[4em]">
            <div className="flex w-11 h-11 my-7">
              <img
                src={require(`../assets/icon-1.png`)}
                alt="logo"
                className="w-full"
              />
              <h2 className="pl-2 text-3xl font-bold text-[#16D5FF]">
                CryptoCoin
              </h2>
            </div>
            <p className="text-[#999999] font-['Open Sans'] font-[400]">
              Diam dolor diam ipsum sit. Aliqu diam amet diam et eos. Clita erat
              ipsum et lorem et sit, sed stet lorem sit clita. Diam dolor diam
              ipsum sit. Aliqu diam amet diam et eos. Clita erat ipsum et lorem
              et sit.
            </p>
          </div>
          <form>
            <h3 className="font-bold text-xl mb-8">Newsletter</h3>
            <p className="text-[#999999] pb-4">
              Clita erat ipsum et lorem et sit, sed stet lorem sit clita.
            </p>
            <div className="border-2 px-4 py-1.5 flex justify-between rounded">
              <input
                type="email"
                placeholder="Your email"
                className="bg-transparent outline-none pl-2"
              />
              <button className="text-white bg-[#16D5FF] px-3 py-2 text-xl rounded">
                SignUp
              </button>
            </div>
          </form>
        </div>
        <div className="pb-8">
          <div className="pb-8">
            <h3 className="font-bold text-xl mb-8">Get In Touch</h3>
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
          <div>
            <h3 className="font-bold text-xl mb-8">Our Services</h3>
            <div className="text-[#999] pb-2 cursor-pointer">
              <FontAwesomeIcon
                icon={faChevronRight}
                className="font-bold pr-4"
              />
              <span>Currency Wallet</span>
            </div>
            <div className="text-[#999] pb-2 cursor-pointer">
              <FontAwesomeIcon
                icon={faChevronRight}
                className="font-bold pr-4"
              />
              <span>Currency Transaction</span>
            </div>
            <div className="text-[#999] pb-2 cursor-pointer">
              <FontAwesomeIcon
                icon={faChevronRight}
                className="font-bold pr-4"
              />
              <span>Bitcoin Investment</span>
            </div>
            <div className="text-[#999] pb-2 cursor-pointer">
              <FontAwesomeIcon
                icon={faChevronRight}
                className="font-bold pr-4"
              />
              <span>Token Sale</span>
            </div>
          </div>
        </div>
        <div>
          <div>
            <h3 className="font-bold text-xl mb-8">Quick Links</h3>
            <div className="text-[#999] pb-2 cursor-pointer">
              <FontAwesomeIcon
                icon={faChevronRight}
                className="font-bold pr-4"
              />
              <span>About Us</span>
            </div>
            <div className="text-[#999] pb-2 cursor-pointer">
              <FontAwesomeIcon
                icon={faChevronRight}
                className="font-bold pr-4"
              />
              <span>Contact Us</span>
            </div>
            <div className="text-[#999] pb-2 cursor-pointer">
              <FontAwesomeIcon
                icon={faChevronRight}
                className="font-bold pr-4"
              />
              <span>Our Services</span>
            </div>
            <div className="text-[#999] pb-2 cursor-pointer">
              <FontAwesomeIcon
                icon={faChevronRight}
                className="font-bold pr-4"
              />
              <span>Terms &amp; Condition</span>
            </div>
          </div>
          <div>
            <h3 className="font-bold text-xl mb-8">Follow Us</h3>
            <div className="flex justify-between w-1/2">
              <div className="w-11 h-11 rounded-full border flex justify-center items-center text-[#16D5FF] border-[#16D5FF]">
                <FontAwesomeIcon icon={faTwitter} />
              </div>
              <div className="w-11 h-11 rounded-full border flex justify-center items-center text-[#16D5FF] border-[#16D5FF]">
                <FontAwesomeIcon icon={faFacebookF} />
              </div>
              <div className="w-11 h-11 rounded-full border flex justify-center items-center text-[#16D5FF] border-[#16D5FF]">
                <FontAwesomeIcon icon={faYoutube} />
              </div>
              <div className="w-11 h-11 rounded-full border flex justify-center items-center text-[#16D5FF] border-[#16D5FF]">
                <FontAwesomeIcon icon={faLinkedinIn} />
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
