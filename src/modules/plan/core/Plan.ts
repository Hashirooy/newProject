import { Day } from "../../Types";

export type Plan = {
  id: string;
  order: number;
  name: string;
  description: string;
  day: Day;
};
