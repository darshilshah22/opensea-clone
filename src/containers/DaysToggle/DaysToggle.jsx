import React, { useState } from "react";
import { days } from "../../constants/constants";

const DaysToggle = ({selectedIndex}) => {
  const [selectedDayIndex, setSelectedDayIndex] = useState(0);

  return (
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
  );
};

export default DaysToggle;
