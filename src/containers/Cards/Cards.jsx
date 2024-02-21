import React from "react";
import "./cards.css";

const Cards = ({image}) => {
  return (
    <div className="collection-card">
      <img src={image} alt="" />
      <div className="text-content">
        <h4>ELESAPIEN ERC-404</h4>
        <p>Floor</p>
        <p>0.04 ETH</p>
      </div>
    </div>
  );
};

export default Cards;
