import React from 'react'

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
            <div className="relative w-full border-dashed border-t-2 border-[#999] lg:flex">
              <div>
                <div className="absolute top-0 left-[11.3%] flex w-0 h-32 border-r-2 border-[#999] border-dashed -rotate-180">
                </div>
                <div className="bg-white absolute left-[10%] -top-[1.05rem] flex items-center justify-center w-8 h-8 border-2 border-[#16D5FF] rotate-45">
                  <div className="w-5 h-5 bg-[#16D5FF]"></div>
                </div>
              </div>
              <div>
                <div className="absolute top-0 left-[31.3%] flex w-0 h-32 border-r-2 border-[#999] border-dashed -rotate-180">
                </div>
                <div className="bg-white absolute left-[30%] -top-[1.05rem] flex items-center justify-center w-8 h-8 border-2 border-[#16D5FF] rotate-45">
                  <div className="w-5 h-5 bg-[#16D5FF]"></div>
                </div>
              </div>
              <div>
                <div className="absolute top-0 left-[51.3%] flex w-0 h-32 border-r-2 border-[#999] border-dashed -rotate-180">
                </div>
                <div className="bg-white absolute left-1/2 -top-[1.05rem] flex items-center justify-center w-8 h-8 border-2 border-[#16D5FF] rotate-45">
                  <div className="w-5 h-5 bg-[#16D5FF]"></div>
                </div>
              </div>
              <div>
                <div className="absolute top-0 left-[71.4%] flex w-0 h-32 border-r-2 border-[#999] border-dashed -rotate-180"></div>
                <div className="bg-white absolute left-[70%] -top-[1.05rem] flex items-center justify-center w-8 h-8 border-2 border-[#16D5FF] rotate-45">
                  <div className="w-5 h-5 bg-[#16D5FF]"></div>
                </div>
              </div>
              <div>
                <div className="absolute top-0 left-[91.3%] flex w-0 h-32 border-r-2 border-[#999] border-dashed -rotate-180"></div>
                <div className="bg-white absolute left-[90%] -top-[1.05rem] flex items-center justify-center w-8 h-8 border-2 border-[#16D5FF] rotate-45">
                  <div className="w-5 h-5 bg-[#16D5FF]"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ListMaps