import React, { useEffect, useRef, useState } from "react";
import "./trending.css";
import { days, types } from "../../constants/constants";
import { IoIosArrowDown } from "react-icons/io";

const Trending = () => {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [selectedDayIndex, setSelectedDayIndex] = useState(0);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isDaysDropdownOpen, setIsDaysDropdownOpen] = useState(false);
  const wrapperRef = useRef("menu");

  const onClickOutside = () => {
    setIsDropdownOpen(false);
    setIsDaysDropdownOpen(false);
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
    <div className="trending">
      <div className="toggle">
        {types.map((type, index) => (
          <button
            key={index}
            className={selectedIndex === index ? "active" : ""}
            onClick={() => setSelectedIndex(index)}
          >
            {type}
          </button>
        ))}
      </div>
      <div className="trending-right">
        <div className="toggle">
          {selectedIndex === 0
            ? days.slice(0, 4).map((day, index) => (
                <button
                  key={index}
                  className={selectedDayIndex === index ? "active" : ""}
                  onClick={() => setSelectedDayIndex(index)}
                >
                  {day}
                </button>
              ))
            : days.map((day, index) => (
                <button
                  key={index}
                  className={selectedDayIndex === index ? "active" : ""}
                  onClick={() => setSelectedDayIndex(index)}
                >
                  {day}
                </button>
              ))}
        </div>
        <div ref={wrapperRef} className="days-dropdown">
          <div
            className="chain"
            onClick={() => setIsDaysDropdownOpen(true)}
          >
            <p>24h</p>
            <IoIosArrowDown size={20} />
          </div>
          {isDaysDropdownOpen && (
            <ul className="days-dropdown-menu">
              <li>
                <a href="#">1h</a>
              </li>
              <li>
                <a href="#">6h</a>
              </li>
              <li>
                <a href="#">24h</a>
              </li>
              <li>
                <a href="#">7d</a>
              </li>
              <li>
                <a href="#">30d</a>
              </li>
              <li>
                <a href="#">All</a>
              </li>
            </ul>
          )}
        </div>
        <div ref={wrapperRef} className="chain-dropdown">
          <div className="chain" onClick={() => setIsDropdownOpen(true)}>
            <p>All Chains</p>
            <IoIosArrowDown size={20} />
          </div>
          {isDropdownOpen && (
            <ul className="chain-dropdown-menu">
              <li>
                <a href="#">All chains</a>
              </li>
              <li>
                <a href="#">Arbitrum</a>
              </li>
              <li>
                <a href="#">Avalanche</a>
              </li>
              <li>
                <a href="#">BNB Chain</a>
              </li>
              <li>
                <a href="#">Base</a>
              </li>
              <li>
                <a href="#">Ethereum</a>
              </li>
              <li>
                <a href="#">Klaytn</a>
              </li>
              <li>
                <a href="#">Polygon</a>
              </li>
              <li>
                <a href="#">Solana</a>
              </li>
            </ul>
          )}
        </div>
        <div className="view-all">
          <p>View All</p>
        </div>
      </div>
    </div>
  );
};

export default Trending;
