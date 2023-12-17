import { useState } from "react";
import "./planCreateForm.css";
import { Day } from "../../../Types";
import { PlanActions } from "../../actions";
import { usePlanStore } from "../..";
import { selectMaxOrder } from "../../selectors/PlanSelector";
import { Plan } from "../../core/Plan";

type PlanCreateFormProps = {
  plan?: Plan;
};

export const PlanCreateForm = ({ plan }: PlanCreateFormProps) => {
  const [description, setDiscription] = useState(plan ? plan.description : "");
  const [name, setName] = useState(plan ? plan.name : "");
  const [day, setDay] = useState<Day>(plan ? plan.day : "Monday");

  const planMaxorder = usePlanStore((state) => selectMaxOrder(state, day));

  let isCreateion = !plan;

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
      id: plan ? plan.id : String(Math.random()),
      name,
      description,
      day,
      order: plan ? plan.order : planMaxorder,
    };

    if (isCreateion) {
      PlanActions.createPlan(planCard);
    } else {
      PlanActions.updatePlan(planCard);
    }

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
        value={name}
        placeholder="Name"
        onChange={OnChangeInputName}
        className="searchFieldForm"
      />
      <input
        type="text"
        value={description}
        placeholder="Description"
        onChange={OnChangeInputDescription}
        className="searchFieldForm"
      />
      <button onClick={onClickPlan} className="createButton">
        {isCreateion ? "Create plan" : "Update plan"}
      </button>
    </form>
  );
};
