import React from "react";
import "./tokenTables.css";
import { tokens } from "../../constants/constants";

const TokenTables = () => {
  return (
    <div className="token-tables">
      <ul className="table1">
        <li className="table-header">
          <div className="col col-1">Rank</div>
          <div className="col col-2">Collection</div>
          <div className="col col-3">Floor Price</div>
          <div className="col col-4">Volume</div>
        </li>
        {tokens.slice(0, 5).map((token, index) => (
          <li className="table-row" key={index}>
            <div className="col col-1">{token.srno}</div>
            <div className="col col-2">
              <img src={token.img} alt="" />
              <p>{token.name}</p>
            </div>
            <div className="col col-3">{token.floorprice}</div>
            <div className="col col-4">{token.volume}</div>
          </li>
        ))}
      </ul>
      <ul className="table2">
        <li className="table-header">
          <div className="col col-1">Rank</div>
          <div className="col col-2">Collection</div>
          <div className="col col-3">Floor Price</div>
          <div className="col col-4">Volume</div>
        </li>
        {tokens.slice(5, 10).map((token, index) => (
          <li className="table-row" key={index}>
            <div className="col col-1">{token.srno}</div>
            <div className="col col-2">
              <img src={token.img} alt="" />
              <p>{token.name}</p>
            </div>
            <div className="col col-3">{token.floorprice}</div>
            <div className="col col-4">{token.volume}</div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TokenTables;
