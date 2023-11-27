import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";

import { DarkModeContext } from "@context/DarkModeContext";

import "@pages/landing-page/LandingPage.scss";

const LandingPage = () => {
  const { darkMode, toggleDarkMode } = useContext(DarkModeContext);

  const navigate = useNavigate();

  return (
    <div className="landing-page-container">
      <h2 className="main-title">Welcome! 👋</h2>
      <h3 className="subtitle">I am Ulaş Rotinda Güler</h3>
      <p>
        Senior Computer Engineering Student in Bahcesehir University, Front-end
        Developer from Istanbul
      </p>
      <button className="launch-button" onClick={() => navigate("/home")}>
        Start Startupfon news
      </button>
    </div>
  );
};

export default LandingPage;
