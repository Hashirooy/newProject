import "./day.css";
import { dayType } from "./dayType";

type DayProps = {
  day: dayType;
};

export const Day = ({ day }: DayProps) => {
  return (
    <div className="day">
      <h2>{day.name}</h2>
    </div>
  );
};
