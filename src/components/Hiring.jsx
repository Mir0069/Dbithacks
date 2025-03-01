import React, { useState } from 'react';

const Hiring = () => {
  // State to store form data
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    address: '',
    building: '',
    street: '',
    pincode: '',
    city: '',
    skills: '',
    dob: ''
  });

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you can handle form submission, like sending the data to an API or database
    console.log('Form Data Submitted:', formData);
  };

  return (
    <div className='min-h-screen w-full flex items-center justify-center bg-gray-100'>
      <div className='text-center bg-white p-6 rounded-lg shadow-md w-full max-w-md'>
        <h1 className='text-2xl font-semibold mb-6 text-gray-700'>Hiring Sign Up</h1>
        <form onSubmit={handleSubmit} className='space-y-4'>
          <div className='flex space-x-4'>
            <input
              type='text'
              name='firstName'
              placeholder='First Name'
              value={formData.firstName}
              onChange={handleChange}
              className='w-full px-4 py-2 border border-gray-300 rounded-md'
              required
            />
            <input
              type='text'
              name='lastName'
              placeholder='Last Name'
              value={formData.lastName}
              onChange={handleChange}
              className='w-full px-4 py-2 border border-gray-300 rounded-md'
              required
            />
          </div>

          <input
            type='text'
            name='address'
            placeholder='Address'
            value={formData.address}
            onChange={handleChange}
            className='w-full px-4 py-2 border border-gray-300 rounded-md'
            required
          />

          <div className='flex space-x-4'>
            <input
              type='text'
              name='building'
              placeholder='Building'
              value={formData.building}
              onChange={handleChange}
              className='w-full px-4 py-2 border border-gray-300 rounded-md'
              required
            />
            <input
              type='text'
              name='street'
              placeholder='Street'
              value={formData.street}
              onChange={handleChange}
              className='w-full px-4 py-2 border border-gray-300 rounded-md'
              required
            />
          </div>

          <div className='flex space-x-4'>
            <input
              type='text'
              name='pincode'
              placeholder='Pincode'
              value={formData.pincode}
              onChange={handleChange}
              className='w-full px-4 py-2 border border-gray-300 rounded-md'
              required
            />
            <input
              type='text'
              name='city'
              placeholder='City'
              value={formData.city}
              onChange={handleChange}
              className='w-full px-4 py-2 border border-gray-300 rounded-md'
              required
            />
          </div>

          <input
            type='text'
            name='skills'
            placeholder='Skills (comma-separated)'
            value={formData.skills}
            onChange={handleChange}
            className='w-full px-4 py-2 border border-gray-300 rounded-md'
            required
          />

          <input
            type='date'
            name='dob'
            value={formData.dob}
            onChange={handleChange}
            className='w-full px-4 py-2 border border-gray-300 rounded-md'
            required
          />

          <button
            type='submit'
            className='w-full px-4 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition duration-300'
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default Hiring;
