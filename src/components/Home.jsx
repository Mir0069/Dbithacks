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
    navigate("/signup");
  };
  
  const speakText = (text) => {
    if ('speechSynthesis' in window) {
      const speech = new SpeechSynthesisUtterance(text);
      speech.lang = 'en-US';
      speech.rate = 1;
      window.speechSynthesis.speak(speech);
    } else {
      alert("Text-to-Speech is not supported in this browser.");
    }
  };

  return (
    <div className="flex min-h-screen bg-gray-100">
      <div className="flex-1 p-6">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="bg-white p-10 rounded-lg shadow text-center"
        >
          <h2 className="text-4xl bg-gradient-to-r from-blue-500 to-purple-500 inline-block text-transparent bg-clip-text font-bold">
            Empowering Potential, Unlocking the Future
          </h2>
          <p className="text-gray-600 mt-4 text-lg">
            Connecting workers and employers with secure job opportunities, skill training, and fair wages.
          </p>
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="mt-6 px-6 py-3 bg-gradient-to-b from-blue-500 to-purple-500 text-white rounded-lg shadow hover:bg-blue-600 transition"
            onClick={() => speakText("Empowering Potential, Unlocking the Future. Connecting workers and employers with secure job opportunities, skill training, and fair wages.")}
          >
            Read Aloud
          </motion.button>
        </motion.div>

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
                  <button 
                    className="mt-2 px-4 py-2 bg-blue-500 text-white rounded-lg"
                    onClick={() => speakText(`${item.title}. ${item.desc}`)}
                  >
                    Read Aloud
                  </button>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </div>
      
    </div>
  );
};

export default Home;
