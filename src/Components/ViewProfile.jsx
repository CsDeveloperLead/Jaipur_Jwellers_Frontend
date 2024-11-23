import React, { useEffect, useState } from 'react'
import Header from './Header'
import { FaUserCircle } from "react-icons/fa";
import { jwtDecode } from "jwt-decode";
import axios from 'axios';

const backend = import.meta.env.VITE_BACKEND_URL
function ViewProfile() {
    const [errors, setError] = useState('')
    const [orders, setOrders] = useState([])
    const [user, setUser] = useState({
        email: "",
        name: "",
        id: ""
    })


    useEffect(() => {
        // Retrieve the token from localStorage (or any storage where it's stored)
        const token = localStorage.getItem('authToken'); // Assuming token is stored in localStorage

        // Decode the token to extract the email
        if (token) {
            const decodedToken = jwtDecode(token);

            const { email, name, id } = decodedToken; // Extracting email from the decoded token
            setUser({
                email,
                name,
                id
            });
        }
    }, []); // Run only once when the component mounts

    useEffect(() => {
        if (user.id) { // Ensure user.id is set before fetching orders
            const fetchOrders = async () => {
                try {
                    const response = await axios.post(`${backend}/api/v1/orders/order-history`);
                    // Filter orders for the logged-in user based on the email extracted from the JWT token
                    const userOrders = response.data.message.filter(order => order.user === user.id);
                    setOrders(userOrders); // Save only the filtered orders
                } catch (err) {
                    console.error('Error fetching orders:', err);
                    setError('Failed to load orders');
                }
            };

            fetchOrders();
        }
    }, [user.id]);

    return (
        <>
            <Header />
            <div className='w-full h-auto flex flex-col py-10 gap-5'>
                <div className='w-full h-auto flex justify-center items-center'>
                    <div className='w-40 h-40 rounded-full border-[1px] border-[#1A3A37] flex justify-center items-center'>
                        <FaUserCircle size={140} className='text-[#1A3A37]' />
                    </div>
                </div>
                <div className='w-full h-auto flex flex-col'>
                    <h1 className='text-center text-[#1A3A37] font-marcellus text-2xl font-semibold'>Profile</h1>
                    <div className='w-full h-auto flex flex-wrap justify-center items-center gap-5 mt-8 md:gap-10 font-marcellus'>
                        <div className='flex gap-1 md:text-lg'><span className='font-semibold text-black'>Name :</span>{user?.name}</div>
                        <div className='flex gap-1 md:text-lg'><span className='font-semibold text-black'>Email :</span>{user?.email}</div>
                    </div>
                </div>
                <div className='w-full h-2 bg-gray-400 mt-14 mb-10'></div>
                <div className='w-full h-auto flex flex-col'>
                    <h1 className='text-center text-xl font-marcellus text-[#1A3A37] font-semibold md:text-3xl'>Orders History</h1>
                    <div className="w-full mt-1">
                        <div className="w-full px-5 py-10 bg-white">
                            {orders.length > 0 ? (
                                <table className="min-w-full table-auto border-collapse">
                                    <thead>
                                        <tr className="bg-gray-200">
                                            <th className="border px-4 py-2">Order ID</th>
                                            <th className="border px-4 py-2">Items</th>
                                            <th className="border px-4 py-2">Total Price</th>
                                            <th className="border px-4 py-2">Status</th>
                                            <th className="border px-4 py-2">Created At</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {orders?.map((order) => (
                                            <tr key={order._id} className="hover:bg-gray-100 text-center">
                                                <td className="border px-4 py-2">{order._id}</td>
                                                <td className="border px-4 py-2">
                                                    {order.items.map((item, index) => (
                                                        <div key={index}>
                                                            {item.name} (x{item.quantity}) - ₹{item.price}
                                                        </div>
                                                    ))}
                                                </td>
                                                <td className="border px-4 py-2">₹{order.amount}</td>
                                                <td className="border px-4 py-2">{order.status}</td>
                                                <td className="border px-4 py-2">
                                                    {new Date(order.createdAt).toLocaleString()}
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            ) : (
                                <p className='text-center'>No orders found for this user.</p>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ViewProfile