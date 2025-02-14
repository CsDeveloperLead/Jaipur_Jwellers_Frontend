import React, { useEffect, useState } from 'react'
import Info from '../Utils/Info'
import { NavLink } from 'react-router-dom'
import SignImg from '../../assets/sign.png'

function About({ data }) {
    const [hoverNo, setHoverNo] = useState('')
    const [products, setProducts] = useState([])

    // useEffect(() => {
    //     setProducts(data.slice(0, 4))
    // }, [data])


    return (
        <div className='w-full h-auto flex flex-col py-5 bg-[#FAFAFA] pt-20'>
            <h1 className='font-marcellus tracking-[3px] text-center text-sm'>ABOUT OUR JAIPUR JWELLERS</h1>
            <div className='w-full h-auto flex flex-col relative'>
                <div className='w-full h-auto flex flex-col justify-center items-center font-marcellus text-xs mt-5 mb-10 md:mt-10 md:mb-20 md:text-xl md:gap-4 xl:text-2xl xl:gap-6 2xl:text-3xl'>
                    <p className='text-center flex items-center uppercase'> For three generations,we’ve woven Jaipur’s rich heritage </p>
                    <p className='text-center flex items-center uppercase'>into every exquisite piece of jewelry. Now, our legacy of timeless</p>
                    <p className='text-center flex items-center uppercase'>craftsmanship is just a click away—experience luxury, redefined.</p>
                </div>
                <div className='w-full h-auto flex flex-col items-center justify-center gap-2 font-marcellus'>
                    <img src={SignImg} alt="sign logo" className='w-40 h-14' />
                    <span>Abdul Mehraj</span>
                </div>
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