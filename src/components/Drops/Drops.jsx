import React, { useEffect, useState } from "react";
import "./drops.css";
import { IoMdNotificationsOutline } from "react-icons/io";
import { notableCollections } from "../../constants/constants";
import Cards from "../../containers/Cards/Cards";

const Drops = () => {
  const [days, setDays] = useState(0);
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);
  const [activeTab, setActiveTab] = useState(0);

  const deadline = "February, 23, 2024 1:30 AM";

  const getTime = () => {
    const time = Date.parse(deadline) - Date.now();

    setDays(Math.floor(time / (1000 * 60 * 60 * 24)));
    setHours(Math.floor((time / (1000 * 60 * 60)) % 24));
    setMinutes(Math.floor((time / 1000 / 60) % 60));
    setSeconds(Math.floor((time / 1000) % 60));
  };

  useEffect(() => {
    const interval = setInterval(() => getTime(deadline), 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="drops">
      <p className="title">Drops</p>
      <div className="banner">
        <div className="banner_glass"></div>
        <div className="content">
          <div className="content_icon">
            <img
              src="https://i.seadn.io/s/primary-drops/0x6fd8e343c107a24bd6b8ac19b56d9aeb967c0131/31471821:about:preview_media:a7f72e16-98d9-4d41-9cae-1080cff2a7c7.gif?auto=format&dpr=1&w=1920"
              alt=""
            />
          </div>
          <p className="content_title">RG Bytes</p>
          <p className="content_by">By Revolving Games</p>
          <p className="content_stats">
            4,999 items <span>0.3 ETH</span>
          </p>
          <div className="content_actions">
            <div className="timer">
              <p className="day blur_bg">
                {days} <span>days</span>
              </p>
              <p className="hour blur_bg">
                {hours} <span>hrs</span>
              </p>
              <p className="min blur_bg">
                {minutes} <span>min</span>
              </p>
              <p className="secs blur_bg">
                {seconds} <span>secs</span>
              </p>
            </div>
            <div className="view_drop">
              <div className="blur_bg">
                <IoMdNotificationsOutline size={24} />
              </div>
              <p className="">View Drop</p>
            </div>
          </div>
        </div>
      </div>
      <div className="other_drops">
        <div className="drop_tabs">
          <p
            className={`upcoming ${activeTab === 0 ? "active" : ""}`}
            onClick={() => setActiveTab(0)}
          >
            Active & upcoming
          </p>
          <p
            className={`past ${activeTab === 1 ? "active" : ""}`}
            onClick={() => setActiveTab(1)}
          >
            Past
          </p>
        </div>
        <div className="drops_grid">
          {notableCollections.map((e, index) => (
            <div className="drop-items" key={index}>
              <Cards image={e.image} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Drops;
