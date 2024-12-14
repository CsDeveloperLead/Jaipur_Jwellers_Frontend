import React, { useEffect, useState } from 'react'
import Header from './Header'
import axios from 'axios'
import { useParams } from 'react-router-dom';

const backend = import.meta.env.VITE_BACKEND_URL

function BlogPage() {
    const [blogs, setBlogs] = useState([]);
    const [loading, setLoading] = useState(false);
    const [singleBlog, setSingleBlog] = useState({})
    const { id } = useParams()

    const fetchBlogs = async () => {
        try {
            setLoading(true)
            const response = await axios.post(`${backend}/api/v1/admin/get-blogs`)
            const newestBlog = response.data.message.reverse()[0]
            const otherBlogs = response.data.message
            setBlogs(otherBlogs.slice(0, 6))
            if (id) {
                setSingleBlog(otherBlogs.find(blog => blog._id === id) || newestBlog);
            } else {
                setSingleBlog(newestBlog);
            }
            setLoading(false)
        } catch (error) {
            console.error('Error fetching blog data:', error);
            setLoading(false)
        }
    };

    function changeBlog(id) {
        const blog = blogs.find(blog => blog._id === id)
        setSingleBlog(blog)
        window.scrollTo(0, 0)
    }

    useEffect(() => {
        fetchBlogs()
    }, [])

    return (
        <>
            <Header />
            <div className='w-full h-auto flex flex-col py-7'>
                <div className='w-full h-auto flex flex-col gap-4'>
                    <h1 className='text-center font-marcellus text-xl md:text-3xl text-[#1A3A37] font-semibold'>Blogs</h1>
                    <p className='text-center text-sm md:px-10 lg:px-20 xl:px-40 2xl:px-60 lg:text-base'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates nulla quas excepturi, exercitationem ipsa beatae nobis id assumenda consequatur, dicta at dolorum alias ullam accusantium. Inventore nam minus necessitatibus minima.</p>
                </div>
                <div className='my-7 w-full h-[1px] bg-[#1A3A37]' />
                <div className='w-full h-auto flex flex-col mb-10 gap-6 lg:flex-row xl:px-14'>
                    <div className='w-full h-auto flex flex-col lg:w-[65%] xl:w-[70%]'>
                        <div className='w-full h-auto flex'>
                            <img src={singleBlog?.image} alt="blog image" className='w-full object-cover sm:w-[600px] md:w-[800px] lg:w-full xl:w-[900px] sm:mx-auto' />
                        </div>
                        <div className='w-full h-auto flex flex-col mt-4 gap-6 px-2 font-marcellus sm:px-6 sm:mt-8 md:mt-10 md:px-10'>
                            <h1 className='w-full h-auto flex font-bold sm:text-xl md:text-2xl xl:text-4xl'>{singleBlog?.title}</h1>
                            <p className='text-sm md:text-base xl:text-lg' style={{ whiteSpace: "pre-wrap" }}>{singleBlog?.content}</p>
                        </div>
                    </div>
                    <div className='w-full h-auto flex flex-col p-5 lg:w-[34%] lg:p-2 xl:w-[30%] 2xl:w-[25%]'>
                        <h1 className='font-marcellus font-bold text-xl md:text-2xl lg:text-center'>Others Blogs</h1>
                        <div className='w-full h-auto flex gap-5 py-6 lg:py-8 overflow-x-scroll lg:flex-col px-4 xl:gap-7' style={{ scrollbarWidth: 'none' }}>
                            {
                                blogs.map((blog, index) => (
                                    blog?._id === singleBlog?._id ? null : (
                                        <div onClick={() => changeBlog(blog._id)} key={index} className='min-w-60 rounded-md cursor-pointer md:min-w-72 lg:min-w-40 duration-300 transition-all ease-out bg-gray-50 shadow-md md:hover:shadow-xl h-auto flex flex-col p-2'>
                                            <img src={blog.image} alt="blog image" className='w-full object-cover h-40' />
                                            <h1 className='mt-3 text-sm font-marcellus font-semibold md:mt-5 md:text-base'>{blog.title}</h1>
                                            <p className='mt-2 text-xs font-marcellus text-gray-700 md:text-sm md:mt-3'>
                                                {
                                                    blog.content.length > 150 ? blog.content.substring(0, 150) + '...' : blog.content
                                                }
                                            </p>
                                        </div>
                                    )
                                ))
                            }
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default BlogPage