// UserProvider.js
import React, { createContext, useState, useEffect } from 'react';
import Cookies from 'js-cookie';

// Create the context
export const UserContext = createContext();

// Create the provider component
export const UserProvider = ({ children }) => {
  const [user, setUser] = useState({ token: null, userName: null });

  // Load any saved user details from cookies on initial render
  useEffect(() => {
    const savedToken = Cookies.get('token');
    const savedUserName = Cookies.get('userName');
    if (savedToken && savedUserName) {
      setUser({ token: savedToken, userName: savedUserName });
    }
  }, []);

  // Function to update user info and store it in cookies
  const setUserCookie = (token, userName) => {
    Cookies.set('token', token, { expires: 7, path: '/' });
    Cookies.set('userName', userName, { expires: 7, path: '/' });
    setUser({ token, userName });
  };

  // Function to clear user data from cookies
  const clearUserCookie = () => {
    Cookies.remove('token');
    Cookies.remove('userName');
    setUser({ token: null, userName: null });
  };

  return (
    <UserContext.Provider value={{ user, setUserCookie, clearUserCookie }}>
      {children}
    </UserContext.Provider>
  );
};