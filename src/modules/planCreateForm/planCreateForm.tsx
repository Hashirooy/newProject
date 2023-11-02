import { useState } from "react";
import "./planCreateForm.css";
import { Day, Plan } from "../Types";

type PlanCreateFormProps = {
  plan?: Plan[];
  createPlan: (plan: Plan) => void;
};

export const PlanCreateForm = ({ plan, createPlan }: PlanCreateFormProps) => {
  const [description, setDiscription] = useState("");
  const [name, setName] = useState("");
  const [day, setDay] = useState<Day>("Monday");

  const OnChangeInputDescription = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const value = event.target.value;
    setDiscription(value);
  };

  const OnChangeInputName = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setName(value);
  };

  const onClickPlan = (event: React.FormEvent) => {
    event.preventDefault();
    if (!description) return;
    const planCard: Plan = {
      id: String(Math.floor(Math.random() * 101)),
      name,
      description,
      day,
    };
    createPlan(planCard);
    setDiscription("");
    setName("");
  };

  return (
    <form className="createPlanForm">
      <p>Choose a day:</p>
      <select onChange={(event) => setDay(event.target.value as Day)}>
        <option value="Monday">Monday</option>
        <option value="Tuesday">Tuesday</option>
        <option value="Wendesday">Wendesday</option>
        <option value="Thusday">Thusday</option>
        <option value="Friday">Friday</option>
      </select>
      <input
        type="text"
        value={description}
        placeholder="Name"
        onChange={OnChangeInputDescription}
        className="searchFieldForm"
      />
      <input
        type="text"
        value={name}
        placeholder="Description"
        onChange={OnChangeInputName}
        className="searchFieldForm"
      />
      <button onClick={onClickPlan} className="createButton">
        Create plan
      </button>
    </form>
  );
};
