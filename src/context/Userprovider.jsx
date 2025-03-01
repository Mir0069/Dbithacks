// UserProvider.js
import React, { createContext, useState, useEffect } from 'react';

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState({ token: null, userName: null });

  // On mount, load token (and userName if available) from localStorage
  useEffect(() => {
    const token = localStorage.getItem("token");
    const userName = localStorage.getItem("userName");
    if (token) {
      setUser({ token, userName });
    }
  }, []);

  // Function to update user data and store it in localStorage
  const setUserData = (token, userName) => {
    localStorage.setItem("token", token);
    localStorage.setItem("userName", userName);
    setUser({ token, userName });
  };

  // Function to clear user data from localStorage
  const clearUserData = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("userName");
    setUser({ token: null, userName: null });
  };

  return (
    <UserContext.Provider value={{ user, setUserData, clearUserData }}>
      {children}
    </UserContext.Provider>
  );
};
