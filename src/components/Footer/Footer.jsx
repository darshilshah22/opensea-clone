import React from "react";
import "./footer.css";
import {
  FaTwitter,
  FaInstagram,
  FaRedditAlien,
  FaYoutube,
  FaTiktok,
} from "react-icons/fa";
import { FaDiscord } from "react-icons/fa6";
import { MdMailOutline } from "react-icons/md";
import {
  company,
  learn,
  marketplace,
  myAccount,
  resources,
  stats,
} from "../../constants/constants";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-top">
        <div className="stay-in">
          <p className="heading">Stay in the loop</p>
          <p>
            Join our mailing list to stay in the loop with our newest feature
            releases, NFT drops, and tips and tricks for navigating OpenSea.
          </p>
          <div className="input-mail">
            <input type="email" placeholder="Your email address" />
            <button>Sign up</button>
          </div>
        </div>
        <div className="join-community">
          <p>Join Community</p>
          <div className="social-icons">
            <div className="social-icon">
              <FaTwitter size={22} />
            </div>
            <div className="social-icon">
              <FaInstagram size={22} />
            </div>
            <div className="social-icon">
              <FaDiscord size={22} />
            </div>
            <div className="social-icon">
              <FaRedditAlien size={22} />
            </div>
            <div className="social-icon">
              <FaYoutube size={22} />
            </div>
            <div className="social-icon">
              <FaTiktok size={22} />
            </div>
            <div className="social-icon">
              <MdMailOutline size={22} />
            </div>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <div className="footer-about">
          <img
            src="https://opensea.io/static/images/logos/opensea-white.svg"
            alt=""
          />
          <p className="logo">OpenSea</p>
          <p className="info">
            The world’s first and largest digital marketplace for crypto
            collectibles and non-fungible tokens (NFTs). Buy, sell, and discover
            exclusive digital items.
          </p>
        </div>
        <div className="menus">
          <div className="marketplace footer-menu">
            <p className="head">Marketplace</p>
            {marketplace.map((m, index) => (
              <p className="footer-link" key={index}>{m}</p>
            ))}
          </div>
          <div className="my-account footer-menu">
            <p className="head">My Account</p>
            {myAccount.map((ma, i) => (
              <p className="footer-link" key={i}>{ma}</p>
            ))}

            <div className="stats footer-menu">
              <p className="head">Stats</p>
              {stats.map((s, i) => (
                <p className="footer-link" key={i}>{s}</p>
              ))}
            </div>
          </div>
          <div className="resources footer-menu">
            <p className="head">Resources</p>
            {resources.map((r, i) => (
              <p className="footer-link" key={i}>{r}</p>
            ))}
          </div>
          <div className="company footer-menu">
            <p className="head">Company</p>
            {company.map((c, i) => (
              <p className="footer-link" key={i}>{c}</p>
            ))}

            <div className="learn footer-menu">
              <p className="head">Learn</p>
              {learn.map((l, i) => (
                <p className="footer-link" key={i}>{l}</p>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="copy-right">
        <p>© 2018 - 2024 Ozone Networks, Inc</p>
        <ul>
          <li>Privacy Policy</li>
          <li>Terms of Service</li>
        </ul>
      </div>
    </div>
  );
};

export default Footer;
