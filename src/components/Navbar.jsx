import React, { useState, useEffect, useContext } from 'react';
import { NavLink } from 'react-router-dom';
import { FaBars, FaTimes, FaUser, FaSignOutAlt } from 'react-icons/fa';
import GoogleTranslate from './GoogleTranslate';
import TextToSpeech from './TextToSpeech';
import { SuccessContext } from '../context/Successcontext';
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isOfficer, setIsOfficer] = useState(false);
  const { success } = useContext(SuccessContext);
console.log(success)
  useEffect(() => {
    const token = localStorage.getItem('accessToken');
    if (token) {
      try {
        const decoded = jwtDecode(token);
        setIsLoggedIn(true);
        setIsOfficer(decoded.is_officer || false);
      } catch (error) {
        console.error('Invalid token:', error);
        setIsLoggedIn(false);
        setIsOfficer(false);
      }
    }
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleLogout = () => {
    localStorage.removeItem('accessToken');
    setIsLoggedIn(false);
    setIsOfficer(false);
  };

  return (
    <nav className="bg-gray-900 shadow-md">
      <div className="flex items-center justify-between p-4">
        <div className="text-3xl font-extrabold text-white">Shramik</div>

        <div className="sm:hidden">
          <button onClick={toggleMenu} className="text-white focus:outline-none">
            {isOpen ? <FaTimes size={28} /> : <FaBars size={28} />}
          </button>
        </div>

        {/* Links for larger screens */}
        <div className="hidden sm:flex space-x-4 items-center">
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive
                ? 'text-blue-400 px-3 py-2 text-md font-medium'
                : 'text-gray-300 hover:text-blue-400 px-3 py-2 text-md font-medium'
            }
          >
            Home
          </NavLink>
          <NavLink
            to="/signup"
            className={({ isActive }) =>
              isActive
                ? 'text-blue-400 px-3 py-2 text-md font-medium'
                : 'text-gray-300 hover:text-blue-400 px-3 py-2 text-md font-medium'
            }
          >
            Sign-Up
          </NavLink>
          <NavLink
            to="/about"
            className={({ isActive }) =>
              isActive
                ? 'text-blue-400 px-3 py-2 text-md font-medium'
                : 'text-gray-300 hover:text-blue-400 px-3 py-2 text-md font-medium'
            }
          >
            About
          </NavLink>

          <NavLink
            to="/dashboard"
            className={({ isActive }) =>
              isActive
                ? 'text-blue-400 px-3 py-2 text-md font-medium'
                : 'text-gray-300 hover:text-blue-400 px-3 py-2 text-md font-medium'
            }
          >
            Dashboard
          </NavLink>

          <NavLink
            to="/employerdashboard"
            className={({ isActive }) =>
              isActive
                ? 'text-blue-400 px-3 py-2 text-md font-medium'
                : 'text-gray-300 hover:text-blue-400 px-3 py-2 text-md font-medium'
            }
          >
            Emp_Dashboard
          </NavLink>
          
        </div>
          <div className="flex justify-center items-center gap-3 ">
            <GoogleTranslate />
            <TextToSpeech />
          </div>
      </div>

      {isOpen && (
        <div className="sm:hidden bg-gray-800 text-white flex flex-col space-y-4 py-4 px-6">
          <NavLink to="/" className={({ isActive }) => isActive ? 'text-blue-400 py-2 text-md font-medium' : 'text-gray-300 hover:text-blue-400 py-2 text-md font-medium'} onClick={toggleMenu}>Home</NavLink>
          <NavLink to="/about" className={({ isActive }) => isActive ? 'text-blue-400 py-2 text-md font-medium' : 'text-gray-300 hover:text-blue-400 py-2 text-md font-medium'} onClick={toggleMenu}>About</NavLink>
          {success && <NavLink to="/dashboard" className={({ isActive }) => isActive ? 'text-blue-400 py-2 text-md font-medium' : 'text-gray-300 hover:text-blue-400 py-2 text-md font-medium'} onClick={toggleMenu}>Dashboard</NavLink>}
          {isLoggedIn ? (
            <button onClick={() => { handleLogout(); toggleMenu(); }} className="text-gray-300 hover:text-red-400 py-2 text-md font-medium flex items-center">
              <FaSignOutAlt className="mr-2" /> Logout
            </button>
          ) : (
            <NavLink to="/login" className={({ isActive }) => isActive ? 'text-blue-400 py-2 text-md font-medium' : 'text-gray-300 hover:text-blue-400 py-2 text-md font-medium'} onClick={toggleMenu}>Log In</NavLink>
          )}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
