import React from "react";
import Fade from "react-reveal/Fade";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
const Services = (props) => {
  console.log(props);
  return (
    <>
      <section
        className={`${props.mainBackground} mb-12 py-12 h-full sm:w-full w-max[540px] mx-auto flex flex-col justify-between font-['Open Sans'] md:w-full md:mx-auto`}
      >
        {/* Hero section */}
        <div className="w-[85%] mx-auto">
          <div className="flex flex-col items-center justify-center">
            <Fade bottom>
              <h1 className="font-size mb-2 font-bold">Services</h1>
              <p className="text-[rgb(22,213,255)] text-xl mb-6 text-center">
                Buy, Sell And Exchange Cryptocurrency
              </p>
            </Fade>
            <div className="w-full">
              <div className="lg:flex justify-between mb-4">
                <Fade bottom>
                  <div
                    className={`mt-4 w-full flex flex-col flex-start ${props.background} p-12 relative transition-all ease duration-500 delay-0 after:content[&quot;&quot;] after:w-0 after:h-0 after:absolute after:top-0 after:right-0 after:border-r-[8rem] after:border-l-[8rem] after:border-l-transparent ${props.color} after:border-b-[8rem] after:border-b-transparent ${props.borderRight} cursor-pointer hover:transition-all`}
                  >
                    <div>
                      <img
                        src="/assets/icon-7.png"
                        alt="icon-9"
                        className="h-auto mr-8"
                      />
                    </div>
                    <div>
                      <h3 className="text-xl pt-8 pb-4 font-[500]">
                        Currency Wallet
                      </h3>
                      <p className="text-[#999] pb-4 text-[1.125rem]">
                        Aliqu diam amet diam et eos. Clita erat ipsum et lorem
                        et sit, sed stet lorem sit clita duo justo
                      </p>
                      <button className="text-[#16D5FF]">
                        Read More
                        <FontAwesomeIcon icon={faArrowRight} className="pl-3" />
                      </button>
                    </div>
                  </div>
                </Fade>

                <Fade bottom>
                  <div
                    className={`mt-4 w-full flex flex-col flex-start ${props.background} p-12 relative transition-all ease duration-500 delay-0 after:content[""] after:w-0 after:h-0 after:absolute after:top-0 after:right-0 after:border-r-[8rem] after:border-l-[8rem] after:border-l-transparent ${props.color} after:border-b-[8rem] after:border-b-transparent ${props.borderRight} cursor-pointer hover:transition-all lg:mx-8`}
                  >
                    <div>
                      <img
                        src="/assets/icon-3.png"
                        alt="icon-3"
                        className="h-auto mr-8"
                      />
                    </div>
                    <div>
                      <h3 className="text-xl pt-8 pb-4 font-[500]">
                        Currency Transaction
                      </h3>
                      <p className="text-[#999] pb-4 text-[1.125rem]">
                        Aliqu diam amet diam et eos. Clita erat ipsum et lorem
                        et sit, sed stet lorem sit clita duo justo
                      </p>
                      <button className="text-[#16D5FF]">
                        Read More
                        <FontAwesomeIcon icon={faArrowRight} className="pl-3" />
                      </button>
                    </div>
                  </div>
                </Fade>

                <Fade bottom>
                  <div
                    className={`mt-4 w-full flex flex-col flex-start ${props.background} p-12 relative transition-all ease duration-500 delay-0 after:content[&quot;&quot;] after:w-0 after:h-0 after:absolute after:top-0 after:right-0 after:border-r-[8rem] ${props.color} after:border-l-[8rem] after:border-l-transparent after:border-b-[8rem] after:border-b-transparent ${props.borderRight} cursor-pointer hover:transition-all`}
                  >
                    <div>
                      <img
                        src="/assets/icon-9.png"
                        alt="icon-9"
                        className="h-auto mr-8"
                      />
                    </div>
                    <div>
                      <h3 className="text-xl pt-8 pb-4 font-[500]">
                        Bitcoin Investment
                      </h3>
                      <p className="text-[#999] pb-4 text-[1.125rem]">
                        Aliqu diam amet diam et eos. Clita erat ipsum et lorem
                        et sit, sed stet lorem sit clita duo justo
                      </p>
                      <button className="text-[#16D5FF]">
                        Read More
                        <FontAwesomeIcon icon={faArrowRight} className="pl-3" />
                      </button>
                    </div>
                  </div>
                </Fade>
              </div>
              <div className="lg:flex justify-between">
                <Fade bottom>
                  <div
                    className={`mt-4 w-full flex flex-col flex-start ${props.background} p-12 relative transition-all ease duration-500 delay-0 after:content[&quot;&quot;] after:w-0 after:h-0 after:absolute after:top-0 after:right-0 after:border-r-[8rem] ${props.color} after:border-l-[8rem] after:border-l-transparent after:border-b-[8rem] after:border-b-transparent ${props.borderRight} cursor-pointer hover:transition-all`}
                  >
                    <div>
                      <img
                        src="/assets/icon-5.png"
                        alt="icon-5"
                        className="h-auto mr-8"
                      />
                    </div>
                    <div>
                      <h3 className="text-xl pt-8 pb-4 font-[500]">
                        Currency Exchange
                      </h3>
                      <p className="text-[#999] pb-4 text-[1.125rem]">
                        Aliqu diam amet diam et eos. Clita erat ipsum et lorem
                        et sit, sed stet lorem sit clita duo justo
                      </p>
                      <button className="text-[#16D5FF]">
                        Read More
                        <FontAwesomeIcon icon={faArrowRight} className="pl-3" />
                      </button>
                    </div>
                  </div>
                </Fade>

                <Fade bottom>
                  <div
                    className={`mt-4 w-full flex flex-col flex-start ${props.background} p-12 relative transition-all ease duration-500 delay-0 after:content[""] after:w-0 after:h-0 after:absolute after:top-0 after:right-0 after:border-r-[8rem] ${props.color} after:border-l-[8rem] after:border-l-transparent after:border-b-[8rem] after:border-b-transparent ${props.borderRight} cursor-pointer hover:transition-all lg:mx-8`}
                  >
                    <div>
                      <img
                        src="/assets/icon-2.png"
                        alt="icon-2"
                        className="h-auto mr-8"
                      />
                    </div>
                    <div>
                      <h3 className="text-xl pt-8 pb-4 font-[500]">
                        Bitcoin Escrow
                      </h3>
                      <p className="text-[#999] pb-4 text-[1.125rem]">
                        Aliqu diam amet diam et eos. Clita erat ipsum et lorem
                        et sit, sed stet lorem sit clita duo justo
                      </p>
                      <button className="text-[#16D5FF]">
                        Read More
                        <FontAwesomeIcon icon={faArrowRight} className="pl-3" />
                      </button>
                    </div>
                  </div>
                </Fade>

                <Fade bottom>
                  <div
                    className={`mt-4 w-full flex flex-col flex-start ${props.background} p-12 relative transition-all ease duration-500 delay-0 after:content[&quot;&quot;] after:w-0 after:h-0 after:absolute after:top-0 after:right-0 after:border-r-[8rem] ${props.color} after:border-l-[8rem] after:border-l-transparent after:border-b-[8rem] after:border-b-transparent ${props.borderRight} cursor-pointer hover:transition-all`}
                  >
                    <div>
                      <img
                        src="/assets/icon-8.png"
                        alt="icon-8"
                        className="h-auto mr-8"
                      />
                    </div>
                    <div>
                      <h3 className="text-xl pt-8 pb-4 font-[500]">
                        Token Sale
                      </h3>
                      <p className="text-[#999] pb-4 text-[1.125rem]">
                        Aliqu diam amet diam et eos. Clita erat ipsum et lorem
                        et sit, sed stet lorem sit clita duo justo
                      </p>
                      <button className="text-[#16D5FF]">
                        Read More
                        <FontAwesomeIcon icon={faArrowRight} className="pl-3" />
                      </button>
                    </div>
                  </div>
                </Fade>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Services;
