import React, { useState } from 'react'
import Info from '../Utils/Info'


function About() {
    const [hoverNo, setHoverNo] = useState('')

    return (
        <div className='w-full h-auto flex flex-col py-5'>
            <h1 className='font-marcellus tracking-[3px] text-center text-sm'>ABOUT OUR WENELUX</h1>
            <div className='w-full h-auto flex flex-col relative'>
                <div className='w-full h-auto flex flex-col justify-center items-center font-marcellus text-xs my-10 md:my-20 md:text-xl md:gap-4 xl:text-2xl xl:gap-6 2xl:text-3xl'>
                    <p className='text-center flex items-center'>I AM PASSIONATELY <img src="" alt="" className='w-5 h-5 mx-1 bg-slate-800' /> DEDICATED TO CRAFTING TIMELESS</p>
                    <p className='text-center flex items-center'>ELEGANCE AND CAPTURING THE ESSENCE  <img src="" alt="" className='w-5 h-5 mx-1 bg-slate-800 hidden md:block' />  OF INDIVIDUAL STORIES</p>
                    <p className='text-center flex items-center'>OUR <img src="" alt="" className='w-5 h-5 mx-1 bg-slate-800' />  BRAND IS NOT JUST ABOUT ADORNMENT</p>
                </div>
                <div className='w-full h-auto flex flex-col items-center justify-center gap-2 font-marcellus'>
                    <img src="" alt="" className='w-40 h-14 bg-gray-700' />
                    <span>Jatin Sharma</span>
                </div>
                <img src="" alt="" className='w-16 rounded-xl h-20 bg-gray-900 hidden md:block absolute bottom-24 right-24 lg:right-40 xl:right-60 2xl:right-80' />
            </div>
            <div className='product-slider my-10 h-auto w-full overflow-x-scroll flex font-marcellus lg:overflow-x-hidden'>
                <div onMouseEnter={() => setHoverNo(0)} onMouseLeave={() => setHoverNo('')} className='min-w-full h-auto relative sm:min-w-[25vw] cursor-pointer'>
                    <img src="" alt="" className='w-full h-[70vh] bg-gray-400 lg:h-[90vh]' />
                    <div className='w-full h-auto px-6 flex flex-col absolute bottom-20 gap-2 z-40'>
                        <span className={`${hoverNo === 0 ? 'text-center md:text-start' : 'text-center'} text-[#FFFFFF99] text-3xl font-semibold sm:text-lg md:text-xl lg:text-2xl xl:text-3xl 2xl:text-4xl `} >Necklaces</span>
                        <span className={`${hoverNo === 0 ? ' hidden md:block md:text-[#FFFFFF99] text-xs xl:text-base' : 'hidden'}`}>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Magnam natus eos nobis ipsa vitae laborum deleniti enim, quaerat officia! Quos.</span>
                    </div>
                    <div className={`${hoverNo === 0 ? 'sm:absolute sm:inset-0 sm:bg-[#1A3A37] sm:z-10 sm:rounded-xl' : 'hidden'} `}></div>
                </div>
                <div onMouseEnter={() => setHoverNo(1)} onMouseLeave={() => setHoverNo('')} className='min-w-full h-auto relative sm:min-w-[25vw] cursor-pointer'>
                    <img src="" alt="" className='w-full h-[70vh] bg-gray-400 lg:h-[90vh]' />
                    <div className='w-full h-auto px-6 flex flex-col absolute bottom-20 gap-2 z-40'>
                        <span className={`${hoverNo === 1 ? 'text-center md:text-start' : 'text-center'} text-[#FFFFFF99] text-3xl font-semibold sm:text-lg md:text-xl lg:text-2xl xl:text-3xl 2xl:text-4xl `} >Necklaces</span>
                        <span className={`${hoverNo === 1 ? ' hidden md:block md:text-[#FFFFFF99] text-xs xl:text-base' : 'hidden'}`} >Lorem ipsum dolor sit, amet consectetur adipisicing elit. Magnam natus eos nobis ipsa vitae laborum deleniti enim, quaerat officia! Quos.</span>
                    </div>
                    <div className={`${hoverNo === 1 ? 'sm:absolute sm:inset-0 sm:bg-[#1A3A37] sm:z-10 sm:rounded-xl' : 'hidden'} `}></div>
                </div>
                <div onMouseEnter={() => setHoverNo(2)} onMouseLeave={() => setHoverNo('')} className='min-w-full h-auto relative sm:min-w-[25vw] cursor-pointer'>
                    <img src="" alt="" className='w-full h-[70vh] bg-gray-400 lg:h-[90vh]' />
                    <div className='w-full h-auto px-6 flex flex-col absolute bottom-20 gap-2 z-40'>
                        <span className={`${hoverNo === 2 ? 'text-center md:text-start' : 'text-center'} text-[#FFFFFF99] text-3xl font-semibold sm:text-lg md:text-xl lg:text-2xl xl:text-3xl 2xl:text-4xl `} >Bracelets</span>
                        <span className={`${hoverNo === 2 ? ' hidden md:block md:text-[#FFFFFF99] text-xs xl:text-base' : 'hidden'}`}>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Magnam natus eos nobis ipsa vitae laborum deleniti enim, quaerat officia! Quos.</span>
                    </div>
                    <div className={`${hoverNo === 2 ? 'sm:absolute sm:inset-0 sm:bg-[#1A3A37] sm:z-10 sm:rounded-xl' : 'hidden'} `}></div>
                </div>
                <div onMouseEnter={() => setHoverNo(3)} onMouseLeave={() => setHoverNo('')} className='min-w-full h-auto relative sm:min-w-[25vw] cursor-pointer'>
                    <img src="" alt="" className='w-full h-[70vh] bg-gray-400 lg:h-[90vh]' />
                    <div className='w-full h-auto px-6 flex flex-col absolute bottom-20 gap-2 z-30'>
                        <span className={`${hoverNo === 3 ? 'text-center md:text-start' : 'text-center'} text-[#FFFFFF99] text-3xl font-semibold sm:text-lg md:text-xl lg:text-2xl xl:text-3xl 2xl:text-4xl `} >Pendants</span>
                        <span className={`${hoverNo === 3 ? ' hidden md:block md:text-[#FFFFFF99] text-xs xl:text-base' : 'hidden'}`}>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Magnam natus eos nobis ipsa vitae laborum deleniti enim, quaerat officia! Quos.</span>
                    </div>
                    <div className={`${hoverNo === 3 ? 'sm:absolute sm:inset-0 sm:bg-[#1A3A37] sm:z-10 sm:rounded-xl' : 'hidden'} `}></div>
                </div>
            </div>
            <Info />
        </div>
    )
}

export default About