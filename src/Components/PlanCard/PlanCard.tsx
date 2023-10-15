import { PlanForm } from "../PlanCreateForm/PlanForm";
import { Plan } from "../Types";
import "./PlanCard.css";

import { useState } from "react";

type PlanCardProps = {
  plan: Plan;
  onEdit: (plan: Plan) => void;
  onDelete: (plan: Plan) => void;
};

export const PlanCard = ({ plan, onEdit, onDelete }: PlanCardProps) => {
  const [edit, setEdit] = useState(false);

  const Edit = () => {
    setEdit((editPrev) => !edit);
  };

  const Delete = () => {
    onDelete(plan);
  };

  return (
    <div className="PlanCard">
      {edit === false && (
        <div className="PlanCardPlanBody">
          <h2 className="PlanCardplanName">{plan.name}</h2>
          <p className="PlanCardDiscription">{plan.discription}</p>
        </div>
      )}
      {edit && <PlanForm plan={plan} onSubmit={onEdit} />}
      <div className="PlanCardPlanAction">
        <button onClick={Edit}>{edit ? "X" : "Edit"}</button>
        <button onClick={Delete}>Delete</button>
      </div>
    </div>
  );
};
