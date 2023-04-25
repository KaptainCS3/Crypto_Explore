import React from 'react'
import { Link } from 'react-router-dom'

const CurrentTab = () => {
  return (
    <>
    <section className="bg-[#F2F8FE] mb-12 py-[6rem] h-full sm:w-full w-max[540px] mx-auto flex flex-col justify-between px-4 font-['Open Sans'] md:w-full mx-auto">
        <div className='w-[85%] mx-auto lg:flex justify-between'>

        <div className='mb-12 lg:w-1/2'>
            <h1 className='hero font-[700] mb-4'>About Us</h1>
            <nav>
                <ol className='flex'>
                    <li className="text-[#16D5FF] hover:text-[#0d6efd] cursor-pointer after:content-['/'] after:px-2">
                        <Link to="">
                        Home
                        </Link>
                        </li>
                    <li className="text-[#16D5FF] hover:text-[#0d6efd]  cursor-pointer after:content-['/'] after:px-2">
                        <Link to="">
                        Pages
                        </Link>
                        </li>
                    <li className='text-[#999]'>About Us</li>
                </ol>
            </nav>
        </div>
        <div className='animate-pulse flex items-center justify-center lg:w-[48%]'>
            <img src={("/assets/hero-2.png")} alt="hero-2" className='max-w-full h-auto'/>
        </div>
        </div>
    </section>
    </>
  )
}

export default CurrentTab