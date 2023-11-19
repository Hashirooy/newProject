import { Plan, usePlanStore } from "..";
import { selectModelList } from "../selectors/PlanSelector";

export const createPlan = (plan: Plan.Plan) => {
  usePlanStore.setState((prev) => {
    return {
      ...prev,
      model: {
        ...prev.model,
        [plan.id]: plan,
      },
    };
  });
};

export const updatePlan = (plan: Plan.Plan) => {
  const planList = usePlanStore((state) => {
    const list = selectModelList(state);
    return list.map((item) => (item.id === plan.id ? plan : item));
  });
};

export const deletePlan = (plan: Plan.Plan) => {
  const planList = usePlanStore((state) => {
    const list = selectModelList(state);
    list.filter((item) => item.id !== plan.id);
  });
};

export const getPlanList = () => {
  const planList = usePlanStore((state) => selectModelList(state));
  return planList;
};
