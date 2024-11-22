import React, { useEffect, useRef, useState } from 'react'
import LeftQuote from '../../assets/Images/leftQuote.png'
import RightQuote from '../../assets/Images/rightQuote.png'
import Star1 from '../../assets/Images/newStar.png'
import BigStar from '../../assets/Images/bigStar.png'
import Person from '../../assets/testimonials/person.jpg'
import Person2 from '../../assets/testimonials/person2.jpg'
import Person3 from '../../assets/testimonials/person3.jpg'
import Person4 from '../../assets/testimonials/person4.jpg'
import Person5 from '../../assets/testimonials/person5.jpg'
import Person6 from '../../assets/testimonials/person6.jpg'

function Testimonial() {
    const [currentIndex, setCurrentIndex] = useState(0)

    const testimonials = [
        {
            comment: `"I was mesmerized by the intricate designs and premium quality of the jewelry! Each piece carries the charm of Jaipur's heritage while feeling modern and elegant. I’ve never received so many compliments on my jewelry before!"`,
            name: 'Ritu Sharma',
            address: 'Mumbai',
            image: Person
        },
        {
            comment: `"The gemstones are absolutely stunning and authentic! I could feel the luxury and heritage behind each piece. This is now my go-to place for timeless jewelry that tells a story."`,
            name: 'Akash Mehta',
            address: 'Jaipur',
            image: Person2
        },
        {
            comment: `"Shopping here was an amazing experience! The website is beautifully designed and easy to navigate. My order arrived securely packaged, and the jewelry was even more exquisite than I expected. Truly a slice of Jaipur’s royal craftsmanship!"`,
            name: 'Sarah Thompson',
            address: 'London, UK',
            image: Person3
        },
        {
            comment: `"The attention to detail in their jewelry is unmatched. The mix of heritage and luxury makes each piece one-of-a-kind. Their customer service is exceptional, making every purchase feel special."`,
            name: 'Priya Verma',
            address: 'Delhi',
            image: Person4
        },
        {
            comment: `"I bought a gemstone necklace for my wife’s birthday, and she absolutely loved it. The design is elegant, and the quality is top-notch. It’s like owning a piece of Rajasthan’s royal history!"`,
            name: 'Arjun Malhotra',
            address: 'Bangalore',
            image: Person5
        },
        {
            comment: `"I discovered this jewelry store during my visit to Jaipur and was thrilled to find I could shop online as well. The blend of tradition and modern luxury is breathtaking. Shipping was prompt, and the packaging made me feel like royalty!"`,
            name: 'Emily Williams',
            address: 'Sydney, Australia',
            image: Person6
        }
    ]

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
        }, 4000);

        // Cleanup interval on unmount
        return () => clearInterval(interval);
    }, [testimonials.length]);

    return (
        <div className='w-full h-auto py-10 lg:py-20 xl:pt-44 bg-[#FAFAFA]'>
            <div className='w-full h-auto flex flex-col items-center md:justify-center md:flex-row relative'>
                <div className='w-full h-auto flex flex-col px-5 lg:w-[60vw] lg:px-20'>
                    <span className='text-sm tracking-[10px] font-marcellus font-medium'>TESTIMONIAL</span>
                    <span className='text-4xl font-marcellus md:text-5xl md:mt-3 xl:text-7xl'>What People Says</span>
                    <div
                        className="product-slider w-full h-auto mt-5 lg:mt-14 flex transition-transform duration-500 ease-in-out overflow-hidden"
                    >
                        {testimonials.map((testimonial, index) => (
                            <div style={{ transform: `translateX(-${currentIndex * 100}%)` }} key={index} className="min-w-full h-auto transition-transform duration-500 ease-in-out flex flex-col relative">
                                <span className="text-[#585858] font-marcellus text-sm text-center mt-5 sm:text-base sm:mt-8 md:mt-10 lg:text-lg lg:px-10">
                                    {testimonial.comment}
                                </span>
                                <img src={testimonial.image} alt="people logo" className="w-14 h-14 bg-[#415A77] hidden rounded-full lg:block 2xl:mt-28"/>
                                <div className="w-full h-auto flex font-marcellus items-center gap-2 lg:px-14 mt-10 sm:mt-16 md:mt-32 lg:mt-0">
                                    <span className="text-[#1A3A37] text-lg">- {testimonial.name} </span>
                                    <span className="text-[#00000099] text-xs mt-1.5">{testimonial.address}</span>
                                </div>
                                <img src={LeftQuote} alt="quote logo" className="w-5 absolute top-0 sm:w-7" />
                                <img src={RightQuote} alt="quote logo" className="w-5 absolute bottom-16 right-10 sm:w-7 sm:bottom-20 md:bottom-28" />
                            </div>
                        ))}
                    </div>
                    {/* <div className='min-w-full h-auto flex flex-col'>
                        <span className='text-[#585858] font-marcellus text-sm text-center mt-5 sm:text-base sm:mt-8 md:mt-10 lg:text-lg lg:px-10'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore placeat accusantium officiis unde repudiandae maiores, fugit blanditiis impedit sit libero ipsa veritatis voluptatibus perferendis asperiores labore hic a accusamus facere voluptates. Asperiores illum et officiis earum consequuntur velit est dolore!</span>
                        <div className='w-full h-auto flex font-marcellus items-center gap-2 mt-10 sm:mt-16 md:mt-32 lg:px-14 2xl:mt-36'>
                            <span className='text-[#1A3A37] text-lg'>- Ria Mathur </span>
                            <span className='text-[#00000099] text-xs mt-1.5'>Rajasthan, India</span>
                        </div>
                        <img src={LeftQuote} alt="quote logo" className='w-5 absolute top-0 sm:w-7' />
                        <img src={RightQuote} alt="quote logo" className='w-5 absolute bottom-16 right-0 sm:w-7 sm:bottom-20 md:bottom-28' />
                        <span className='w-7 h-7 bg-[#415A77] rounded-full absolute bottom-10 left-5 sm:w-9 sm:h-9 sm:bottom-10 md:w-12 md:h-12 lg:left-16 lg:bottom-14'></span>
                    </div> */}
                </div>
                <div className='w-full h-[80vh] flex justify-center items-center relative md:h-[60vh] md:w-[50vw] lg:w-[40vw]'>
                    <img src="" alt="" className='w-[80%] h-[80%] bg-gray-200 rounded-xl sm:w-[50%] md:w-[80%] lg:w-[50%] xl:h-[90%]' />
                    <img src={Star1} alt="star" className='w-10 h-10 absolute bottom-20 left-12 sm:left-44 md:left-10 md:bottom-12 lg:left-32 xl:left-40 2xl:bottom-10' />
                    <img src={BigStar} alt="star" className='w-24 h-24 absolute top-10 right-10 sm:right-44 md:right-5 md:top-6 lg:right-28 lg:w-28 lg:h-28 lg:top-0 xl:right-32 xl:w-40 xl:h-40 xl:-top-5' />
                    <img src={Star1} alt="star" className='hidden md:block md:absolute md:top-0 md:w-5 md:h-5 md:right-20 lg:right-48 lg:w-8 lg:h-8 xl:right-60 lg:-top-10' />
                </div>
                <div className="w-auto h-auto flex gap-2 items-center font-marcellus text-sm absolute top-72 md:top-[360px] lg:top-[420px] lg:text-xl">
                    <span>{`0${currentIndex + 1}`}</span>
                    <div className="flex gap-2 items-center">
                        {testimonials.map((_, idx) => (
                            <span
                                onClick={() => setCurrentIndex(idx)}
                                key={idx}
                                className={`w-4 h-[1px] rounded-full ${idx === currentIndex ? 'bg-[#4F4F4F]' : 'bg-[#CCC]'
                                    } lg:w-8 lg:h-1 cursor-pointer`}
                            ></span>
                        ))}
                    </div>
                    <span>{`0${testimonials.length}`}</span>
                </div>
            </div>
        </div>
    )
}

export default Testimonial