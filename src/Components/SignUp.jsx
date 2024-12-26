import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Header from "./Header";

const Signup = () => {
    const navigate = useNavigate();

    const backend = import.meta.env.VITE_BACKEND_URL;

    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        password: "",
    });
    const [message, setMessage] = useState("");
    const [loading, setLoading] = useState(false); // Loading state

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.id]: e.target.value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const { name, email, phone, password } = formData;

        // Basic phone validation
        const phoneRegex = /^[0-9]{10}$/; // Adjust this regex based on your needs
        if (!phoneRegex.test(phone)) {
            setMessage("Invalid phone number. Please enter a valid 10-digit number.");
            return;
        }

        setLoading(true); // Start loading

        try {
            const response = await fetch(`${backend}/api/v1/users/signup`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ name, email, phone, password }),
            });

            const result = await response.json();

            if (response.ok) {
                setMessage(result.message);
                setFormData({ name: "", email: "", phone: "", password: "" }); // Reset form after successful submission
                setTimeout(() => {
                    navigate("/login"); // Redirect after a short delay
                }, 2000); // 2-second delay before redirect
            } else {
                setMessage(result.error || "An error occurred. Please try again.");
            }
        } catch (error) {
            setMessage("Network error. Please check your connection and try again.");
            console.error(error);
        } finally {
            setLoading(false); // End loading
        }
    };

    return (
        <>
        <Header />
            <div className="flex flex-col justify-center h-screen items-center bg-gray-100 font-marcellus">
                <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
                    <h1 className="text-2xl font-bold mb-6 text-center text-gray-800">
                        Signup
                    </h1>
                    <form onSubmit={handleSubmit} className="space-y-4">
                        <div>
                            <label htmlFor="name" className="block text-gray-700">
                                Name:
                            </label>
                            <input
                                type="text"
                                id="name"
                                value={formData.name}
                                onChange={handleChange}
                                required
                                className="w-full px-4 py-2 border rounded-md"
                            />
                        </div>

                        <div>
                            <label htmlFor="email" className="block text-gray-700">
                                Email:
                            </label>
                            <input
                                type="email"
                                id="email"
                                value={formData.email}
                                onChange={handleChange}
                                required
                                className="w-full px-4 py-2 border rounded-md"
                            />
                        </div>

                        <div>
                            <label htmlFor="phone" className="block text-gray-700">
                                Phone:
                            </label>
                            <input
                                type="text"
                                id="phone"
                                value={formData.phone}
                                onChange={handleChange}
                                required
                                className="w-full px-4 py-2 border rounded-md"
                            />
                        </div>

                        <div>
                            <label htmlFor="password" className="block text-gray-700">
                                Password:
                            </label>
                            <input
                                type="password"
                                id="password"
                                value={formData.password}
                                onChange={handleChange}
                                required
                                className="w-full px-4 py-2 border rounded-md"
                            />
                        </div>

                        <button
                            type="submit"
                            className="w-full bg-[#1A3A37] text-white font-semibold py-2 px-4 rounded-md hover:bg-[#306c65] transition duration-300"
                            disabled={loading} // Disable button while loading
                        >
                            {loading ? "Signing up..." : "Signup"} {/* Show loading text */}
                        </button>

                        <h1 className="text-center mt-4">
                            Already have an account?{" "}
                            <a href="/login" className="text-[#1A3A37]">
                                Login
                            </a>
                        </h1>
                    </form>

                    {message && <p className="mt-4 text-center text-red-500">{message}</p>}
                </div>
            </div>
        </>
    );
};

export default Signup;