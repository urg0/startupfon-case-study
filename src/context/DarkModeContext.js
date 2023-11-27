import React, { createContext, useState } from "react";

export const DarkModeContext = createContext({
  darkMode: true,
  toggleDarkMode: () => {},
});

const DarkModeContextProvider = ({ children }) => {
  const [darkMode, setDarkMode] = useState(true);
  const toggleDarkMode = () => {
    setDarkMode((prevState) => !prevState);
  };

  const contextValue = {
    darkMode,
    toggleDarkMode,
  };

  return (
    <DarkModeContext.Provider value={contextValue}>
      {children}
    </DarkModeContext.Provider>
  );
};

export default DarkModeContextProvider;
