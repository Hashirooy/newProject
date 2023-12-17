import { PlanState } from "../store";

export const selectModel = (state: PlanState) => state.model;

export const selectModelList = (state: PlanState) => Object.values(state.model);

export const selectListByDay = (state: PlanState, day: string) => {
  const list = selectModelList(state);
  return list.filter((plan) => plan.day === day);
};

export const selectMaxOrder = (state: PlanState, day: string) => {
  const list = selectListByDay(state, day);
  const planMaxOrder = list.map((plan) => plan.order);
  const maxOrder = Math.max(...planMaxOrder);
  if (maxOrder === undefined || maxOrder === -Infinity) {
    return 0;
  } else {
    return maxOrder + 1;
  }
};

export const selectNumberOfPlans = (state: PlanState) => {
  const list = selectModelList(state);
  return list.length;
};
