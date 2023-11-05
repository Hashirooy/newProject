import { PlanCard } from "../planCard/planCard";
import { Plan } from "../Types";

type PlanListProps = {
  plan: Plan[];
  onEdit: (plan: Plan) => void;
  onDelete: (plan: Plan) => void;
};

export const PlanList = ({ plan, onEdit, onDelete }: PlanListProps) => {
  return plan.map((planCard) => (
    <PlanCard plan={planCard} onEdit={onEdit} onDelete={onDelete} />
  ));
};
