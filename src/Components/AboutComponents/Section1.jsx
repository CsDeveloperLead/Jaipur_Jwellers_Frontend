import React from 'react'
import Header from '../Header'
import Info from '.././Utils/Info'
import ShopImg from '../../assets/shopImg.webp'

function Section1() {
    return (
        <>
            <Header color={'#FAFAFA'} />
            <div className='w-full h-auto flex flex-col py-10 bg-[#FAFAFA]'>
                <div className='font-marcellus px-5 text-sm md:text-base xl:text-lg md:px-20'> <span className='text-[#A7A7A7]'>Home</span> {'>'} <span className='text-[#1A3A37]'>About</span></div>
                <div className='flex flex-col justify-center items-center my-10'>
                    <span className='font-marcellus text-3xl md:text-4xl'>About Jwellery</span>
                    <span className='text-xs w-[90vw] mt-5 font-marcellus sm:text-sm text-[#383838] sm:w-[80vw] md:w-[70vw] lg:w-[60vw] xl:w-[50vw] text-center'>Rooted in the royal traditions of Jaipur, our family has been crafting exquisite jewelry for decades. Passed down through generations, our expertise blends heritage craftsmanship with modern elegance. Each piece is a symbol of artistry, passion, and luxury—now available at your fingertips.</span>
                </div>
                <div className='w-full h-auto flex justify-center items-center lg:py-10'>
                    <img src={ShopImg} alt="shop" className='w-[80%] h-[20vh] object-cover rounded-xl sm:h-[40vh] md:h-[50vh] lg:h-[60vh] xl:h-[70vh] object-top' />
                </div>
            </div>
            <Info />
        </>
    )
}

export default Section1