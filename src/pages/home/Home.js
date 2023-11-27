import React, { useContext } from "react";

import { DarkModeContext } from "@root/context/DarkModeContext";

import "@pages/home/Home.scss";

const Home = () => {
  const { darkMode, toggleDarkMode } = useContext(DarkModeContext);

  return (
    <div
      className={darkMode ? "home-page-container" : "home-page-container light"}
    >
      Home
    </div>
  );
};

export default Home;
