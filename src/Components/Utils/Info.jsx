import React from 'react'
import Customer from '../../assets/Images/customer.png'
import Business from '../../assets/Images/business.png'
import Ring from '../../assets/Images/ring.png'
import Designs from '../../assets/Images/designs.png'


function Info() {
    return (
        <div className='w-full h-auto flex flex-wrap py-14 bg-[#FAFAFA]'>
            <div className='w-full sm:w-1/2 lg:w-1/4 h-auto border-y-[1px] sm:border-r-[1px] border-black py-10 px-5 relative flex flex-col items-center xl:py-16'>
                <div className='w-full h-auto flex flex-col font-marcellus'>
                    <span className='text-[#1A3A37] xl:text-xl'>100</span>
                    <span className='text-[#1A3A37] xl:text-xl'>Happy Customers</span>
                    <span className='mt-4 text-sm text-[#585858] xl:text-base'>Where Elegance Finds Its Extraordinary Artistry Who Crave a One-of-a-Kind Sparkle.</span>
                </div>
                <img src={Customer} alt="logo" className='absolute w-10 top-5 right-10' />
            </div>

            <div className='w-full sm:w-1/2 lg:w-1/4 h-auto py-10 px-5 relative sm:border-y-[1px] sm:border-black md:border-r-[1px] flex flex-col items-center xl:py-16'>
                <div className='w-full h-auto flex flex-col font-marcellus'>
                    <span className='text-[#1A3A37] xl:text-xl'>05</span>
                    <span className='text-[#1A3A37] xl:text-xl'>Business Owned</span>
                    <span className='mt-4 text-sm text-[#585858] xl:text-base'>Captivatingly Classy Jewelry for the Discerning Unveiling the Essence of Timelessness.</span>
                </div>
                <img src={Business} alt="logo" className='absolute w-10 top-5 right-10' />
            </div>

            <div className='w-full sm:w-1/2 lg:w-1/4 h-auto border-y-[1px] border-black sm:border-t-0 sm:border-r-[1px] md:border-t-[1px] py-10 px-5 relative flex flex-col items-center xl:py-16'>
                <div className='w-full h-auto flex flex-col font-marcellus'>
                    <span className='text-[#1A3A37] xl:text-xl'>1k</span>
                    <span className='text-[#1A3A37] xl:text-xl'>Happy Customers</span>
                    <span className='mt-4 text-sm text-[#585858] xl:text-base'>Exceptional Craftsmanship, Unparalleled Elegance Where Effortless Glamour Meets Class.</span>
                </div>
                <img src={Ring} alt="logo" className='absolute w-10 top-5 right-10' />
            </div>

            <div className='w-full sm:w-1/2 lg:w-1/4 h-auto border-b-[1px] border-black py-10 px-5 relative flex flex-col md:border-t-[1px] items-center xl:py-16'>
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