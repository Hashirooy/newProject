import { useState } from "react";

import { PlanForm } from "../PlanCreateForm/PlanForm";
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

  const onEdit = (plan: Plan) => {
    console.log(planList);
    console.log(plan);
    return setPlanList(
      planList.map((item) => (item.id === plan.id ? plan : item))
    );
  };
  const onDelete = (plan: Plan) => {
    return setPlanList(planList.filter((item) => item.id !== plan.id));
  };
  return (
    <div>
      <div>
        <p className="titleDay">{name}</p>
      </div>
      <div className="planItem">
        <PlanList planList={planList} onEdit={onEdit} onDelete={onDelete} />
        <PlanForm onSubmit={createPlan} />
      </div>
    </div>
  );
};
