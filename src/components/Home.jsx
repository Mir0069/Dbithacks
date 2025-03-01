import React from "react";
import { motion } from "framer-motion";

import Cursor from "./Cursor";
// import { img } from "framer-motion/client";
// import img3 from "./images.jpg";
  
// try

// tryenddds
const Home = () => {
  return (

    <motion.div

    initial={{ opacity: 0,  }}
    whileInView={{ opacity: 100,}}
    transition={{ duration: 0.3, delay: 1, ease: "linear" }}
     className="mt-5">
      <div
       className="bg-[#1b1b1b] text-white  rounded-3xl overflow-clip mb-4">
        <div className="flex justify-evenly">
          <div className="mt-10">
            <div className=" h-24  w-[100%]  overflow-y-clip z-10">
              <motion.p
                initial={{ opacity: 0, y: 100 }}
                animate={{ opacity: 100, y: 0 }}
                transition={{ duration: 0.3, delay: 1, ease: "linear" }}
                className="text-7xl mt-28 text-left z-0"
              >
                Empovering Potential
              </motion.p>
            </div>
            <div className=" h-24 w-[100%]  overflow-y-clip z-10">
              {" "}
              <motion.p
                initial={{ opacity: 0, y: 100 }}
                animate={{ opacity: 100, y: 0 }}
                transition={{ duration: 0.3, delay: 1, ease: "linear" }}
                className="text-7xl mt-5  "
              >
                Unloocking The Future
              </motion.p>
            </div>
          </div>
          <div>
            <motion.svg
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 0.45, x: 0 }}
              transition={{ duration: 0.3, delay: 1, ease: "linear" }}
              className="opacity-45"
              fill=" #967969"
              version="1.1"
              id="Capa_1"
              xmlns="http://www.w3.org/2000/svg"
              xmlns:xlink="http://www.w3.org/1999/xlink"
              width="400px"
              height="400px"
              viewBox="0 0 62.332 62.332"
              xml:space="preserve"
            >
              <g>
                <g>
                  <path
                    d="M57.15,26.915c-3.621-2.167-7.24-4.334-10.861-6.502c-0.029-0.029-0.072-0.055-0.137-0.073
			c-0.098-0.044-0.234-0.056-0.391-0.043c-0.376-0.004-0.752-0.008-1.128-0.012c-0.375-0.004-1.069,0.144-1.28,0.506
			c-0.763,1.306-0.666,1.593-0.666,3.139c0,1.206,0.734,2.124-0.48,2.124c-3.407,0-6.814,0-10.222,0c-3.415,0-6.829,0-10.244,0
			c-3.626,0-1.395-3.09-2.818-5.531c-0.122-0.209-0.348-0.239-0.576-0.237c-2.314,0.024-3.807,1.269-5.729,2.419
			C8.861,24.952,5.105,27.2,1.349,29.448c-2.308,1.381-1.327,2.731,0.495,3.821c4.112,2.462,8.225,4.923,12.338,7.384
			c0.979,0.586,3.658,2.394,4.667,0.66c0.919-1.58,0.664-2.889,0.664-4.74c0-0.996,2.04-0.522,3.442-0.522c4.909,0,9.818,0,14.729,0
			c1.455,0,2.908,0,4.362,0c0.92,0,0.711,4.638,1.231,5.532c0.121,0.207,0.349,0.238,0.576,0.236
			c3.086-0.036,5.666-2.382,8.234-3.92c3.096-1.854,6.734-3.478,9.557-5.734C64.343,30.01,58.312,27.611,57.15,26.915z
			 M55.721,28.056c0.025-0.054,0.025-0.114,0.036-0.172c0.045,0.027,0.091,0.054,0.136,0.081c-0.039,0.041-0.086,0.073-0.117,0.125
			C55.559,28.469,55.534,28.455,55.721,28.056z M44.857,21.361c0.244,0.146,0.488,0.292,0.732,0.438
			c-0.079,0.083-0.146,0.181-0.193,0.3c-0.24,0.616-0.486,1.23-0.737,1.844c-0.019,0.036-0.038,0.071-0.058,0.107
			C44.605,22.871,44.536,21.654,44.857,21.361z M3.663,32.62c-1.474-0.918-2.393-1.955-0.16-3.291c1.304-0.78,2.605-1.56,3.91-2.341
			c-0.129,0.148-0.247,0.294-0.333,0.429c-1.095,1.712-2.211,3.409-3.361,5.081C3.692,32.537,3.684,32.58,3.663,32.62z M7.24,34.696
			c-0.46-0.274-0.92-0.55-1.379-0.825c-0.224-0.134-0.466-0.269-0.713-0.404c0.021-0.025,0.049-0.042,0.069-0.069
			c1.832-2.617,3.57-5.299,5.271-8.011c0.086-0.138,0.123-0.239,0.136-0.318c1.064-0.636,2.127-1.273,3.189-1.909
			c-0.05,0.086-0.1,0.174-0.154,0.27c-2.129,3.732-4.267,7.459-6.394,11.192C7.252,34.644,7.252,34.671,7.24,34.696z M13.932,38.607
			c-0.015,0.024-0.015,0.053-0.028,0.077c-1.282-0.767-2.563-1.534-3.845-2.301c0.016-0.023,0.04-0.037,0.054-0.062
			c2.423-4.189,4.776-8.429,7.176-12.632c0.245,1.519,0.728,3.2,1.655,3.341c0.599,0.091,1.221,0.127,1.85,0.138
			c-0.189,0.141-0.358,0.302-0.461,0.485c-1.264,2.268-2.545,4.529-3.839,6.783C15.627,35.82,14.775,37.211,13.932,38.607z
			 M20.707,35.059c-0.184,0-0.368,0-0.552,0c-1.021,0-2.573,0.489-2.573,1.755c0,0.31-0.103,2.741-0.07,3.687
			c-0.036,0.062-0.072,0.122-0.108,0.185c-0.021,0.035-0.033,0.067-0.051,0.102c-0.604-0.229-1.242-0.705-1.809-1.094
			c0.021-0.028,0.051-0.047,0.069-0.078c1.005-1.742,2.012-3.485,3.014-5.231c1.432-2.279,2.903-4.533,4.399-6.771
			c0.125-0.188,0.147-0.353,0.114-0.492c0.784-0.035,1.56-0.073,2.305-0.073c0.187,0,0.375,0,0.562,0
			c-0.267,0.151-0.504,0.352-0.648,0.576C23.775,30.085,22.207,32.555,20.707,35.059z M23.063,35.059c-0.094,0-0.189,0-0.283,0
			c0.035-0.045,0.082-0.086,0.11-0.133c0.623-1.045,1.247-2.091,1.884-3.127c0.858-1.4,1.736-2.79,2.62-4.176
			c0.143-0.225,0.164-0.427,0.09-0.579c0.247,0,0.494,0,0.741,0c-0.267,0.153-0.502,0.36-0.642,0.589
			c-1.489,2.434-2.982,4.867-4.474,7.299C23.083,34.978,23.082,35.016,23.063,35.059z M27.332,35.059c-0.741,0-1.482,0-2.223,0
			c0.034-0.043,0.08-0.082,0.107-0.127c1.488-2.432,2.975-4.864,4.461-7.297c0.14-0.229,0.157-0.436,0.079-0.589
			c0.71,0,1.419,0,2.129,0c-0.262,0.16-0.488,0.378-0.615,0.62c-1.279,2.425-2.571,4.843-3.891,7.245
			C27.351,34.963,27.35,35.009,27.332,35.059z M31.534,34.93c-0.027,0.046-0.029,0.085-0.047,0.129c-0.348,0-0.695,0-1.042,0
			c0.03-0.037,0.072-0.069,0.097-0.107c1.405-2.133,2.81-4.267,4.222-6.396c0.305-0.46,0.377-0.423,0.15,0.082
			c-0.471,1.052-0.964,2.092-1.482,3.12C32.805,32.816,32.171,33.875,31.534,34.93z M42.009,28.928
			c-1.192,1.992-2.375,3.992-3.55,5.996c-0.027,0.048-0.029,0.089-0.048,0.135c-1.554,0-3.106,0-4.659,0
			c0.037-0.048,0.085-0.092,0.114-0.144c0.668-1.186,1.312-2.383,1.922-3.599c0.721-1.221,1.435-2.446,2.146-3.671
			c0.137-0.234,0.149-0.445,0.065-0.601c1.144,0,2.286,0,3.429,0c0.606,0,1.213-0.035,1.783-0.213
			c-0.16,0.216-0.332,0.46-0.459,0.701C42.506,28,42.26,28.465,42.009,28.928z M42.932,33.398c-0.265,0.484-0.328,0.455-0.133-0.061
			c0.766-2.022,1.59-4.018,2.424-6.004c0.215-0.509,0.619-1.306,0.907-1.777c0.446-0.732,0.897-1.462,1.347-2.192
			c0.069-0.113,0.111-0.234,0.131-0.356c0.193,0.115,0.387,0.231,0.58,0.346c-0.09,0.081-0.168,0.178-0.227,0.296
			C46.357,26.935,44.686,30.187,42.932,33.398z M44.327,35.589c-0.052-0.123-0.149-0.225-0.282-0.307
			c1.975-3.479,3.833-7.029,5.6-10.626c0.059-0.118,0.088-0.244,0.101-0.37c0.173,0.103,0.345,0.206,0.519,0.31
			c-0.092,0.08-0.173,0.177-0.234,0.295c-1.904,3.675-3.758,7.378-5.582,11.097C44.416,35.845,44.377,35.71,44.327,35.589z
			 M50.63,34.359c-0.692,1.475-1.358,2.961-2.017,4.452c-0.826,0.495-1.652,0.989-2.479,1.484c-0.972,0.582-1.373,0.347-1.53-0.268
			c2.301-4.748,4.635-9.479,7.049-14.167c0.062-0.117,0.096-0.242,0.111-0.368c0.812,0.487,1.627,0.974,2.44,1.461
			c-0.087,0.081-0.163,0.179-0.22,0.298C52.871,29.625,51.743,31.992,50.63,34.359z M59.454,30.521
			c-0.351,0.865-0.706,1.727-1.065,2.589c-1.043,0.641-2.201,1.167-2.601,1.405c-0.767,0.459-1.532,0.917-2.297,1.376
			c1.237-2.234,2.487-4.462,3.747-6.685c0.066-0.115,0.105-0.238,0.125-0.36c0.75,0.448,1.498,0.897,2.248,1.345
			c0.009,0.005,0.013,0.011,0.021,0.016C59.564,30.298,59.503,30.401,59.454,30.521z"
                  />
                </g>
              </g>
            </motion.svg>
          </div>
        </div>
        <Cursor/>
        <div className="mt-0 inline-block">
          <motion.div>
            <motion.button
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{
                delay: 0.5,

                duration: 0.7,
                scale: { type: "spring", visualDuration: 1, bounce: 0.75 },
              }}
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.8 }}
              className="ml-32 bg-[#dba828] text-black p-3 rounded-3xl "
            >
              Discover More
            </motion.button>
          </motion.div>
        </div>
        <div className="flex justify-between space-x-6 gap-9 ">
          <div className="ml-32">
            <div className="  mt-10 w-[100%]  overflow-y-clip z-10">
              <motion.p
                initial={{ opacity: 0, y: 100 }}
                animate={{ opacity: 100, y: 0 }}
                transition={{ duration: 0.3, delay: 1, ease: "linear" }}
                className="text-xl text-slate-400"
              >
                Experience
              </motion.p>
            </div>
            <div className="  w-[100%]  overflow-y-clip z-10">
              <motion.p
                initial={{ opacity: 0, y: 100 }}
                animate={{ opacity: 100, y: 0 }}
                transition={{ duration: 0.3, delay: 1, ease: "linear" }}
                className="text-slate-500 pb-5 w-2xl"
              >
                Our platform connects workers, employers, and NGOs with features like job updates, ride-sharing, and skill training. Secure attendance systems and safety tools ensure fair pay and worker protection. Trust-building features like vouching and expense sharing create a strong, supportive community.


              </motion.p>
            </div>
          </div>

          <div className="flex ">
            {/* <img src={img1} alt="" className="w-1/2" />
            <img src={img2} alt="" className="w-1/2" /> */}
          </div>
        </div>
      </div>
      {/* 2nd section */}
      <motion.div
      
      initial={{ opacity: 0, y: -10 }}
    whileInView={{ opacity: 100, y: 0 }}
    transition={{ duration: 0.3, delay: 1, ease: "linear", }}
      className="bg-white  rounded-3xl overflow-clip mt-3 mb-4">
        <div className="relative">
          <div className="justify-between relative flex flex-col md:flex-row items-start">
            <div className="flex-col mt-8 pl-10 pt-10">
              <h1 className="text-[125px] font-bold z-20 text-black leading-none">
                Shramik
              </h1>
              <div className="flex mt-6">
                <div className="mt-4">
                  <h2 className="text-xl font-medium text-gray-800">
                    01 / About
                  </h2>
                  <p className="text-gray-600 mt-4 text-base max-w-[600px]">
                  Shramik was founded in 2014 with a vision to transform the construction industry. Comprising a dedicated team of innovators, problem-solvers, and industry experts, Shramik focuses on creating solutions that empower workers, streamline operations, and drive progress across the sector. Through cutting-edge technology and community-driven initiatives, Shramik is shaping the future of construction
                  </p>
                </div>
              </div>
            </div>
            <div className="relative flex items-center justify-center min-h-full my-auto  md:ml-10 w-full md:w-1/2">
              {/* <img
                className="rounded-2xl shadow-xl scale-[1.65] max-w-full md:max-w-[400px]"
                src={img3}
                alt="Team working"
              /> */}
            </div>
          </div>

          <div className="flex  md:flex-row mt-20 pb-20 items-start justify-between">
            <div className="flex items-center justify-center w-full md:w-1/2">
              {/* <img
                className="rounded-2xl scale-[1.6] shadow-xl max-w-full md:max-w-[400px]"
                src={img3}
                alt="Team mission"
              /> */}
            </div>
            <div className="mt-8  md:mt-0 md:ml-10 w-full md:w-1/2">
              <h2 className="text-xl font-medium text-gray-800">
                02 / Our mission
              </h2>
              <p className="text-gray-600 mt-4 text-base">
              At Shramik, our mission is to empower construction workers and employers by providing innovative, technology-driven solutions that enhance productivity, ensure fair wages, and foster a safe, supportive community. We are committed to driving positive change in the construction industry by bridging gaps in skills, communication, and opportunity, ultimately shaping a brighter future for all stakeholders.
              </p>
            </div>
          </div>
        </div>
      </motion.div>
    {/* 3rd section */}
      <div className="bg-[#1b1b1b] min-h-screen rounded-3xl text-white mt-3">
         <section>
         <motion.section  initial={{ opacity: 0, x: -100 }}
             whileInView={{ opacity: 100, x: 0 }}
             transition={{ duration: 0.4, delay: 0, ease: "easeIn", delay:0.3 }}
         className="text-[150px] pt-7 pl-6 ">
          Services
         </motion.section>
         </section>
         {/* services offered */}
         <div className="flex-col pl-6 pr-12">
  <motion.div
            
             initial={{ opacity: 0, y: 100 }}
             whileInView={{ opacity: 100, y: 0 }}
             transition={{ duration: 0.3, delay: 0, ease: "anticipate", }}
             whileHover={{ 
              backgroundColor:"#e3c170",
              color:"black",
              
             }}
            whileTap={{ 
              backgroundColor:"#e3c170"
             }}
             style={{
              
            
          }}
             
             className="p-10 border-b-4 border-[#e3c170] flex  ">
    <div className="w-1/2 text-2xl">Web Development</div>
    <div className="flex justify-between w-1/2">
      <div  className="border-2 border-[#e3c170]  p-3 text-center rounded-3xl ">Custom Websites</div>
      <div className="border-2 border-[#e3c170] p-3 text-center rounded-3xl">E-commerce Platforms</div>
      <div className="border-2 border-[#e3c170] p-3 text-center rounded-3xl">CMS Integration</div>
    </div>
  </motion.div>
  <motion.div
            
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 100, y: 0 }}
            transition={{ duration: 0.3, delay: 0, ease: "linear" }}
            whileHover={{ 
             backgroundColor:"#e3c170",
             color:"black",
             
            }}
           whileTap={{ 
             backgroundColor:"#e3c170"
            }}
            style={{
             
           
         }}
             className="p-10 border-b-4 border-[#e3c170] flex h">
    <div className="w-1/2  text-2xl -full my-auto">Mobile App Development</div>
    <div className="flex justify-between w-1/2 ">
      <div className="border-2 border-[#e3c170] p-3 text-center rounded-3xl">iOS Apps</div>
      <div className="border-2 border-[#e3c170] p-3 text-center rounded-3xl">Android Apps</div>
      <div className="border-2 border-[#e3c170] p-3 text-center rounded-3xl">Hybrid Apps</div>
    </div>
  
  </motion.div>
   <motion.div
            
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 100, y: 0 }}
            transition={{ duration: 0.3, delay: 0, ease: "linear" }}
            whileHover={{ 
             backgroundColor:"#e3c170",
             color:"black",
             
            }}
           whileTap={{ 
             backgroundColor:"#e3c170"
            }}
            style={{
             
           
         }}
            className="p-10 border-[#e3c170] flex h">
    <div className="w-1/2  text-2xl -full my-auto">Digital Marketing</div>
    <div className="flex justify-between w-1/2 ">
      <div className="border-2 border-[#e3c170] p-3 text-center rounded-3xl">SEO Services</div>
      <div className="border-2 border-[#e3c170] p-3 text-center rounded-3xl">Social Media Marketing</div>
      <div className="border-2 border-[#e3c170] p-3 text-center rounded-3xl">Pay-Per-Click Ads</div>
    </div>
  </motion.div>
</div>

      </div>
    </motion.div>
  );
};

export default Home;