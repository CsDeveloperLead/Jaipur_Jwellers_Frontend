import React, { useEffect, useState } from 'react'
import { GoHeart } from "react-icons/go";
import { NavLink } from 'react-router-dom';

function Collections({ data }) {
    const [hoverNo, setHoverNo] = useState('')
    const [products, setProducts] = useState([])

    useEffect(() => {
        setProducts(data)
    }, [data])

    return (
        <div className='bg-[#1A3A37] w-full h-auto flex flex-col justify-center items-center py-10 xl:py-20 gap-10'>
            <div className='flex flex-col justify-center items-center font-marcellus text-white gap-3'>
                <span className='tracking-[7px] text-xs sm:text-sm md:text-base text-white'>Glamorous Life</span>
                <span className='text-3xl sm:text-4xl md:text-5xl lg:text-6xl'>Our new Collections</span>
            </div>
            <div className='product-slider w-full h-auto overflow-x-scroll px-10 flex gap-6 m-10 md:h-[400px] xl:h-[480px]'>
                {
                    products.length > 0
                        ? products.map((product, index) => (
                            <NavLink state={{ product }} to={`/single-product/${product._id}`} key={index} onMouseEnter={() => setHoverNo(index)} onMouseLeave={() => setHoverNo('')} className={`${hoverNo === index ? 'md:h-[340px] xl:h-[450px]' : 'md:h-[310px] xl:h-[400px]'} min-w-[70vw] h-auto pb-4 bg-gray-200 flex flex-col rounded-3xl p-1 sm:min-w-[40vw] md:min-w-[30vw] lg:min-w-[25vw] `}>
                                <img src="" alt="" className='w-full h-60 bg-gray-900 rounded-3xl xl:h-80' />
                                <div className='w-full h-auto flex justify-between mt-2 items-center px-2 xl:text-2xl'>
                                    <span className='font-marcellus text-[#090909]'>{product.name}</span>
                                    <GoHeart size={20} className='text-[#B3B3B3] xl:size-6' />
                                </div>
                                <span className='text-[#5A5A5A] text-xs px-2 xl:text-base'>{product.category}</span>
                                <div className={`${hoverNo === index ? 'hidden md:w-full md:h-[30px] xl:h-[50px] md:flex md:justify-between md:mt-4 md:items-center md:px-2' : 'hidden'} `} >
                                    <span className='flex gap-2'>
                                        <span className='h-4 w-4 bg-[#D5D3D4] rounded-full xl:h-6 xl:w-6'></span>
                                        <span className='h-4 w-4 bg-[#C9E1EF] rounded-full xl:h-6 xl:w-6'></span>
                                        <span className='h-4 w-4 bg-[#97939F] rounded-full xl:h-6 xl:w-6'></span>
                                    </span>
                                    <span className='font-marcellus xl:text-lg'>₹{product.quantityPrices[0].price}</span>
                                </div>
                            </NavLink>
                        ))
                        : null
                }
                {/* <div onMouseEnter={() => setHoverNo('4')} onMouseLeave={() => setHoverNo('')} className='min-w-[70vw] h-auto pb-4 bg-gray-200 flex flex-col rounded-3xl p-1 md:h-[45%] sm:min-w-[40vw] xl:h-[65%] md:min-w-[30vw] lg:min-w-[25vw] 2xl:h-[58%]'>
                    <img src="" alt="" className='w-full h-60 bg-gray-900 rounded-3xl xl:h-80' />
                    <div className='w-full h-auto flex justify-between mt-2 items-center px-2 xl:text-2xl'>
                        <span className='font-marcellus text-[#090909]'>Pearl Earrings</span>
                        <GoHeart size={20} className='text-[#B3B3B3] xl:size-6' />
                    </div>
                    <span className='text-[#5A5A5A] text-xs px-2 xl:text-base'>Classic sophistication</span>
                    <div className={`${hoverNo === '4' ? 'hidden md:w-full md:h-auto md:flex md:justify-between md:mt-4 md:items-center md:px-2' : 'hidden'} `} >
                        <span className='flex gap-2'>
                            <span className='h-4 w-4 bg-[#D5D3D4] rounded-full xl:h-6 xl:w-6'></span>
                            <span className='h-4 w-4 bg-[#C9E1EF] rounded-full xl:h-6 xl:w-6'></span>
                            <span className='h-4 w-4 bg-[#97939F] rounded-full xl:h-6 xl:w-6'></span>
                        </span>
                        <span className='font-marcellus xl:text-lg'>₹1250</span>
                    </div>
                </div> */}
            </div>
        </div>
    )
}

export default Collections