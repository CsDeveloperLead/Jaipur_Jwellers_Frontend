import React, { useEffect, useState } from 'react'
import Info from '../Utils/Info'
import { NavLink } from 'react-router-dom'

function About({ data }) {
    const [hoverNo, setHoverNo] = useState('')
    const [products, setProducts] = useState([])

    // useEffect(() => {
    //     setProducts(data.slice(0, 4))
    // }, [data])


    return (
        <div className='w-full h-auto flex flex-col py-5 bg-[#FAFAFA]'>
            <h1 className='font-marcellus tracking-[3px] text-center text-sm'>ABOUT OUR JAIPUR JWELLERS</h1>
            <div className='w-full h-auto flex flex-col relative'>
                <div className='w-full h-auto flex flex-col justify-center items-center font-marcellus text-xs my-10 md:my-20 md:text-xl md:gap-4 xl:text-2xl xl:gap-6 2xl:text-3xl'>
                    <p className='text-center flex items-center'>WE ARE  PASSIONATELY <img src="" alt="" className='w-5 h-5 mx-1 bg-slate-800' /> DEDICATED TO CRAFTING TIMELESS</p>
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
                {
                    products?.map((product, index) => (
                        <NavLink state={{ product }} to={`/single-product/${product._id}`} key={index} onMouseEnter={() => setHoverNo(index)} onMouseLeave={() => setHoverNo('')} className='min-w-full h-auto relative sm:min-w-[25vw] cursor-pointer'>
                            <img src={product?.Image} alt="" className='w-full h-[70vh] bg-gray-400 lg:h-[90vh] object-cover rounded-xl' />
                            <div className='w-full h-auto px-6 flex flex-col absolute bottom-20 gap-2 z-40'>
                                <span className={`${hoverNo === index ? 'text-center md:text-start' : 'text-center'} text-[#FFFFFF99] text-2xl font-semibold sm:text-lg md:text-xl lg:text-2xl xl:text-3xl 2xl:text-4xl `} >{product.name}</span>
                                <span className={`${hoverNo === index ? ' hidden md:block md:text-[#FFFFFF99] text-xs xl:text-base' : 'hidden'}`}>{product.desc.length > 100 ? product.desc.slice(0, 100) : product.desc} {product.desc.length > 100 ? '....' : null} </span>
                            </div>
                            <div className={`${hoverNo === index ? 'opacity-20' : 'opacity-60'} absolute inset-0 bg-[#1A3A37] z-10 rounded-xl `} ></div>
                        </NavLink>
                    ))
                }
            </div>
            <Info />
        </div>
    )
}

export default About