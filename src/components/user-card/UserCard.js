import React from "react";

import useClickOutside from "@hooks/useClickOutside";

import DropdownMenu from "@components/ui/dropdown-menu/DropdownMenu";

import test from "@assets/images/test.jpeg";

import "@components/user-card/UserCard.scss";

const UserCard = () => {
  const { dropdownRef, isDropdownOpen, setIsDropdownOpen } = useClickOutside();

  const toggleDropdownMenu = (event) => {
    event.stopPropagation();
    setIsDropdownOpen((prevState) => !prevState);
  };

  return (
    <div className="top-bar-user-container">
      <div className="user-wrapper">
        {/* <div className="user-full-name">Ulaş Rotinda Güler</div> */}
        <img
          src={test}
          alt="user-profile-photo"
          className={`user-profile-photo ${isDropdownOpen ? "open" : ""}`}
          onClick={toggleDropdownMenu}
        />
      </div>
      {isDropdownOpen && (
        <div ref={dropdownRef}>
          <DropdownMenu />
        </div>
      )}
    </div>
  );
};

export default UserCard;
