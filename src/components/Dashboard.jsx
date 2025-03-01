import React, { useState, useEffect } from "react";
import { FaUserMd, FaChartPie, FaCog } from "react-icons/fa";
import { motion } from "framer-motion";
import jobsData from "./jobs.json"; // Import JSON directly
import { NavLink } from "react-router-dom";

const Dashboard = () => {
    const [jobs, setJobs] = useState([]);

    useEffect(() => {
        setJobs(jobsData); // Directly setting JSON data to state
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
                    <FaChartPie /> <span>Dashboard</span>
                </h1>
                <nav className="space-y-4">
                    <NavLink to="/my_profile" className={({ isActive }) => isActive ? "text-gray-700 font-bold" : "text-white hover:text-gray-700 flex items-center space-x-3"}>
                        <FaUserMd />
                        <span>My Profile</span>
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
                    <h2 className="text-xl font-bold">Welcome, Anil!</h2>
                    
                </motion.header>

                {/* Analytics Section */}
                <div className="grid grid-cols-2 gap-6 mt-6">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.3 }}
                        className="bg-white p-6 rounded-lg shadow hover:shadow-xl transition-shadow"
                    >
                        <h3 className="text-lg font-semibold">Total Jobs Available</h3>
                        <p className="text-3xl font-bold text-blue-500">{jobs.length}</p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.5 }}
                        className="bg-white p-6 rounded-lg shadow hover:shadow-xl transition-shadow"
                    >
                        <h3 className="text-lg font-semibold">Active Employers</h3>
                        <p className="text-3xl font-bold text-green-500">250+</p>
                    </motion.div>
                </div>

                {/* Job List Table */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.7 }}
                    className="bg-white p-6 rounded-lg shadow mt-6"
                >
                    <h3 className="text-2xl font-bold">Nearby Jobs</h3>
                    <div className="overflow-x-auto mt-4">
                        <table className="w-full border-collapse border border-gray-300 shadow-md rounded-lg">
                            <thead>
                                <tr className="bg-gradient-to-r from-blue-500 to-purple-500 text-white">
                                    <th className="py-3 px-6 text-left">Job Title</th>
                                    <th className="py-3 px-6 text-left">Location</th>
                                    <th className="py-3 px-6 text-left">Salary</th>
                                    <th className="py-3 px-6 text-left">Available Dates</th>
                                    <th className="py-3 px-6 text-left">Apply Here</th>
                                </tr>
                            </thead>
                            <tbody>
                                {jobs.length > 0 ? (
                                    jobs.map((job, index) => (
                                        <motion.tr
                                            key={index}
                                            whileHover={{ scale: 1.02 }}
                                            transition={{ duration: 0.2 }}
                                            className="text-black border-b hover:bg-gray-100 transition"
                                        >
                                            <td className="py-3 px-6">{job.title}</td>
                                            <td className="py-3 px-6">{job.location}</td>
                                            <td className="py-3 px-6">{job.salary}</td>
                                            <td className="py-3 px-6">{job.date}</td>
                                            <td className="py-3 px-6">
                                                <motion.a
                                                    whileHover={{ scale: 1.1 }}
                                                    whileTap={{ scale: 0.9 }}
                                                    href={job.applyLink}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="text-blue-500 hover:underline"
                                                >
                                                    Apply Now
                                                </motion.a>
                                            </td>
                                        </motion.tr>
                                    ))
                                ) : (
                                    <tr>
                                        <td colSpan="5" className="text-center py-4">
                                            No jobs available.
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

export default Dashboard;
