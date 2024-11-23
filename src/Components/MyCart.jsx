import React, { useContext, useState } from 'react'
import Header from './Header'
import { IoCloseSharp } from "react-icons/io5";
import { LuTicket } from "react-icons/lu";
import { useNavigate } from 'react-router-dom';
import { CartContext } from './CartContext';
import AuthContext from './AuthContext';

function MyCart() {
    const { cartItems, addToCart, removeFromCart, getCartTotal } = useContext(CartContext);
    const mainPrice = getCartTotal()
    const navigate = useNavigate()
    const { isAuthenticated } = useContext(AuthContext);

    const handleCheckoutClick = () => {
        if (isAuthenticated) {
            navigate("/my-cart/checkout");
        } else {
            alert("Please sign in to continue");
            navigate("/login");
        }
    };

    return (
        <>
            < Header color={'#FAFAFA'} />
            <div className='w-full h-auto flex flex-col bg-[#FAFAFA]'>
                <div className='w-full h-auto px-5 font-marcellus my-5 text-md flex gap-2 sm:px-10 lg:px-20 xl:text-xl xl:gap-4'>
                    <span className='text-[#A7A7A7]'>Home</span>
                    <span className='text-[#A7A7A7]'>{'>'}</span>
                    <span className='text-[#1A3A37]'>My Cart</span>
                </div>
                <div className='w-full h-auto flex flex-col'>
                    <div className='w-full h-auto flex justify-center text-[#383838] items-center font-marcellus text-2xl my-3 md:text-3xl xl:text-4xl md:my-6 xl:my-10'>
                        My Cart
                    </div>
                    <div className='w-full h-auto flex justify-between items-center px-4 mb-5 font-marcellus sm:justify-center sm:gap-6'>
                        <div className='w-auto h-auto flex items-center gap-3'>
                            <span className='w-7 h-7 rounded-full border-[1px] border-[#1A3A37] text-[#1A3A37] flex justify-center items-center md:w-10 md:h-10 md:text-lg'>1</span>
                            <span className='text-[#1A3A37] md:text-lg'>My Cart</span>
                        </div>
                        <div className='w-[30%] h-[1px] bg-[#383838] md:w-[20%] xl:w-[15%]'></div>
                        <div className='w-auto h-auto flex items-center gap-3'>
                            <span className='w-7 h-7 rounded-full border-[1px] border-[#D0D0D2] text-[#D0D0D2] flex justify-center items-center md:w-10 md:h-10 md:text-lg'>2</span>
                            <span className='text-[#D0D0D2] md:text-lg'>Checkout</span>
                        </div>
                    </div>
                </div>
                <div className='my-10 w-full h-auto flex flex-col gap-4 md:flex-row xl:px-24 pb-10 xl:pb-20'>
                    <div className='w-full h-auto flex flex-col px-5'>
                        <div className='w-full h-auto flex gap-3 text-[#A7A7A7] font-marcellus mb-5'>
                            <input type="checkbox" name="" id="selectall" />
                            <label htmlFor="selectall">Select All</label>
                        </div>
                        <div className='w-full h-[1px] bg-[#1A3A37]'></div>
                        <div className='w-full h-auto flex flex-col gap-3'>
                            {
                                cartItems.length > 0
                                    ? cartItems.map((item, index) => (
                                        <div key={index} className='w-full h-auto flex flex-col'>
                                            <div className='w-full h-auto flex  py-4'>
                                                <div className='h-auto flex justify-center items-center mr-3'>
                                                    <input type="checkbox" name="" id="" />
                                                </div>
                                                <img src="" alt="" className='w-20 h-20 bg-gray-300 sm:w-32 sm:h-28 lg:w-44 lg:h-36' />
                                                <div className='w-full h-auto flex justify-between items-center pl-3 lg:pl-8'>
                                                    <div className='w-auto h-full flex flex-1 flex-col font-marcellus justify-between'>
                                                        <div className='w-full h-auto flex flex-col text-sm lg:text-lg'>
                                                            <span>{item.name}</span>
                                                            <span>₹{item.price}</span>
                                                        </div>
                                                        <div className='w-full h-auto flex items-center'>
                                                            <div className='w-auto h-auto flex justify-between gap-3'>
                                                                <span onClick={() => removeFromCart(item)} className='w-6 h-6 bg-[#D0D0D2] rounded-md flex justify-center items-center text-[#A7A7A7] lg:w-8 lg:h-8 cursor-pointer select-none'>-</span>
                                                                <span className='w-6 h-6 flex justify-center items-center text-[#1A3A37] lg:w-8 lg:h-8'>{item.quantity}</span>
                                                                <span onClick={() => addToCart(item)} className='w-6 h-6 bg-[#1A3A37] rounded-md flex justify-center items-center text-[#FAFAFA] lg:w-8 lg:h-8 cursor-pointer select-none'>+</span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className='w-auto h-full flex justify-center items-center'>
                                                        <IoCloseSharp onClick={() => removeFromCart(item)} size={20} className='lg:size-7 cursor-pointer' />
                                                    </div>
                                                </div>
                                            </div>
                                            <div className='w-full h-[1px] bg-[#1A3A37]'></div>
                                        </div>
                                    ))
                                    : <p className='w-full text-xl font-marcellus h-40 flex justify-center items-center'>Your cart is Empty</p>
                            }
                        </div>
                    </div>
                    <div className='w-full h-auto flex items-center md:w-[60vw] md:items-start md:pt-10 lg:w-[50vw] xl:w-[40vw]'>
                        <div className='w-full h-auto flex flex-col px-5 gap-5'>
                            <div className='w-full h-auto flex justify-center items-center border-[1px] border-[#1A3A37] py-3 gap-3 rounded-xl bg-[#E4E0DA40] font-marcellus lg:gap-5'>
                                <span className='w-10 h-10 flex justify-center items-center bg-[#1A3A37] rounded-lg'>
                                    <LuTicket size={20} className='text-white' />
                                </span>
                                <span className='text-[#383838]'>Have a coupon code?</span>
                                <span className='text-[#383838]'>{'>'}</span>
                            </div>
                            <div className='w-full h-auto flex flex-col border-[1px] border-[#1A3A37] p-3 font-marcellus rounded-lg lg:p-5'>
                                <span className='lg:text-lg'>Summary</span>
                                <div className='my-4 w-full h-auto flex justify-between'>
                                    <span className='text-[#A7A7A7] text-sm'>Total</span>
                                    <span className='text-[##1A3A37]'>₹{mainPrice.toFixed(2)}</span>
                                </div>
                                <div className='w-full h-auto flex flex-col gap-3 mt-3'>
                                    <span onClick={handleCheckoutClick} className='w-full h-auto flex justify-center items-center bg-[#1A3A37] text-[#FAFAFA] rounded-md py-2 cursor-pointer'>Checkout</span>
                                    <span className='w-full h-auto flex justify-center items-center text-[#1A3A37] py-2 cursor-pointer'>Continue Shopping</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default MyCart