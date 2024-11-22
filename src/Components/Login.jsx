import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
// import { GoogleLogin } from "@react-oauth/google";
import axios from "axios";
import { jwtDecode } from "jwt-decode";
import Header from "./Header";
import AuthContext from "./AuthContext";

const backend = import.meta.env.VITE_BACKEND_URL;

const Login = () => {
    const { login } = useContext(AuthContext);
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        identifier: "", // Can be either email or phone
        password: "",
    });
    const [message, setMessage] = useState("");

    // const responseMessage = async (response) => {
    //     console.log("Google response:", response);

    //     try {
    //         const { credential } = response; // Get the credential object
    //         const idToken = credential; // The ID token (JWT)

    //         // Decode the token to get user info
    //         const credentials = jwtDecode(idToken);
    //         console.log("Decoded credentials:", credentials);

    //         // Optionally, send the ID token to your backend for verification
    //         const res = await axios.post(`${backend}/api/v1/users/google-login`, {
    //             token: idToken,
    //         });

    //         if (res.status === 200) {
    //             const { token } = res.data; // Get JWT from your backend response
    //             localStorage.setItem("authToken", token); // Store token
    //             login(token); // Call the login function to set the user data
    //             navigate("/"); // Navigate to home page after successful login
    //         }
    //     } catch (error) {
    //         console.error("Error during Google login:", error);
    //     }
    // };

    // const errorMessage = (error) => {
    //     console.error("Google login error:", error);
    // };

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.id]: e.target.value,
        });
    };

    const isValidEmail = (identifier) => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(identifier);
    };

    const isValidPhone = (identifier) => {
        const phoneRegex = /^\d{10}$/; // Assuming a valid phone number is 10 digits long
        return phoneRegex.test(identifier);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const { identifier, password } = formData;

        if (!isValidEmail(identifier) && !isValidPhone(identifier)) {
            setMessage("Please enter a valid email or phone number.");
            return;
        }

        try {
            const response = await fetch(`${backend}/api/v1/users/login`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ identifier, password }), // Identifier can be either email or phone
            });

            const result = await response.json();

            if (response.ok) {
                setMessage(result.message);
                login(result.token);
                navigate("/");
            } else {
                setMessage(result.error);
            }
        } catch (error) {
            setMessage("An error occurred. Please try again.");
        }
    };

    return (
        <>
            <Header />
            <div className="flex flex-col justify-center h-screen items-center bg-gray-100 font-marcellus">
                <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
                    <h1 className="text-2xl font-bold mb-6 text-center text-gray-800">
                        Login
                    </h1>
                    {/* <div className="flex flex-col items-center justify-center">
                        <GoogleLogin onSuccess={responseMessage} onError={errorMessage} />
                        <br />
                        OR
                        <br />
                    </div> */}
                    <form onSubmit={handleSubmit} className="space-y-4">
                        <div>
                            <label htmlFor="identifier" className="block text-gray-700">
                                Email or Phone:
                            </label>
                            <input
                                type="text"
                                id="identifier"
                                value={formData.identifier}
                                onChange={handleChange}
                                required
                                className="w-full px-4 py-2 border rounded-md focus:border-transparent"
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
                                className="w-full px-4 py-2 border rounded-md focus:border-transparent"
                            />
                        </div>

                        <button
                            type="submit"
                            className="w-full bg-[#1A3A37] text-white font-semibold py-2 px-4 rounded-md hover:bg-[#306c65] transition duration-300"
                        >
                            Login
                        </button>

                        <p className="text-center mt-4">
                            Don't have an account?{" "}
                            <a href="/signup-page" className="text-[#1A3A37]">
                                Signup
                            </a>
                        </p>
                        <p className="text-center mt-4">
                            Forgot your password?{" "}
                            <a href="/forgot-password" className="text-[#1A3A37]">
                                Reset
                            </a>
                        </p>
                    </form>

                    {message && <p className="mt-4 text-center text-red-500">{message}</p>}
                </div>
            </div>
        </>
    );
};

export default Login;