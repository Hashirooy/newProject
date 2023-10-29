import { Day } from "../day/day";
import { Filter } from "../filters/filter";
import "./page.css";

export const Page = () => {
  return (
    <div className="page">
      <div className="page__filter">
        <Filter />
      </div>
      <div className="page__kanban">
        <div className="page__kanban-settings"></div>
        <div className="page__kanban-days">
          {dayArr.map((day) => (
            <Day day={day} />
          ))}
        </div>
      </div>
    </div>
  );
};

const dayArr = [
  { name: "Monday", id: "1" },
  { name: "Tuesday", id: "1" },
  { name: "Wendesday", id: "1" },
  { name: "Thusday", id: "1" },
  { name: "Friday", id: "1" },
];
