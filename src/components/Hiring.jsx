import React, { useState } from 'react';

const HireEmployer = () => {
  const [companyName, setCompanyName] = useState('');
  const [gstin, setGstin] = useState('');
  const [officialAddress, setOfficialAddress] = useState('');
  const [fieldOfWork, setFieldOfWork] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState(false);

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    setSuccess(false);

    const formData = {
      company_name: companyName,
      gstin: gstin,
      official_address: officialAddress,
      field_of_work: fieldOfWork,
      phone_number: phoneNumber,
      password: password,
    };

    try {
      const response = await fetch('https://poetic-subtle-amoeba.ngrok-free.app/register/employer/', {
        method: 'POST',
        headers: {
          'ngrok-skip-browser-warning': 'true',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      console.log(JSON.stringify(formData));
      const data = await response.json();

      if (response.ok) {
        setSuccess(true);
        alert('Employer sign-up successful!');
      } else {
        setError(data?.message || 'Something went wrong');
      }
    } catch (err) {
      setError('An error occurred. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-sm">
        <h2 className="text-2xl font-semibold mb-6 text-center">Employer Sign Up</h2>

        {error && <div className="text-red-500 mb-4">{error}</div>}
        {success && <div className="text-green-500 mb-4">Sign-up successful!</div>}

        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="companyName" className="block text-gray-700">Company Name</label>
            <input
              type="text"
              id="companyName"
              value={companyName}
              onChange={(e) => setCompanyName(e.target.value)}
              placeholder="Enter Company Name"
              className="w-full px-4 py-2 border rounded-md"
              required
            />
          </div>

          <div className="mb-4">
            <label htmlFor="gstin" className="block text-gray-700">GSTIN</label>
            <input
              type="text"
              id="gstin"
              value={gstin}
              onChange={(e) => setGstin(e.target.value)}
              placeholder="Enter GSTIN"
              className="w-full px-4 py-2 border rounded-md"
              required
            />
          </div>

          <div className="mb-4">
            <label htmlFor="officialAddress" className="block text-gray-700">Official Address</label>
            <input
              type="text"
              id="officialAddress"
              value={officialAddress}
              onChange={(e) => setOfficialAddress(e.target.value)}
              placeholder="Enter Official Address"
              className="w-full px-4 py-2 border rounded-md"
              required
            />
          </div>

          <div className="mb-4">
            <label htmlFor="fieldOfWork" className="block text-gray-700">Field of Work</label>
            <input
              type="text"
              id="fieldOfWork"
              value={fieldOfWork}
              onChange={(e) => setFieldOfWork(e.target.value)}
              placeholder="Enter Field of Work"
              className="w-full px-4 py-2 border rounded-md"
              required
            />
          </div>

          <div className="mb-4">
            <label htmlFor="phoneNumber" className="block text-gray-700">Phone Number</label>
            <input
              type="text"
              id="phoneNumber"
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
              placeholder="Enter Phone Number"
              className="w-full px-4 py-2 border rounded-md"
              required
            />
          </div>

          <div className="mb-4">
            <label htmlFor="password" className="block text-gray-700">Password</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter Password"
              className="w-full px-4 py-2 border rounded-md"
              required
            />
          </div>

          <button
            type="submit"
            className={`w-full py-2 bg-blue-500 text-white rounded-md ${loading ? 'opacity-50 cursor-not-allowed' : ''}`}
            disabled={loading}
          >
            {loading ? 'Signing Up...' : 'Sign Up'}
          </button>
        </form>
      </div>
    </div>
  );
};

export default HireEmployer;
