import { useState } from "react";

import { PlanCreateForm } from "../PlanCreateForm/PlanCreateForm";
import "./DayItem.css";
import { Plan } from "../Types/Plan";
import { PlanList } from "../PlanList/PlanList";

type DayItemprops = {
  name: string;
  id: string;
};

export const DayItem = ({ name, id }: DayItemprops) => {
  const [planList, setPlanList] = useState<Plan[]>([]);

  const createPlan = (plan: Plan) => {
    setPlanList((planList) => [...planList, plan]);
    console.log(plan);
  };

  return (
    <div>
      <PlanCreateForm onCreate={createPlan} />
      <div>
        <p className="titleDay">{name}</p>
      </div>
      <div className="planItem">
        <div key={id}>
          <PlanList planList={planList} />
        </div>
      </div>
    </div>
  );
};
