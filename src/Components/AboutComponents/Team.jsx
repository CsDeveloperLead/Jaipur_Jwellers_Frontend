import React from 'react'

function Team() {

    const teamData = [
        {
            name: "Abdul Mehraj",
            role: "Third Generation",
            img: ""
        },
        {
            name: "Malik Mehraj",
            role: "Third Generation",
            img: ""
        },
        {
            name: "Abdul Moin",
            role: "Second Generation",
            img: ""
        },
        {
            name: "Abdul Mubeen",
            role: "First Generation",
            img: ""
        },
      
    ]

    return (
        <div className='w-full h-auto flex flex-col py-10 gap-14 md:gap-20 lg:py-20 bg-[#FAFAFA]'>
            <div className='w-full h-auto flex flex-col justify-center items-center'>
                <h1 className='font-marcellus text-3xl text-center md:text-4xl'>Our Team</h1>
                <p className='w-[90%] font-marcellus text-[#A7A7A7] text-sm text-center mt-5 sm:w-[80vw] md:w-[70vw] lg:w-[60vw] xl:w-[50vw] '>For three generations, we have perfected the art of fine jewelry, bringing Jaipur’s rich heritage to life in every exquisite piece. Now, we are expanding online to share our legacy with the world.</p>
            </div>
            <div className='product-slider w-full h-auto flex overflow-x-scroll px-10 pb-10 gap-10 lg:px-0 lg:justify-center lg:items-center'>
                {
                    teamData.map((item, index) => (
                        <div key={index} className='min-w-[80%] h-auto flex flex-col justify-center items-center shadow-md shadow-gray-400 rounded-lg sm:min-w-[40%] md:min-w-[30%] lg:min-w-[20%]'>
                            <img src="" alt="" className='w-full h-40 bg-gray-200 rounded-t-lg lg:h-48 xl:h-52 2xl:h-60' />
                            <div className='w-full h-auto flex flex-col justify-center items-center my-4 gap-2'>
                                <span className='text-[#383838] font-marcellus'>{item.name}</span>
                                <span className='text-[#A7A7A7] font-marcellus'>{item.role}</span>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default Team