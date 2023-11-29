import React, { useContext } from "react";

import { DarkModeContext } from "@root/context/DarkModeContext";

import IconLink from "@components/ui/link/IconLink";
import Button from "@components/ui/button/Button";
import UserCard from "@components/user-card/UserCard";

import { getIconPath } from "@utils/navigation.service";
import { NAVIGATION_LINKS } from "@config/navigationConfig";

import AppImages from "@root/constants/assetManager/AppImages";

import "@components/main-navigation/MainNavigation.scss";

const Logo = AppImages.GetImage("logo");

const MainNavigation = () => {
  const { darkMode, toggleDarkMode } = useContext(DarkModeContext);

  return (
    <div
      className={
        darkMode ? "navigation-container" : "navigation-container light"
      }
    >
      <img src={Logo} alt="startupfon-logo" className="logo" />
      <nav className="navigation-links">
        {NAVIGATION_LINKS.map(({ path, icon, label }) => (
          <IconLink
            key={path}
            path={path}
            icon={getIconPath(icon)}
            title={label}
          />
        ))}
        <Button
          label="Subscribe for $50"
          icon={getIconPath("dollar")}
          className="medium orange"
        />
      </nav>
      <div className="user-card-wrapper">
        <UserCard />
      </div>
    </div>
  );
};

export default MainNavigation;
