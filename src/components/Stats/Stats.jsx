import React, { useEffect, useState } from "react";
import "./stats.css";
import {
  allChains,
  colCategories,
  collectionStats,
  statTypes,
  tokens,
} from "../../constants/constants";
import Dropdown from "../../containers/Dropdown/Dropdown";
import DaysToggle from "../../containers/DaysToggle/DaysToggle";
import { HiOutlineStar } from "react-icons/hi";

const Stats = () => {
  const [activeTab, setActiveTab] = useState(0);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isChainDropdownOpen, setIsChainDropdownOpen] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(0);

  useEffect(() => {
    if (activeTab === 0) {
      setSelectedIndex(0);
    } else if (activeTab === 1) {
      setSelectedIndex(1);
    }
  }, [activeTab]);

  return (
    <div className="collection_stats">
      <p className="title">Collection stats</p>
      <div className="stat_types tabs">
        {statTypes.map((type, index) => (
          <p
            className={`${activeTab === index ? "active" : ""}`}
            onClick={() => setActiveTab(index)}
            key={type}
          >
            {type}
          </p>
        ))}
      </div>

      <div className="all_categories">
        <Dropdown
          title="All Categories"
          list={colCategories}
          isDropdownOpen={isDropdownOpen}
          setIsDropdownOpen={setIsDropdownOpen}
        />
        <Dropdown
          title="All Chains"
          list={allChains}
          isDropdownOpen={isChainDropdownOpen}
          setIsDropdownOpen={setIsChainDropdownOpen}
        />
        <div className="days">
          <DaysToggle selectedIndex={selectedIndex} />
        </div>
      </div>
      <div className="stat_tables">
        <ul className="table1">
          <li className="table-header">
            <div className="col">#</div>
            <div className="col col-2">Collection</div>
            <div className="col col-3">Volume</div>
            <div className="col col-4">% Change</div>
            <div className="col col-4">Floor Price</div>
            <div className="col col-4">Sales</div>
            <div className="col col-4"></div>
          </li>
          {collectionStats.map((token, index) => (
            <li className="table-row" key={index}>
              <div className="col">{token.srno}</div>
              <div className="col col-2">
                <img src={token.img} alt="" />
                <p>{token.name}</p>
              </div>
              <div className="col col-3">{token.volume}</div>
              <div className="col col-4">{token.change}</div>
              <div className="col col-4">{token.floorprice}</div>
              <div className="col col-4">{token.sales}</div>
              <div className="col col-4">
                <HiOutlineStar size={32}/>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Stats;
