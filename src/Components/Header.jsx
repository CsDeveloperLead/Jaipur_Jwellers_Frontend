import React from 'react'
import { FaBarsStaggered } from "react-icons/fa6";
import { CiSearch } from "react-icons/ci";
import { CiUser } from "react-icons/ci";
import { PiStorefrontLight } from "react-icons/pi";
import { NavLink } from 'react-router-dom';

function Header({ color }) {
    return (
        <header className='w-full h-16 items-center flex justify-between p-4' style={{ backgroundColor: color }}>
            <div className='font-marcellus'>Jwellery</div>
            <div className='hidden lg:flex lg:font-marcellus lg:gap-10 xl:gap-16 2xl:gap-20'>
                <NavLink to='/' className={({ isActive }) => `${isActive ? 'text-[#1A3A37]' : 'text-black'} cursor-pointer`}>Home</NavLink>
                <span className='cursor-pointer'>Collection</span>
                <NavLink to='/shop' className={({ isActive }) => `${isActive ? 'text-[#1A3A37]' : 'text-black'} cursor-pointer`}>Shop</NavLink>
                <span className='cursor-pointer'>Blog</span>
                <NavLink to='/contact-us' className={({ isActive }) => `${isActive ? 'text-[#1A3A37]' : 'text-black'} cursor-pointer`}>Contact Us</NavLink>
            </div>
            <div className='hidden lg:flex lg:gap-5'>
                <div className='w-auto flex items-center gap-6 justify-between'>
                    <CiSearch size={20} />
                    <CiUser size={20} />
                    <NavLink to='/my-cart'><PiStorefrontLight size={20} /></NavLink>
                </div>
                <span className='px-4 py-2 rounded-xl font-marcellus bg-[#1A3A37] text-white 2xl:px-5 cursor-pointer'>Get Special Offers</span>
            </div>
            <div className='lg:hidden'><FaBarsStaggered size={25} /></div>
        </header>
    )
}

export default Header