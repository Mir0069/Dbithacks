import React, { createContext, useState, useEffect } from 'react';
import Cookies from 'js-cookie';

// Create a UserContext
export const UserContext = createContext();

// Create a UserProvider to provide the context values
export const UserProvider = ({ children }) => {
  const [user, setUser] = useState({ token: null, userName: null });

  // Initialize the context state with cookie values
  useEffect(() => {
    const savedToken = Cookies.get('token');
    const savedUserName = Cookies.get('userName');

    if (savedToken && savedUserName) {
      setUser({ token: savedToken, userName: savedUserName });
    }
  }, []);

  // Set the user data in cookies
  const setUserCookie = (token, userName) => {
    Cookies.set('token', token, { expires: 7, path: '/' });
    Cookies.set('userName', userName, { expires: 7, path: '/' });
    setUser({ token, userName });
  };

  // Clear the user data from cookies
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
