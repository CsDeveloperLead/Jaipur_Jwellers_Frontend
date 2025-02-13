import React, { useContext, useState } from 'react'
import { FaBarsStaggered } from "react-icons/fa6";
import { CiUser } from "react-icons/ci";
import { PiStorefrontLight } from "react-icons/pi";
import { NavLink, useLocation } from 'react-router-dom';
import AuthContext from './AuthContext';
import { useEffect } from 'react';
import { jwtDecode } from "jwt-decode";
import { FaUserCircle } from "react-icons/fa";
import { MdDashboard } from "react-icons/md";
import { useRef } from 'react';
import { CartContext } from './CartContext';
import { IoClose } from "react-icons/io5";
import { MdHome } from "react-icons/md";
import { BsCollection } from "react-icons/bs";
import { FaCartShopping } from "react-icons/fa6";
import { FaBloggerB } from "react-icons/fa6";
import { IoMdContacts } from "react-icons/io";
import logo from '../assets/logo1.png'


function Header({ color }) {
    const [userEmail, setUserEmail] = useState('')
    const { isAuthenticated, logout } = useContext(AuthContext)
    const [sideBar, setSideBar] = useState(false)
    const [dropdown, setDropDown] = useState(false)
    const [dropdown2, setDropDown2] = useState(false)
    const { clearCart, cartItems } = useContext(CartContext)
    const location = useLocation()
    const [inHome, setInHome] = useState(false)

    const dropdownRef = useRef(null)
    const dropdownRef2 = useRef(null)

    function handleDropDown() {
        setDropDown(!dropdown)
    }

    function handleDropDown2() {
        setDropDown2(!dropdown2)
    }

    function handleLogout() {
        clearCart();
        logout();
    }
    useEffect(() => {
        const token = localStorage.getItem("authToken")
        if (token) {
            const decodedToken = jwtDecode(token)
            setUserEmail(decodedToken.email); // Store email in state
        }
    }, [isAuthenticated])

    useEffect(() => {
        const handleOutsideClick = (event) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setDropDown(false);
            }
            if (dropdownRef2.current && !dropdownRef2.current.contains(event.target)) {
                setDropDown2(false)
            }
        };
        if (location.pathname === '/') {
            setInHome(true)
        } else {
            setInHome(false)
        }

        document.addEventListener("mousedown", handleOutsideClick);
        return () => {
            document.removeEventListener("mousedown", handleOutsideClick);
        };
    }, []);

    useEffect(() => {
        const handleScroll = () => {
            const scroll = Math.floor(window.scrollY);
            if (scroll > 5) {
                setSideBar(false);
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <>
            <header className='w-full h-16 items-center flex justify-between p-4 relative z-50' style={{ backgroundColor: color }}>
                <div className=' w-[100px] h-[50px] font-marcellus'>
                    <img src={logo} alt="" className='w-full h-full' />

                </div>
                <div className='hidden lg:flex lg:font-marcellus lg:gap-10 lg:ml-20 xl:60 xl:gap-16 2xl:gap-20'>
                    <NavLink to='/' className={({ isActive }) => `${isActive ? 'text-[#1A3A37]' : 'text-black'} cursor-pointer`}>Home</NavLink>
                    <a href='#collections' className='cursor-pointer'>Collection</a>
                    <NavLink to='/shop' className={({ isActive }) => `${isActive ? 'text-[#1A3A37]' : 'text-black'} cursor-pointer`}>Shop</NavLink>
                    <NavLink to='/blog' className={({ isActive }) => `${isActive ? 'text-[#1A3A37]' : 'text-black'} cursor-pointer`}>Blog</NavLink>
                    <NavLink to='/contact-us' className={({ isActive }) => `${isActive ? 'text-[#1A3A37]' : 'text-black'} cursor-pointer`}>Contact Us</NavLink>
                    <NavLink to='/about' className={({ isActive }) => `${isActive ? 'text-[#1A3A37]' : 'text-black'} cursor-pointer`}>About</NavLink>
                </div>

                {
                    isAuthenticated && userEmail === "jwellery@admin.com" && (
                        <div className='w-auto h-auto flex xl:gap-3 items-center'>
                            <NavLink to='/dashboard' className="text-[#1A3A37] mx-4">
                                <MdDashboard size={28} />
                            </NavLink>
                            <div ref={dropdownRef} className='w-auto h-auto flex items-center justify-center'>
                                <FaUserCircle onClick={handleDropDown} size={28} className='text-[#1A3A37] mx-4 cursor-pointer' />
                                {dropdown && (
                                    <div className={`${inHome ? 'top-14' : 'top-12'} absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg py-2 z-50 `}>
                                        {userEmail === "jwellery@admin.com" && ( // Check if user is admin
                                            <>
                                                <NavLink
                                                    to="/view-orders"
                                                    className="flex justify-center px-4 py-2 text-lg text-gray-800 hover:bg-gray-200"
                                                >
                                                    All Orders
                                                </NavLink>
                                                <NavLink
                                                    to="/admin/blogs"
                                                    className="flex justify-center px-4 py-2 text-lg text-gray-800 hover:bg-gray-200"
                                                >
                                                    Blogs
                                                </NavLink>
                                            </>
                                        )}

                                        <NavLink
                                            to="/admin"
                                            className="flex justify-center px-4 py-2 text-lg text-gray-800 hover:bg-gray-200"
                                            onClick={handleLogout}
                                        >
                                            Logout
                                        </NavLink>
                                    </div>
                                )}
                            </div>
                            <div className='lg:hidden mx-4'> {sideBar ? <IoClose size={25} onClick={() => setSideBar(false)} className='cursor-pointer' /> : <FaBarsStaggered size={25} onClick={() => setSideBar(true)} className='cursor-pointer' />} </div>
                        </div>
                    )
                }
                {
                    isAuthenticated === true && userEmail !== "jwellery@admin.com"
                        ? <>
                            <div className='flex gap-7'>
                                <div className='flex gap-5 items-center'>
                                    <div ref={dropdownRef2} className='w-auto h-auto flex items-center justify-center'>
                                        <span onClick={handleDropDown2} className='p-1.5 bg-gray-200 rounded-full active:bg-gray-100 md:hover:bg-gray-100 cursor-pointer'>
                                            <CiUser size={20} />
                                        </span>
                                        {dropdown2 && (
                                            <div className={`${inHome ? 'top-12' : 'top-12'} absolute right-10 mt-2 w-48 bg-white rounded-lg shadow-lg py-2 z-50 lg:right-40 `}>
                                                <NavLink
                                                    to='/view-profile'
                                                    className="flex justify-center cursor-pointer text-lg px-4 py-2 text-gray-800 hover:bg-gray-200"
                                                >
                                                    View Profile
                                                </NavLink>

                                                <NavLink
                                                    to="/login"
                                                    className="flex justify-center px-4 py-2 text-lg text-gray-800 hover:bg-gray-200"
                                                    onClick={handleLogout}
                                                >
                                                    Logout
                                                </NavLink>
                                            </div>
                                        )}
                                    </div>
                                    <NavLink to='/my-cart' className='p-1.5 bg-gray-200 rounded-full active:bg-gray-100 md:hover:bg-gray-100 cursor-pointer relative'>
                                        <span className='absolute top-[-10px] text-sm right-1'>{cartItems.length}</span>
                                        <PiStorefrontLight size={20} />
                                    </NavLink>
                                </div>
                                <div className='lg:hidden'> {sideBar ? <IoClose size={25} onClick={() => setSideBar(false)} className='cursor-pointer' /> : <FaBarsStaggered size={25} onClick={() => setSideBar(true)} className='cursor-pointer' />} </div>
                                <span className='hidden lg:block lg:px-4 lg:py-2 lg:rounded-xl lg:font-marcellus lg:bg-[#1A3A37] lg:text-white 2xl:px-5 lg:cursor-pointer'>Get Special Offers</span>
                            </div>
                        </>
                        : isAuthenticated === false && <NavLink to='/login' className='w-auto h-auto flex px-10 py-1.5 bg-[#1A3A37] text-white font-semibold font-marcellus rounded-md cursor-pointer'>
                            Login
                        </NavLink>
                }

            </header >
            <div className={`${sideBar ? 'translate-x-0' : 'translate-x-80'} fixed w-52 h-full bg-[#D7D7D7] shadow-xl right-0 z-40 duration-300 transition-all ease-in-out flex flex-col lg:hidden gap-4 top-0  ${inHome ? 'pt-28' : 'pt-[72px]'}`}>
                <NavLink className={({ isActive }) => `${isActive ? 'text-[#1A3A37]' : 'text-black'} w-full h-autu flex gap-4 border-[1px] border-gray-300 py-2 px-4 font-marcellus items-center text-lg font-semibold `} to='/'>
                    <MdHome size={25} />
                    Home
                </NavLink>
                <NavLink className='w-full h-autu flex gap-4 border-[1px] border-gray-300 py-2 px-4 font-marcellus items-center text-lg font-semibold text-black' to='/'>
                    <BsCollection size={22} />
                    Collection
                </NavLink>
                <NavLink className={({ isActive }) => `${isActive ? 'text-[#1A3A37]' : 'text-black'} w-full h-autu flex gap-4 border-[1px] border-gray-300 py-2 px-4 font-marcellus items-center text-lg font-semibold `} to='/shop'>
                    <FaCartShopping size={22} />
                    Shop
                </NavLink>
                <NavLink className='w-full h-autu flex gap-4 border-[1px] border-gray-300 py-2 px-4 font-marcellus items-center text-lg font-semibold text-black' to='/'>
                    <FaBloggerB size={22} />
                    Blog
                </NavLink>
                <NavLink className={({ isActive }) => `${isActive ? 'text-[#1A3A37]' : 'text-black'} w-full h-autu flex gap-4 border-[1px] border-gray-300 py-2 px-4 font-marcellus items-center text-lg font-semibold `} to='/contact-us'>
                    <IoMdContacts size={22} />
                    Contact
                </NavLink>
                <NavLink className={({ isActive }) => `${isActive ? 'text-[#1A3A37]' : 'text-black'} w-full h-autu flex gap-4 border-[1px] border-gray-300 py-2 px-4 font-marcellus items-center text-lg font-semibold `} to='/about'>
                    <IoMdContacts size={22} />
                    About
                </NavLink>
            </div>
        </>
    )
}

export default Header