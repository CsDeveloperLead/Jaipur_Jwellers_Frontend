import React from 'react'
import Customer from '../../assets/Images/customer.png'
import Business from '../../assets/Images/business.png'
import Ring from '../../assets/Images/ring.png'
import Designs from '../../assets/Images/designs.png'


function Info() {
    return (
        <div className='w-full h-auto flex flex-wrap my-14'>
            <div className='w-full h-auto border-y-[1px] border-black py-10 px-5 relative sm:w-[50vw] lg:w-[25vw] lg:border-y-[1px] xl:py-16'>
                <div className='w-full h-auto flex flex-col font-marcellus'>
                    <span className='text-[#1A3A37] xl:text-xl'>100</span>
                    <span className='text-[#1A3A37] xl:text-xl'>Happy Customers</span>
                    <span className='mt-4 text-sm text-[#585858] xl:text-base'>Where Elegance Finds Its Extraordinary Artistry Who Crave a One-of-a-Kind Sparkle.</span>
                </div>
                <img src={Customer} alt="logo" className='absolute w-10 top-5 right-10' />
            </div>
            <div className='w-full h-auto border-black py-10 px-5 relative sm:w-[50vw] sm:border-y-[1px] sm:border-l-[1px] lg:w-[25vw] lg:border-x-[1px] xl:py-16'>
                <div className='w-full h-auto flex flex-col font-marcellus'>
                    <span className='text-[#1A3A37] xl:text-xl'>05</span>
                    <span className='text-[#1A3A37] xl:text-xl'>Business Owned</span>
                    <span className='mt-4 text-sm text-[#585858] xl:text-base'>Captivatingly Classy Jewelry for the Discerning Unveiling the Essence of Timelessness.</span>
                </div>
                <img src={Business} alt="logo" className='absolute w-10 top-5 right-10' />
            </div>
            <div className='w-full h-auto border-y-[1px] border-black py-10 px-5 relative sm:border-t-0 sm:border-b-[1px] sm:w-[50vw] lg:w-[25vw] lg:border-y-[1px] xl:py-16'>
                <div className='w-full h-auto flex flex-col font-marcellus'>
                    <span className='text-[#1A3A37] xl:text-xl'>1k</span>
                    <span className='text-[#1A3A37] xl:text-xl'>Happy Customers</span>
                    <span className='mt-4 text-sm text-[#585858] xl:text-base'>Exceptional Craftsmanship, Unparalleled Elegance Where Effortless Glamour Meets Class.</span>
                </div>
                <img src={Ring} alt="logo" className='absolute w-10 top-5 right-10' />
            </div>
            <div className='w-full h-auto border-b-[1px] border-black py-10 px-5 relative sm:w-[50vw] sm:border-l-[1px] lg:w-[25vw] lg:border-y-[1px] xl:py-16'>
                <div className='w-full h-auto flex flex-col font-marcellus'>
                    <span className='text-[#1A3A37] xl:text-xl'>15k</span>
                    <span className='text-[#1A3A37] xl:text-xl'>New Designs</span>
                    <span className='mt-4 text-sm text-[#585858] xl:text-base'>Accessorize Your Life with Fierce Charisma For Those Who Dare to Shine Bright.</span>
                </div>
                <img src={Designs} alt="logo" className='absolute w-10 top-5 right-10' />
            </div>
        </div>
    )
}

export default Info