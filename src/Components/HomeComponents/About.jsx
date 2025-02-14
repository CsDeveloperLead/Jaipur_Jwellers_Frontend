import React, { useState } from 'react';
import Info from '../Utils/Info';
import { NavLink } from 'react-router-dom';
import SignImg from '../../assets/sign.png';
import Pedant from '../../assets/Images/Pedant.webp';
import Perls from '../../assets/Images/Perls.webp';
import Bracelet from "../../assets/Images/Bracelet.webp";
import NeckLes from "../../assets/Images/Neckles.webp";
import Stone from "../../assets/Images/Stone.webp";

function About() {
    const [hoverNo, setHoverNo] = useState(null);
    
    const products = [
        { image:Pedant, name: "Pendant" },
        { image: Perls, name: "EarRing" },
        { image: Bracelet, name: "Bracelet" },
        { image: NeckLes, name: "Diamond" },
    ];
    
    return (
        <div className='w-full h-auto flex flex-col py-5 bg-[#FAFAFA] pt-20'>
            <h1 className='font-marcellus tracking-[3px] text-center text-sm'>ABOUT OUR JAIPUR JWELLERS</h1>
            <div className='w-full h-auto flex flex-col relative'>
                <div className='w-full h-auto flex flex-col justify-center items-center font-marcellus text-xs mt-5 mb-10 md:mt-10 md:mb-20 md:text-xl md:gap-4 xl:text-2xl xl:gap-6 2xl:text-3xl'>
                    <p className='text-center flex items-center uppercase'>For three generations, we’ve woven Jaipur’s rich heritage</p>
                    <p className='text-center flex items-center uppercase'>into every exquisite piece of jewelry. Now, our legacy of timeless</p>
                    <p className='text-center flex items-center uppercase'>craftsmanship is just a click away—experience luxury, redefined.</p>
                </div>
                <div className='w-full h-auto flex flex-col items-center justify-center gap-2 font-marcellus'>
                    <img src={SignImg} alt="sign logo" className='w-40 h-14' />
                    <span>Abdul Mehraj</span>
                </div>
            </div>
            <div className='product-slider my-10 h-auto w-full overflow-x-scroll flex font-marcellus lg:overflow-x-hidden'>
                {products.map((product, index) => (
                    <NavLink
                        key={index}
                        to={'/shop'}
                        state={{category: product.name}}
                        onMouseEnter={() => setHoverNo(index)}
                        onMouseLeave={() => setHoverNo(null)}
                        className='min-w-full h-auto relative sm:min-w-[25vw] cursor-pointer'
                    >
                        <div className='relative'>
                            <img 
                                src={product.image} 
                                alt={product.name} 
                                className={`w-full h-[70vh] lg:h-[90vh] object-cover rounded-xl transition-opacity duration-300 ${hoverNo === index ? 'opacity-100' : 'opacity-50'}`}
                            />
                            <div className={`absolute bottom-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-50 text-white text-lg font-semibold transition-opacity duration-300 ${hoverNo === index ? 'opacity-100' : 'opacity-0'}`}> 
                                {product.name} 
                            </div>
                        </div>
                    </NavLink>
                ))}
            </div>
            <Info />
        </div>
    );
}

export default About;
