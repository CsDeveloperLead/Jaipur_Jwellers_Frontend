import React, { useEffect, useState } from 'react'
import Header from './Header'
import { NavLink, useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import { CartContext } from './CartContext';
import axios from 'axios'
import { jwtDecode } from 'jwt-decode';


const backend = import.meta.env.VITE_BACKEND_URL

function Checkout() {
    const { cartItems, getCartTotal, clearCart } = useContext(CartContext)
    const [userData, setUserData] = useState(null);
    const mainPrice = getCartTotal()
    const [buyerInfo, setBuyerInfo] = useState({
        firstName: '',
        lastName: '',
        address: '',
        contact: '',
        country: '',
        city: '',
        state: '',
        zipCode: '',
        note: ''
    })
    const navigate = useNavigate()

    const states = [
        "Andhra Pradesh", "Arunachal Pradesh", "Assam", "Bihar", "Chhattisgarh",
        "Goa", "Gujarat", "Haryana", "Himachal Pradesh", "Jharkhand", "Karnataka",
        "Kerala", "Madhya Pradesh", "Maharashtra", "Manipur", "Meghalaya", "Mizoram",
        "Nagaland", "Odisha", "Punjab", "Rajasthan", "Sikkim", "Tamil Nadu",
        "Telangana", "Tripura", "Uttar Pradesh", "Uttarakhand", "West Bengal",
        "Andaman and Nicobar Islands", "Chandigarh", "Dadra and Nagar Haveli and Daman and Diu",
        "Lakshadweep", "Delhi", "Puducherry", "Ladakh", "Jammu and Kashmir"
    ];

    async function handleCheckout() {
        try {
            const data = {
                userId: userData.id,
                cartItems,
                shippingInfo: buyerInfo,
                totalPrice: mainPrice + 115 + 110 //115 is shipping price and 110 is tax change this later
            }
            const response = await axios.post(`${backend}/api/v1/orders/create-order`, data)
            alert("Checkout successful")
            clearCart()
            navigate('/view-profile')
            setBuyerInfo({
                firstName: '',
                lastName: '',
                address: '',
                contact: '',
                state: '',
                country: '',
                zipCode: '',
                note: '',
                city: ''
            })
        } catch (error) {
            console.error("error while creating order", error);
            alert("Checkout Failed")
        }
    }

    const handleChange = (event) => {
        setBuyerInfo({ ...buyerInfo, state: event.target.value });
    };

    useEffect(() => {
        // Get JWT token from local storage
        const token = localStorage.getItem("authToken");

        if (token) {
            try {
                // Decode the token to get the user data
                const decodedToken = jwtDecode(token);
                setUserData(decodedToken);
            } catch (error) {
                console.error("Invalid token:", error);
            }
        }
    }, []);

    return (
        <>
            <Header color={'#FAFAFA'} />
            <div className='w-full h-auto flex flex-col bg-[#FAFAFA]'>
                <div className='w-full h-auto px-5 font-marcellus my-5 text-md flex gap-2 sm:px-10 lg:px-20'>
                    <span className='text-[#A7A7A7]'>Home</span>
                    <span className='text-[#A7A7A7]'>{'>'}</span>
                    <span className='text-[#A7A7A7]'>My Cart</span>
                    <span className='text-[#A7A7A7]'>{'>'}</span>
                    <span className='text-[#1A3A37]'>Checkout</span>
                </div>
                <div className='w-full h-auto flex flex-col'>
                    <div className='w-full h-auto flex text-[#383838] justify-center items-center font-marcellus text-2xl my-3 md:text-3xl xl:text-4xl md:my-6 xl:my-10'>
                        Checkout
                    </div>
                    <div className='w-full h-auto flex justify-between items-center px-4 mb-5 font-marcellus sm:justify-center sm:gap-6'>
                        <div className='w-auto h-auto flex items-center gap-3'>
                            <span className='w-7 h-7 rounded-full border-[1px] border-[#1A3A37] text-[#1A3A37] flex justify-center items-center md:w-10 md:h-10 md:text-lg'>1</span>
                            <span className='text-[#1A3A37] md:text-lg'>My Cart</span>
                        </div>
                        <div className='w-[30%] h-[1px] bg-[#383838] md:w-[20%] xl:w-[15%]'></div>
                        <div className='w-auto h-auto flex items-center gap-3'>
                            <span className='w-7 h-7 rounded-full border-[1px] border-[#1A3A37] text-[#1A3A37] flex justify-center items-center md:w-10 md:h-10 md:text-lg'>2</span>
                            <span className='text-[#1A3A37] md:text-lg'>Checkout</span>
                        </div>
                    </div>
                </div>
                <div className='my-10 w-full h-auto flex flex-col gap-7 md:flex-row xl:px-24 pb-10 xl:pb-20 font-marcellus text-[#383838]'>
                    <div className='w-full h-auto flex flex-col px-3 sm:w-[60vw] sm:mx-auto'>
                        <span className='md:text-lg xl:text-xl'>Buyer Info</span>
                        <div className='w-full h-[1px] bg-[#383838] my-4'></div>
                        <div className='w-full h-auto flex flex-col gap-3 lg:gap-6'>
                            <div className='w-full h-auto flex justify-between items-center'>
                                <div className='w-[48%] h-auto flex flex-col gap-2 rounded-md'>
                                    <label htmlFor="buyerFirstName" className='lg:text-lg'>First Name</label>
                                    <input type="text" id='buyerFirstName' placeholder='Enter First Name' value={buyerInfo.firstName} onChange={(e) => setBuyerInfo({ ...buyerInfo, firstName: e.target.value })} className='w-full h-9 outline-none px-2 border-[1px] border-gray-300 rounded-md md:h-11' />
                                </div>
                                <div className='w-[48%] h-auto flex flex-col gap-2 rounded-md'>
                                    <label htmlFor="buyerLastName" className='lg:text-lg'>Last Name</label>
                                    <input type="text" id='buyerLastName' placeholder='Enter Last Name' value={buyerInfo.lastName} onChange={(e) => setBuyerInfo({ ...buyerInfo, lastName: e.target.value })} className='w-full h-9 outline-none px-2 border-[1px] border-gray-300 rounded-md md:h-11' />
                                </div>
                            </div>
                            <div className='w-full h-auto flex flex-col justify-between items-center gap-2 md:flex-row '>
                                <div className='w-full h-auto flex flex-col gap-2 rounded-md md:w-[48%]'>
                                    <label htmlFor="buyerAddress" className='lg:text-lg'>Address</label>
                                    <input type="text" id='buyerAddress' placeholder='Enter Address' value={buyerInfo.address} onChange={(e) => setBuyerInfo({ ...buyerInfo, address: e.target.value })} className='w-full h-9 outline-none px-2 border-[1px] border-gray-300 rounded-md md:h-11' />
                                </div>
                                <div className='w-full h-auto flex flex-col gap-2 rounded-md md:w-[48%]'>
                                    <label htmlFor="buyerContact" className='lg:text-lg'>Contact</label>
                                    <input type="text" id='buyerContact' placeholder='Enter Contact' value={buyerInfo.contact} onChange={(e) => setBuyerInfo({ ...buyerInfo, contact: e.target.value })} className='w-full h-9 outline-none px-2 border-[1px] border-gray-300 rounded-md md:h-11' />
                                </div>
                            </div>
                            <div className='w-full h-auto flex justify-between items-center'>
                                <div className='w-[48%] h-auto flex flex-col gap-2 rounded-md'>
                                    <label htmlFor="buyerCountry" className='lg:text-lg'>Country</label>
                                    <input type="text" id='buyerCountry' placeholder='Enter Country' value={buyerInfo.country} onChange={(e) => setBuyerInfo({ ...buyerInfo, country: e.target.value })} className='w-full h-9 outline-none px-2 border-[1px] border-gray-300 rounded-md md:h-11' />
                                </div>
                                <div className='w-[48%] h-auto flex flex-col gap-2 rounded-md'>
                                    <label htmlFor="buyerCity" className='lg:text-lg'>City</label>
                                    <input type="text" id='buyerCity' placeholder='Enter City' value={buyerInfo.city} onChange={(e) => setBuyerInfo({ ...buyerInfo, city: e.target.value })} className='w-full h-9 outline-none px-2 border-[1px] border-gray-300 rounded-md md:h-11' />
                                </div>
                            </div>
                            <div className='w-full h-auto flex justify-between items-center'>
                                <div className='w-[48%] h-auto flex flex-col gap-2 rounded-md'>
                                    <label htmlFor="buyerState" className='lg:text-lg'>State</label>
                                    <select className='w-full h-9 outline-none px-2 border-[1px] border-gray-300 rounded-md bg-white md:h-11' id="buyerState" value={buyerInfo.state} onChange={handleChange}>
                                        <option value="" disabled>Select a state</option>
                                        {states.map((state, index) => (
                                            <option key={index} value={state}>{state}</option>
                                        ))}
                                    </select>
                                </div>
                                <div className='w-[48%] h-auto flex flex-col gap-2 rounded-md'>
                                    <label htmlFor="buyerZipCode" className='lg:text-lg'>Zip Code</label>
                                    <input type="text" id='buyerZipCode' placeholder='Enter Zip COde' value={buyerInfo.zipCode} onChange={(e) => setBuyerInfo({ ...buyerInfo, zipCode: e.target.value })} className='w-full h-9 outline-none px-2 border-[1px] border-gray-300 rounded-md md:h-11' />
                                </div>
                            </div>
                            <div className='w-full h-auto flex flex-col gap-2'>
                                <label htmlFor="buyerNote" className='lg:text-lg'>Note</label>
                                <textarea name="note" placeholder='Enter Note' id="buyerNote" value={buyerInfo.note} onChange={(e) => setBuyerInfo({ ...buyerInfo, note: e.target.value })} className='w-full border-[1px] border-gray-400 px-2 py-1 min-h-28 max-h-28 resize-none rounded-md'></textarea>
                            </div>
                        </div>
                    </div>
                    <div className='w-full h-auto flex flex-col px-4 sm:w-[55vw] sm:mx-auto lg:w-[40vw] xl:w-[30vw]'>
                        <div className='w-full h-auto flex flex-col border-[1px] border-[#383838] rounded-lg py-8 2xl:px-2'>
                            <h1 className='text-center font-marcellus text-lg'>Your Order Summary</h1>
                            <div className='w-full h-auto flex flex-col mt-7 font-marcellus text-[#383838] gap-3 px-3 xl:text-lg'>
                                {
                                    cartItems?.map((item, index) => (
                                        <div key={index} className='w-full h-auto flex justify-between items-center'>
                                            <div className='w-full h-auto flex gap-4'><span>{item.quantity}x</span><span>{item.name}</span></div>
                                            <span>₹{item.price * item.quantity}.00</span>
                                        </div>
                                    ))
                                }
                            </div>
                            <div className='w-[95%] mx-auto h-[1px] bg-[#383838] my-5'></div>
                            <div className='w-full h-auto flex flex-col font-marcellus text-[#383838] gap-3 px-3 xl:text-lg'>
                                <div className='w-full h-auto flex justify-between items-center'>
                                    <span>Subtotal</span>
                                    <span>₹{mainPrice}.00</span>
                                </div>
                                <div className='w-full h-auto flex justify-between items-center'>
                                    <span>Shipping</span>
                                    <span>₹115.00</span>
                                </div>
                                <div className='w-full h-auto flex justify-between items-center'>
                                    <span>Tax</span>
                                    <span>₹110.00</span>
                                </div>
                            </div>
                            <div className='w-[95%] mx-auto h-[1px] bg-[#383838] my-5'></div>
                            <div className='w-full h-auto flex items-center justify-between text-[#383838] px-3 xl:text-lg'>
                                <span>Total</span>
                                <span>₹{mainPrice + 115 + 110}.00</span>
                            </div>
                            <div className='w-[95%] mx-auto h-[1px] bg-[#383838] my-5'></div>
                            <div className='w-full h-auto flex flex-col px-3 text-[#383838] gap-5 '>
                                <span className='xl:text-lg'>Payment</span>
                                <div className='w-full h-auto flex justify-between text-sm lg:text-base xl:text-sm 2xl:text-base'>
                                    <span className='px-3 py-1 border-[1px] border-[#383838] rounded-md cursor-pointer '>Credit Card</span>
                                    <span className='px-3 py-1 border-[1px] border-[#383838] bg-[#383838] text-[#FAFAFA] rounded-md cursor-pointer'>Bank Transfer</span>
                                    <span className='px-3 py-1 border-[1px] border-[#383838] rounded-md cursor-pointer'>Paypal</span>
                                </div>
                            </div>
                            <div className='w-full h-auto flex flex-col mt-8 px-6 gap-3'>
                                <span onClick={handleCheckout} className='w-full h-auto flex items-center justify-center bg-[#1A3A37] text-[#FAFAFA] py-2 rounded-md cursor-pointer'>Checkout</span>
                                <NavLink to='/my-cart' className='w-full h-auto flex items-center justify-center text-[#383838] py-2 cursor-pointer'>Back to cart</NavLink>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Checkout