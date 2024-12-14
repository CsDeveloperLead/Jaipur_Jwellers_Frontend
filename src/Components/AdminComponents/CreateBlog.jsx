import React, { useState } from "react";
import axios from "axios";
import Header from "../Header";

const backend = import.meta.env.VITE_BACKEND_URL;

function CreateBlog() {
    const [formData, setFormData] = useState({
        blogTitle: "",
        blogContent: "",
    });
    const [image, setImage] = useState(null);
    const [preview, setPreview] = useState("");

    // Handle form field changes
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    // Handle image upload
    const handleImageChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                setPreview(reader.result);
            };
            reader.readAsDataURL(file);
            setImage(file); // Save file for FormData
        }
    };

    // Handle form submission
    const handleSubmit = async (e) => {
        e.preventDefault();

        // Validate form fields
        const { blogTitle, blogContent } = formData;
        if (!blogTitle || !blogContent || !image) {
            alert("Please fill all fields and upload an image!");
            return;
        }

        // Create a FormData object
        const formPayload = new FormData();
        formPayload.append("blogTitle", blogTitle);
        formPayload.append("blogContent", blogContent);
        formPayload.append("image", image);

        try {
            // Send data to backend
            const response = await axios.post(`${backend}/api/v1/admin/create-blog`, formPayload, {
                headers: {
                    "Content-Type": "multipart/form-data",
                },
            });
            alert("Blog Created successfully!");
            setPreview("");
            setImage(null);
            setFormData({
                blogTitle: "",
                blogContent: "",
            });
        } catch (error) {
            console.error("Error submitting blog:", error);
            alert("Failed to submit the blog. Please try again.");
        }
    };

    return (
        <>
            <Header />
            <div className="w-full h-auto flex flex-col pt-20 ">
                <h1 className="w-full h-auto text-center font-dmSans text-3xl font-marcellus font-semibold md:text-4xl xl:text-5xl">
                    Create <span className="text-[#1A3A37]">Blog</span>
                </h1>
                <form
                    onSubmit={handleSubmit}
                    className="w-full h-auto flex flex-col items-center my-10 gap-6 font-dmSans"
                >
                    {/* Image Upload Section */}
                    <div className="w-full max-w-2xl h-72 bg-gray-300 rounded-lg border-2 border-dashed border-gray-400 flex justify-center items-center relative group">
                        {preview ? (
                            <img
                                src={preview}
                                alt="Preview"
                                className="w-full h-full object-cover rounded-lg"
                            />
                        ) : (
                            <div className="w-20 h-20 bg-gray-500 text-white text-4xl rounded-full flex justify-center items-center">
                                <span>+</span>
                            </div>
                        )}
                        {/* File input */}
                        <input
                            type="file"
                            accept="image/*"
                            onChange={handleImageChange}
                            className="absolute inset-0 opacity-0 cursor-pointer"
                        />
                        <span className="absolute bottom-4 text-white text-sm">
                            Drag and drop an image here, or click to select one.
                        </span>
                    </div>

                    <div className="w-full max-w-3xl px-4 font-marcellus">
                        {/* Blog Title */}
                        <div className="mb-4">
                            <label className="block text-gray-700 text-lg font-semibold mb-2">
                                Blog Title
                            </label>
                            <input
                                type="text"
                                name="blogTitle"
                                value={formData.blogTitle}
                                onChange={handleInputChange}
                                placeholder="Enter blog title"
                                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                            />
                        </div>

                        {/* Blog Content */}
                        <div>
                            <label className="block text-gray-700 text-lg font-semibold mb-2">
                                Blog Content
                            </label>
                            <textarea
                                name="blogContent"
                                value={formData.blogContent}
                                onChange={handleInputChange}
                                placeholder="Enter blog content"
                                rows="6"
                                className="w-full p-3 border resize-none border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                            />
                        </div>
                    </div>

                    {/* Submit Button */}
                    <button
                        type="submit"
                        className="bg-[#1A3A37] font-marcellus hover:bg-[#275752] text-white font-semibold py-3 px-8 rounded-lg mt-4"
                    >
                        Submit Blog
                    </button>
                </form>
            </div>
        </>
    );
}

export default CreateBlog;
