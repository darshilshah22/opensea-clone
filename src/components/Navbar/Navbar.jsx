import React, { useEffect, useRef, useState } from "react";
import "./navbar.css";
import { IoMdSearch, IoIosArrowBack } from "react-icons/io";
import { MdWallet, MdOutlineShoppingCart } from "react-icons/md";
import { CgProfile } from "react-icons/cg";

const Navbar = () => {
  const [isMobileSearch, setIsMobileSearch] = useState(false);
  const [isDotsDropdown, setIsDotsDropdown] = useState(false);
  const [isStatsDropdown, setIsStatsDropdown] = useState(false);
  const [isProfileDropdown, setIsProfileDropdown] = useState(false);
  const [focusSearch, setFocusSearch] = useState(false);
  const [search, setSearch] = useState("");
  const inputRef = useRef(null);

  const handleKeyPress = (event) => {
    if (event.keyCode === 191) {
      event.preventDefault(); 
      inputRef.current.focus();
      setFocusSearch(true);
    }
  };

  useEffect(() => {
    window.onkeydown = handleKeyPress;
  }, []);

  return (
    <div className="navbar">
      <div className="logo">
        <img
          src="https://opensea.io/static/images/logos/opensea-logo.svg"
          alt=""
        />
        <h1>OpenSea</h1>
      </div>
      <div className="divider" />
      <ul className="nav-menu">
        <li
          className="dropdown"
          onMouseEnter={() => setIsDotsDropdown(true)}
          onMouseLeave={() => setIsDotsDropdown(false)}
        >
          <a href="#">Drops</a>
          {isDotsDropdown && (
            <ul className="dropdown-menu">
              <li>
                <a href="#">Featured</a>
              </li>
              <li>
                <a href="#">Learn More</a>
              </li>
            </ul>
          )}
        </li>
        <li
          className="dropdown"
          onMouseEnter={() => setIsStatsDropdown(true)}
          onMouseLeave={() => setIsStatsDropdown(false)}
        >
          <a href="#">Stats</a>
          {isStatsDropdown && (
            <div className="dropdown-menu">
              <ul>
                <li>
                  <a href="#">Rankings</a>
                </li>
                <li>
                  <a href="#">Activity</a>
                </li>
              </ul>
            </div>
          )}
        </li>
        <li>
          <a href="#">Create</a>
        </li>
      </ul>
      <div
        className={`search-container backdrop ${focusSearch ? "focus" : ""}`}
      >
        <IoMdSearch className="search-icon" size={24} />
        <input
          type="text"
          placeholder="Search"
          ref={inputRef}
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <p>/</p>
      </div>
      <div className="search backdrop" onClick={() => setIsMobileSearch(true)}>
        <IoMdSearch size={24} className="icon" />
      </div>
      <div className="login backdrop">
        <MdWallet size={24} className="icon" />
        <p>Login</p>
      </div>
      <div
        className="profile-dropdown"
        onMouseEnter={() => setIsProfileDropdown(true)}
        onMouseLeave={() => setIsProfileDropdown(false)}
      >
        <div className="profile backdrop">
          <CgProfile size={24} className="icon" />
        </div>
        {isProfileDropdown && (
          <ul className="dropdown-menu">
            <li>
              <a href="#">Profile</a>
            </li>
            <li>
              <a href="#">Watchlist</a>
            </li>
            <li>
              <a href="#">Deals</a>
            </li>
            <li>
              <a href="#">Studio</a>
            </li>
            <li>
              <a href="#">OpenSea Pro</a>
            </li>
            <li>
              <a href="#">Settings</a>
            </li>
            <li>
              <a href="#">Language</a>
            </li>
            <li>
              <a href="#">NightMode</a>
            </li>
            <li>
              <a href="#">Learn</a>
            </li>
            <li>
              <a href="#">Help center</a>
            </li>
          </ul>
        )}
      </div>
      <div className="cart backdrop">
        <MdOutlineShoppingCart size={24} className="icon" />
      </div>

      {isMobileSearch && (
        <div className="mobile-search">
          <IoIosArrowBack
            size={32}
            color="b3b3b3"
            onClick={() => setIsMobileSearch(false)}
          />
          <input type="text" placeholder="Search" />
        </div>
      )}
    </div>
  );
};

export default Navbar;
