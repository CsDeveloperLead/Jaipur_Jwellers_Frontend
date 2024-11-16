import React, { useEffect, useState } from 'react'
import Header from '../Header'
import axios from 'axios'
import { useContext } from 'react'
import AuthContext from '../AuthContext'
import { jwtDecode } from "jwt-decode";


const backend = import.meta.env.VITE_BACKEND_URL
function AllOrders() {
    const [filter, setFilter] = useState('all')
    const [orders, setOrders] = useState([])
    const [currentPage, setCurrentPage] = useState(1)
    const itemsPerPage = 20;
    const { isAuthenticated } = useContext(AuthContext)
    const [userEmail, setUserEmail] = useState("");

    const sortedOrders = [...orders]
        .filter((order) => (filter === "all" ? true : order.status === filter))
        .sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));

    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentOrders = sortedOrders.slice(indexOfFirstItem, indexOfLastItem);

    const handlePageChange = (pageNumber) => {
        setCurrentPage(pageNumber);
    };

    const totalPages = Math.ceil(sortedOrders.length / itemsPerPage);

    const formatDate = (dateString) => {
        const date = new Date(dateString);
        return date.toLocaleString("en-US", {
            hour: "numeric",
            minute: "numeric",
            hour12: true,
            day: "numeric",
            month: "short",
            year: "numeric",
        });
    };


    async function fetchOrders() {
        try {
            const response = await axios.post(`${backend}/api/v1/orders/order-history`)
            if (response.status === 200) {
                setOrders(response.data.message)
            }
        } catch (error) {
            console.log("Error while fetching orders", error)
        }
    }

    useEffect(() => {
        const token = localStorage.getItem("authToken");
        if (token) {
            const decodedToken = jwtDecode(token);
            setUserEmail(decodedToken.email);
        }
    }, [isAuthenticated]);

    useEffect(() => {
        if (isAuthenticated) fetchOrders();
    }, [isAuthenticated]);

    return (
        <>
            <Header />
            <div className='w-full h-auto flex flex-col py-10'>
                <div className='w-full h-auto flex justify-center items-center gap-3 md:gap-7'>
                    <button onClick={() => setFilter('all')} className={`${filter === 'all' ? 'bg-[#1A3A37] text-white' : 'text-[#1A3A37]'} w-auto h-auto flex justify-center items-center px-8 py-2 font-semibold font-marcellus rounded-full cursor-pointer border-[#1A3A37] border-[1px]`} >
                        All
                    </button>
                    <button onClick={() => setFilter('paid')} className={`${filter === 'paid' ? 'bg-[#1A3A37] text-white' : 'text-[#1A3A37]'} w-auto h-auto flex justify-center items-center px-8 py-2 font-semibold font-marcellus rounded-full cursor-pointer border-[#1A3A37] border-[1px]`}>
                        Paid
                    </button>
                    <button onClick={() => setFilter('unpaid')} className={`${filter === 'unpaid' ? 'bg-[#1A3A37] text-white' : 'text-[#1A3A37]'} w-auto h-auto flex justify-center items-center px-8 py-2 font-semibold font-marcellus rounded-full cursor-pointer border-[#1A3A37] border-[1px]`}>
                        Unpaid
                    </button>
                </div>
                <h1 className='text-center text-[#1A3A37] font-marcellus text-xl font-semibold my-7 md:text-3xl md:my-10 xl:text-4xl'>Orders History</h1>
                {
                    userEmail === 'jwellery@admin.com'
                    ?<>
                            {orders.length > 0 ? (
                                <table className="min-w-full overflow-x-scroll">
                                    <thead className="bg-gray-50">
                                        <tr>
                                            <th className="py-3 px-4 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">
                                                Order ID
                                            </th>
                                            <th className="py-3 px-4 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">
                                                Customer
                                            </th>
                                            <th className="py-3 px-4 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">
                                                Phone
                                            </th>
                                            <th className="py-3 px-4 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">
                                                Address
                                            </th>
                                            <th className="py-3 px-4 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">
                                                Items
                                            </th>
                                            <th className="py-3 px-4 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">
                                                Total Amount
                                            </th>
                                            <th className="py-3 px-4 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">
                                                Status
                                            </th>
                                            <th className="py-3 px-4 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">
                                                Created At
                                            </th>
                                        </tr>
                                    </thead>
                                    <tbody className="bg-white divide-y divide-gray-200">
                                        {currentOrders.map((order) => (
                                            <tr key={order._id} className="hover:bg-gray-50">
                                                <td className="py-4 px-4 whitespace-nowrap text-sm text-center">
                                                    {/* {order.MUID.slice(-5)} */}
                                                </td>
                                                <td className="py-4 px-4 whitespace-nowrap text-sm text-center">
                                                    {order.shippingInfo.firstName}
                                                </td>
                                                <td className="py-4 px-4 whitespace-nowrap text-sm text-center">
                                                    {order.shippingInfo.contact}
                                                </td>
                                                <td className="py-4 px-4 whitespace-nowrap text-sm text-center">
                                                    {order.shippingInfo.state +
                                                        ", " +
                                                        order.shippingInfo.city +
                                                        ", " +
                                                        order.shippingInfo.zipCode}
                                                </td>
                                                <td className="py-4 px-4 whitespace-nowrap text-sm text-center">
                                                    {order.items.map((item, index) => (
                                                        <div key={index}>
                                                            {item.name} (x{item.quantity}) - ₹{item.price}
                                                        </div>
                                                    ))}
                                                </td>
                                                <td className="py-4 px-4 whitespace-nowrap text-sm text-center">
                                                    ₹{order.amount}
                                                </td>
                                                <td className="py-4 px-4 whitespace-nowrap text-sm text-center">
                                                    <span
                                                        className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${order.status === "paid"
                                                            ? "bg-green-100 text-green-800"
                                                            : "bg-yellow-100 text-yellow-800"
                                                            }`}
                                                    >
                                                        {order.status}
                                                    </span>
                                                </td>
                                                <td className="py-4 px-4 whitespace-nowrap text-sm text-center">
                                                    {formatDate(order.createdAt)}
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            ) : (
                                <p className="w-full flex justify-center text-2xl font-bold my-10 text-[#1A3A37] font-marcellus">
                                    Loading order history...
                                </p>
                            )}
                            {
                                sortedOrders.length > 20
                                    ? <div className="flex justify-center mt-4">
                                        {Array.from({ length: totalPages }, (_, i) => (
                                            <button
                                                key={i}
                                                onClick={() => handlePageChange(i + 1)}
                                                className={`px-3 py-1 mx-1 rounded ${currentPage === i + 1 ? "bg-blue-500 text-white" : "bg-gray-300"
                                                    }`}
                                            >
                                                {i + 1}
                                            </button>
                                        ))}
                                    </div>
                                    : null
                            }
                        </>
                    : <p className='w-full h-auto items-center font-marcellus'>You are not authorized to view this page.</p>
                }
            </div>
        </>
    )
}

export default AllOrders