import React, { useState } from 'react';
import { motion } from 'framer-motion';
import FindJobs from './Findjob';
import Hiring from './Hiring';
import Empl from './Empl';
import Emp from './Emp';

// Check if NGORegistration exists before using it
// import NGORegistration from './NGORegistration';

const Login = () => {
  const [currentComponent, setCurrentComponent] = useState(null);

  // Render the selected component
  const renderComponent = () => {
    switch (currentComponent) {
      case 'employee':
        return <Emp/>;
      case 'employer':
        return <Empl />;
      case 'ngoRegistration':
        return <div className="text-gray-500">NGO Registration Coming Soon...</div>; 
      default:
        return (
          <motion.div 
            initial={{ opacity: 0, y: 10 }} 
            animate={{ opacity: 1, y: 0 }} 
            transition={{ duration: 0.5 }}
            className="space-y-4"
          >
            {[
              { label: 'Employee', key: 'employee' },
              { label: 'Employer', key: 'employer' },
              { label: 'NGO Registration', key: 'ngoRegistration' },
            ].map((item, index) => (
              <motion.button
                key={item.key}
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.3, delay: 0.1 * index }}
                className="w-full px-5 py-3 bg-blue-500 text-white rounded-lg shadow-md hover:bg-blue-600 transition duration-300"
                onClick={() => setCurrentComponent(item.key)}
              >
                {item.label}
              </motion.button>
            ))}
          </motion.div>
        );
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <motion.div 
        initial={{ opacity: 0, scale: 0.9 }} 
        animate={{ opacity: 1, scale: 1 }} 
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md text-center"
      >
        <h1 className="text-3xl font-semibold mb-6 text-gray-700">Log In</h1>
        {renderComponent()}
        {currentComponent && (
          <motion.button
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3, delay: 0.2 }}
            className="mt-4 px-5 py-2 bg-gray-300 text-gray-700 rounded-lg hover:bg-gray-400 transition"
            onClick={() => setCurrentComponent(null)}
          >
            Back
          </motion.button>
        )}
      </motion.div>
    </div>
  );
};

export default Login;
