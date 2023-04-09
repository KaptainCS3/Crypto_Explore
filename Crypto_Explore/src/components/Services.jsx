import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'
const Services = () => {
  return (
     <>
         <section className="mb-12 py-12 h-full sm:w-full w-max[540px] mx-auto flex flex-col justify-between px-4 font-['Open Sans'] md:w-full mx-auto">
        {/* Hero section */}
        <div className="w-[85%] mx-auto">
          <div className='flex flex-col items-center justify-center'>
            <h1 className='font-size mb-2 font-bold'>Services</h1>
            <p className='text-[#16D5FF] text-xl mb-6'>Buy, Sell And Exchange Cryptocurrency</p>
            <div className='mt-2 w-full flex flex-col -start bg-white p-12'>
                <div>
              <img src="/assets/icon-7.png" alt="icon-9" className='h-auto mr-8' />
                </div>
              <div>
              <h3 className='text-xl pt-8 pb-4 font-[500]'>Easy To Start</h3>
              <p className='text-[#999] pb-4 text-[1.125rem]'>Aliqu diam amet diam et eos. Clita erat ipsum et lorem et sit, sed stet lorem sit clita duo justo</p>
              <button className='text-[#16D5FF]'>Read More
                <FontAwesomeIcon icon={faArrowRight} className='pl-4'/>
              </button>
              </div>
            </div>
            <div className='mt-4 w-full flex flex-col -start bg-white p-12'>
                <div>
              <img src="/assets/icon-6.png" alt="icon-10" className='h-auto mr-8' />
                </div>
              <div>
              <h3 className='text-xl pt-8 pb-4 font-[500]'>Safe & Secure</h3>
              <p className='text-[#999] pb-4 text-[1.125rem]'>Aliqu diam amet diam et eos. Clita erat ipsum et lorem et sit, sed stet lorem sit clita duo justo</p>
              <button className="text-[#16D5FF]">Read More
                <FontAwesomeIcon icon={faArrowRight} className='pl-4'/>
              </button>
              </div>
            </div>
            <div className='mt-4 w-full flex flex-col -start bg-white p-12'>
                <div>
              <img src="/assets/icon-5.png" alt="icon-2" className='h-auto mr-8' />
                </div>
              <div>
              <h3 className='text-xl pt-8 pb-4 font-[500]'>Affordable Plans</h3>
              <p className='text-[#999] pb-4 text-[1.125rem]'>Aliqu diam amet diam et eos. Clita erat ipsum et lorem et sit, sed stet lorem sit clita duo justo</p>
              <button className="text-[#16D5FF]">Read More
                <FontAwesomeIcon icon={faArrowRight} className='pl-4'/>
              </button>
              </div>
            </div>
            <div className='mt-4 w-full flex flex-col -start bg-white p-12'>
                <div>
              <img src="/assets/icon-4.png" alt="icon-2" className='h-auto mr-8' />
                </div>
              <div>
              <h3 className='text-xl pt-8 pb-4 font-[500]'>Secure Storage</h3>
              <p className='text-[#999] pb-4 text-[1.125rem]'>Aliqu diam amet diam et eos. Clita erat ipsum et lorem et sit, sed stet lorem sit clita duo justo</p>
              <button className="text-[#16D5FF]">Read More
                <FontAwesomeIcon icon={faArrowRight} className='pl-4'/>
              </button>
              </div>
            </div>
            <div className='mt-4 w-full flex flex-col -start bg-white p-12'>
                <div>
              <img src="/assets/icon-3.png" alt="icon-2" className='h-auto mr-8' />
                </div>
              <div>
              <h3 className='text-xl pt-8 pb-4 font-[500]'>Protected By Insurance</h3>
              <p className='text-[#999] pb-4 text-[1.125rem]'>Aliqu diam amet diam et eos. Clita erat ipsum et lorem et sit, sed stet lorem sit clita duo justo</p>
              <button className="text-[#16D5FF]">Read More
                <FontAwesomeIcon icon={faArrowRight} className='pl-4'/>
              </button>
              </div>
            </div>
            <div className='mt-4 w-full flex flex-col -start bg-white p-12'>
                <div>
              <img src="/assets/icon-8.png" alt="icon-2" className='h-auto mr-8' />
                </div>
              <div>
              <h3 className='text-xl pt-8 pb-4 font-[500]'>24/7 Support</h3>
              <p className='text-[#999] pb-4 text-[1.125rem]'>Aliqu diam amet diam et eos. Clita erat ipsum et lorem et sit, sed stet lorem sit clita duo justo</p>
              <button className="text-[#16D5FF]">Read More
                <FontAwesomeIcon icon={faArrowRight} className='pl-4'/>
              </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Services