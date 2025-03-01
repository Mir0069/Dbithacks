import React, { useState, useEffect } from "react";
import { FaUserCircle, FaBriefcase, FaEnvelope, FaPhone, FaTools } from "react-icons/fa";

const My_profile = () => {
    const [labour, setLabour] = useState({});

    useEffect(() => {
        fetch("/labourProfile.json") // Fetch profile data from public folder
            .then((res) => res.json())
            .then((data) => setLabour(data))
            .catch((err) => console.error("Error fetching labour profile:", err));
    }, []);

    return (
        <div className="p-6 bg-gray-100 min-h-screen">
            {/* Profile Card */}
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
                <div className="flex flex-col items-center">
                    <FaUserCircle className="text-6xl text-gray-500" />
                    <h2 className="text-2xl font-bold mt-4">{labour.name || "Labour Name"}</h2>
                    <p className="text-gray-600">{labour.profession || "Profession"}</p>
                </div>

                {/* Contact Info */}
                <div className="mt-6 text-gray-700">
                    <div className="flex items-center justify-center space-x-3">
                        <FaEnvelope className="text-blue-500" />
                        <p>{labour.email || "email@example.com"}</p>
                    </div>
                    <div className="flex items-center justify-center space-x-3 mt-2">
                        <FaPhone className="text-green-500" />
                        <p>{labour.phone || "123-456-7890"}</p>
                    </div>
                </div>
            </div>

            {/* Skills & Experience */}
            <div className="mt-6 bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-2xl font-bold mb-4 flex items-center space-x-2">
                    <FaTools className="text-blue-500" />
                    <span>Skills & Experience</span>
                </h3>
                <ul className="list-disc list-inside text-gray-700">
                    {labour.skills ? (
                        labour.skills.map((skill, index) => <li key={index}>{skill}</li>)
                    ) : (
                        <li>No skills added</li>
                    )}
                </ul>

                <h3 className="text-xl font-semibold mt-4">Work Experience</h3>
                <p className="text-gray-700">{labour.experience || "No experience added yet."}</p>
            </div>

            {/* Availability & Location */}
            <div className="mt-6 bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-2xl font-bold mb-4 flex items-center space-x-2">
                    <FaBriefcase className="text-yellow-500" />
                    <span>Job Preferences</span>
                </h3>
                <p className="text-gray-700"><strong>Preferred Location:</strong> {labour.location || "Not specified"}</p>
                <p className="text-gray-700 mt-2"><strong>Availability:</strong> {labour.availability || "Not specified"}</p>
            </div>
        </div>
    );
};

export default My_profile;
