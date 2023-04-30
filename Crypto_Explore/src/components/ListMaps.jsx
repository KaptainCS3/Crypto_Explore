import React from "react";
import roadmap from "../../roadmap";
const ListMaps = () => {
  return (
    <>
      <section className="bg-white mb-12 pt-16 pb-64 h-full sm:w-full w-max[540px] mx-auto flex flex-col justify-between font-['Open Sans'] md:w-full mx-auto">
        <div className="w-[85%] mx-auto">
          <div className="flex flex-col items-center justify-center">
            <h2 className="font-size mb-2 font-bold">Roadmap</h2>
            <p className="text-[#16D5FF] text-xl mb-6">
              We Translate Your Dream Into Reality
            </p>
            {/* <div className="owl-carousel roadmap-carousel">
              <div className="owl-stage-outer">
                <div className="owl-stage">
                  <div className="owl-item">
                    <div className="roadmap-item">
                      <div className="roadmap-point">
                      </div>
                      <h5>July 2045</h5>
                      <span>Diam dolor ipsum sit amet erat ipsum lorem sit</span>
                    </div>
                  </div>
                  <div className=".owl-carousel"></div>
                  <div className=".owl-carousel"></div>
                  <div className=".owl-carousel"></div>
                  <div className=".owl-carousel"></div>
                  <div className=".owl-carousel"></div>
                  <div className=".owl-carousel"></div>
                  <div className=".owl-carousel"></div>
                  <div className=".owl-carousel"></div>
                  <div className=".owl-carousel"></div>
                  <div className=".owl-carousel"></div>
                  <div className=".owl-carousel"></div>
                </div>
              </div>
            </div> */}

            <div className="owl-carousel roadmap-carousel wow owl-loaded owl-drag">
              <div className="owl-stage-outer">
                <div className="owl-stage">
                  <div className="owl-item cloned mr-6 flex">
                    {roadmap.map((el) => (
                      <div className="roadmap-item">
                        <div className="roadmap-point">
                          <span className="square"></span>
                        </div>
                        <h5>{el.date}</h5>
                        <span>
                          {el.comment}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              {/* <div className="owl-nav">
                <div className="owl-prev">
                  <i className="bi bi-chevron-left"></i>
                </div>
                <div className="owl-next">
                  <i className="bi bi-chevron-right"></i>
                </div>
              </div>
              <div className="owl-dots disabled"></div> */}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ListMaps;
