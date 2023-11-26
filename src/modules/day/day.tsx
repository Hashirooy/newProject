import "./day.css";
import { DayType } from "./dayType";
import { Plan } from "../Types";
import { PlanList } from "../planList/planList";
import { usePlanStore } from "../plan";
import { selectListByDay } from "../plan/selectors/PlanSelector";

import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";

type DayProps = {
  day: DayType;
};

export const Day = ({ day }: DayProps) => {
  const planList = usePlanStore((state) => selectListByDay(state, day.name));

  return (
    <div className="day">
      <h2>{day.name}</h2>
      <div className="day__planList">
        <PlanList plan={planList} day={day} />
      </div>
    </div>
  );
};
