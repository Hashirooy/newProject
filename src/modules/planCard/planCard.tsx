import { useState } from "react";
import { Plan } from "../Types";
import { PlanCreateForm } from "../planCreateForm/planCreateForm";

import "./planCard.css";

type PlanCardPropd = {
  plan: Plan;
  onEdit: (plan: Plan) => void;
  onDelete: (plan: Plan) => void;
};

export const PlanCard = ({ plan, onEdit, onDelete }: PlanCardPropd) => {
  const [edit, setEdit] = useState(false);

  const onDoubleClick = () => {
    setEdit((editPrev) => !edit);
  };

  const closeWinwod = () => {
    setEdit((editPrev) => !edit);
  };

  const onDeleteButton = () => {
    onDelete(plan);
  };

  return (
    <div className="planCard" onDoubleClick={onDoubleClick}>
      {edit === false && (
        <div>
          <div className="planCard__title">
            <h3 className="planCard_title--h3">{plan.name}</h3>
            <p>#{plan.id}</p>
          </div>
          <div className="planCard__text">
            <p className="planCard--p">{plan.description}</p>
          </div>
          <div className="planCard_text__data"></div>
        </div>
      )}
      {edit === true && (
        <div>
          <PlanCreateForm plan={plan} createPlan={onEdit} />
          <div className="optionButtons">
            <button className="optionButtons_buttons" onClick={closeWinwod}>
              Х
            </button>
            <button className="optionButtons_buttons" onClick={onDeleteButton}>
              Delete
            </button>
          </div>
        </div>
      )}
    </div>
  );
};
