import React from 'react'
import { FaWhatsapp } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { LuPhone } from "react-icons/lu";
import { NavLink } from 'react-router-dom';

function Footer() {
    return (
        <div className='w-full h-auto flex flex-col bg-[#1A3A37] py-10 lg:pt-20'>
            <div className='w-full h-auto flex flex-col gap-8 md:flex-row md:gap-0'>
                <div className='w-full h-auto font-marcellus text-white px-10 md:pt-10'>
                    <span>Crafted with passion, rooted in tradition—bringing <br /> Jaipur’s timeless elegance to you. ✨💎</span>
                    <div className='w-full h-auto flex gap-5 mt-8'>
                        <NavLink to={'https://www.instagram.com/jaipur_jewellers.official'} target='_blank'><FaInstagram size={20} className='text-white' /></NavLink>
                        <NavLink to={'https://wa.link/9zk4fk'} target='_blank'><FaWhatsapp size={20} className='text-white' /></NavLink>
                    </div>
                </div>
                <div className='flex w-full mx-auto justify-around font-marcellus xl:w-96'>
                    <div className='flex flex-col text-white'>
                        <span className='font-bold text-lg lg:text-lg'>Pages</span>
                        <NavLink to='/' className='text-sm mt-4 active:text-gray-100 md:hover:text-gray-100 cursor-pointer lg:text-base'>Home</NavLink>
                        <NavLink to='/blog' className='text-sm mt-1 active:text-gray-100 md:hover:text-gray-100 cursor-pointer lg:text-base'>Blogs</NavLink>
                        <NavLink to='/shop' className='text-sm mt-1 active:text-gray-100 md:hover:text-gray-100 cursor-pointer lg:text-base'>Shop</NavLink>
                        <NavLink to='/about' className='text-sm mt-1 active:text-gray-100 md:hover:text-gray-100 cursor-pointer lg:text-base'>Our Story</NavLink>
                        <span className='text-sm mt-1 active:text-gray-100 md:hover:text-gray-100 cursor-pointer lg:text-base'>FAQs</span>
                    </div>
                    {/* <div className='flex flex-col text-white'>
                        <span className='font-bold text-lg lg:text-lg'>Useful Links</span>
                        <span className='text-sm mt-4 active:text-gray-100 md:hover:text-gray-100 cursor-pointer lg:text-base'>Clothing</span>
                        <span className='text-sm mt-1 active:text-gray-100 md:hover:text-gray-100 cursor-pointer lg:text-base'>Handbags</span>
                        <span className='text-sm mt-1 active:text-gray-100 md:hover:text-gray-100 cursor-pointer lg:text-base'>Philosophy</span>
                        <span className='text-sm mt-1 active:text-gray-100 md:hover:text-gray-100 cursor-pointer lg:text-base'>Our Story</span>
                        <span className='text-sm mt-1 active:text-gray-100 md:hover:text-gray-100 cursor-pointer lg:text-base'>Journal</span>
                        <span className='text-sm mt-1 active:text-gray-100 md:hover:text-gray-100 cursor-pointer lg:text-base'>Brand</span>
                    </div> */}
                </div>
                <div className='flex w-full mx-auto justify-around font-marcellus'>
                    <div className='flex flex-col text-white'>
                        <span className='text-white font-bold lg:text-lg'>Resources</span>
                        <span className='text-sm mt-4 active:text-gray-100 md:hover:text-gray-100 cursor-pointer lg:text-base'>Return Policy</span>
                        <span className='text-sm mt-1 active:text-gray-100 md:hover:text-gray-100 cursor-pointer lg:text-base'>Shipping Policy</span>
                    </div>
                    <div className='flex flex-col text-white'>
                        <span className='font-bold text-lg lg:text-lg'>Contact</span>
                        <span className='text-xs mt-4 active:text-gray-100 flex gap-2 items-center md:hover:text-gray-100 cursor-pointer lg:text-base xl:mt-8'><LuPhone size={20} /> +91 88104 51624</span>
                        <span className='text-xs mt-1 active:text-gray-100 flex gap-2 md:hover:text-gray-100 cursor-pointer lg:text-base'><LuPhone size={20} /> jaipurjewellers.online@gmail.com</span>
                    </div>
                </div>
            </div>
            <div className='w-full h-[1px] bg-white mt-8 md:w-[90%] mx-auto md:mt-14' />
            <div className='w-full h-auto flex flex-col font-marcellus mt-4 justify-between md:flex-row md:w-[90%] md:mx-auto'>
                <span className='text-white text-center md:text-start'>©2024 Jaipur jwellers, made with 💖 by Campaigning Source, all rights reserved</span>
                <div className='flex flex-col mt-4 md:mt-0'>
                    <div></div>
                    <div className='flex gap-3 font-marcellus text-white justify-center items-center'><span>Terms And Condition</span> | <span>Privacy Policy</span></div>
                </div>
            </div>
        </div>
    )
}

export default Footer