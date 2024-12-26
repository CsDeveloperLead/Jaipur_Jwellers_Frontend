import React from 'react';
import Customer from '../../assets/Images/customer.png';
import Business from '../../assets/Images/business.png';
import Ring from '../../assets/Images/ring.png';
import Designs from '../../assets/Images/designs.png';

function Info() {
    const content = [
        {
            image: Customer,
            number: "100",
            title: "Happy Customers",
            description: "Where Elegance Finds Its Extraordinary Artistry Who Crave a One-of-a-Kind Sparkle."
        },
        {
            image: Business,
            number: "05",
            title: "Business Owned",
            description: "Captivatingly Classy Jewelry for the Discerning Unveiling the Essence of Timelessness."
        },
        {
            image: Ring,
            number: "1k",
            title: "Happy Customers",
            description: "Exceptional Craftsmanship, Unparalleled Elegance Where Effortless Glamour Meets Class."
        },
        {
            image: Designs,
            number: "15k",
            title: "New Designs",
            description: "Accessorize Your Life with Fierce Charisma For Those Who Dare to Shine Bright."
        },
    ];

    return (
        <div className="w-full h-auto bg-[#FAFAFA] overflow-hidden">
            {/* Scrolling Container */}
            <div className="scrolling-wrapper flex items-center animate-scroll">
                {content.map((item, index) => (
                    <div
                        key={index}
                        className="flex-shrink-0 w-64 sm:w-72 lg:w-80 xl:w-96 h-auto border-y-[1px] sm:border-r-[1px] border-black py-10 px-5 relative flex flex-col items-center xl:py-16"
                    >
                        <div className="w-full h-auto flex flex-col font-marcellus">
                            <span className="text-[#1A3A37] xl:text-xl">{item.number}</span>
                            <span className="text-[#1A3A37] xl:text-xl">{item.title}</span>
                            <span className="mt-4 text-sm text-[#585858] xl:text-base">{item.description}</span>
                        </div>
                        <img src={item.image} alt="logo" className="absolute w-10 top-5 right-10" />
                    </div>
                ))}

                {/* Duplicate Content for Infinite Scrolling */}
                {content.map((item, index) => (
                    <div
                        key={`duplicate-${index}`}
                        className="flex-shrink-0 w-64 sm:w-72 lg:w-80 xl:w-96 h-auto border-y-[1px] sm:border-r-[1px] border-black py-10 px-5 relative flex flex-col items-center xl:py-16"
                    >
                        <div className="w-full h-auto flex flex-col font-marcellus">
                            <span className="text-[#1A3A37] xl:text-xl">{item.number}</span>
                            <span className="text-[#1A3A37] xl:text-xl">{item.title}</span>
                            <span className="mt-4 text-sm text-[#585858] xl:text-base">{item.description}</span>
                        </div>
                        <img src={item.image} alt="logo" className="absolute w-10 top-5 right-10" />
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Info;
