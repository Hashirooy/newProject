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

export const deletePlan = (plan: Plan.Plan) => {
  usePlanStore.setState((prev) => {
    const { [plan.id]: toDelete, ...rest } = prev.model;
    return {
      ...prev,
      model: rest,
    };
  });
};

export const reoderPlan = (plan: Plan.Plan) => {
  usePlanStore.setState((prev) => {
    return {
      ...prev,
      model: {
        plan,
      },
    };
  });
};
