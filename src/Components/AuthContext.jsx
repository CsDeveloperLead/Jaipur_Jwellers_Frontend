import { createContext, useState, useEffect } from 'react';

// Create AuthContext
const AuthContext = createContext({ token: null });

export const AuthProvider = ({ children }) => {
    const [isAuthenticated, setIsAuthenticated] = useState(false);

    // Check for token in localStorage on component mount
    useEffect(() => {
        const token = localStorage.getItem('authToken');
        if (token) {
            setIsAuthenticated(true);  // Set to true if token exists
        }
    }, []);  // Run only once on mount

    // Function to log the user in and store the token
    const login = (token) => {
        localStorage.setItem('authToken', token);
        setIsAuthenticated(true);
    };

    // Function to log the user out and remove the token
    const logout = () => {
        localStorage.removeItem('authToken');
        setIsAuthenticated(false);
    };

    return (
        <AuthContext.Provider value={{ isAuthenticated, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthContext;