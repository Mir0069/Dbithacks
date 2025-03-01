import React, { createContext, useState } from "react";

// Create context
export const SuccessContext = createContext();

// Provider component
export const SuccessProvider = ({ children }) => {
    const [success, setSuccess] = useState(false);

    return (
        <SuccessContext.Provider value={{ success, setSuccess }}>
            {children}
        </SuccessContext.Provider>
    );
};
