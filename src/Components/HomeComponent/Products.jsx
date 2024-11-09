import React from 'react'
import { GoHeart } from "react-icons/go";

function Products() {
    return (
        <div className='w-full h-auto flex pb-10'>
            <div className='w-full h-auto flex flex-col relative gap-5 xl:flex-row xl:gap-0'>
                <div className='w-full h-auto flex flex-col xl:w-[60vw]'>
                    <div className='w-full h-auto flex flex-col font-marcellus justify-center text-2xl gap-1 px-5 sm:text-5xl sm:my-4 md:text-6xl xl:text-5xl 2xl:text-6xl xl:px-10'>
                        <span>Adorn Yourself in Elegance</span>
                        <span>with Exquisite Jewelry</span>
                    </div>
                    <div className='w-full h-auto flex my-5 overflow-x-scroll gap-6 px-8 pb-10 xl:gap-3 xl:px-2 xl:overflow-hidden'>
                        <div className='min-w-[70vw] bg-white p-2 shadow-md shadow-gray-400 rounded-xl h-auto flex flex-col mx-auto sm:min-w-[40vw] md:min-w-[28vw] xl:min-w-[19vw] 2xl:min-w-[18vw]'>
                            <img src="" alt="" className='w-full h-52 bg-gray-300 rounded-2xl' />
                            <div className='w-full h-auto flex justify-between mt-2 items-center px-2'>
                                <span className='font-marcellus'>Diamond Pendant</span>
                                <GoHeart size={20} className='text-[#B3B3B3]' />
                            </div>
                            <span className='text-[#5A5A5A] font-bellota px-2 text-xs'>Elegant brilliance</span>
                            <div className='w-full h-auto flex justify-between mt-4 items-center px-2'>
                                <span className='flex gap-2'>
                                    <span className='h-4 w-4 bg-[#7E0100] rounded-full'></span>
                                    <span className='h-4 w-4 bg-[#000C7E] rounded-full'></span>
                                    <span className='h-4 w-4 bg-[#7E004B] rounded-full'></span>
                                </span>
                                <span className='font-marcellus'>₹1250</span>
                            </div>
                        </div>
                        <div className='min-w-[70vw] bg-white p-2 shadow-md shadow-gray-400 rounded-xl h-auto flex flex-col mx-auto sm:min-w-[40vw] md:min-w-[28vw] xl:min-w-[19vw] 2xl:min-w-[18vw]'>
                            <img src="" alt="" className='w-full h-52 bg-gray-300 rounded-2xl' />
                            <div className='w-full h-auto flex justify-between mt-2 items-center px-2'>
                                <span className='font-marcellus'>Pearl Earrings</span>
                                <GoHeart size={20} className='text-[#B3B3B3]' />
                            </div>
                            <span className='text-[#5A5A5A] font-bellota px-2 text-xs'>Classic sophistication</span>
                            <div className='w-full h-auto flex justify-between mt-4 items-center px-2'>
                                <span className='flex gap-2'>
                                    <span className='h-4 w-4 bg-[#D5D3D4] rounded-full'></span>
                                    <span className='h-4 w-4 bg-[#C9E1EF] rounded-full'></span>
                                    <span className='h-4 w-4 bg-[#97939F] rounded-full'></span>
                                </span>
                                <span className='font-marcellus'>₹1175</span>
                            </div>
                        </div>
                        <div className='min-w-[70vw] bg-white p-2 shadow-md shadow-gray-400 rounded-xl h-auto flex flex-col mx-auto sm:min-w-[40vw] md:min-w-[28vw] xl:min-w-[19vw] 2xl:min-w-[18vw]'>
                            <img src="" alt="" className='w-full h-52 bg-gray-300 rounded-2xl' />
                            <div className='w-full h-auto flex justify-between mt-2 items-center px-2'>
                                <span className='font-marcellus'>Gold Bracelet</span>
                                <GoHeart size={20} className='text-[#B3B3B3]' />
                            </div>
                            <span className='text-[#5A5A5A] font-bellota px-2 text-xs'>Luxurious adornment</span>
                            <div className='w-full h-auto flex justify-between mt-4 items-center px-2'>
                                <span className='flex gap-2'>
                                    <span className='h-4 w-4 bg-[#9AD398] rounded-full'></span>
                                    <span className='h-4 w-4 bg-[#D3C598] rounded-full'></span>
                                    <span className='h-4 w-4 bg-[#D398A0] rounded-full'></span>
                                </span>
                                <span className='font-marcellus'>₹1200</span>
                            </div>
                        </div>
                    </div>
                    <div className='w-full h-auto font-marcellus px-5 text-sm sm:text-lg xl:mt-10 xl:w-[42vw] xl:px-10 text-[#5A5A5A]'>
                        Celebrate your style journey with unmatched elegance, craftsmanship, and timeless beauty found in every piece of our jewelry collection.
                    </div>
                </div>
                <div className='w-full h-[90vh] flex items-center justify-center relative md:my-5 xl:w-[40vw] xl:items-end xl:h-auto xl:my-0'>
                    <img src="" alt="" className='w-[80%] h-[80%] bg-gray-400 rounded-[100px] border-2 border-red-200 sm:w-[50%] md:h-full md:w-[50%] lg:w-[40%] xl:w-[60%] xl:h-[90%]' />
                    <div className='absolute flex p-1 bg-white rounded-lg bottom-32 right-5 shadow-md sm:right-36 md:right-48 lg:right-60 xl:right-10'>
                        <img src="" alt="" className='w-16 h-16 bg-gray-200 rounded-lg md:h-20 md:w-20 xl:w-16 xl:h-16' />
                        <div className='w-auto h-auto flex flex-col px-4 justify-between pb-2:'>
                            <div className='w-full h-auto flex flex-col'>
                                <span className='font-marcellus text-sm md:text-lg xl:text-base'>Ruby Ring</span>
                                <span className='font-bellota text-[#5A5A5A] text-xs md:text-sm xl:text-xs'>Timeless glamour </span>
                            </div>
                            <span className='text-[#090909] font-marcellus text-sm md:text-base'>₹1200</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Products