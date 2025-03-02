import React, { useState, useEffect, useContext } from "react";
import { FaUserMd, FaChartPie, FaCog, FaSearch, FaFilter } from "react-icons/fa";
import { motion } from "framer-motion";
import jobsData from "./jobs.json";
import { NavLink } from "react-router-dom";
import { SuccessContext } from "../context/Successcontext";
import Mapcomp from "./Mapcomp";

const Dashboard = ({ User, setUser }) => {
    const [jobs, setJobs] = useState([]);
    const [filteredJobs, setFilteredJobs] = useState([]);
    const [searchQuery, setSearchQuery] = useState("");
    const [selectedSalaryRange, setSelectedSalaryRange] = useState(""); 
    const [userName, setUserName] = useState("User");

    const Context = useContext(SuccessContext);
    const { success, setSuccess } = Context;

    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");

    useEffect(() => {
        setJobs(jobsData);
        setFilteredJobs(jobsData);

        const fetchUserData = async () => {
            const token = localStorage.getItem("token");

            if (!token) {
                console.error("No token found");
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
                    const data = await response.json();
                    setUserName(data.first_name || "User");
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

    // Salary Range Mapping
    const salaryRanges = {
        "500-1000": [500, 1000],
        "1000-5000": [1000, 5000],
        "5000-10000": [5000, 10000],
        "10000-50000": [10000, 50000]
    };

    // 🔹 Function to filter jobs based on search input and salary range
    const filterJobs = (query, salaryRange) => {
        let [minSalary, maxSalary] = salaryRanges[salaryRange] || [0, Infinity];

        setFilteredJobs(
            jobs.filter((job) => 
                job.title.toLowerCase().includes(query) &&
                parseInt(job.salary) >= minSalary &&
                parseInt(job.salary) <= maxSalary
            )
        );
    };

    const handleSearch = (event) => {
        const query = event.target.value.toLowerCase();
        setSearchQuery(query);
        filterJobs(query, selectedSalaryRange);
    };

    const handleSalaryChange = (event) => {
        const range = event.target.value;
        setSelectedSalaryRange(range);
        filterJobs(searchQuery, range);
    };

    return (
        <div className="flex flex-col md:flex-row max-h-min bg-gray-100">
            {/* Sidebar */}
            <motion.aside
                initial={{ x: -100, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.5, ease: "easeOut" }}
                className="w-full md:w-64 bg-gradient-to-b from-blue-500 to-purple-500 text-white p-4 md:p-6 shadow-md flex md:flex-col justify-between md:justify-start items-center md:items-start space-x-4 md:space-x-0 md:space-y-4"
            >
                <h1 className="text-lg md:text-xl font-bold text-white flex items-center space-x-2">
                    <FaChartPie /> <span>Dashboard</span>
                </h1>
                <nav className="flex md:flex-col space-x-6 md:space-x-0 md:space-y-4">
                    <NavLink to="/my_profile" className="text-white hover:text-gray-700 flex items-center space-x-2">
                        <FaUserMd />
                        <span>My Profile</span>
                    </NavLink>
                    <NavLink to="/settings" className="text-white hover:text-gray-700 flex items-center space-x-2">
                        <FaCog />
                        <span>Settings</span>
                    </NavLink>
                </nav>
            </motion.aside>

            {/* Main Content */}
            <div className="flex-1 p-4 md:p-6">
                {/* Top Navbar */}
                <motion.header
                    initial={{ y: -20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.5, ease: "easeOut" }}
                    className="flex flex-col md:flex-row justify-between items-center bg-gradient-to-r from-blue-500 to-purple-500 p-4 rounded-lg shadow text-white"
                >
                    <h2 className="text-lg md:text-xl font-bold">Welcome, {userName}</h2>

                    {/* 🔹 Search & Salary Filter */}
                    <div className="flex flex-col md:flex-row items-center space-y-3 md:space-y-0 md:space-x-4 mt-3 md:mt-0">
                        <div className="relative w-full md:w-80">
                            <FaSearch className="absolute left-3 top-3 text-gray-500" />
                            <input
                                type="text"
                                placeholder="Search jobs..."
                                value={searchQuery}
                                onChange={handleSearch}
                                className="pl-10 pr-4 py-2 border rounded-lg focus:ring focus:ring-blue-400 text-black w-full"
                            />
                        </div>
                        <div className="flex items-center space-x-2">
                            <FaFilter className="text-white" />
                            <label className="text-sm">Salary Range:</label>
                            <select
                                value={selectedSalaryRange}
                                onChange={handleSalaryChange}
                                className="px-2 py-1 rounded-lg text-black"
                            >
                                <option value="">All</option>
                                <option value="500-1000">₹500 - ₹1,000</option>
                                <option value="1000-5000">₹1,000 - ₹5,000</option>
                                <option value="5000-10000">₹5,000 - ₹10,000</option>
                                <option value="10000-50000">₹10,000 - ₹50,000</option>
                            </select>
                        </div>
                    </div>
                </motion.header>

                {/* Job List Table */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.7 }}
                    className="bg-white p-4 md:p-6 rounded-lg shadow mt-4 md:mt-6 overflow-x-auto"
                >
                    <h3 className="text-lg md:text-2xl font-bold">Nearby Jobs</h3>
                    <table className="w-full border-collapse border border-gray-300 shadow-md rounded-lg min-w-[600px]">
                        <thead>
                            <tr className="bg-gradient-to-r from-blue-500 to-purple-500 text-white">
                                <th className="py-2 md:py-3 px-4 md:px-6 text-left">Job Title</th>
                                <th className="py-2 md:py-3 px-4 md:px-6 text-left">Location</th>
                                <th className="py-2 md:py-3 px-4 md:px-6 text-left">Salary</th>
                                <th className="py-2 md:py-3 px-4 md:px-6 text-left">Available Dates</th>
                                <th className="py-2 md:py-3 px-4 md:px-6 text-left">Apply</th>
                            </tr>
                        </thead>
                        <tbody>
                            {filteredJobs.length > 0 ? (
                                filteredJobs.map((job, index) => (
                                    <tr key={index} className="border-b hover:bg-gray-100 transition">
                                        <td className="py-2 px-4">{job.title}</td>
                                        <td className="py-2 px-4">{job.location}</td>
                                        <td className="py-2 px-4">{job.salary}</td>
                                        <td className="py-2 px-4">{job.date}</td>
                                        <td className="py-2 px-4 text-blue-500 hover:underline cursor-pointer">Apply Now</td>
                                    </tr>
                                ))
                            ) : (
                                <tr><td colSpan="5" className="text-center py-4">No jobs found.</td></tr>
                            )}
                        </tbody>
                    </table>
                </motion.div>
                <div className="p-8 md:p-16 rounded-2xl">
                    <Mapcomp className="w-full h-64 md:h-full rounded-3xl" />
                </div>

            </div>
        </div>
    );
};

export default Dashboard;
