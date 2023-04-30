import React from 'react'
import Fade from 'react-reveal/Fade';
const Industry = () => {
  return (
    <>
         <section className="bg-white mb-12 py-12 h-full sm:w-full w-max[540px] mx-auto flex flex-col justify-between font-['Open Sans'] md:w-full mx-auto">
        {/* Hero section */}
        <div className="w-[85%] mx-auto">
          <div className='flex flex-col items-center justify-center'>
            <Fade bottom>
            <h1 className='font-size mb-2 font-bold'>Why Us!</h1>
            <p className='text-[#16D5FF] mb-6 text-center text-[1.35rem]'>The Best In The crypto Industry</p>
            </Fade>
            <div className='lg:flex'>
            <Fade bottom>
                <div className='mt-2 w-full flex items-center justify-center lg:mr-4'>
              <img src="/assets/icon-7.png" alt="icon-9" className='h-auto mr-8 -mt-6' />
              <div>
              <h3 className='text-xl pt-8 font-[500]'>Easy To Start</h3>
              <p className='text-[#999] text-[1.125rem] mt-4'>Aliqu diam amet diam et eos. Clita erat ipsum et lorem et sit, sed stet lorem sit clita duo justo</p>
              </div>
                </div>
            </Fade>

            <Fade bottom>
                <div className='mt-4 w-full flex items-center justify-center lg:mr-4'>
              <img src="/assets/icon-6.png" alt="icon-10" className='h-auto mr-8 -mt-6' />
              <div>
              <h3 className='text-xl pt-8 font-[500]'>Safe & Secure</h3>
              <p className='text-[#999] text-[1.125rem] mt-4'>Aliqu diam amet diam et eos. Clita erat ipsum et lorem et sit, sed stet lorem sit clita duo justo</p>
              </div>
                </div>
            </Fade>

            <Fade bottom>
                <div className='mt-4 w-full flex items-center justify-center lg:mr-4'>
              <img src="/assets/icon-5.png" alt="icon-2" className='h-auto mr-8 -mt-6' />
              <div>
              <h3 className='text-xl pt-8 font-[500]'>Affordable Plans</h3>
              <p className='text-[#999] text-[1.125rem] mt-4'>Aliqu diam amet diam et eos. Clita erat ipsum et lorem et sit, sed stet lorem sit clita duo justo</p>
              </div>
                </div>
            </Fade>

            </div>
            <div className='lg:flex'>
            <Fade bottom>
                <div className='mt-4 w-full flex items-center justify-center lg:mr-4'>
              <img src="/assets/icon-4.png" alt="icon-2" className='h-auto mr-8 -mt-6' />
              <div>
              <h3 className='text-xl pt-8 font-[500]'>Secure Storage</h3>
              <p className='text-[#999] text-[1.125rem] mt-4'>Aliqu diam amet diam et eos. Clita erat ipsum et lorem et sit, sed stet lorem sit clita duo justo</p>
              </div>
                </div>
            </Fade>

            <Fade bottom>
                <div className='mt-4 w-full flex items-center justify-center lg:mr-4'>
              <img src="/assets/icon-3.png" alt="icon-2" className='h-auto mr-8 -mt-6' />
              <div>
              <h3 className='text-xl pt-8 font-[500]'>Protected By Insurance</h3>
              <p className='text-[#999] text-[1.125rem] mt-4'>Aliqu diam amet diam et eos. Clita erat ipsum et lorem et sit, sed stet lorem sit clita duo justo</p>
              </div>
                </div>
            </Fade>
            <Fade bottom>   
            <div className='mt-4 w-full flex items-center justify-center lg:mr-4'>
              <img src="/assets/icon-8.png" alt="icon-2" className='h-auto mr-8 -mt-6' />
              <div>
              <h3 className='text-xl pt-8 font-[500]'>24/7 Support</h3>
              <p className='text-[#999] text-[1.125rem] mt-4'>Aliqu diam amet diam et eos. Clita erat ipsum et lorem et sit, sed stet lorem sit clita duo justo</p>
              </div>
            </div>
            </Fade>

            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Industry