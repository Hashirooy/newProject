import { useState } from "react";
import { PlanCard } from "../planCard/planCard";
import { Plan } from "../Types";

import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import { PlanState, usePlanStore } from "../plan";
import {
  selectListByDay,
  selectModel,
  selectModelList,
} from "../plan/selectors/PlanSelector";
import { DayType } from "../day/dayType";
import { reoderPlan } from "../plan/actions/PlanActions";

type PlanListProps = {
  plan: Plan[];
  day: DayType;
};

export const PlanList = ({ plan, day }: PlanListProps) => {
  const planListFromStore = usePlanStore((state) =>
    selectListByDay(state, day.name)
  );

  const model = usePlanStore((state) => selectModel(state));

  const [planDrag, setPlanDrag] = useState<Plan[]>(planListFromStore);

  const HandleDragDrop = (results: any) => {
    const { source, destination, type } = results;

    if (!destination) return;

    if (
      source.draggableId === destination.droppableId &&
      source.index === destination.id
    )
      return;

    if (type === "group") {
      const reorderStores = [...planListFromStore];
      const sourceIndex = source.index;
      const disIndex = destination.index;
      const [removed] = reorderStores.splice(sourceIndex, 1);
      reorderStores.splice(disIndex, 0, removed);
    }
  };

  return (
    <DragDropContext onDragEnd={HandleDragDrop}>
      <Droppable droppableId="ROOT" type="group">
        {(provided) => (
          <div {...provided.droppableProps} ref={provided.innerRef}>
            {plan.map((planCard, index) => (
              <PlanCard key={planCard.id} plan={planCard} index={index} />
            ))}
            {provided.placeholder}
          </div>
        )}
      </Droppable>
    </DragDropContext>
  );
};
function sselectListByDay(state: PlanState, name: string): any {
  throw new Error("Function not implemented.");
}
