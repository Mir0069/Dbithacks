import React from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

// Import SVG assets
import CreateAccSVG from "../assets/createac.svg";
import SearchWorkSVG from "../assets/searchw.svg";
import SaveApplySVG from "../assets/saveapp.svg";

const Home = () => {
  const navigate = useNavigate();
  
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
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 px-4">
      {/* Hero Section */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="bg-white p-6 sm:p-10 rounded-lg shadow text-center max-w-4xl w-full"
      >
        <h2 className="text-3xl sm:text-4xl font-bold bg-gradient-to-r from-blue-500 to-purple-500 inline-block text-transparent bg-clip-text">
          Empowering Potential, Unlocking the Future
        </h2>
        <p className="text-gray-600 mt-4 text-base sm:text-lg">
          Connecting workers and employers with secure job opportunities, skill training, and fair wages.
        </p>
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="mt-6 px-4 py-2 sm:px-6 sm:py-3 bg-gradient-to-b from-blue-500 to-purple-500 text-white rounded-lg shadow hover:bg-blue-600 transition"
          onClick={() => speakText("Empowering Potential, Unlocking the Future. Connecting workers and employers with secure job opportunities, skill training, and fair wages.")}
        >
          Discover More
        </motion.button>
      </motion.div>

      {/* How It Works Section */}
      <section className="py-12 w-full max-w-6xl">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-3xl font-bold text-center mb-10"
        >
          How It Works?
        </motion.h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 px-4 sm:px-0">
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
              className="bg-white p-6 rounded-lg shadow flex flex-col items-center gap-4 text-center"
            >
              <img src={item.img} alt={item.title} className="w-20 h-20 sm:w-24 sm:h-24" />
              <h3 className="text-lg sm:text-xl font-bold">{item.title}</h3>
              <p className="text-sm sm:text-base">{item.desc}</p>
              <button 
                className="mt-2 px-3 py-2 bg-blue-500 text-white text-sm sm:text-base rounded-lg"
                onClick={() => speakText(`${item.title}. ${item.desc}`)}
              >
                Read Aloud
              </button>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Home;
