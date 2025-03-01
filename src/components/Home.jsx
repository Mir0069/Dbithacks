import React from "react";
import { motion } from "framer-motion";
import { FaHome, FaBriefcase, FaUsers, FaCog } from "react-icons/fa";
import TextToSpeech from "./TextToSpeech";
// Import SVG assets
import CreateAccSVG from "../assets/createac.svg";
import SearchWorkSVG from "../assets/searchw.svg";
import SaveApplySVG from "../assets/saveapp.svg";
import { useNavigate } from "react-router-dom";
const Home = () => {
  const navigate = useNavigate();
  
    const redirectToSignUp = () => {
      navigate("/signup"); // Navigate to the SignUp page
    };
  return (
    <div className="flex min-h-screen bg-gray-100">
      {/* Main Content */}
      <div className="flex-1 p-6">
        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="bg-white p-10 rounded-lg shadow text-center"
        >
          <h2 className="text-4xl bg-gradient-to-r from-blue-500 to-purple-500 inline-block text-transparent bg-clip-text font-bold ">Empowering Potential, Unlocking the Future</h2>
          <p className="text-gray-600 mt-4 text-lg">
            Connecting workers and employers with secure job opportunities, skill training, and fair wages.
          </p>
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="mt-6 px-6 py-3 bg-gradient-to-b from-blue-500 to-purple-500 text-white rounded-lg shadow hover:bg-blue-600 transition"
            onClick={redirectToSignUp}
          >
            Discover More
          </motion.button>
        </motion.div>

        {/* How It Works Section */}
        <section className="py-16">
          <div className="container mx-auto pt-3 px-6 w-[90%] lg:w-[80vw] shadow-2xl lg:h-[380px]">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-3xl font-bold text-center mb-12 mt-4"
            >
              How It Works?
            </motion.h2>
            <div className="flex flex-col lg:flex-row justify-evenly gap-8">
              {[
                { img: CreateAccSVG, title: "Create Account", desc: "First, you have to create an account here." },
                { img: SearchWorkSVG, title: "Search Work", desc: "Search the best labour work here." },
                { img: SaveApplySVG, title: "Save and Apply", desc: "Apply or save and start your work." }
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 * index }}
                  whileHover={{ scale: 1.05 }}
                  className="bg-white p-6 rounded-lg shadow flex flex-col justify-center items-center gap-4"
                >
                  <img src={item.img} alt={item.title} className="w-28 h-28" />
                  <h3 className="text-xl font-bold">{item.title}</h3>
                  <p className="text-center">{item.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Services Section */}
        <div className="grid grid-cols-3 gap-6 mt-10">
          {[
            { title: "Job Matching", desc: "Find jobs that match your skills and preferences with ease.", color: "text-blue-500" },
            { title: "Skill Training", desc: "Enhance your skills with our tailored training programs.", color: "text-green-500" },
            { title: "Secure Payments", desc: "Get paid safely and on time with our secure payment system.", color: "text-purple-500" }
          ].map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 * index }}
              whileHover={{ scale: 1.05 }}
              className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition-shadow"
            >
              <h3 className={`text-xl font-semibold ${service.color}`}>{service.title}</h3>
              <p className="text-gray-600 mt-2">{service.desc}</p>
            </motion.div>
          ))}
        </div>

        {/* Testimonials */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.8 }}
          className="bg-white p-10 rounded-lg shadow mt-10 text-center"
        >
          <h3 className="text-2xl font-bold text-blue-500">What Our Users Say</h3>
          <p className="text-gray-600 mt-4 italic">"This platform changed my life by helping me find stable work!"</p>
          <p className="text-gray-600 italic">"Thanks to Shramik, I upskilled and now earn better than ever."</p>
        </motion.div>
      </div>
      
    </div>
  );
};

export default Home;
