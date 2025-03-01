import React, { useState } from 'react';
import axios from 'axios';

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

  // State to handle loading and error states
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);  // Set loading to true when submitting

    try {
      // Make POST request to backend API
      const response = await axios.post('/api/hiring-signup', formData);
      setLoading(false);  // Stop loading

      // Handle success (e.g., show a success message)
      setSuccess('Sign-up successful!');
      setError(null);  // Clear any previous errors
      console.log('Response:', response.data);
    } catch (err) {
      setLoading(false);  // Stop loading
      setError('Error submitting form. Please try again.');
      setSuccess(null);  // Clear any previous success messages
      console.error('Error:', err);
    }
  };

  return (
    <div className='min-h-screen w-full flex items-center justify-center bg-gray-100'>
      <div className='text-center bg-white p-6 rounded-lg shadow-md w-full max-w-md'>
        <h1 className='text-2xl font-semibold mb-6 text-gray-700'>Hiring Sign Up</h1>
        
        {/* Show success or error messages */}
        {success && <div className="text-green-500 mb-4">{success}</div>}
        {error && <div className="text-red-500 mb-4">{error}</div>}
        
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
            disabled={loading}
          >
            {loading ? 'Submitting...' : 'Submit'}
          </button>
        </form>
      </div>
    </div>
  );
};

export default Hiring;
