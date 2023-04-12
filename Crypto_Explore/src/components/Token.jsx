import React from 'react'

const Token = () => {
  return (
    <>
      <section className="mb-12 py-12 h-full sm:w-full w-max[540px] mx-auto flex flex-col justify-between px-4 font-['Open Sans'] md:w-full mx-auto">
        {/* Token Sales section */}
        <div className="w-[85%] mx-auto">
          <div className='flex flex-col items-center justify-center'>
            <h1 className='font-size mb-2 font-bold'>Token Sale</h1>
            <p className='text-[rgb(22,213,255)] text-xl mb-6'>Token Sale Countdown</p>
            <div className='w-full'>
            <div className='lg:flex justify-between mb-4'>
            <div className='mt-4 w-full flex flex-col justify-center items-center bg-white p-4 '>
              <h2 className='text-4xl font-bold'>0</h2>
              <p className='text-[#16D5FF] text-2xl'>Days</p>
            </div>
            <div className='mt-4 w-full flex flex-col justify-center items-center bg-white p-4 mx-8'>
               <h2 className='text-4xl font-bold'>0</h2>
               <p className='text-[#16D5FF] text-2xl'>Hours</p>
            </div>
            <div className='mt-4 w-full flex flex-col justify-center items-center bg-white p-4 mr-8'>
                <h2 className='text-4xl font-bold'>0</h2>
                <p className='text-[#16D5FF] text-2xl'>Minutes</p>
            </div>
            <div className='mt-4 w-full flex flex-col justify-center items-center bg-white p-4'>
                <h2 className='text-4xl font-bold'>0</h2>
                <p className='text-[#16D5FF] text-2xl'>Seconds</p>
            </div>
            </div>
           
          </div>
          <button className='my-8 px-8 py-4 bg-[#16D5FF] rounded-md text-white text-xl'>Buy Token</button>
          <div className='flex w-1/5 mx-4 mb-12'>
            <div className='w-full h-auto'>
              <img src="../../public/assets/payment-1.png" alt="payment-1" className='' />
            </div>
            <div className='w-full mx-2 h-auto'>
              <img src="../../public/assets/payment-2.png" alt="payment-2" className='' />
            </div>
            <div className='w-full mr-2 h-auto'>
              <img src="../../public/assets/payment-3.png" alt="payment-3" className='' />
            </div>
            <div className='w-full h-auto'>
              <img src="../../public/assets/payment-4.png" alt="payment-4" className='' />
            </div>
          </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Token