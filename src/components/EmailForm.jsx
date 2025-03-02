import React from 'react';

const EmailForm = ({ email, setEmail }) => {
  return (
    <div className="mb-4">
      <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
      <input
        id="email"
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
        className="mt-2 p-3 w-full border border-gray-300 rounded-lg placeholder-gray-500"
        placeholder="Enter email"
      />
    </div>
  );
};

export default EmailForm;
