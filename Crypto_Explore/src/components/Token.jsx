import React from 'react'
import Fade from 'react-reveal/Fade';
const Token = (props) => {
  return (
    <>
      <section className="mb-12 py-12 h-full sm:w-full w-max[540px] mx-auto flex flex-col justify-between font-['Open Sans'] md:w-full mx-auto">
        {/* Token Sales section */}
        <div className="w-[85%] mx-auto">
          <div className='flex flex-col items-center justify-center'>
            <Fade bottom>
                <h1 className='font-size mb-2 font-bold'>Token Sale</h1>
                <p className='text-[rgb(22,213,255)] text-xl mb-6'>Token Sale Countdown</p>
            </Fade>
            <div className='w-full'>
            <div className='sm:flex md:flex flex-row justify-between mb-4 lg:flex'>
              <div className='sm:w-full mr-2 md:flex w-full lg:flex'>
              <Fade left>
                <div className={`mt-4 w-full flex flex-col justify-center items-center ${props.background} p-4`}>
                  <h2 className='text-4xl font-bold'>0</h2>
                  <p className='text-[#16D5FF] text-2xl'>Days</p>
                </div>
              </Fade>
              <Fade left>
                <div className={`mt-4 w-full flex flex-col justify-center items-center ${props.background} p-4 md:ml-4 lg:ml-8 lg:mr-4`}>
                  <h2 className='text-4xl font-bold'>0</h2>
                  <p className='text-[#16D5FF] text-2xl'>Hours</p>
                </div>
              </Fade>
            </div>
            <div className='sm:w-full ml-2 md:flex w-full lg:flex'>
            <Fade left>
              <div className={`mt-4 w-full flex flex-col justify-center items-center ${props.background} p-4 md:mr-4 lg:mr-8`}>
                  <h2 className='text-4xl font-bold'>0</h2>
                  <p className='text-[#16D5FF] text-2xl'>Minutes</p>
              </div>
            </Fade>
            <Fade left>
            <div className={`mt-4 w-full flex flex-col justify-center items-center ${props.background} p-4`}>
                <h2 className='text-4xl font-bold'>0</h2>
                <p className='text-[#16D5FF] text-2xl'>Seconds</p>
            </div>
            </Fade>
            </div>
           </div>
          </div>
          <button className='my-8 px-8 py-4 bg-[#16D5FF] rounded-md text-white text-xl'>Buy Token</button>
          <div className='flex mx-4 mb-12 sm:w-1/2 md:w-3/4 lg:w-1/5'>
            <div className='w-full h-auto'>
              <img src="/assets/payment-1.png" alt="payment-1" className='sm:w-full' />
            </div>
            <div className='w-full mx-2 h-auto'>
              <img src="/assets/payment-2.png" alt="payment-2" className='sm:w-full' />
            </div>
            <div className='w-full mr-2 h-auto'>
              <img src="/assets/payment-3.png" alt="payment-3" className='sm:w-full' />
            </div>
            <div className='w-full h-auto'>
              <img src="/assets/payment-4.png" alt="payment-4" className='sm:w-full' />
            </div>
          </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Token