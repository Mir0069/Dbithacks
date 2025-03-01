import React, { useState, useEffect } from "react";
import { FaUserCircle, FaBriefcase, FaEdit, FaTrash } from "react-icons/fa";

const MyJobs = () => {
    const [jobs, setJobs] = useState([]);
    const [employer, setEmployer] = useState({});

    useEffect(() => {
        // Fetch employer details
        fetch("/employerProfile.json")
            .then((res) => res.json())
            .then((data) => setEmployer(data))
            .catch((err) => console.error("Error fetching employer profile:", err));

        // Fetch employer job postings
        fetch("/employerJobs.json")
            .then((res) => res.json())
            .then((data) => setJobs(data))
            .catch((err) => console.error("Error fetching job listings:", err));
    }, []);

    return (
        <div className="p-6 bg-gray-100 min-h-screen">
            {/* Employer Profile Section */}
            <div className="bg-white p-6 rounded-lg shadow-md mb-6">
                <div className="flex items-center space-x-4">
                    <FaUserCircle className="text-5xl text-gray-500" />
                    <div>
                        <h2 className="text-2xl font-bold">{employer.name || "Employer Name"}</h2>
                        <p className="text-gray-600">{employer.company || "Company Name"}</p>
                        <p className="text-gray-500">{employer.email || "email@example.com"}</p>
                    </div>
                </div>
            </div>

            {/* Job Listings Section */}
            <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-2xl font-bold mb-4">My Job Listings</h3>
                {jobs.length > 0 ? (
                    <table className="w-full border-collapse border border-gray-300">
                        <thead>
                            <tr className="bg-gray-200">
                                <th className="py-2 px-4 border">Job Title</th>
                                <th className="py-2 px-4 border">Location</th>
                                <th className="py-2 px-4 border">Salary</th>
                                <th className="py-2 px-4 border">Applications</th>
                                <th className="py-2 px-4 border">Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {jobs.map((job, index) => (
                                <tr key={index} className="border-b text-center">
                                    <td className="py-2 px-4 border">{job.title}</td>
                                    <td className="py-2 px-4 border">{job.location}</td>
                                    <td className="py-2 px-4 border">{job.salary}</td>
                                    <td className="py-2 px-4 border">{job.applicants} Applicants</td>
                                    <td className="py-2 px-4 border flex justify-center space-x-3">
                                        <button className="text-blue-500 hover:underline flex items-center">
                                            <FaEdit className="mr-1" /> Edit
                                        </button>
                                        <button className="text-red-500 hover:underline flex items-center">
                                            <FaTrash className="mr-1" /> Delete
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                ) : (
                    <p className="text-center py-4">No jobs posted yet.</p>
                )}
            </div>
        </div>
    );
};

export default MyJobs;
