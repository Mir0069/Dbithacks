import React, { useState, useEffect, useContext } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { FaBars, FaTimes, FaSignOutAlt } from "react-icons/fa";
import GoogleTranslate from "./GoogleTranslate";
import TextToSpeech from "./TextToSpeech";
import { SuccessContext } from "../context/Successcontext";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");

    const navigate = useNavigate();
    const { Success, setSuccess } = useContext(SuccessContext);

    useEffect(() => {
        const fetchUserData = async () => {
            const token = localStorage.getItem("token");

            if (!token) {
                setError("No token found, please log in again.");
                setLoading(false);
                return;
            }

            try {
                const response = await fetch("https://poetic-subtle-amoeba.ngrok-free.app/dashboard/", {
                    method: "GET",
                    headers: {
                        Authorization: `Bearer ${token}`,
                        "Content-Type": "application/json",
                        "ngrok-skip-browser-warning": "true",
                    },
                });

                if (response.ok) {
                    await response.json();
                    setSuccess(true);
                    setIsLoggedIn(true);
                } else {
                    setError("Failed to load user data");
                }
            } catch (error) {
                setError("Error fetching data. Please try again later.");
            } finally {
                setLoading(false);
            }
        };

        fetchUserData();
    }, []);

    useEffect(() => {
        if (isLoggedIn) {
            navigate("/dashboard"); // Redirect to dashboard on login
        }
    }, [isLoggedIn, navigate]);

    const handleLogout = () => {
        localStorage.removeItem("token");
        setIsLoggedIn(false);
        setSuccess(false);
        navigate("/login");
    };

    return (
        <nav key={isLoggedIn} className="bg-gray-900 shadow-md">
            <div className="flex items-center justify-between p-4">
                {/* Brand Name */}
                <div className="text-3xl font-extrabold text-white">Shramik</div>

                {/* Mobile Menu Toggle */}
                <button onClick={() => setIsOpen(!isOpen)} className="sm:hidden text-white focus:outline-none">
                    {isOpen ? <FaTimes size={28} /> : <FaBars size={28} />}
                </button>

                {/* Desktop Navigation */}
                <div className="hidden sm:flex space-x-4 items-center">
                    <NavLink to="/" className="text-gray-300 hover:text-blue-400 px-3 py-2 text-md font-medium">Home</NavLink>
                    <NavLink to="/about" className="text-gray-300 hover:text-blue-400 px-3 py-2 text-md font-medium">About</NavLink>

                    {isLoggedIn ? (
                        <>
                            <NavLink to="/dashboard" className="text-gray-300 hover:text-blue-400 px-3 py-2 text-md font-medium">Dashboard</NavLink>
                            <button onClick={handleLogout} className="text-gray-300 hover:text-red-400 px-3 py-2 text-md font-medium flex items-center">
                                <FaSignOutAlt className="mr-2" /> Logout
                            </button>
                        </>
                    ) : (
                        <>
                            <NavLink to="/signup" className="text-gray-300 hover:text-blue-400 px-3 py-2 text-md font-medium">Sign Up</NavLink>
                            <NavLink to="/login" className="text-gray-300 hover:text-blue-400 px-3 py-2 text-md font-medium">Log In</NavLink>
                        </>
                    )}

                    {/* Google Translate & Text to Speech (Visible on Desktop) */}
                    <GoogleTranslate />
                    <TextToSpeech />
                </div>
            </div>

            {/* Mobile Menu */}
            {isOpen && (
                <div className="sm:hidden bg-gray-800 text-white flex flex-col space-y-4 py-4 px-6">
                    <NavLink to="/" className="text-gray-300 hover:text-blue-400 py-2 text-md font-medium" onClick={() => setIsOpen(false)}>Home</NavLink>
                    <NavLink to="/about" className="text-gray-300 hover:text-blue-400 py-2 text-md font-medium" onClick={() => setIsOpen(false)}>About</NavLink>

                    {isLoggedIn ? (
                        <>
                            <NavLink to="/dashboard" className="text-gray-300 hover:text-blue-400 py-2 text-md font-medium" onClick={() => setIsOpen(false)}>Dashboard</NavLink>
                            <button onClick={() => { handleLogout(); setIsOpen(false); }} className="text-gray-300 hover:text-red-400 py-2 text-md font-medium flex items-center">
                                <FaSignOutAlt className="mr-2" /> Logout
                            </button>
                        </>
                    ) : (
                        <>
                            <NavLink to="/signup" className="text-gray-300 hover:text-blue-400 py-2 text-md font-medium" onClick={() => setIsOpen(false)}>Sign Up</NavLink>
                            <NavLink to="/login" className="text-gray-300 hover:text-blue-400 py-2 text-md font-medium" onClick={() => setIsOpen(false)}>Log In</NavLink>
                        </>
                    )}

                    {/* Google Translate & Text to Speech (Now in Mobile Menu) */}
                    <div className="flex flex-col items-center space-y-3 mt-4">
                        <GoogleTranslate />
                        <TextToSpeech />
                    </div>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
