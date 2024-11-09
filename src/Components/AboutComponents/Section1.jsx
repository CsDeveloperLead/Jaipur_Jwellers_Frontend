import React from 'react'
import Header from '../Header'
import Info from '.././Utils/Info'

function Section1() {
    return (
        <>
            <Header />
            <div className='w-full h-auto flex flex-col py-10'>
                <div className='font-marcellus px-5 text-sm md:text-base xl:text-lg md:px-20'> <span className='text-[#A7A7A7]'>Home</span> {'>'} <span className='text-[#1A3A37]'>About</span></div>
                <div className='flex flex-col justify-center items-center my-10'>
                    <span className='font-marcellus text-3xl md:text-4xl'>About Jwellery</span>
                    <span className='text-xs w-[90vw] mt-5 font-marcellus sm:text-sm text-[#383838] sm:w-[80vw] md:w-[70vw] lg:w-[60vw] xl:w-[50vw] text-center'>We are here to provide a place special for electronic devices. Although we only operated for 2 years but we always provide the best service for customers and all the sellers who use our website. With the hope that it can help improve a better life using various electronic goods with the latest technology, we are all ears to any suggestion from our dear customers</span>
                </div>
                <div className='w-full h-auto flex justify-center items-center lg:my-10'>
                    <img src="" alt="" className='w-[80%] h-[20vh] bg-gray-200 rounded-xl sm:h-[40vh] md:h-[50vh] lg:h-[60vh] xl:h-[70vh]' />
                </div>
            </div>
            <Info />
        </>
    )
}

export default Section1