import React, { useEffect } from 'react'
import Section1 from './AboutComponents/Section1'
import Team from './AboutComponents/Team'
import Testimonial from './HomeComponents/Testimonial'
import Bird from '../assets/bird.webp'

function About() {
    useEffect(()=>{
        window.scrollTo(0, 0)
    },[])
    return (
        <>
            <Section1 />
            <div className='w-full h-auto bg-[#fafafa] font-marcellus'>
                <div className='flex md:flex-row flex-col items-center justify-center px-10 lg:py-20 gap-8 '>
                    <div className='md:w-1/2 w-full flex flex-col gap-8'>
                        <h1 className='text-3xl md:text-4xl font-bold text-[background: #090909]'>Adorn Yourself in Elegance with Exquisite Jewelry</h1>
                        <p>Rooted in the royal traditions of Jaipur, our family has been crafting exquisite jewelry for decades. Passed down through generations, our expertise blends heritage craftsmanship with modern elegance. Each piece is a symbol of artistry, passion, and luxury—now available at your fingertips.</p>
                    </div>
                    <div className='md:w-1/2 w-full '>
                          <img src={Bird} alt="Bird img" className='rounded-3xl w-full h-[400px]'/>
                    </div>
                </div>
            </div>
            <Testimonial/>
            <Team />
        </>
    )
}

export default About