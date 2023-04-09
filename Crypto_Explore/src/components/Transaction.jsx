import React from 'react'

const Statistic = () => {
  return (
     <>
         <section className="mb-12 py-12 h-full sm:w-full w-max[540px] mx-auto flex flex-col justify-between px-4 font-['Open Sans'] md:w-full mx-auto">
        {/* Hero section */}
        <div className="w-[85%] mx-auto">
          <div className='flex flex-col items-center lg:flex-row'>
            <div className='mt-8 w-full flex flex-col items-center'>
              <div>
              <img src="/assets/icon-9.png" alt="icon-9" className='h-auto' />
              </div>
              <h3 className='hero font-[700] mt-4'>123456</h3>
              <p className='text-[#16D5FF] text-xl'>Today Transactions</p>
            </div>
            <div className='mt-8 w-full flex flex-col items-center'>
              <div>
              <img src="/assets/icon-10.png" alt="icon-10" className='h-auto' />
              </div>
              <h3 className='hero font-[700] mt-4'>123456</h3>
              <p className='text-[#16D5FF] text-xl'>Monthly Transactions</p>
            </div>
            <div className='mt-8 w-full flex flex-col items-center'>
              <div>
              <img src="/assets/icon-2.png" alt="icon-2" className='h-auto' />
              </div>
              <h3 className='hero font-[700] mt-4'>123456</h3>
              <p className='text-[#16D5FF] text-xl'>Total Transactions</p>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Statistic