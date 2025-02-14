import React, { useState } from 'react'
import { SlLocationPin } from "react-icons/sl";
import { FiPhone } from "react-icons/fi";
import { MdOutlineMail } from "react-icons/md";
import { FaInstagram } from "react-icons/fa";
import { FiTwitter } from "react-icons/fi";
import { ImFacebook2 } from "react-icons/im";
import { FaWhatsapp } from "react-icons/fa";
import axios from 'axios'
import { NavLink } from 'react-router-dom';

const backend = import.meta.env.VITE_BACKEND_URL

function Section1() {
    const [userDetails, setUserDetails] = useState({
        name: "",
        email: "",
        message: ""
    })

    async function sendMail() {
        try {
            if (userDetails.name.length === 0 || userDetails.email.length === 0 || userDetails.message.length === 0) return null
            const response = await axios.post(`${backend}/api/v1/contact/contact-us-send`, userDetails)

            if (response.status === 200) {
                alert("Mail Sended successfully")
                setUserDetails({
                    name: "",
                    email: "",
                    message: ""
                })
            }

        } catch (error) {
            console.log("Error while sending mail :", error);
        }
    }

    return (
        <div className='w-full h-auto flex flex-col py-10 gap-8 md:flex-row lg:px-20 xl:py-20 bg-[#FAFAFA] '>
            <div className='w-full h-auto flex flex-col py-5 px-5 lg:pb-0'>
                <span className='font-marcellus text-3xl sm:text-4xl'>Contact Us</span>
                <span className='font-marcellus text-xs mt-2 text-[#A7A7A7] sm:text-sm md:text-xs xl:text-sm xl:mt-5'>Learn more about our products and services to get a better experience in shopping at our website. Please complete this form to get the latest information from us. Our Customer Service is available on 24/7. The information you provide will be confidential and not shared with third parties.</span>
                <div className='w-full h-auto flex flex-col border-[1px] border-gray-400 mt-10 p-5 rounded-3xl gap-5 xl:p-14 xl:gap-8'>
                    <div className='w-full h-auto flex flex-col gap-3'>
                        <label className='text-[#383838] font-marcellus' htmlFor="name">Name <span className='text-red-500'>*</span></label>
                        <input type="text" name='name' value={userDetails.name} onChange={(e) => setUserDetails({ ...userDetails, name: e.target.value })} id='name' placeholder='Enter you name' className='w-full h-9 outline-none px-3 border-[1px] border-gray-300 rounded-md' />
                    </div>
                    <div className='w-full h-auto flex flex-col gap-3'>
                        <label className='text-[#383838] font-marcellus' htmlFor="email">Email <span className='text-red-500'>*</span></label>
                        <input type="email" name='email' value={userDetails.email} onChange={(e) => setUserDetails({ ...userDetails, email: e.target.value })} id='email' placeholder='Enter you Email' className='w-full h-9 outline-none px-3 border-[1px] border-gray-300 rounded-md' />
                    </div>
                    <div className='w-full h-auto flex flex-col gap-3'>
                        <label className='text-[#383838] font-marcellus' htmlFor="message">message <span className='text-red-500'>*</span></label>
                        <textarea name="message" id="message" value={userDetails.message} onChange={(e) => setUserDetails({ ...userDetails, message: e.target.value })} placeholder='Enter you message' className='w-full outline-none p-3 border-[1px] border-gray-300 rounded-md min-h-32 max-h-32 resize-none'></textarea>
                    </div>
                    <div className='w-full h-auto flex flex-col justify-center items-center sm:flex-row sm:items-center md:flex-col lg:flex-row'>
                        <div className='w-full h-full flex gap-2 items-center'>
                            <input type="checkbox" name="termsCondition" id="termsCondition" className='' />
                            <label htmlFor="termsCondition" className='text-[#A7A7A7] font-marcellus'>Accept Terms & Conditions</label>
                        </div>
                        <div className='w-full h-full flex justify-center items-center mt-5 sm:mt-0 sm:justify-end md:mt-5 md:justify-center lg:justify-end lg:mt-0'>
                            <span onClick={sendMail} className='bg-[#1A3A37] px-10 py-2 font-marcellus text-[#FAFAFA] rounded-lg cursor-pointer'>Submit</span>
                        </div>
                    </div>
                </div>
            </div>
            <div className='w-full h-auto flex justify-center items-center lg:w-[50vw] lg:items-end'>
                <div className='w-[90%] h-[60vh] rounded-3xl bg-[#1A3A37] flex flex-col p-10 font-marcellus text-white md:h-auto lg:h-[430px] xl:h-[550px] xl:py-16'>
                    <span className='text-2xl xl:text-3xl'>Contact</span>
                    <div className='w-full h-auto flex gap-4 mt-10'>
                        <SlLocationPin size={20} />
                        <span className='w-[80%] text-xs sm:text-sm xl:text-base'>Lobby Shop hotel The Lalit, Barakhamba Lane,New Delhi -110001</span>
                    </div>
                    <div className='w-full h-auto flex gap-4 items-center mt-5'>
                        <FiPhone size={20} />
                        <span className='w-[80%] text-xs sm:text-sm xl:text-base'>+91 8810451624</span>
                    </div>
                    <div className='w-full h-auto flex gap-4 items-center mt-5'>
                        <MdOutlineMail size={20} />
                        <span className='w-[80%] text-xs sm:text-sm xl:text-base'>jaipurjewellers.online@gmail.com</span>
                    </div>
                    <div className='w-full h-auto flex flex-col mt-10 gap-8 xl:gap-10'>
                        <span className='font-semibold text-xl xl:text-3xl'>Follow us</span>
                        <div className='w-full h-auto flex gap-5 items-center'>
                            <NavLink to={'https://www.instagram.com/jaipur_jewellers.official'} target='_blank'><FaInstagram size={25} className='text-white' /></NavLink>
                            <NavLink to={'https://wa.link/9zk4fk'} target='_blank'><FaWhatsapp size={25} className='text-white' /></NavLink>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Section1