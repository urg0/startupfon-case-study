import React from "react";

import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import { ReactSVG } from "react-svg";

import { USER_DROPDOWN_MENU_LINKS } from "@config/navigationConfig";

import test from "@assets/images/test.jpeg";

import AppIcons from "@root/constants/assetManager/AppIcons";
import "@components/ui/dropdown-menu/DropdownMenu.scss";

const DropdownMenu = () => {
  const { t } = useTranslation();

  return (
    <nav className="user-dropdown-menu">
      <header className="user-wrapper">
        <img src={test} alt="profile-photo" className="profile-photo" />
        <div className="name-container">
          <div className="full-name">Ulaş Rotinda Güler</div>
          <div className="username">@ulasguler</div>
        </div>
      </header>
      <ul className="navigation-list">
        {USER_DROPDOWN_MENU_LINKS.map((item) => (
          <li key={item.title} className="navigation-item">
            <Link to={item.path} className="user-link">
              <ReactSVG
                className="link-icon"
                src={AppIcons.GetIcon(item.icon)}
              />
              <span className="link-title">{t(item.title)}</span>
            </Link>
          </li>
        ))}
      </ul>
      <button className="logout-button">
        <ReactSVG className="logout-icon" src={AppIcons.GetIcon("logout")} />
        <span className="link-title">{t("Logout")}</span>
      </button>
    </nav>
  );
};

export default DropdownMenu;
