import React, { useEffect, useState } from 'react'
import { BsBox } from "react-icons/bs";
import { FiPlusCircle } from "react-icons/fi";
import { MdOutlineShoppingCart } from "react-icons/md";
import ProductForm from '../ProductForm'
import axios from 'axios';
import { Loader2 } from "lucide-react";
import Header from '../Header';

const backend = import.meta.env.VITE_BACKEND_URL

function Dashboard() {
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [currentProduct, setCurrentProduct] = useState(null)
  const [ordersLength, setOrdersLength] = useState(0)
  const [loading, setLoading] = useState(false)
  const [productVisible, setProductVisible] = useState(false)
  const [products, setProducts] = useState([])

  const openPopup = (product = null) => {
    setCurrentProduct(product);
    setIsPopupOpen(true);
  }

  const closePopup = () => {
    setIsPopupOpen(false);
    setCurrentProduct(null);
  }

  async function fetchOrderLength() {
    try {
      const response = await axios.post(`${backend}/api/v1/orders/order-history`)
      if (response.status === 200) {
        setOrdersLength(response.data.message.length)
      }

    } catch (error) {
      console.log("Error while fetching order length", error);
    }
  }

  async function fetchProducts() {
    try {
      setProductVisible(true)
      setLoading(true)
      const response = await axios.get(`${backend}/api/v1/products/get-all-products`)
      if (response.status === 200) {
        setProducts(response.data)
      }
      setLoading(false)
    } catch (error) {
      console.log("Error while fetching products", error);
      setLoading(false)
    }
  }

  function handleProductVisible() {
    if (!productVisible) {
      fetchProducts()
    }
    setProductVisible(!productVisible)
  }

  const deleteProduct = async (product) => {
    if (window.confirm("Are you sure you want to delete this product?")) {
      try {
        await axios.delete(`${backend}/api/v1/products/delete-product/${product._id}`);
        fetchProducts();
      } catch (error) {
        console.error("Error deleting product:", error);
      }
    }
  };

  useEffect(() => {
    fetchOrderLength()
  }, [])

  return (
    <>
      <Header />
      <div className='w-full h-auto flex flex-col'>
        <h1 className='text-center text-[#1A3A37] font-semibold text-2xl font-marcellus my-4 lg:text-4xl'>DashBoard</h1>
        <div className='w-full h-auto flex flex-col px-5 gap-4 md:flex-row lg:px-10 xl:px-20 md:mt-10'>
          <div className='w-full h-[150px] flex flex-col justify-between p-5 border-[1px] rounded-md shadow-custom gap-6 lg:px-8 lg:h-[180px] md:hover:scale-[1.02] duration-400 ease-in-out transition-all cursor-pointer'>
            <div className='w-full h-auto flex justify-between items-center font-marcellus'>
              <div className='w-auto h-auto flex gap-3'>
                <BsBox size={25} />
                <span className='text-lg font-semibold lg:text-xl'>Products</span>
              </div>
              <span onClick={() => openPopup()} className='w-auto p-2 flex items-center gap-2 bg-[#1A3A37] text-sm rounded-md cursor-pointer active:bg-[#152e2b] md:hover:bg-[#152e2b] text-white lg:px-6 lg:py-2.5 lg:text-lg'><FiPlusCircle size={20} />Add Products</span>
            </div>
            <div className='w-full h-auto flex items-center'>
              <span onClick={handleProductVisible} className='px-5 py-2 bg-blue-500 text-white font-marcellus rounded-3xl lg:px-7 lg:text-lg cursor-pointer md:hover:bg-blue-700 active:bg-blue-700'>{productVisible ? 'Hide Products' : 'Show Products'} </span>
            </div>
          </div>
          <div className='w-full h-[150px] flex flex-col p-5 border-[1px] rounded-md shadow-custom gap-6 lg:px-8 lg:h-[180px] md:hover:scale-[1.02] duration-400 ease-in-out transition-all cursor-pointer'>
            <div className='w-auto h-auto flex gap-3 font-marcellus'>
              <MdOutlineShoppingCart size={25} />
              <span className='text-lg font-semibold'>Recent Orders</span>
            </div>
            <div className='w-full h-auto flex items-center font-marcellus lg:mt-5'>
              <span className='lg:text-lg'>Total Orders : <span className='font-semibold text-[#1A3A37]'>{ordersLength}</span></span>
            </div>
          </div>
        </div>
        {loading && (
          <div className="flex justify-center items-center h-64">
            <Loader2 className="animate-spin text-blue-500" size={48} />
          </div>
        )}
        {productVisible && !loading && (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mb-8 p-5 font-marcellus">
            {products.map((item) => (
              <div
                key={item._id}
                className="bg-white border rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition duration-300"
              >
                <div className="relative w-full pb-[100%]">
                  <img
                    src={item.Image}
                    alt='Main Image'
                    className="absolute inset-0 w-full h-full object-cover bg-gray-200"
                  />
                </div>
                <div className="p-4">
                  <h3 className="text-lg font-bold mb-2 text-gray-800">
                    {item.name}
                  </h3>
                  <p className="text-sm text-gray-600 mb-2">
                    {item.quantityPrices[0].quantity}: ₹
                    {item.quantityPrices[0].price}
                  </p>
                  <p className="text-sm text-gray-600">
                    Stock: {item.countInStock}
                  </p>
                  <div className="flex justify-between mt-4 gap-2">
                    <button
                      onClick={() => openPopup(item)}
                      className="bg-[#1A3A37] hover:bg-[#183532] text-white py-2 px-3 rounded-lg w-full transition duration-300 shadow-md hover:shadow-lg"
                    >
                      Edit
                    </button>
                    <button
                      onClick={() => deleteProduct(item)}
                      className="bg-red-500 hover:bg-red-600 text-white py-2 px-3 rounded-lg w-full transition duration-300 shadow-md hover:shadow-lg"
                    >
                      Delete
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
      {isPopupOpen && (
        <ProductForm
          product={currentProduct}
          closePopup={closePopup}
          refreshProducts={fetchProducts}
        />
      )}

    </>
  )
}

export default Dashboard