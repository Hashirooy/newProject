import { Day } from "../day/day";
import { Filter } from "../filters/filter";
import "./page.css";
import { useState } from "react";

import { DayOptions, Plan } from "../Types";

export const Page = () => {
  const [planList, setPlan] = useState<Plan[]>([]);
  const createPlan = (plan: Plan) => {
    setPlan((planList) => [...planList, plan]);
  };
  return (
    <div className="page">
      <div className="page__filter">
        <Filter createPlan={createPlan} plan={planList} />
      </div>
      <div className="page__kanban">
        <div className="page__kanban-settings"></div>
        <div className="page__kanban-days">
          {dayArr.map((day) => (
            <Day
              day={day}
              key={day.id}
              planList={planList.filter((plan) => plan.day === day.name)}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

const dayArr: DayOptions[] = [
  { name: "Monday", id: "1" },
  { name: "Tuesday", id: "2" },
  { name: "Wendesday", id: "3" },
  { name: "Thusday", id: "4" },
  { name: "Friday", id: "5" },
];
