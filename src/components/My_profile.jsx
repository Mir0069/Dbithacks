import React, { useState, useEffect } from "react";
import { FaUserCircle, FaBriefcase, FaEnvelope, FaPhone, FaTools, FaMapMarkerAlt, FaCalendarAlt } from "react-icons/fa";

const My_profile = () => {
    const [labour, setLabour] = useState({});
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");

    useEffect(() => {
        const fetchUserData = async () => {
            const token = localStorage.getItem("token");
            
            if (!token) {
                console.error("No token found");
                setError("No token found, please log in again.");
                setLoading(false);
                return;
            }

            try {
                const response = await fetch("https://poetic-subtle-amoeba.ngrok-free.app/profile/", {
                    method: "GET",
                    headers: {
                        Authorization: `Bearer ${token}`,
                        "Content-Type": "application/json",
                        "ngrok-skip-browser-warning": "true",
                    },
                });

                if (response.ok) {
                    const data = await response.json();
                    setLabour(data); // Store entire response object
                } else {
                    console.error("Failed to fetch data");
                    setError("Failed to load user data");
                }
            } catch (error) {
                console.error("Error fetching data:", error);
                setError("Error fetching data. Please try again later.");
            } finally {
                setLoading(false);
            }
        };

        fetchUserData();
    }, []);

    return (
        <div className="p-6 bg-gray-100 min-h-screen">
            {loading ? (
                <p className="text-center text-lg font-semibold">Loading...</p>
            ) : error ? (
                <p className="text-center text-red-500">{error}</p>
            ) : (
                <>
                    {/* Profile Card */}
                    <div className="bg-white p-6 rounded-lg shadow-md text-center">
                        <div className="flex flex-col items-center">
                            <FaUserCircle className="text-6xl text-gray-500" />
                            <h2 className="text-2xl font-bold mt-4">
                                {labour.first_name || "First"} {labour.last_name || "Last"}
                            </h2>
                        </div>

                        {/* Contact Info */}
                        <div className="mt-6 text-gray-700">
                            <div className="flex items-center justify-center space-x-3">
                                <FaEnvelope className="text-blue-500" />
                                <p>{labour.email || "email@example.com"}</p>
                            </div>
                            <div className="flex items-center justify-center space-x-3 mt-2">
                                <FaPhone className="text-green-500" />
                                <p>{labour.phone_number || "123-456-7890"}</p>
                            </div>
                            <div className="flex items-center justify-center space-x-3 mt-2">
                                <FaCalendarAlt className="text-red-500" />
                                <p>{labour.date_of_birth || "Not Provided"}</p>
                            </div>
                        </div>
                    </div>

                    {/* Address Section */}
                    <div className="mt-6 bg-white p-6 rounded-lg shadow-md">
                        <h3 className="text-2xl font-bold mb-4 flex items-center space-x-2">
                            <FaMapMarkerAlt className="text-blue-500" />
                            <span>Address</span>
                        </h3>
                        <p className="text-gray-700"><strong>Street:</strong> {labour.address || "Not provided"}</p>
                        <p className="text-gray-700"><strong>City:</strong> {labour.city || "Not provided"}</p>
                        <p className="text-gray-700"><strong>Pincode:</strong> {labour.pincode || "Not provided"}</p>
                    </div>

                    {/* Skills & Experience */}
                    <div className="mt-6 bg-white p-6 rounded-lg shadow-md">
                        <h3 className="text-2xl font-bold mb-4 flex items-center space-x-2">
                            <FaTools className="text-blue-500" />
                            <span>Skills: {labour.skills}</span>
                        </h3>
                        
                    </div>
                </>
            )}
        </div>
    );
};

export default My_profile;
