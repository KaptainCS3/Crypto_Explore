import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from '@fortawesome/free-solid-svg-icons'
const FAQ = () => {
  return (
    <>
     <section className="bg-white mb-12 py-12 h-full sm:w-full w-max[540px] mx-auto flex flex-col justify-between px-4 font-['Open Sans'] md:w-full mx-auto">
        {/* Token Sales section */}
        <div className="w-[70%] mx-auto mb-16">
          <div className='flex flex-col items-center justify-center'>
            <h1 className='font-size mb-2 font-bold'>FAQs</h1>
            <p className='text-[rgb(22,213,255)] text-xl mb-6'>Frequently Asked Questions</p>
            <div className='w-full justify-evenly'>
            <div className=''>
                <div className='mb-4'>
                <div className='flex justify-between px-4 py-3 mb-2 bg-[#F2F8FE] cursor-pointer'>
                    <h3>How to build a website?</h3>
                    <FontAwesomeIcon icon={faChevronDown} />
                </div>
                {/* <p>Dolor nonumy tempor elitr et rebum ipsum sit duo duo. Diam sed sed magna et magna diam aliquyam amet dolore ipsum erat duo. Sit rebum magna duo labore no diam.</p> */}
                </div>
                <div className='mb-4'>
                <div className='flex justify-between px-4 py-3 mb-2 bg-[#F2F8FE] cursor-pointer'>
                    <h3>How long will it take to get a new website?</h3>
                    <FontAwesomeIcon icon={faChevronDown} />
                </div>
                {/* <p>Dolor nonumy tempor elitr et rebum ipsum sit duo duo. Diam sed sed magna et magna diam aliquyam amet dolore ipsum erat duo. Sit rebum magna duo labore no diam.</p> */}
                </div>
                <div className='mb-4'>
                <div className='flex justify-between px-4 py-3 mb-2 bg-[#F2F8FE] cursor-pointer'>
                    <h3>Do you create HTML websites?</h3>
                    <FontAwesomeIcon icon={faChevronDown} />
                </div>
                {/* <p>Dolor nonumy tempor elitr et rebum ipsum sit duo duo. Diam sed sed magna et magna diam aliquyam amet dolore ipsum erat duo. Sit rebum magna duo labore no diam.</p> */}
                </div>
                <div className='mb-4'>
                <div className='flex justify-between px-4 py-3 mb-2 bg-[#F2F8FE] cursor-pointer'>
                    <h3>Will my website be mobile-friendly?</h3>
                    <FontAwesomeIcon icon={faChevronDown} />
                </div>
                {/* <p>Dolor nonumy tempor elitr et rebum ipsum sit duo duo. Diam sed sed magna et magna diam aliquyam amet dolore ipsum erat duo. Sit rebum magna duo labore no diam.</p> */}
                </div>
                <div className='mb-4'>
                <div className='flex justify-between px-4 py-3 mb-2 bg-[#F2F8FE] cursor-pointer'>
                    <h3>Will you maintain my website for me?</h3>
                    <FontAwesomeIcon icon={faChevronDown} />
                </div>
                {/* <p>Dolor nonumy tempor elitr et rebum ipsum sit duo duo. Diam sed sed magna et magna diam aliquyam amet dolore ipsum erat duo. Sit rebum magna duo labore no diam.</p> */}
                </div>
                <div className='mb-4'>
                <div className='flex justify-between px-4 py-3 mb-2 bg-[#F2F8FE] cursor-pointer'>
                    <h3>I'm on a strict budget. Do you have any low cost options?</h3>
                    <FontAwesomeIcon icon={faChevronDown} />
                </div>
                {/* <p>Dolor nonumy tempor elitr et rebum ipsum sit duo duo. Diam sed sed magna et magna diam aliquyam amet dolore ipsum erat duo. Sit rebum magna duo labore no diam.</p> */}
                </div>
                <div className='mb-4'>
                <div className='flex justify-between px-4 py-3 mb-2 bg-[#F2F8FE] cursor-pointer'>
                    <h3>Will you maintain my website for me?</h3>
                    <FontAwesomeIcon icon={faChevronDown} />
                </div>
                {/* <p>Dolor nonumy tempor elitr et rebum ipsum sit duo duo. Diam sed sed magna et magna diam aliquyam amet dolore ipsum erat duo. Sit rebum magna duo labore no diam.</p> */}
                </div>
                <div className=''>
                <div className='flex justify-between px-4 py-3 bg-[#F2F8FE] cursor-pointer'>
                    <h3>I'm on a strict budget. Do you have any low cost options?</h3>
                    <FontAwesomeIcon icon={faChevronDown} />
                </div>
                {/* <p>Dolor nonumy tempor elitr et rebum ipsum sit duo duo. Diam sed sed magna et magna diam aliquyam amet dolore ipsum erat duo. Sit rebum magna duo labore no diam.</p> */}
                </div>
           </div>
          </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default FAQ