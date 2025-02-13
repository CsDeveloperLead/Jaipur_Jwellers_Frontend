import React from 'react'
import Section1 from './AboutComponents/Section1'
import Team from './AboutComponents/Team'
import Testimonial from './HomeComponents/Testimonial'
Testimonial
function About() {
    return (
        <>
            <Section1 />
            <div className='w-full h-auto bg-[#fafafa] font-marcellus'>
                <div className='flex md:flex-row flex-col items-center justify-center px-10 lg:py-20 gap-8 '>
                    <div className='md:w-1/2 w-full flex flex-col gap-8'>
                        <h1 className='text-3xl md:text-4xl font-bold text-[background: #090909]'>Adorn Yourself in Elegance with Exquisite Jewelry</h1>
                        <p>Celebrate your style journey with unmatched elegance, craftsmanship, and timeless beauty found in every piece of our jewelry collection.</p>
                    </div>
                    <div className='md:w-1/2 w-full '>
                          <div className='bg-[#c4c4c4] rounded-3xl w-full h-[400px]'> 

                          </div>  
                    </div>
                </div>
            </div>
            <Testimonial/>
            <Team />
        </>
    )
}

export default About