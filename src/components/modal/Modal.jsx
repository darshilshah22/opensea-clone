import React from "react";
import "./modal.css";
import { FaArrowRightLong } from "react-icons/fa6";
import { IoClose } from "react-icons/io5";

const Modal = ({ open, closeModal }) => {
  if (!open) return null;
  return (
    <div onClick={closeModal} className="overlay modal">
      <div
        onClick={(e) => {
          e.stopPropagation();
        }}
        className="modal_container"
      >
        <div className="close_btn" onClick={closeModal}>
          <IoClose size={24}/>
        </div>
        <div className="modal_header">
          <img
            src="https://opensea.io/static/images/logos/opensea-logo.svg"
            alt=""
          />
          <p>Connect to OpenSea</p>
        </div>
        <div className="modal_input">
          <input type="email" placeholder="Continue with email" />
          <div className="modal_arrow">
            <FaArrowRightLong />
          </div>
        </div>
        <div className="or">
          <div className="divider"></div>
          <p>OR</p>
          <div className="divider"></div>
        </div>
        <ul className="wallet_options">
          <li>
            <img src="https://opensea.io/static/images/logos/metamask-fox.svg" alt="" />
            <p>MetaMask</p>
          </li>
          <li>
            <img src="https://static.opensea.io/logos/walletlink-alternative.png" alt="" />
            <p>Coinbase Wallet</p>
          </li>
          <li>
            <img src="https://static.opensea.io/logos/walletconnect-alternative.png" alt="" />
            <p>WalletConnect</p>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Modal;
