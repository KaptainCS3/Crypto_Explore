import React, { useState, useEffect } from "react";
import { faArrowUp } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const ScrollTop = () => {
  const [showButton, setShowButton] = useState(false);
  useEffect(() => {
    const handleScrollButtonVisibility = () => {
      window.pageYOffset > 300 ? setShowButton(true) : setShowButton(false);
    };

    window.addEventListener("scroll", handleScrollButtonVisibility);
    return () => {
      window.removeEventListener("scroll", handleScrollButtonVisibility);
    };
  }, []);

  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  return (
    <>
      {showButton && (
        <div>
          <button
            onClick={handleScrollToTop}
            className="fixed bottom-[5%] left-[90%] w-12 h-12 bg-[#16D5FF] rounded-full flex justify-center items-center cursor-pointer text-white font-light sm:left-[83%]"
          >
            <FontAwesomeIcon
              icon={faArrowUp}
              className="text-3xl"
            />
          </button>
        </div>
      )}
    </>
  );
};

export default ScrollTop;
