import { useEffect, useState } from "react";
import { X, Plus, Minus } from "lucide-react";
import axios from "axios";


const backend = import.meta.env.VITE_BACKEND_URL

const ProductForm = ({ product, closePopup, refreshProducts }) => {
    const [formData, setFormData] = useState({
        name: "",
        product_id: "",
        desc: "",
        category: "",
        countInStock: 0,
        quantityPrices: [{ quantity: "", price: 0 }],
        model: "",
        width: "",
        height: "",
        depth: "",
        weight: "",
        details: [{}],
    });

    const [mainImage, setMainImage] = useState(null);
    const [extraImages, setExtraImages] = useState([null, null, null]);
    const [error, setError] = useState("");

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleQuantityPriceChange = (index, field, value) => {
        const updatedQuantityPrices = [...formData.quantityPrices];
        updatedQuantityPrices[index][field] = value;
        setFormData({ ...formData, quantityPrices: updatedQuantityPrices });
    };

    const handleAddQuantityPrice = () => {
        setFormData({
            ...formData,
            quantityPrices: [...formData.quantityPrices, { quantity: "", price: 0 }],
        });
    };

    const handleRemoveQuantityPrice = (index) => {
        const updatedQuantityPrices = formData.quantityPrices.filter((_, i) => i !== index);
        setFormData({ ...formData, quantityPrices: updatedQuantityPrices });
    };

    const handleDetailsChange = (index, value) => {
        const updatedDetails = [...formData.details];
        updatedDetails[index] = value;
        setFormData({ ...formData, details: updatedDetails });
    };

    const handleAddDetail = () => {
        setFormData({
            ...formData,
            details: [...formData.details, ""],
        });
    };

    const handleRemoveDetail = (index) => {
        const updatedDetails = formData.details.filter((_, i) => i !== index);
        setFormData({ ...formData, details: updatedDetails });
    };

    const handleExtraImageChange = (index, file) => {
        const updatedImages = [...extraImages];
        updatedImages[index] = file;
        setExtraImages(updatedImages);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        const data = new FormData();
        data.append("name", formData.name);
        data.append("product_id", formData.product_id);
        data.append("desc", formData.desc);
        data.append("category", formData.category);
        data.append("countInStock", formData.countInStock);
        data.append("quantityPrices", JSON.stringify(formData.quantityPrices));
        data.append("details", JSON.stringify(formData.details));
        data.append("model", formData.model);
        data.append("width", formData.width);
        data.append("height", formData.height);
        data.append("depth", formData.depth);
        data.append("weight", formData.weight);

        if (mainImage) data.append("Image", mainImage);
        extraImages.forEach((image, index) => {
            if (image) data.append(`Image${index + 1}`, image);
        });

        try {
            const response = await axios.post(`${backend}/api/v1/products/create-product`, data)
            console.log(response);


            if (response.status === 201) {
                alert("Product created successfully")
                closePopup()
            }

        } catch (error) {
            console.error("Error saving product:", error);
            setError(error?.response?.data?.message ?? "Failed to save product");
        }
    };

    useEffect(() => {
        if (product) {
            setFormData({
                name: product.name,
                product_id: product.product_id,
                desc: product.desc,
                category: product.category,
                countInStock: product.countInStock,
                quantityPrices: product.quantityPrices?.length > 0 ? product.quantityPrices : [{ quantity: "", price: 0 }],
                details: product.details?.length > 0 ? product.details : [""],
                model: product.model,
                width: product.width,
                height: product.height,
                depth: product.depth,
                weight: product.weight,
            });
        }
    }, [product]);


    return (
        <div className="fixed inset-0 overflow-y-auto flex items-center justify-center bg-gray-800 bg-opacity-50 pt-20 font-marcellus">
            <div className="bg-white p-8 rounded-lg shadow-2xl w-full max-w-3xl max-h-[80vh] overflow-y-auto">
                <div className="flex justify-between items-center mb-6">
                    <h2 className="text-2xl font-bold text-gray-800">
                        {product ? "Edit Product" : "Create Product"}
                    </h2>
                    <button onClick={closePopup} className="text-gray-500 hover:text-gray-700">
                        <X size={24} />
                    </button>
                </div>
                {error && <p className="text-red-500 mb-4">{error}</p>}
                <form className="space-y-6" onSubmit={handleSubmit}>
                    {/* Name and Product ID */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">Name</label>
                            <input
                                type="text"
                                name="name"
                                value={formData.name}
                                onChange={handleInputChange}
                                className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                required
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">Product ID</label>
                            <input
                                type="text"
                                name="product_id"
                                value={formData.product_id}
                                onChange={handleInputChange}
                                className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                required
                            />
                        </div>
                    </div>
                    {/* Main Image */}
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Main Image</label>
                        <input
                            type="file"
                            onChange={(e) => setMainImage(e.target.files[0])}
                            className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        />
                    </div>
                    {/* Extra Images */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {extraImages.map((_, index) => (
                            <div key={index}>
                                <label className="block text-sm font-medium text-gray-700 mb-1">
                                    Extra Image {index + 1}
                                </label>
                                <input
                                    type="file"
                                    onChange={(e) => handleExtraImageChange(index, e.target.files[0])}
                                    className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                />
                            </div>
                        ))}
                    </div>
                    {/* Description */}
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Description</label>
                        <textarea
                            name="desc"
                            value={formData.desc}
                            onChange={handleInputChange}
                            className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
                            rows="3"
                            required
                        />
                    </div>
                    {/* Dimensions */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">Width</label>
                            <input
                                type="text"
                                name="width"
                                value={formData.width}
                                onChange={handleInputChange}
                                className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                required
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">Height</label>
                            <input
                                type="text"
                                name="height"
                                value={formData.height}
                                onChange={handleInputChange}
                                className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                required
                            />
                        </div>
                    </div>
                    {/* Depth and Weight */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">Depth</label>
                            <input
                                type="text"
                                name="depth"
                                value={formData.depth}
                                onChange={handleInputChange}
                                className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                required
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">Weight</label>
                            <input
                                type="text"
                                name="weight"
                                value={formData.weight}
                                onChange={handleInputChange}
                                className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                required
                            />
                        </div>
                    </div>
                    {/* Category */}
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Category</label>
                        <input
                            type="text"
                            name="category"
                            value={formData.category}
                            onChange={handleInputChange}
                            className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                            required
                        />
                    </div>
                    {/* Model */}
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Model</label>
                        <input
                            type="text"
                            name="model"
                            value={formData.model}
                            onChange={handleInputChange}
                            className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                            required
                        />
                    </div>
                    {/* Quantity and Prices */}
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Quantity and Prices</label>
                        {formData.quantityPrices.map((qp, index) => (
                            <div key={index} className="flex items-center mb-2 space-x-2">
                                <input
                                    type="text"
                                    value={qp.quantity}
                                    placeholder="Quantity"
                                    onChange={(e) =>
                                        handleQuantityPriceChange(index, "quantity", e.target.value)
                                    }
                                    className="flex-1 w-[48%] p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                    required
                                />
                                <input
                                    type="number"
                                    value={qp.price}
                                    placeholder="Price"
                                    onChange={(e) =>
                                        handleQuantityPriceChange(index, "price", e.target.value)
                                    }
                                    className="flex-1 w-[48%] p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                    required
                                />
                                <button
                                    type="button"
                                    onClick={() => handleRemoveQuantityPrice(index)}
                                    className="text-red-500 hover:text-red-700"
                                >
                                    <Minus size={20} />
                                </button>
                            </div>
                        ))}
                        <button
                            type="button"
                            onClick={handleAddQuantityPrice}
                            className="mt-2 flex items-center text-green-500 hover:text-green-700"
                        >
                            <Plus size={20} className="mr-1" /> Add Quantity/Price
                        </button>
                    </div>
                    {/* Details */}
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Details</label>
                        {formData.details.map((detail, index) => (
                            <div key={index} className="flex items-center mb-2 space-x-2">
                                <input
                                    type="text"
                                    value={detail}
                                    placeholder={`Detail ${index + 1}`}
                                    onChange={(e) => handleDetailsChange(index, e.target.value)}
                                    className="flex-1 p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                    required
                                />
                                <button
                                    type="button"
                                    onClick={() => handleRemoveDetail(index)}
                                    className="text-red-500 hover:text-red-700"
                                >
                                    <Minus size={20} />
                                </button>
                            </div>
                        ))}
                        <button
                            type="button"
                            onClick={handleAddDetail}
                            className="mt-2 flex items-center text-green-500 hover:text-green-700"
                        >
                            <Plus size={20} className="mr-1" /> Add Detail
                        </button>
                    </div>
                    {/* Count in Stock */}
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Count in Stock</label>
                        <input
                            type="number"
                            name="countInStock"
                            value={formData.countInStock}
                            onChange={handleInputChange}
                            className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                            required
                        />
                    </div>
                    {/* Submit and Cancel Buttons */}
                    <div className="flex justify-end space-x-4 mt-8">
                        <button
                            type="button"
                            onClick={closePopup}
                            className="px-4 py-2 bg-gray-300 text-gray-700 rounded-md hover:bg-gray-400 transition duration-300"
                        >
                            Cancel
                        </button>
                        <button
                            type="submit"
                            className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition duration-300"
                        >
                            {product ? "Save Changes" : "Create Product"}
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default ProductForm;
