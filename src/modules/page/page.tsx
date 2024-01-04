import { Day } from "../day/day";
import { Filter } from "../filters/filter";
import "./page.css";
import { useState } from "react";

import { DayOptions } from "../Types";
import { Plan } from "../plan/core/Plan";
import { Statuses } from "../Statuses/Statuses";

export const Page = () => {
  const [planList, setPlan] = useState<Plan[]>([]);
  // const createPlan = (plan: Plan) => {
  //   setPlan((planList) => [...planList, plan]);
  // };
  // const onEdit = (plan: Plan) => {
  //   return setPlan(planList.map((item) => (item.id === plan.id ? plan : item)));
  // };

  // const onDelete = (plan: Plan) => {
  //   return setPlan(planList.filter((item) => item.id !== plan.id));
  // };
  return (
    <div className="page">
      <div className="page__filter">
        <Filter plan={planList} />
      </div>
      <div className="page__kanban">
        <div className="page__kanban-settings">
          <Statuses />
        </div>
        <div className="page__kanban-days">
          {dayArr.map((day) => (
            <Day day={day} key={day.id} />
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
