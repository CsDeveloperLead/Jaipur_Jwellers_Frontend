import React, { useEffect, useState } from 'react'
import Header from './Header'
import { RxMixerHorizontal } from "react-icons/rx";
import { IoIosSearch } from "react-icons/io";
import { GoHeart } from "react-icons/go";
import axios from 'axios';
import { NavLink, useLocation } from 'react-router-dom';

const backend = import.meta.env.VITE_BACKEND_URL


function Shop() {
    const [products, setProducts] = useState([])
    const [loading, setLoading] = useState(false)
    const [searchProduct, setSearchProduct] = useState('')
    const [selectedCategory, setSelectedCategory] = useState("Diamond")
    const [allProducts, setAllProducts] = useState([])
    const [selectedImages, setSelectedImages] = useState({});
    const location = useLocation();
    const category = location.state?.category
      async function fetchProducts() {
        try {
            setLoading(true)
            const response = await axios.get(`${backend}/api/v1/products/get-all-products`)
            const productArr = response.data
            setAllProducts(productArr)
            const specificProducts = productArr.filter(item => item.category === selectedCategory);

            if (response.status === 200) {
                setProducts(specificProducts)
                setLoading(false)
            }
        } catch (error) {
            console.log("error while fetching products", error);
            setLoading(true)
        }
    }

    function handleSearchProduct() {
        if (searchProduct.length > 0) {
            const filteredProducts = allProducts.filter(product => product.name.toLowerCase().includes(searchProduct.toLowerCase()))
            setProducts(filteredProducts)
        } else {
            fetchProducts()
        }
    }

    useEffect(() => {
        if(category){
            setSelectedCategory(category)
        }
        fetchProducts()
        window.scrollTo(0, 0)
    }, [selectedCategory])

    useEffect(() => {
        handleSearchProduct()
    }, [searchProduct])

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
                            <input type="text" placeholder='Search' value={searchProduct} onChange={(e) => setSearchProduct(e.target.value)} className='w-full h-auto bg-transparent outline-none p-2 py-3 text-sm lg:py-4' />

                        </div>
                        <div className='product-slider w-full h-auto flex overflow-scroll font-marcellus gap-3 md:w-auto'>
                            {
                                ["Diamond", "Jwellery", "Pendant", "Stone", "Bracelet","Ring"].map((item, index) => (
                                    <div key={index} onClick={() => setSelectedCategory(item)} className={`${selectedCategory === item ? 'bg-[#1A3A37] text-[#FEFEFE]' : 'border-[1px] border-[#B6B6B7] text-[#B6B6B7]'} min-w-[110px] h-auto flex justify-center items-center py-2 rounded-xl cursor-pointer lg:py-4 lg:w-[150px] `} >{item}</div>
                                ))
                            }
                        </div>
                    </div>
                    <div className='w-full h-auto flex flex-wrap gap-6'>
                        {
                            products.length > 0
                                ? <div className='w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 2xl:grid-cols-4 gap-6'>
                                    {
                                        products?.map((product, index) => (
                                            <NavLink state={{ product }} to={`/single-product/${product._id}`} key={index} className='group w-[300px] h-auto flex flex-col mx-auto bg-[#FEFDFD] p-1 rounded-[29px] gap-2 lg:p-1.5 cursor-pointer md:hover:bg-[#1A3A37] md:hover:text-white duration-500 ease-in-out transition-all'>
                                                <img src={selectedImages[product._id] || product?.Image} alt="image" className='w-full h-[200px] mx-auto bg-gray-400 object-cover rounded-[30px] lg:h-[250px]' />
                                                <div className='w-full h-auto flex flex-col mt-2 items-center px-3 lg:mt-3'>
                                                    <div className='w-full h-auto flex justify-between items-center'>
                                                        <span className='font-marcellus text-2xl'>{product.name}</span>
                                                        <GoHeart size={20} className='text-[#B3B3B3]' />
                                                    </div>
                                                    <span className='w-full h-auto text-[#5A5A5A] text-sm lg:text-base group-hover:text-white duration-500 ease-in-out transition-all'>{product.category}</span>
                                                    <div className='w-full h-auto flex justify-between my-2 items-center lg:mt-4'>
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
                                                                className="h-4 w-4 border-[1px] lg:border-2 rounded-full lg:w-6 lg:h-6 cursor-pointer" style={{ backgroundColor: `#${product?.Image1.color}` }}></span>
                                                            <span
                                                                onClick={(e) => {
                                                                    e.preventDefault()
                                                                    e.stopPropagation();
                                                                    setSelectedImages((prevState) => ({
                                                                        ...prevState,
                                                                        [product._id]: product?.Image2.image,
                                                                    }));
                                                                }}
                                                                className="h-4 w-4 border-[1px] lg:border-2 rounded-full lg:w-6 lg:h-6 cursor-pointer" style={{ backgroundColor: `#${product?.Image2.color}` }}></span>
                                                            <span
                                                                onClick={(e) => {
                                                                    e.preventDefault()
                                                                    e.stopPropagation();
                                                                    setSelectedImages((prevState) => ({
                                                                        ...prevState,
                                                                        [product._id]: product?.Image3.image,
                                                                    }));
                                                                }}
                                                                className="h-4 w-4 border-[1px] lg:border-2 rounded-full lg:w-6 lg:h-6 cursor-pointer" style={{ backgroundColor: `#${product?.Image3.color}` }}></span>
                                                        </span>
                                                        <span className='font-marcellus text-lg lg:text-xl'>${product.quantityPrices[0].price}</span>
                                                    </div>
                                                </div>
                                            </NavLink>
                                        ))
                                    }
                                </div>
                                : <div className='w-full h-80 flex justify-center items-center font-marcellus text-xl'>
                                    NO Product Found
                                </div>
                        }

                    </div>
                </div>
            </div>
        </>
    )
}

export default Shop