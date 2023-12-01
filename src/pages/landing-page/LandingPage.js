import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";

import { DarkModeContext } from "@context/DarkModeContext";

import memoji from "@assets/images/test.png";

import "@pages/landing-page/LandingPage.scss";

const LandingPage = () => {
  const { darkMode, toggleDarkMode } = useContext(DarkModeContext);

  const navigate = useNavigate();

  const openLinkedin = () => {
    window.open("https://www.linkedin.com/in/urg0/", "_blank");
  };

  return (
    <div className="landing-page-container">
      <h2 className="main-title">Welcome! 👋</h2>
      <h3 className="subtitle">I am Ulaş Rotinda Güler</h3>
      <img src={memoji} alt="urg" className="memoji" onClick={openLinkedin} />
      <p>
        Senior Computer Engineering Student at Bahcesehir University, Front-end
        Developer from Istanbul
      </p>
      <button className="launch-button" onClick={() => navigate("/all-news")}>
        Start Startupfon Case Study
      </button>
    </div>
  );
};

export default LandingPage;
