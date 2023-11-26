import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";

import { Plan } from "../core";

export type PlanState = {
  model: Record<string, Plan.Plan>;
  actions: {
    deletePlan: (planId: string) => void;
    getPlanList: () => Plan.Plan[];
  };
};

export const usePlanStore = create<PlanState>((set, get) => ({
  model: {},
  actions: {
    deletePlan: (planId) => {
      const { [planId]: toDelete, ...rest } = get().model;
      set({ model: rest });
    },
    getPlanList: () => Object.values(get().model),
  },
}));
