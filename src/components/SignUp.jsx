import React, { useState } from 'react';
// import FindJobs from './FindJobs'; // Make sure this file exists
import Hiring from './Hiring'; // Make sure this file exists
// import NGORegistration from './NGORegistration'; // Make sure this file exists

const SignUp = () => {
  const [currentComponent, setCurrentComponent] = useState(null);

  // Render the selected component based on button click
  const renderComponent = () => {
    switch (currentComponent) {
      case 'findJobs':
        return <FindJobs />;
      case 'hiring':
        return <Hiring />;
      case 'ngoRegistration':
        return <NGORegistration />;
      default:
        return (
          <div className='space-y-4'>
            <button
              className='w-full px-4 py-3 bg-gray-200 text-gray-800 rounded-lg border border-gray-300 hover:bg-gray-300 transition duration-300'
              onClick={() => setCurrentComponent('findJobs')}
            >
              Finding Jobs
            </button>
            <button
              className='w-full px-4 py-3 bg-gray-200 text-gray-800 rounded-lg border border-gray-300 hover:bg-gray-300 transition duration-300'
              onClick={() => setCurrentComponent('hiring')}
            >
              Hiring
            </button>
            <button
              className='w-full px-4 py-3 bg-gray-200 text-gray-800 rounded-lg border border-gray-300 hover:bg-gray-300 transition duration-300'
              onClick={() => setCurrentComponent('ngoRegistration')}
            >
              NGO Registration
            </button>
          </div>
        );
    }
  };

  return (
    <div className='min-h-screen w-full flex items-center justify-center bg-gray-100'>
      <div className='text-center bg-white p-6 rounded-lg shadow-md w-full max-w-md'>
        <h1 className='text-2xl font-semibold mb-6 text-gray-700'>Sign Up</h1>
        {renderComponent()}
      </div>
    </div>
  );
};

export default SignUp;
