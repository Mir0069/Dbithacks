import React, { useState, useEffect } from "react";
import { FaUserMd, FaChartPie, FaCog } from "react-icons/fa";
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
            <aside className="w-64 bg-white p-6 shadow-md">
                <h1 className="text-xl font-bold text-blue-400 mb-8 flex items-center space-x-3"><FaChartPie /> <span>Dashboard</span></h1>
                <nav className="space-y-4">


                    <NavLink
                        to="/my_profile"
                        className={({ isActive }) =>
                            isActive
                                ? 'text-blue-400 px-3 py-2 text-md font-medium'
                                : 'text-gray-700 hover:text-blue-400 px-3 py-2 text-md font-medium flex items-center space-x-3'
                        }>

                        <FaUserMd />
                        <span>My Profile</span>
                    </NavLink>

                    <NavLink
                        to="/settings"
                        className={({ isActive }) =>
                            isActive
                                ? 'text-blue-400 px-3 py-2 text-md font-medium'
                                : 'text-gray-700 hover:text-blue-400 px-3 py-2 text-md font-medium flex items-center space-x-3'
                        }>
                        <FaCog />
                        <span>Settings</span>
                    </NavLink>
                </nav>
            </aside>

            {/* Main Content */}
            <div className="flex-1 p-6">
                {/* Top Navbar */}
                <header className="flex justify-between items-center bg-white p-4 rounded-lg shadow">
                    <input
                        type="text"
                        placeholder="Search by Job Title..."
                        className="border rounded-lg px-4 py-2 w-1/3"
                    />
                    <div className="flex items-center space-x-4">
                        <span>Deko</span>
                        <div className="w-10 h-10 bg-gray-300 rounded-full"></div>
                    </div>
                </header>

                {/* Analytics Cards */}
                <div className="grid grid-cols-2 gap-6 mt-6">
                    <div className="bg-white p-6 rounded-lg shadow">
                        <h3 className="text-lg font-semibold">Split wise Expenses</h3>
                        <p className="text-sm text-gray-500">Weekly</p>
                        <div className="mt-4">
                            <div className="w-40 h-40 bg-purple-100 mx-auto rounded-full"></div>
                            <ul className="mt-4 space-y-2">
                                <li className="text-purple-500">Travel 20%</li>
                                <li className="text-blue-500">Food 20%</li>
                                <li className="text-pink-500">Other 60%</li>
                            </ul>
                        </div>
                    </div>
                    <div className="bg-white p-6 rounded-lg shadow">
                        <h3 className="text-lg font-semibold">Salary</h3>
                        <p className="text-sm text-gray-500">Weekly</p>
                        <div className="mt-4">
                            <div className="h-40 bg-gray-200"></div>
                        </div>
                    </div>
                </div>

                {/* Job List Table */}
                <div className="bg-white p-6 rounded-lg shadow mt-6">
                    <h3 className="text-2xl font-bold">Nearby Jobs</h3>
                    <div className="p-6 bg-white shadow-lg rounded-lg">
                        <h2 className="text-xl font-semibold mb-4">Available Jobs</h2>
                        <table className="w-full border-collapse border border-gray-300">
                            <thead>
                                <tr className="bg-gray-200">
                                    <th className="py-2 px-4 border">Job Title</th>
                                    <th className="py-2 px-4 border">Location</th>
                                    <th className="py-2 px-4 border">Salary</th>
                                    <th className="py-2 px-4 border">Available Dates</th>
                                    <th className="py-2 px-4 border">Apply Here</th>
                                </tr>
                            </thead>
                            <tbody>
                                {jobs.length > 0 ? (
                                    jobs.map((job, index) => (
                                        <tr key={index} className="text-center border-b">
                                            <td className="py-2 px-4 border">{job.title}</td>
                                            <td className="py-2 px-4 border">{job.location}</td>
                                            <td className="py-2 px-4 border">{job.salary}</td>
                                            <td className="py-2 px-4 border">{job.date}</td>
                                            <td className="py-2 px-4 border">
                                                <a
                                                    href={job.applyLink}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="text-blue-500 hover:underline"
                                                >
                                                    Apply Now
                                                </a>
                                            </td>
                                        </tr>
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
                </div>
            </div>
        </div>
    );
};

export default Dashboard;
