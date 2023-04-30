import React from 'react'
import Fade from 'react-reveal/Fade';

const Hero = () => {
  return (
    <>
      <section className="mb-12 py-12 h-full sm:w-full max-w-full mx-auto flex flex-col justify-between pt-[6em] font-['Open Sans'] md:w-full mx-auto">
        {/* Hero section */}
        <div className="w-[85%] mx-auto lg:flex justify-between">
          <div className="mb-12 lg:w-1/2">
            <Fade top>
              <h1 className="font-[700] mb-4 hero">
                Make Better Life With Trusted CryptoCoin
              </h1>

              <p className="mb-4 text-[#999] text-[1.125em] line-[1.2]">
                Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit.
                Aliqu diam amet diam et eos. Clita erat ipsum et lorem et sit,
                sed stet lorem sit clita duo justo magna dolore erat amet
              </p>
              <button className="px-6 py-4 bg-[#16D5FF] font-[500] text-white text-md rounded">
                Explore More
              </button>
            </Fade>
          </div>
          <div className="animate-pulse flex items-center justify-center lg:w-[48%]">
            <img
              src={"/assets/hero-1.png"}
              alt="first hero image"
              className="max-w-full h-auto"
            />
          </div>
        </div>
      </section>
    </>
  );
}

export default Hero