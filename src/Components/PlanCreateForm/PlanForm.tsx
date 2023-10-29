import { useState } from "react";
import { Plan } from "../Types/Plan";
import "./PlanForm.css";

type PlanCreateFormProps = {
  plan?: Plan;
  onSubmit: (plan: Plan) => void;
};

export const PlanForm = ({ onSubmit, plan }: PlanCreateFormProps) => {
  const [name, setName] = useState(plan ? plan.name : "");
  const [discription, setDiscription] = useState(plan ? plan.discription : "");
  const [addPlan, setAddPlan] = useState(true);

  const onChangeInputName = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setName(value);
  };

  const onChangeInputDiscription = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const value = event.target.value;
    setDiscription(value);
  };

  const onClickPlan = (event: React.FormEvent) => {
    event.preventDefault();
    const planCard: Plan = {
      id: plan ? plan.id : String(Math.floor(Math.random() * 101)),
      name,
      discription,
    };
    onSubmit(planCard);
    setName(" ");
    setDiscription(" ");
  };

  return (
    <div className="planCreateForm">
      {addPlan && (
        <div className="createForm">
          <form className="createFormElement">
            <input
              type="text"
              placeholder="Name"
              value={name}
              onChange={onChangeInputName}
            />
            <input
              type="text"
              value={discription}
              placeholder="Plan"
              onChange={onChangeInputDiscription}
            />
            <button
              type="submit"
              onClick={onClickPlan}
              className="createPlanButton"
            >
              Create Plan
            </button>
          </form>
        </div>
      )}
    </div>
  );
};
