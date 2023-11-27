import React, { useContext } from "react";

import "@components/ui/footer/Footer.scss";
import { DarkModeContext } from "@root/context/DarkModeContext";

const Footer = () => {
  const { darkMode, toggleDarkMode } = useContext(DarkModeContext);

  return (
    <div className={darkMode ? "footer-container" : "footer-container light"}>
      <footer className="footer">All rights reserved ®.</footer>
      <footer className="footer">@urg0</footer>
    </div>
  );
};

export default Footer;
