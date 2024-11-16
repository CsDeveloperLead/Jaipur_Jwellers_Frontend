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

function Header({ color }) {
    const [userEmail, setUserEmail] = useState('')
    const { isAuthenticated, logout } = useContext(AuthContext)
    const [dropdown, setDropDown] = useState(false)
    const dropdownRef = useRef(null)
    const { clearCart } = useContext(CartContext)
    const location = useLocation()
    const [inHome, setInHome] = useState(false)

    function handleDropDown() {
        setDropDown(!dropdown)
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

                {isAuthenticated && userEmail === "jwellery@admin.com" && (
                    <div className='w-auto h-auto flex xl:gap-3 items-center'>
                        <NavLink to='/dashboard' className="text-[#1A3A37] mx-4">
                            <MdDashboard size={28} />
                        </NavLink>
                        <div ref={dropdownRef} className='w-auto h-auto flex items-center justify-center'>
                            <FaUserCircle onClick={handleDropDown} size={28} className='text-[#1A3A37] mx-4 cursor-pointer' />
                            {dropdown && (
                                <div className={`${inHome ? 'top-24' : 'top-12'} absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg py-2 z-50 `}>
                                    <NavLink
                                        to='/view-profile'
                                        className="flex justify-center cursor-pointer text-lg px-4 py-2 text-gray-800 hover:bg-gray-200"
                                    >
                                        View Profile
                                    </NavLink>

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
                        <div className='lg:hidden mx-4'><FaBarsStaggered size={25} /></div>
                    </div>
                )}
                {
                    userEmail !== "jwellery@admin.com" && (
                        <>
                            <div className='hidden lg:flex lg:gap-5'>
                                <div className='w-auto flex items-center gap-6 justify-between'>
                                    <CiSearch size={20} />
                                    <CiUser size={20} />
                                    <NavLink to='/my-cart'><PiStorefrontLight size={20} /></NavLink>
                                </div>
                                <span className='px-4 py-2 rounded-xl font-marcellus bg-[#1A3A37] text-white 2xl:px-5 cursor-pointer'>Get Special Offers</span>
                            </div>
                            <div className='lg:hidden'><FaBarsStaggered size={25} /></div>
                        </>
                    )
                }

            </header>
        </>
    )
}

export default Header