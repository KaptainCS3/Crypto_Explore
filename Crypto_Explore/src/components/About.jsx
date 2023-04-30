import React from 'react'
import { faCheck, faMarker } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Fade from 'react-reveal/Fade';
const About = () => {
  return (
     <>
         <section className="bg-white mb-12 py-12 h-full sm:w-full w-max[540px] mx-auto flex flex-col justify-between pt-[6em] font-['Open Sans'] md:w-full mx-auto">
        {/* Hero section */}
        <div className="w-[85%] mx-auto lg:flex justify-between">
          <Fade bottom>
             <div className='flex items-center justify-center lg:w-[45%]'>
                <img src={("/assets/about.png")} alt="first hero image" className='max-w-full h-auto'/>
            </div>
            </Fade>
            
            <Fade bottom>
            <div className='my-12 lg:w-1/2'>
            <h2 className="font-[700] text-[2.5rem]">
                About Us
            </h2>
            <p className='text-[#16D5FF] mb-6 text-[1.35rem] font-normal'>The Most Trusted Cryptocurrency Platform</p>
            <p className='mb-4 text-[#999] text-[1.125em] line-[1.2]'>Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu diam amet diam et eos. Clita erat ipsum et lorem et sit, sed stet lorem sit clita duo justo magna dolore erat amet
            </p>
            <p className='mb-4 text-[#999] text-[1.125em] line-[1.2]'>Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu diam amet diam et eos. Clita erat ipsum et lorem et sit.</p>

            <div>
                <div className='flex items-center mb-2'>
                    <div className='h-8 w-8 rounded-full bg-[#F2F8FE] flex items-center justify-center mr-4 font-bold text-xl'>
                    <FontAwesomeIcon icon={faCheck} className="text-[#16D5FF]" />
                    </div>
                   <span className='text-[#999]'>
                     Tempor erat elitr rebum at clita
                    </span>
                </div>
                <div className='flex items-center mb-2'>
                    <div className='h-8 w-8 rounded-full bg-[#F2F8FE] flex items-center justify-center mr-4 font-bold text-xl'>
                    <FontAwesomeIcon icon={faCheck} className="text-[#16D5FF]" />
                    </div>
                   <span className='text-[#999]'>
                     Tempor erat elitr rebum at clita
                    </span>
                </div>
                <div className='flex items-center mb-6'>
                    <div className='h-8 w-8 rounded-full bg-[#F2F8FE] flex items-center justify-center mr-4 font-bold text-xl'>
                    <FontAwesomeIcon icon={faCheck} className="text-[#16D5FF]" />
                    </div>
                   <span className='text-[#999]'>
                     Tempor erat elitr rebum at clita
                    </span>
                </div>
            </div>
            <button className='px-6 py-4 bg-[#16D5FF] font-[500] text-white text-md rounded'>Read More</button>
            </div>
            </Fade>
        </div>
      </section>
    </>
  )
}

export default About