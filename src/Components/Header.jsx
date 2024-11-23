import React, { useContext, useState } from 'react'
import { FaBarsStaggered } from "react-icons/fa6";
import { CiSearch } from "react-icons/ci";
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
import { IoLogOut } from "react-icons/io5";

function Header({ color }) {
    const [userEmail, setUserEmail] = useState('')
    const { isAuthenticated, logout } = useContext(AuthContext)
    const [sideBar, setSideBar] = useState(false)
    const [dropdown, setDropDown] = useState(false)
    const [dropdown2, setDropDown2] = useState(false)
    const dropdownRef = useRef(null)
    const { clearCart } = useContext(CartContext)
    const location = useLocation()
    const [inHome, setInHome] = useState(false)

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

    return (
        <>
            <header className='w-full h-16 items-center flex justify-between p-4' style={{ backgroundColor: color }}>
                <div className='font-marcellus'>Jwellery</div>
                <div className='hidden lg:flex lg:font-marcellus lg:gap-10 lg:ml-20 xl:60 xl:gap-16 2xl:gap-20'>
                    <NavLink to='/' className={({ isActive }) => `${isActive ? 'text-[#1A3A37]' : 'text-black'} cursor-pointer`}>Home</NavLink>
                    <span className='cursor-pointer'>Collection</span>
                    <NavLink to='/shop' className={({ isActive }) => `${isActive ? 'text-[#1A3A37]' : 'text-black'} cursor-pointer`}>Shop</NavLink>
                    <span className='cursor-pointer'>Blog</span>
                    <NavLink to='/contact-us' className={({ isActive }) => `${isActive ? 'text-[#1A3A37]' : 'text-black'} cursor-pointer`}>Contact Us</NavLink>
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
                                    <div className={`${inHome ? 'top-24' : 'top-12'} absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg py-2 z-50 `}>
                                        {userEmail === "jwellery@admin.com" && ( // Check if user is admin
                                            <NavLink
                                                to="/view-orders"
                                                className="flex justify-center px-4 py-2 text-lg text-gray-800 hover:bg-gray-200"
                                            >
                                                All Orders
                                            </NavLink>
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
                                    <CiSearch size={20} />
                                    <div ref={dropdownRef} className='w-auto h-auto flex items-center justify-center'>
                                        <CiUser onClick={handleDropDown2} size={20} />
                                        {dropdown2 && (
                                            <div className={`${inHome ? 'top-24' : 'top-12'} absolute right-10 mt-2 w-48 bg-white rounded-lg shadow-lg py-2 z-50 lg:right-40 `}>
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
                                    <NavLink to='/my-cart'><PiStorefrontLight size={20} /></NavLink>
                                </div>
                                <div className='lg:hidden'> {sideBar ? <IoClose size={25} onClick={() => setSideBar(false)} className='cursor-pointer' /> : <FaBarsStaggered size={25} onClick={() => setSideBar(true)} className='cursor-pointer' />} </div>
                                <span className='hidden lg:block lg:px-4 lg:py-2 lg:rounded-xl lg:font-marcellus lg:bg-[#1A3A37] lg:text-white 2xl:px-5 lg:cursor-pointer'>Get Special Offers</span>
                            </div>
                        </>
                        : isAuthenticated === false && <NavLink to='/login' className='w-auto h-auto flex px-10 py-1.5 bg-[#1A3A37] text-white font-semibold font-marcellus rounded-md cursor-pointer'>
                            Login
                        </NavLink>
                }

            </header>
            <div className={`${sideBar ? 'translate-x-0' : 'translate-x-80'} w-52 h-full fixed bg-[#D7D7D7] shadow-xl right-0 z-40 duration-300 transition-all ease-in-out flex flex-col lg:hidden gap-4 ${inHome ? 'top-[105px]' : 'top-16'}`}>
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
            </div>
        </>
    )
}

export default Header