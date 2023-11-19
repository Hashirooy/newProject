import { PlanState } from "../store";

export const selectModel = (state: PlanState) => state.model;

export const selectModelList = (state: PlanState) => Object.values(state.model);

export const selectListByDay = (state: PlanState, day: string) => {
  const list = selectModelList(state);
  return list.filter((plan) => plan.day === day);
};
