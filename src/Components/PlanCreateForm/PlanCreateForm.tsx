import { useState } from "react";
import { Plan } from "../Types/Plan";
import "./PlanCreateForm.css";
import { AddPlanButton } from "../AddPlanButton/AddPlanButton";

type PlanCreateFormProps = {
  onCreate: (plan: Plan) => void;
};

export const PlanCreateForm = ({ onCreate }: PlanCreateFormProps) => {
  const [name, setName] = useState("");
  const [discription, setDiscription] = useState("");
  const [addPlan, setAddPlan] = useState(false);

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

  const onClickCreatePlan = (event: React.FormEvent) => {
    event.preventDefault();
    const plan: Plan = {
      id: String(Math.floor(Math.random() * 101)),
      name,
      discription,
    };
    onCreate(plan);
    setName(" ");
    setDiscription(" ");
  };

  const onClickAddPlan = () => {
    if (addPlan === false) {
      setAddPlan(true);
    }
    if (addPlan === true) {
      setAddPlan(false);
    }
  };

  return (
    <div className="planCreateForm">
      <button className="addPlanButton" onClick={onClickAddPlan}>
        Add Plan
      </button>
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
              onClick={onClickCreatePlan}
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
