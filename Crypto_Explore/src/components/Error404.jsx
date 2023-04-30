import React from "react";
import { faTriangleExclamation } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { NavLink } from "react-router-dom";
import { Fade } from "react-reveal";

const Error404 = () => {
  return (
    <>
      <Fade bottom>
        <section className="mb-12 py-12 h-full sm:w-full w-max[540px] mx-auto flex flex-col justify-between font-['Open Sans'] md:w-full mx-auto">
          <div className="w-[75%] mx-auto lg:max-w-[960px] md:max-w-[720px] sm:max-w-[540px]">
            <div className="flex flex-col items-center justify-center text-center">
              <FontAwesomeIcon
                icon={faTriangleExclamation}
                className="text text-[#16D5FF] mb-0"
              />
              <h1 className="text mb-2">404</h1>
              <h1 className="text-2">Page Not Found</h1>
              <p className="mb-6 text-[#999] text-center lg:w-[58%]">
                We’re sorry, the page you have looked for does not exist in our
                website! Maybe go to our home page or try to use a search?
              </p>
              <NavLink
                to="/"
                className={`px-6 py-4 bg-[#16D5FF] font-[500] text-white text-md rounded`}
              >
                Go Back To Home
              </NavLink>
            </div>
          </div>
        </section>
      </Fade>
    </>
  );
};

export default Error404;
