import { PlanCard } from "../planCard/planCard";

import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";

import { DayType } from "../../../day/dayType";
import { reoderPlan } from "../../actions/PlanActions";
import { Plan } from "../../core/Plan";

type PlanListProps = {
  plan: Plan[];
  day: DayType;
};

export const PlanList = ({ plan, day }: PlanListProps) => {
  const HandleDragDrop = (results: any) => {
    const { source, destination, type } = results;
    const sourceIndex = Number(source.index);
    const destinationIndex = Number(destination.index);
    reoderPlan(sourceIndex, destinationIndex, day.name);
  };

  return (
    <DragDropContext onDragEnd={HandleDragDrop}>
      <Droppable droppableId="ROOT" type="group">
        {(provided) => (
          <div {...provided.droppableProps} ref={provided.innerRef}>
            {plan
              .sort((a, b) => a.order - b.order)
              .map((planCard, index) => (
                <PlanCard key={planCard.id} plan={planCard} index={index} />
              ))}
            {provided.placeholder}
          </div>
        )}
      </Droppable>
    </DragDropContext>
  );
};
