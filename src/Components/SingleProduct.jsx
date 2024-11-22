import React, { useContext, useEffect, useState } from 'react'
import Header from './Header'
import { FaArrowRight } from "react-icons/fa6";
import { LuPencilLine } from "react-icons/lu";
import { GoHeart } from "react-icons/go";
import { GoShareAndroid } from "react-icons/go";
import { IoMdStar } from "react-icons/io";
import { IoMdStarHalf } from "react-icons/io";
import { useLocation } from 'react-router-dom';
import { CartContext } from './CartContext';
import { MdOutlineDone } from "react-icons/md";

function SingleProduct() {
    const { addToCart } = useContext(CartContext)
    const location = useLocation()
    const { product } = location.state || {}
    const [isAddedToCart, setIsAddedToCart] = useState(false);
    const [quantity, setQuantity] = useState(1);
    const [selectedQuantityPrice, setSelectedQuantityPrice] = useState(product.quantityPrices[0]);
    const [productImages, setProductImages] = useState([product?.Image, product?.Image1, product?.Image2, product?.Image3])
    const [mainImage, setMainImage] = useState('' || product?.Image)

    const handleAddToCart = () => {
        addToCart({
            product_id: product.product_id,
            name: product.name,
            Image: product.Image || '',
            quantity: quantity,
            price: selectedQuantityPrice.price,
            selectedQuantity: selectedQuantityPrice.quantity,
        });
        setIsAddedToCart(true);
        setTimeout(() => setIsAddedToCart(false), 2000);
    };

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <>
            <Header color={'#FAFAFA'} />
            <div className='w-full h-auto px-5 flex gap-3 font-marcellus py-10 font-semibold md:px-14 md:text-xl md:gap-5 xl:px-20 bg-[#FAFAFA]'>
                <span className='text-[#A7A7A7]'>Product</span>
                <span className='text-[#A7A7A7]'>{'>'}</span>
                <span className='text-[#344E41]'>{product.name}</span>
            </div>
            <div className='w-full h-auto flex flex-col gap-7 py-10 bg-[#FAFAFA] lg:flex-row xl:px-10 2xl:px-20'>
                <div className='w-full h-auto flex flex-col lg:w-[600px] xl:w-[840px] xl:gap-10'>
                    <div className='w-full h-auto flex flex-col gap-3'>
                        <div className='w-[90%] h-auto mx-auto md:w-[80%] lg:w-[90%] xl:h-[400px]'>
                            <img src={mainImage} alt="main image" className='w-full h-80 bg-gray-300 rounded-3xl object-cover xl:h-full xl:rounded-[50px]' />
                        </div>
                        <div className='product-slider w-full h-auto flex gap-3 px-3 overflow-x-scroll sm:justify-center'>
                            {
                                productImages.map((image, index) => (
                                    <img key={index} src={image} alt="product image" onClick={() => setMainImage(image)} className={`${mainImage === image ? 'border-2 border-[#344E41]' : ''} cursor-pointer w-20 h-20 bg-gray-300 rounded-xl object-cover sm:w-24 sm:h-24 lg:w-20 lg:h-20 `} />
                                ))
                            }
                        </div>
                    </div>
                    <div className='w-[95%] mx-auto h-auto rounded-3xl shadow-custom-shadow p-5 mt-4 border-[1px] border-[#1111111A] flex flex-col gap-6 sm:w-[85%] md:p-7 lg:w-[95%] xl:w-full xl:py-6 xl:rounded-[50px]'>
                        <div className='w-full h-auto flex justify-between'>
                            <div className='w-auto h-auto flex flex-col font-marcellus mr-2 lg:mr-0 lg:ml-3'>
                                <span className='text-[#111111B2] text-sm sm:text-base md:text-lg lg:text-base'>Price</span>
                                <span className='text-[#111111] text-lg sm:text-2xl md:text-3xl lg:text-2xl'>₹{product.quantityPrices[0].price}</span>
                            </div>
                            <div onClick={handleAddToCart} disabled={isAddedToCart} className='flex-1 mx-3 h-auto bg-[#1A3A37] text-white flex justify-center gap-3 cursor-pointer items-center rounded-2xl font-marcellus'>
                                {
                                    isAddedToCart
                                        ? <div className='w-auto h-auto flex justify-center items-center gap-3'>
                                            Added to cart
                                            <MdOutlineDone />
                                        </div>
                                        : <div className='w-auto h-auto flex justify-center items-center gap-3'>
                                            Add to cart
                                            <FaArrowRight />
                                        </div>
                                }
                            </div>
                        </div>
                        <div className='w-full h-auto flex justify-center items-center flex-wrap gap-3'>
                            <div className='w-[140px] h-auto flex justify-center items-center gap-3 font-marcellus bg-[#FAFAFA] border-[1px] border-[#1111111A] py-2 rounded-2xl cursor-pointer md:text-base md:w-[160px] md:py-3 lg:w-[140px]'>
                                <LuPencilLine className='md:size-5' /> Customize
                            </div>
                            <div className='w-[140px] h-auto flex justify-center items-center gap-3 font-marcellus bg-[#FAFAFA] border-[1px] border-[#1111111A] py-2 rounded-2xl cursor-pointer md:text-base md:w-[160px] md:py-3 lg:w-[140px]'>
                                <GoHeart className='md:size-5' /> Favorites
                            </div>
                            <div className='w-[140px] h-auto flex justify-center items-center gap-3 font-marcellus bg-[#FAFAFA] border-[1px] border-[#1111111A] py-2 rounded-2xl cursor-pointer md:text-base md:w-[160px] md:py-3 lg:w-[140px]'>
                                <GoShareAndroid className='md:size-5' /> Share
                            </div>
                        </div>
                    </div>
                </div>
                <div className='w-full h-auto flex flex-col px-5'>
                    <div className='w-full h-auto font-marcellus md:text-lg lg:text-base xl:text-lg'>{product.product_id}</div>
                    <div className='w-full h-auto flex flex-col font-marcellus gap-3 my-5 sm:gap-5 xl:py-7 xl:pt-2'>
                        <span className='text-3xl text-[#111111] sm:text-4xl md:text-5xl lg:text-4xl xl:text-7xl'>{product.name}</span>
                        <div className='text-[#111111CC] text-sm flex gap-2 items-center sm:text-base md:text-lg lg:text-base xl:text-lg'>
                            <span>230 Sold · 4.8</span>
                            <div className='w-auto flex items-center'>
                                <IoMdStar size={15} className='text-yellow-400' />
                                <IoMdStar size={15} className='text-yellow-400' />
                                <IoMdStar size={15} className='text-yellow-400' />
                                <IoMdStar size={15} className='text-yellow-400' />
                                <IoMdStarHalf size={15} className='text-yellow-400' />
                            </div>
                        </div>
                        <span className='text-[#111111CC] text-sm sm:text-base md:text-lg lg:text-base xl:text-lg'>{product.desc}</span>
                    </div>
                    <div className='w-full h-auto flex flex-col'>
                        <div className='w-full h-auto flex justify-between items-center font-marcellus bg-[#ffffff] rounded-3xl px-5 py-2 text-sm sm:text-base sm:px-10 md:text-lg lg:text-base xl:text-lg md:justify-start md:gap-20 xl:gap-28'>
                            <span >Description</span>
                            <span >Specification</span>
                            <span >Reviews</span>
                        </div>
                        <div className='translate-x-0 w-full h-auto flex transition duration-300'>
                            <p className='w-[33%] h-[2px] bg-[#111111] md:w-[170px] xl:w-[200px]'></p>
                        </div>
                        <div className='relative w-full h-auto flex flex-col py-5 px-2 gap-8 md:py-10 xl:gap-10'>
                            <div className='w-full h-auto flex flex-col font-marcellus gap-3 md:gap-6'>
                                <span className='text-[#111111] text-xl sm:text-2xl md:text-3xl lg:text-2xl'>Model</span>
                                <ul className='text-sm list-disc list-inside sm:text-base md:text-lg lg:text-base xl:text-lg'>
                                    <li>{product.model}</li>
                                </ul>
                            </div>
                            <div className='w-full h-auto flex flex-col font-marcellus gap-3 md:gap-6'>
                                <span className='text-[#111111] text-xl sm:text-2xl md:text-3xl lg:text-2xl'>Details</span>
                                {
                                    product.details.map((item, index) => (
                                        <ul key={index} className='text-sm list-disc list-inside sm:text-base md:text-lg lg:text-base xl:text-lg'>
                                            <li>{item}</li>
                                        </ul>
                                    )
                                    )}
                            </div>
                            <div className='w-full h-auto flex flex-col font-marcellus gap-3 md:gap-6'>
                                <span className='text-[#111111] text-xl sm:text-2xl md:text-3xl lg:text-2xl'>Additional Info</span>
                                <div className='w-full h-auto flex flex-wrap items-center font-marcellus gap-3 text-sm sm:text-base md:text-lg lg:text-base xl:text-lg'>
                                    <div className='w-auto h-auto flex gap-1 items-center border-r-[1px] border-[#1111114D] px-4'>
                                        <span className='text-[#111111B2]'>Weight :</span>
                                        <span className='text-[##111111E5]'>{product.weight}</span>
                                    </div>
                                    <div className='w-auto h-auto flex gap-1 items-center px-4'>
                                        <span className='text-[#111111B2]'>Width :</span>
                                        <span className='text-[##111111E5]'>{product.width}</span>
                                    </div>
                                    <div className='w-auto h-auto flex gap-1 items-center border-r-[1px] border-[#1111114D] px-5'>
                                        <span className='text-[#111111B2]'>Depth :</span>
                                        <span className='text-[##111111E5]'>{product.depth}</span>
                                    </div>
                                    <div className='w-auto h-auto flex gap-1 items-center px-4'>
                                        <span className='text-[#111111B2]'>Height :</span>
                                        <span className='text-[##111111E5]'>{product.height}</span>
                                    </div>
                                </div>
                            </div>
                            <div className='w-full h-auto flex flex-col font-marcellus gap-3 md:gap-6'>
                                <span className='text-[#111111] text-xl sm:text-2xl md:text-3xl lg:text-2xl'>Colors</span>
                                <div className='w-full h-auto flex gap-4 items-center'>
                                    <div className='w-8 h-8 rounded-full border-2 border-[#5D5656] flex justify-center items-center xl:w-10 xl:h-10'>
                                        <span className='w-6 h-6 rounded-full bg-[#5D5656] xl:w-8 xl:h-8'></span>
                                    </div>
                                    <div className='w-8 h-8 rounded-full flex justify-center items-center xl:w-10 xl:h-10'>
                                        <span className='w-6 h-6 rounded-full bg-[#556D84] xl:w-8 xl:h-8'></span>
                                    </div>
                                    <div className='w-8 h-8 rounded-full flex justify-center items-center xl:w-10 xl:h-10'>
                                        <span className='w-6 h-6 rounded-full bg-[#8E9295] xl:w-8 xl:h-8'></span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default SingleProduct