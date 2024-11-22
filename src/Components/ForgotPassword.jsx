import { useState } from "react";
import { toast } from "react-toastify"; // Assuming you're using react-toastify for notifications
import Header from "./Header";

const ForgotPassword = () => {
    const [phoneNumber, setPhoneNumber] = useState("");
    const [otp, setOtp] = useState("");
    const [newPassword, setNewPassword] = useState("");
    const [step, setStep] = useState(1);
    const [message, setMessage] = useState("");
    const [loading, setLoading] = useState(false);
    const [otpTimer, setOtpTimer] = useState(0);

    const backend = import.meta.env.VITE_BACKEND_URL;

    // Handle OTP sending
    const handleSendOtp = async (e) => {
        e.preventDefault();
        setLoading(true);
        try {
            const response = await fetch(`${backend}/api/v1/users/forgot-password/send-otp`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ phoneNumber }),
            });

            const result = await response.json();
            if (response.ok) {
                toast.success("OTP Sent Successfully");
                setOtpTimer(60); // Set the OTP timer to 60 seconds
                setStep(2); // Proceed to OTP verification step
            } else {
                toast.error(result.error || "Failed to send OTP.");
            }
        } catch (error) {
            toast.error("Error sending OTP.");
        }
        setLoading(false);
    };

    // Handle OTP verification
    const handleVerifyOtp = async (e) => {
        e.preventDefault();
        if (otp.length !== 6) {
            setMessage("Please enter a valid 6-digit OTP.");
            return;
        }
        setLoading(true);
        try {
            const response = await fetch(`${backend}/api/v1/users/forgot-password/verify-otp`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ phoneNumber, otp }), // Ensure these match with backend
            });

            const result = await response.json();
            if (response.ok) {
                setMessage(result.message);
                setStep(3); // Proceed to password reset step
            } else {
                setMessage(result.message || "Invalid OTP."); // Changed to result.message for consistency
            }
        } catch (error) {
            setMessage("Failed to verify OTP.");
        }
        setLoading(false);
    };


    // Handle password reset
    const handleResetPassword = async (e) => {
        e.preventDefault();
        if (newPassword.length < 8) {
            setMessage("Password should be at least 8 characters long.");
            return;
        }
        setLoading(true);
        try {
            const response = await fetch(`${backend}/api/v1/users/forgot-password/reset-password`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ phoneNumber, newPassword }), // Ensure this matches with the backend
            });



            const result = await response.json();
            console.log(result);
            if (response.ok) {
                setMessage(result.message);
                toast.success("Password reset successfully.");
                // Optionally redirect to login page
                window.location.href = "/login";
            } else {
                setMessage(result.message || "Failed to reset password."); // Changed to result.message for consistency
            }
        } catch (error) {
            setMessage("Failed to reset password.");
        }
        setLoading(false);
    };


    return (
        <>
            <Header />
            <div className="flex flex-col justify-center h-screen items-center bg-gray-100 font-marcellus">
                <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
                    {step === 1 && (
                        <form onSubmit={handleSendOtp} className="space-y-4">
                            <h2 className="text-2xl font-bold text-center mb-6">Forgot Password</h2>
                            <div>
                                <label htmlFor="phoneNumber" className="block text-gray-700">Phone Number:</label>
                                <input
                                    type="text"
                                    id="phoneNumber"
                                    value={phoneNumber}
                                    onChange={(e) => setPhoneNumber(e.target.value)}
                                    required
                                    className="w-full px-4 py-2 border rounded-md"
                                />
                            </div>
                            <button
                                type="submit"
                                disabled={loading}
                                className="w-full bg-[#1A3A37] text-white font-semibold py-2 px-4 rounded-md hover:bg-[#306c65] transition duration-300"
                            >
                                {loading ? "Sending OTP..." : "Send OTP"}
                            </button>
                        </form>
                    )}

                    {step === 2 && (
                        <form onSubmit={handleVerifyOtp} className="space-y-4">
                            <h2 className="text-2xl font-bold text-center mb-6">Verify OTP</h2>
                            <div>
                                <label htmlFor="otp" className="block text-gray-700">Enter OTP:</label>
                                <input
                                    type="text"
                                    id="otp"
                                    value={otp}
                                    onChange={(e) => setOtp(e.target.value)}
                                    required
                                    className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-[#347746] focus:border-transparent"
                                />
                            </div>
                            <button
                                type="submit"
                                disabled={loading}
                                className="w-full bg-[#6ca300] text-white font-semibold py-2 px-4 rounded-md hover:bg-[#347746] transition duration-300"
                            >
                                {loading ? "Verifying OTP..." : "Verify OTP"}
                            </button>
                        </form>
                    )}

                    {step === 3 && (
                        <form onSubmit={handleResetPassword} className="space-y-4">
                            <h2 className="text-2xl font-bold text-center mb-6">Reset Password</h2>
                            <div>
                                <label htmlFor="newPassword" className="block text-gray-700">New Password:</label>
                                <input
                                    type="password"
                                    id="newPassword"
                                    value={newPassword}
                                    onChange={(e) => setNewPassword(e.target.value)}
                                    required
                                    className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-[#347746] focus:border-transparent"
                                />
                            </div>
                            <button
                                type="submit"
                                disabled={loading}
                                className="w-full bg-[#6ca300] text-white font-semibold py-2 px-4 rounded-md hover:bg-[#347746] transition duration-300"
                            >
                                {loading ? "Resetting Password..." : "Reset Password"}
                            </button>
                        </form>
                    )}

                    {message && <p className="mt-4 text-center text-green-500">{message}</p>}
                </div>
            </div>
        </>
    );
};

export default ForgotPassword;