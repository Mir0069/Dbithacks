import React, { useState, useEffect } from "react";
import { FaBriefcase, FaUsers, FaPlus, FaCog } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";
import jobListings from "./employerJobs.json"; // Import JSON data

const EmployerDashboard = () => {
    const [jobs, setJobs] = useState([]);

    // Load job listings on mount
    useEffect(() => {
        setJobs(jobListings);
    }, []);

    return (
        <div className="flex max-h-min bg-gray-100">
            {/* Sidebar */}
            <motion.aside
                initial={{ x: -100, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.5, ease: "easeOut" }}
                className="w-64 bg-gradient-to-b from-blue-500 to-purple-500 text-white p-6 shadow-md"
            >
                <h1 className="text-xl font-bold text-white mb-8 flex items-center space-x-3">
                    <FaBriefcase />
                    <span>Dashboard</span>
                </h1>
                <nav className="space-y-4">
                    <NavLink to="/myjobs" className={({ isActive }) => isActive ? "text-gray-700 font-bold" : "text-white hover:text-gray-700 flex items-center space-x-3"}>
                        <FaBriefcase />
                        <span>My Jobs</span>
                    </NavLink>
                    <NavLink to="/applicants" className={({ isActive }) => isActive ? "text-gray-700 font-bold" : "text-white hover:text-gray-700 flex items-center space-x-3"}>
                        <FaUsers />
                        <span>Applicants</span>
                    </NavLink>
                    <NavLink to="/post_job" className={({ isActive }) => isActive ? "text-gray-700 font-bold" : "text-white hover:text-gray-700 flex items-center space-x-3"}>
                        <FaPlus />
                        <span>Post a Job</span>
                    </NavLink>
                    <NavLink to="/settings" className={({ isActive }) => isActive ? "text-gray-700 font-bold" : "text-white hover:text-gray-700 flex items-center space-x-3"}>
                        <FaCog />
                        <span>Settings</span>
                    </NavLink>
                </nav>
            </motion.aside>

            {/* Main Content */}
            <div className="flex-1 p-6">
                {/* Top Navbar */}
                <motion.header
                    initial={{ y: -20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.5, ease: "easeOut" }}
                    className="flex justify-between items-center bg-gradient-to-r from-blue-500 to-purple-500 p-4 rounded-lg shadow text-white"
                >
                    <h2 className="text-xl font-bold">Welcome, Employer!</h2>
                    
                </motion.header>

                {/* Analytics Section */}
                <div className="grid grid-cols-2 gap-6 mt-6">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.3 }}
                        className="bg-white p-6 rounded-lg shadow hover:shadow-xl transition-shadow"
                    >
                        <h3 className="text-lg font-semibold">Total Job Posts</h3>
                        <p className="text-3xl font-bold text-blue-500">{jobs.length}</p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.5 }}
                        className="bg-white p-6 rounded-lg shadow hover:shadow-xl transition-shadow"
                    >
                        <h3 className="text-lg font-semibold">Total Applicants</h3>
                        <p className="text-3xl font-bold text-green-500">
                            {jobs.reduce((total, job) => total + job.applicants, 0)}
                        </p>
                    </motion.div>
                </div>

                {/* Job Listings Table */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.7 }}
                    className="bg-white p-6 rounded-lg shadow mt-6"
                >
                    <h3 className="text-2xl font-bold">Your Job Listings</h3>
                    <div className="overflow-x-auto mt-4">
                        <table className="w-full border-collapse border border-gray-300 shadow-md rounded-lg">
                            <thead>
                                <tr className="bg-gradient-to-r from-blue-500 to-purple-500 text-white">
                                    <th className="py-3 px-6 text-left">Job Title</th>
                                    <th className="py-3 px-6 text-left">Location</th>
                                    <th className="py-3 px-6 text-left">Salary</th>
                                    <th className="py-3 px-6 text-left">Applications</th>
                                    <th className="py-3 px-6 text-left">Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {jobs.length > 0 ? (
                                    jobs.map((job, index) => (
                                        <motion.tr
                                            key={index}
                                            whileHover={{ scale: 1.02 }}
                                            transition={{ duration: 0.2 }}
                                            className="text-gray-700 border-b hover:bg-gray-100 transition"
                                        >
                                            <td className="py-3 px-6">{job.title}</td>
                                            <td className="py-3 px-6">{job.location}</td>
                                            <td className="py-3 px-6">{job.salary}</td>
                                            <td className="py-3 px-6">{job.applicants} Applicants</td>
                                            <td className="py-3 px-6">
                                                <motion.button
                                                    whileHover={{ scale: 1.1 }}
                                                    whileTap={{ scale: 0.9 }}
                                                    className="text-blue-500 hover:underline"
                                                >
                                                    Edit
                                                </motion.button>
                                            </td>
                                        </motion.tr>
                                    ))
                                ) : (
                                    <tr>
                                        <td colSpan="5" className="text-center py-4">
                                            No jobs posted.
                                        </td>
                                    </tr>
                                )}
                            </tbody>
                        </table>
                    </div>
                </motion.div>
            </div>
        </div>
    );
};

export default EmployerDashboard;
