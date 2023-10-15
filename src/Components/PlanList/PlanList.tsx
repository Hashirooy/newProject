import { PlanCard } from "../PlanCard/PlanCard";
import { Plan } from "../Types";
import "./PlanList.css";

type PlanListProps = {
  planList: Plan[];
  onEdit: (plan: Plan) => void;
  onDelete: (plan: Plan) => void;
};

export const PlanList = ({ planList, onEdit, onDelete }: PlanListProps) => {
  return (
    <div>
      {planList.map((plan) => (
        <PlanCard plan={plan} onEdit={onEdit} onDelete={onDelete} />
      ))}
    </div>
  );
};
