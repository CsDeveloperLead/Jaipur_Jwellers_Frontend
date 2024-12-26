import { useEffect, useState } from 'react'
import { GoHeart } from "react-icons/go";
import { NavLink } from 'react-router-dom';

function Products({ data }) {
    const [products, setProducts] = useState([])
    const [floatingProducts, setFloatingProdcuts] = useState([])
    const [selectedImages, setSelectedImages] = useState({});

    useEffect(() => {
        setProducts(data?.slice(0, 3))
        setFloatingProdcuts(data?.slice(0, 5))
    }, [data])

    return (
        <div className='w-full h-auto flex pb-5 xl:pb-20 bg-[#FAFAFA]'>
            <div className='w-full h-auto flex flex-col relative gap-5 xl:flex-row xl:gap-0'>
                <div className='w-full h-auto flex flex-col xl:w-[60vw]'>
                    <div className='w-full h-auto flex flex-col font-marcellus justify-center text-2xl gap-1 px-5 sm:text-5xl sm:my-4 md:text-6xl xl:text-5xl 2xl:text-6xl xl:px-10'>
                        <span>Adorn Yourself in Elegance</span>
                        <span>with Exquisite Jewelry</span>
                    </div>
                    <div className='product-slider w-full h-auto flex my-5 overflow-x-scroll gap-6 px-8 pb-10 xl:gap-3 xl:px-2 xl:overflow-hidden'>
                        {
                            products.length > 0
                                ? products.map((product, index) => (
                                    <NavLink state={{ product }} to={`/single-product/${product._id}`} key={index} className='group min-w-[70vw] bg-white p-2 shadow-md shadow-gray-400 rounded-xl hover:shadow-xl duration-500 ease-in-out transition-all h-auto flex flex-col mx-auto sm:min-w-[40vw] md:min-w-[28vw] xl:min-w-[19vw] 2xl:min-w-[18vw]'>
                                        <div className='w-full h-52 overflow-hidden rounded-2xl'>
                                            <img src={selectedImages[product._id] || product?.Image} alt="image" className='w-full h-full bg-gray-300 object-cover group-hover:scale-110 duration-500 ease-in-out' />
                                        </div>
                                        <div className='w-full h-auto flex justify-between mt-2 items-center px-2'>
                                            <span className='font-marcellus'>{product.name}</span>
                                            <GoHeart size={20} className='text-[#B3B3B3]' />
                                        </div>
                                        <span className='text-[#5A5A5A] font-bellota px-2 text-xs'>{product.category}</span>
                                        <div className='w-full h-auto flex justify-between mt-4 items-center px-2'>
                                            <span className='flex gap-2'>
                                                <span
                                                    onClick={(e) => {
                                                        e.preventDefault()
                                                        e.stopPropagation();
                                                        setSelectedImages((prevState) => ({
                                                            ...prevState,
                                                            [product._id]: product?.Image1.image,
                                                        }));
                                                    }}
                                                    className="h-4 w-4 rounded-full border-[1px] cursor-pointer" style={{ backgroundColor: `#${product?.Image1.color}` }}></span>
                                                <span
                                                    onClick={(e) => {
                                                        e.preventDefault()
                                                        e.stopPropagation();
                                                        setSelectedImages((prevState) => ({
                                                            ...prevState,
                                                            [product._id]: product?.Image2.image,
                                                        }));
                                                    }}
                                                    className="h-4 w-4 rounded-full border-[1px] cursor-pointer" style={{ backgroundColor: `#${product?.Image2.color}` }}></span>
                                                <span
                                                    onClick={(e) => {
                                                        e.preventDefault()
                                                        e.stopPropagation();
                                                        setSelectedImages((prevState) => ({
                                                            ...prevState,
                                                            [product._id]: product?.Image3.image,
                                                        }));
                                                    }}
                                                    className="h-4 w-4 rounded-full border-[1px] cursor-pointer" style={{ backgroundColor: `#${product?.Image3.color}` }}></span>
                                            </span>
                                            <span className='font-marcellus'>₹{product.quantityPrices[0].price}</span>
                                        </div>
                                    </NavLink>
                                ))
                                : null
                        }
                    </div>
                    <div className='w-full h-auto font-marcellus px-5 text-sm sm:text-lg xl:mt-10 xl:w-[42vw] xl:px-10 text-[#5A5A5A]'>
                        Celebrate your style journey with unmatched elegance, craftsmanship, and timeless beauty found in every piece of our jewelry collection.
                    </div>
                </div>
                <div className='w-full h-[90vh] flex items-center justify-center relative md:my-5 xl:w-[40vw] xl:items-end xl:h-auto xl:my-0'>
                    <img src="" alt="" className='w-[80%] h-[80%] bg-gray-400 rounded-[100px] sm:w-[50%] md:h-full md:w-[50%] lg:w-[40%] xl:w-[60%] xl:h-[90%]' />
                    <NavLink state={{ product: floatingProducts?.[0] }} to={`/single-product/${floatingProducts[0]?._id}`} className='absolute flex p-1 bg-white rounded-lg bottom-32 right-5 shadow-md sm:right-36 md:right-48 lg:right-60 xl:right-10'>
                        <img src={floatingProducts[0]?.Image} alt="image" className='w-16 h-16 bg-gray-200 rounded-lg md:h-20 md:w-20 xl:w-16 xl:h-16' />
                        <div className='w-auto h-auto flex flex-col px-4 justify-between pb-2:'>
                            <div className='w-full h-auto flex flex-col'>
                                <span className='font-marcellus text-sm md:text-lg xl:text-base'>{floatingProducts[0]?.name}</span>
                                <span className='font-bellota text-[#5A5A5A] text-xs md:text-sm xl:text-xs'>{floatingProducts[0]?.category}</span>
                            </div>
                            <span className='text-[#090909] font-marcellus text-sm md:text-base'>₹{floatingProducts[0]?.quantityPrices[0].price}</span>
                        </div>
                    </NavLink>
                </div>
                <NavLink state={{ product: floatingProducts?.[1] }} to={`/single-product/${floatingProducts[1]?._id}`} className='hidden xl:absolute xl:flex xl:p-1 xl:bg-white xl:rounded-lg xl:top-36 xl:shadow-md xl:right-[360px] '>
                    <img src={floatingProducts[1]?.Image} alt="image" className='w-16 h-16 bg-gray-200 rounded-lg md:h-20 md:w-20 xl:w-16 xl:h-16' />
                    <div className='w-auto h-auto flex flex-col px-4 justify-between pb-2:'>
                        <div className='w-full h-auto flex flex-col'>
                            <span className='font-marcellus text-sm md:text-lg xl:text-base'>{floatingProducts[1]?.name}</span>
                            <span className='font-bellota text-[#5A5A5A] text-xs md:text-sm xl:text-xs'>{floatingProducts[1]?.category}</span>
                        </div>
                        <span className='text-[#090909] font-marcellus text-sm md:text-base'>₹{floatingProducts[1]?.quantityPrices[0].price}</span>
                    </div>
                </NavLink>
            </div>
        </div>
    )
}

export default Products