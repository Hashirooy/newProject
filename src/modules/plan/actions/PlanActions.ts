import { Plan, usePlanStore } from "..";
import { selectListByDay, selectModelList } from "../selectors/PlanSelector";

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

export const reoderPlan = (
  sourceIndex: number,
  destinationindex: number,
  day: string
) => {
  const state = usePlanStore.getState();
  const planModel = state.model;
  const planModelNew = { ...planModel };

  const planByDat = selectListByDay(state, day);

  const planList = planByDat.sort((a, b) => a.order - b.order);

  const reoderPlanList = moveElement(planList, sourceIndex, destinationindex);

  reoderPlanList.forEach((plan, index) => {
    const planNew = { ...plan, order: index };
    planModelNew[plan.id] = planNew;
  });

  usePlanStore.setState((prev) => {
    return { ...prev, model: planModelNew };
  });

  return reoderPlanList;
};

export const removeElementByIndex = (list: any[], index: number) => {
  list.splice(index, 1);
  return list;
};

export const insertElementByIndex = (
  list: any[],
  element: any,
  index: number
) => {
  return [...list.slice(0, index), element, ...list.slice(index)];
};

export const moveElement = (
  list: any[],
  sourceIndex: number,
  destinationindex: number
) => {
  const element = list[sourceIndex];
  const list1 = removeElementByIndex(list, sourceIndex);
  const newList = insertElementByIndex(list1, element, destinationindex);
  return newList;
};
