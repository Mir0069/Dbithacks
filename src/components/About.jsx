import React from "react";
import { FaInfoCircle, FaBullseye, FaLightbulb } from "react-icons/fa";
import { motion } from "framer-motion";

const About = () => {
    return (
        <div className="flex min-h-screen bg-gray-100">
            {/* Sidebar */}
            <motion.aside
                initial={{ x: -100, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.5, ease: "easeOut" }}
                className="w-64 bg-gradient-to-b from-blue-500 to-purple-500 text-white p-6 shadow-md"
            >
                <h1 className="text-xl font-bold mb-8 flex items-center space-x-3">
                    <FaInfoCircle />
                    <span>About Us</span>
                </h1>
                <nav className="space-y-4">
                    <div className="px-3 py-2 text-md font-medium flex items-center space-x-3 hover:text-gray-200 transition">
                        <FaBullseye />
                        <span>Our Mission</span>
                    </div>
                    <div className="px-3 py-2 text-md font-medium flex items-center space-x-3 hover:text-gray-200 transition">
                        <FaLightbulb />
                        <span>Our Vision</span>
                    </div>
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
                    <h2 className="text-xl font-bold">About Our Platform</h2>
                </motion.header>

                {/* About Section */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="bg-white p-6 rounded-lg shadow mt-6"
                >
                    <h3 className="text-2xl font-bold mb-4 text-blue-500">Who We Are</h3>
                    <p className="text-gray-700 leading-relaxed">
                        Shramik is a dedicated platform connecting skilled workers with employers. We provide seamless job matching, fair wage transparency, and skill development to uplift the workforce.
                    </p>
                </motion.div>

                {/* Mission & Vision */}
                <div className="grid grid-cols-2 gap-6 mt-6">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.4 }}
                        className="bg-white p-6 rounded-lg shadow hover:shadow-xl transition-shadow"
                    >
                        <h3 className="text-lg font-semibold flex items-center space-x-2">
                            <FaBullseye className="text-blue-500" />
                            <span>Our Mission</span>
                        </h3>
                        <p className="text-gray-700 mt-2">
                            We aim to bridge the gap between workers and job opportunities through technology, ensuring fair wages, safe workplaces, and professional growth.
                        </p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.6 }}
                        className="bg-white p-6 rounded-lg shadow hover:shadow-xl transition-shadow"
                    >
                        <h3 className="text-lg font-semibold flex items-center space-x-2">
                            <FaLightbulb className="text-yellow-500" />
                            <span>Our Vision</span>
                        </h3>
                        <p className="text-gray-700 mt-2">
                            We envision a world where every worker has access to dignified employment, skill training, and financial security, driving economic progress for all.
                        </p>
                    </motion.div>
                </div>

                {/* Key Services */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.8 }}
                    className="bg-white p-6 rounded-lg shadow mt-6"
                >
                    <h3 className="text-2xl font-bold mb-4 text-blue-500">What We Offer</h3>
                    <ul className="list-disc list-inside text-gray-700 space-y-2">
                        <motion.li whileHover={{ scale: 1.05, color: "#2563EB" }} transition={{ duration: 0.2 }}>
                            Job matching for skilled laborers.
                        </motion.li>
                        <motion.li whileHover={{ scale: 1.05, color: "#2563EB" }} transition={{ duration: 0.2 }}>
                            Training and skill development programs.
                        </motion.li>
                        <motion.li whileHover={{ scale: 1.05, color: "#2563EB" }} transition={{ duration: 0.2 }}>
                            Secure payment and attendance tracking.
                        </motion.li>
                        <motion.li whileHover={{ scale: 1.05, color: "#2563EB" }} transition={{ duration: 0.2 }}>
                            Worker protection and safety features.
                        </motion.li>
                    </ul>
                </motion.div>
            </div>
        </div>
    );
};

export default About;
