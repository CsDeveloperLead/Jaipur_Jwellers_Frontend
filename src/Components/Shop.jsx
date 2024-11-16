import React, { useEffect, useState } from 'react'
import Header from './Header'
import { RxMixerHorizontal } from "react-icons/rx";
import { IoIosSearch } from "react-icons/io";
import { GoHeart } from "react-icons/go";
import axios from 'axios';
import { NavLink } from 'react-router-dom';

const backend = import.meta.env.VITE_BACKEND_URL


function Shop() {
    const [products, setProducts] = useState([])
    const [loading, setLoading] = useState(false)


    async function fetchProducts() {
        try {
            setLoading(true)
            const response = await axios.get(`${backend}/api/v1/products/get-all-products?page=${1}&limit=${12}`)
            console.log(response.data);

            if (response.status === 200) {
                setProducts(response.data.products)
                setLoading(false)
            }
        } catch (error) {
            console.log("error while fetching products", error);
            setLoading(true)
        }
    }

    useEffect(() => {
        fetchProducts()
    }, [])

    return (
        <>
            <Header color={'#FAFAFA'} />
            <div className='w-full h-auto flex flex-col py-10 bg-[#FAFAFA] gap-10'>
                <div className='w-[90%] h-[250px] mx-auto sm:h-[350px] lg:h-[450px] 2xl:h-[600px]'>
                    <img src="" alt="" className='bg-gray-600 w-full h-full rounded-3xl' />
                </div>
                <div className='w-full h-auto flex flex-col px-5 md:w-[90%] md:mx-auto gap-5 md:gap-10'>
                    <div className='w-full h-auto flex flex-col justify-center items-center gap-5 md:flex-row md:justify-between'>
                        <div className='w-auto h-auto flex gap-1 bg-[#F0F0F1] items-center px-5 rounded-3xl md:w-[400px] lg:w-[350px]'>
                            <IoIosSearch size={25} className='lg:size-8 text-[#B6B6B7]' />
                            <input type="text" placeholder='Search' className='w-full h-auto bg-transparent outline-none p-2 py-3 text-sm lg:py-4' />
                            <RxMixerHorizontal size={25} className='lg:size-8 text-[#B6B6B7] cursor-pointer' />
                        </div>
                        <div className='product-slider w-full h-auto flex overflow-scroll font-marcellus gap-3 md:w-auto'>
                            <div className='min-w-[110px] h-auto flex justify-center items-center bg-[#1A3A37] text-[#FEFEFE] py-2 rounded-xl cursor-pointer lg:py-4 lg:w-[150px]'>
                                Diamond
                            </div>
                            <div className='min-w-[110px] h-auto flex justify-center items-center border-[1px] border-[#B6B6B7] text-[#B6B6B7] py-2 rounded-xl cursor-pointer lg:py-4 lg:w-[150px]'>
                                Jwellery
                            </div>
                            <div className='min-w-[110px] h-auto flex justify-center items-center border-[1px] border-[#B6B6B7] text-[#B6B6B7] py-2 rounded-xl cursor-pointer lg:py-4 lg:w-[150px]'>
                                Pendant
                            </div>
                            <div className='min-w-[110px] h-auto flex justify-center items-center border-[1px] border-[#B6B6B7] text-[#B6B6B7] py-2 rounded-xl cursor-pointer lg:py-4 lg:w-[150px]'>
                                Stone
                            </div>
                            <div className='min-w-[110px] h-auto flex justify-center items-center border-[1px] border-[#B6B6B7] text-[#B6B6B7] py-2 rounded-xl cursor-pointer lg:py-4 lg:w-[150px]'>
                                Bracelet
                            </div>
                        </div>
                    </div>
                    <div className='w-full h-auto flex flex-wrap gap-6'>
                        <div className='w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 2xl:grid-cols-4 gap-6'>
                            {
                                products?.map((product, index) => (
                                    <NavLink state={{ product }} to={`/single-product/${product._id}`} key={index} className='w-[300px] h-auto flex flex-col mx-auto bg-[#FEFDFD] p-1 rounded-[29px] gap-2 lg:p-1.5 cursor-pointer'>
                                        <img src={product?.Image} alt="image" className='w-full h-[200px] mx-auto bg-gray-400 object-cover rounded-[30px] lg:h-[250px]' />
                                        <div className='w-full h-auto flex flex-col mt-2 items-center px-3 lg:mt-3'>
                                            <div className='w-full h-auto flex justify-between items-center'>
                                                <span className='font-marcellus text-2xl'>{product.name}</span>
                                                <GoHeart size={20} className='text-[#B3B3B3]' />
                                            </div>
                                            <span className='w-full h-auto text-[#5A5A5A] text-sm lg:text-base'>{product.category}</span>
                                            <div className='w-full h-auto flex justify-between my-2 items-center lg:mt-4'>
                                                <span className='flex gap-2'>
                                                    <span className='h-4 w-4 bg-[#D5D3D4] border-[1px] border-[#F1EEE9] lg:border-2 rounded-full lg:w-6 lg:h-6'></span>
                                                    <span className='h-4 w-4 bg-[#C9E1EF] border-[1px] border-[#E0D7CD] lg:border-2 rounded-full lg:w-6 lg:h-6'></span>
                                                    <span className='h-4 w-4 bg-[#97939F] border-[1px] border-[#F1EEE9] lg:border-2 rounded-full lg:w-6 lg:h-6'></span>
                                                </span>
                                                <span className='font-marcellus text-lg lg:text-xl'>₹{product.quantityPrices[0].price}</span>
                                            </div>
                                        </div>
                                    </NavLink>
                                ))
                            }
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Shop