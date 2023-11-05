import "./day.css";
import { DayType } from "./dayType";
import { Plan } from "../Types";
import { PlanList } from "../planList/planList";

type DayProps = {
  day: DayType;
  planList: Plan[];
  onEdit: (plan: Plan) => void;
  onDelete: (plan: Plan) => void;
};

export const Day = ({ day, planList, onEdit, onDelete }: DayProps) => {
  return (
    <div className="day">
      <h2>{day.name}</h2>
      <div className="day__planList">
        <PlanList plan={planList} onEdit={onEdit} onDelete={onDelete} />
      </div>
    </div>
  );
};
