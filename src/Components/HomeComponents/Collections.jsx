import React, { useEffect, useState } from 'react'
import { GoHeart } from "react-icons/go";
import { NavLink } from 'react-router-dom';

function Collections({ data }) {
    const [hoverNo, setHoverNo] = useState('')
    const [products, setProducts] = useState([])
    const [selectedImages, setSelectedImages] = useState({});

    useEffect(() => {
        setProducts(data)
    }, [data])

    return (
        <div className='bg-[#1A3A37] w-full h-auto flex flex-col justify-center items-center py-10 xl:py-20 gap-10'>
            <div className='flex flex-col justify-center items-center font-marcellus text-white gap-3'>
                <span className='tracking-[7px] text-xs sm:text-sm md:text-base text-white'>Glamorous Life</span>
                <span className='text-3xl sm:text-4xl md:text-5xl lg:text-6xl'>Our new Collections</span>
            </div>
            <div className='product-slider w-full h-auto overflow-x-scroll px-10 flex gap-6 m-10 md:h-[300px] xl:h-[400px]'>
                {
                    products.length > 0
                        ? products.map((product, index) => (
                            <NavLink state={{ product }} to={`/single-product/${product._id}`} key={index} onMouseEnter={() => setHoverNo(index)} onMouseLeave={() => setHoverNo('')} className={`${hoverNo === index ? 'md:h-[298px] xl:h-[378px]' : 'md:h-[270px] xl:h-[350px]'} min-w-[70vw] h-auto pb-4 bg-gray-200 flex flex-col rounded-3xl p-1 sm:min-w-[40vw] md:min-w-[30vw] lg:min-w-[25vw] duration-300 transition-all ease-in-out`}>
                                <div className='w-full h-60 xl:max-h-[470px]'>
                                    <img src={selectedImages[product._id] || product?.Image} alt="image" className='w-full h-full object-cover bg-gray-900 rounded-3xl ' />
                                </div>
                                <div className='w-full h-auto flex justify-between mt-2 items-center px-2 xl:text-2xl'>
                                    <span className='font-marcellus text-[#090909]'>{product.name}</span>
                                    <GoHeart size={20} className='text-[#B3B3B3] xl:size-6' />
                                </div>
                                <span className='text-[#5A5A5A] text-xs px-2 xl:text-base'>{product.category}</span>
                                <div
                                    className={`${hoverNo === index ? "opacity-100 visible translate-y-0" : "opacity-0 invisible -translate-y-5"
                                        } md:w-full md:h-[30px] xl:h-[50px] md:flex md:justify-between md:mt-4 md:items-center md:px-2 transition-all duration-300 ease-in-out`}
                                >
                                    <span className="flex gap-2">
                                        <span
                                            onClick={(e) => {
                                                e.preventDefault();
                                                e.stopPropagation();
                                                setSelectedImages((prevState) => ({
                                                    ...prevState,
                                                    [product._id]: product?.Image1.image,
                                                }));
                                            }}
                                            className="h-4 w-4 rounded-full xl:h-6 xl:w-6 border-[1px] cursor-pointer"
                                            style={{ backgroundColor: `#${product?.Image1.color}` }}
                                        ></span>
                                        <span
                                            onClick={(e) => {
                                                e.preventDefault();
                                                e.stopPropagation();
                                                setSelectedImages((prevState) => ({
                                                    ...prevState,
                                                    [product._id]: product?.Image2.image,
                                                }));
                                            }}
                                            className="h-4 w-4 rounded-full xl:h-6 xl:w-6 border-[1px] cursor-pointer"
                                            style={{ backgroundColor: `#${product?.Image2.color}` }}
                                        ></span>
                                        <span
                                            onClick={(e) => {
                                                e.preventDefault();
                                                e.stopPropagation();
                                                setSelectedImages((prevState) => ({
                                                    ...prevState,
                                                    [product._id]: product?.Image3.image,
                                                }));
                                            }}
                                            className="h-4 w-4 rounded-full xl:h-6 xl:w-6 border-[1px] cursor-pointer"
                                            style={{ backgroundColor: `#${product?.Image3.color}` }}
                                        ></span>
                                    </span>
                                    <span className="font-marcellus xl:text-lg">₹{product.quantityPrices[0].price}</span>
                                </div>
                            </NavLink>
                        ))
                        : null
                }
            </div>
        </div>
    )
}

export default Collections