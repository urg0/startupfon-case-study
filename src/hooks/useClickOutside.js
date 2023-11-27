import { useState, useEffect, useRef } from "react";

const useClickOutside = (initialState = false) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(initialState);
  const dropdownRef = useRef();

  const handleClickOutside = (event) => {
    //NOTE: checks whether user click outside the dropdown menu
    if (!dropdownRef?.current.contains(event.target)) {
      setIsDropdownOpen(false);
    }
  };

  useEffect(() => {
    if (isDropdownOpen) {
      window.addEventListener("click", handleClickOutside);
    }
    return () => {
      window.removeEventListener("click", handleClickOutside);
    };
  }, [isDropdownOpen]);

  return { dropdownRef, isDropdownOpen, setIsDropdownOpen };
};

export default useClickOutside;
