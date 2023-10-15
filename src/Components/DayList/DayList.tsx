import { useState } from "react";
import { DayItem } from "../DayItem/DayItem";
import "./DayList.css";

export const DayList = () => {
  const [day, setDay] = useState([
    { name: "Monday", id: "1" },
    { name: "Tuesday", id: "2" },
    { name: "Wednesday", id: "3" },
    { name: "Thursday", id: "4" },
    { name: "Friday", id: "5" },
  ]);

  return (
    <div className="dayListContainer">
      <div className="dayList">
        {day.map((day) => (
          <DayItem key={day.id} name={day.name} id={day.id} />
        ))}
      </div>
    </div>
  );
};
