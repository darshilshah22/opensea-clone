import React, { useEffect, useRef } from "react";
import { IoIosArrowDown } from "react-icons/io";
import "./dropdown.css";

const Dropdown = ({ title, list, isDropdownOpen, setIsDropdownOpen }) => {
  const wrapperRef = useRef("menu");

  const onClickOutside = () => {
    setIsDropdownOpen(false);
  };

  useEffect(() => {
    function handleClickOutside(event) {
      if (wrapperRef.current && !wrapperRef.current.contains(event.target)) {
        onClickOutside();
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [wrapperRef, onClickOutside]);

  return (
    <div ref={wrapperRef} className="dropdown_container">
      <div className="dropdown_button" onClick={() => setIsDropdownOpen(true)}>
        <p>{title}</p>
        <IoIosArrowDown size={20} />
      </div>
      {isDropdownOpen && (
        <ul className="dropdown_menu">
          {list.map((li) => (
            <li key={li}>
              <a href="#">{li}</a>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Dropdown;
