import React from 'react'
import { SlLocationPin } from "react-icons/sl";
import { FiPhone } from "react-icons/fi";
import { MdOutlineMail } from "react-icons/md";
import { FaInstagram } from "react-icons/fa";
import { FiTwitter } from "react-icons/fi";
import { ImFacebook2 } from "react-icons/im";


function Section1() {
    return (
        <div className='w-full h-auto flex flex-col py-10 gap-8 md:flex-row lg:px-20 xl:py-20'>
            <div className='w-full h-auto flex flex-col py-5 px-5 lg:pb-0'>
                <span className='font-marcellus text-3xl sm:text-4xl'>Contact Us</span>
                <span className='font-marcellus text-xs mt-2 text-[#A7A7A7] sm:text-sm md:text-xs xl:text-sm xl:mt-5'>Learn more about our products and services to get a better experience in shopping at our website. Please complete this form to get the latest information from us. Our Customer Service is available on 24/7. The information you provide will be confidential and not shared with third parties.</span>
                <div className='w-full h-auto flex flex-col border-[1px] border-gray-400 mt-10 p-5 rounded-3xl gap-5 xl:p-14 xl:gap-8'>
                    <div className='w-full h-auto flex flex-col gap-3'>
                        <label className='text-[#383838] font-marcellus' htmlFor="name">Name <span className='text-red-500'>*</span></label>
                        <input type="text" name='name' id='name' placeholder='Enter you name' className='w-full h-9 outline-none px-3 border-[1px] border-gray-300 rounded-md' />
                    </div>
                    <div className='w-full h-auto flex flex-col gap-3'>
                        <label className='text-[#383838] font-marcellus' htmlFor="email">Email <span className='text-red-500'>*</span></label>
                        <input type="email" name='email' id='email' placeholder='Enter you Email' className='w-full h-9 outline-none px-3 border-[1px] border-gray-300 rounded-md' />
                    </div>
                    <div className='w-full h-auto flex flex-col gap-3'>
                        <label className='text-[#383838] font-marcellus' htmlFor="subject">Subject <span className='text-red-500'>*</span></label>
                        <textarea name="subject" id="subject" placeholder='Enter you Subject' className='w-full outline-none p-3 border-[1px] border-gray-300 rounded-md min-h-32 max-h-32 resize-none'></textarea>
                    </div>
                    <div className='w-full h-auto flex flex-col justify-center items-center sm:flex-row sm:items-center md:flex-col lg:flex-row'>
                        <div className='w-full h-full flex gap-2 items-center'>
                            <input type="checkbox" name="termsCondition" id="termsCondition" className=''/>
                            <label htmlFor="termsCondition" className='text-[#A7A7A7] font-marcellus'>Accept Terms & Conditions</label>
                        </div>
                        <div className='w-full h-full flex justify-center items-center mt-5 sm:mt-0 sm:justify-end md:mt-5 md:justify-center lg:justify-end lg:mt-0'>
                            <span className='bg-[#1A3A37] px-10 py-2 font-marcellus text-[#FAFAFA] rounded-lg'>Submit</span>
                        </div>
                    </div>
                </div>
            </div>
            <div className='w-full h-auto flex justify-center items-center lg:w-[50vw] lg:items-end'>
                <div className='w-[90%] h-[60vh] rounded-3xl bg-[#1A3A37] flex flex-col p-10 font-marcellus text-white md:h-auto lg:h-[70vh] xl:h-[70vh] xl:py-16'>
                    <span className='text-2xl xl:text-3xl'>Contact</span>
                    <div className='w-full h-auto flex gap-4 mt-10'>
                        <SlLocationPin size={20} />
                        <span className='w-[80%] text-xs sm:text-sm xl:text-base'>Lorem ipsum dolor sit amet, consectetur .</span>
                    </div>
                    <div className='w-full h-auto flex gap-4 items-center mt-5'>
                        <FiPhone size={20} />
                        <span className='w-[80%] text-xs sm:text-sm xl:text-base'> +123456789</span>
                    </div>
                    <div className='w-full h-auto flex gap-4 items-center mt-5'>
                        <MdOutlineMail size={20} />
                        <span className='w-[80%] text-xs sm:text-sm xl:text-base'>jwellery@support.com</span>
                    </div>
                    <div className='w-full h-auto flex flex-col mt-10 gap-8 xl:gap-10'>
                        <span className='font-semibold text-xl xl:text-3xl'>Follow us</span>
                        <div className='w-full h-auto flex gap-5 items-center'>
                            <FaInstagram size={20} className='size-7' />
                            <FiTwitter size={20} className='size-7'  />
                            <ImFacebook2 size={20} className='size-7'  />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Section1