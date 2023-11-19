import { PlanCard } from "../planCard/planCard";
import { Plan } from "../Types";

type PlanListProps = {
  plan: Plan[];
};

export const PlanList = ({ plan }: PlanListProps) => {
  return plan.map((planCard) => <PlanCard plan={planCard} />);
};
