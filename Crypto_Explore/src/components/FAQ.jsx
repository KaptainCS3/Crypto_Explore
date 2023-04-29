import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown, faChevronUp } from "@fortawesome/free-solid-svg-icons";
import faq from "../../faq";
const FAQ = () => {
  const [showFaq, setShowFaq] = useState(null);
  const toggle = (index) => {
    if (showFaq === index) {
      return setShowFaq(null);
    }
    setShowFaq(index);
  };
  return (
    <>
      <section className="bg-white mb-12 py-12 h-full sm:w-full w-max[540px] mx-auto flex flex-col justify-between font-['Open Sans'] md:w-full mx-auto">
        {/* Token Sales section */}
        <div className="w-[70%] mx-auto mb-16 sm:w-[85%] md:w-[85%]">
          <div className="flex flex-col items-center justify-center">
            <h1 className="font-size mb-2 font-bold">FAQs</h1>
            <p className="text-[rgb(22,213,255)] text-xl mb-6 text-center">
              Frequently Asked Questions
            </p>
            <div className="w-full justify-evenly">
              <div className="">
                <div className="mb-4">
                  {faq.map((items, index) => (
                    <>
                      <div
                        className={`flex justify-between px-4 py-3 mb-2 bg-[#F2F8FE] cursor-pointer text-[#999] ${
                          showFaq === index ? "color" : ""
                        }`}
                        onClick={() => toggle(index)}
                      >
                        <h3 className="font-bold">{items.question}</h3>
                        {showFaq === index ? (
                          <FontAwesomeIcon icon={faChevronUp} />
                        ) : (
                          <FontAwesomeIcon icon={faChevronDown} />
                        )}
                      </div>
                      <p
                        className={`pb-4 pt-2 text-[#999] ${
                          showFaq === index ? "result show" : "result"
                        }`}
                      >
                        {items.result}
                      </p>
                    </>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default FAQ;
