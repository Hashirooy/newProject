import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";

import { Plan } from "../core";

export type PlanState = {
  model: Record<string, Plan.Plan>;
};

export const usePlanStore = create<PlanState>((set) => ({
  model: {
    asdfasdfsd: {
      id: "asdfasdfsd",
      day: "Monday",
      name: "Mock",
      description: "Mock",
    },
  },
}));
