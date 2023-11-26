import { useState } from "react";
import { Plan } from "../Types";
import { PlanCreateForm } from "../planCreateForm/planCreateForm";
import "./planCard.css";
import { PlanActions } from "../plan/actions";
import { usePlanStore } from "../plan";

import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";

type PlanCardPropd = {
  plan: Plan;
  index: number;
};

export const PlanCard = ({ plan, index }: PlanCardPropd) => {
  const [edit, setEdit] = useState(false);
  const deletePlan = usePlanStore((state) => state.actions.deletePlan);

  const onDoubleClick = () => setEdit((editPrev) => !edit);

  const closeWinwod = () => {
    setEdit((editPrev) => !edit);
  };

  const onDeleteButton = () => {
    PlanActions.deletePlan(plan);
    //deletePlan(plan.id);
  };

  return (
    <Draggable draggableId={plan.id} key={plan.id} index={index}>
      {(provided) => (
        <div
          className="planCard"
          onDoubleClick={onDoubleClick}
          {...provided.dragHandleProps}
          {...provided.draggableProps}
          ref={provided.innerRef}
        >
          {edit === false && (
            <div>
              <div className="planCard__title">
                <h3 className="planCard_title--h3">{plan.name}</h3>
                <p>#{plan.id}</p>
              </div>
              <div className="planCard__text">
                <p className="planCard--p">{plan.description}</p>
              </div>
              <div className="planCard_text__data"></div>
            </div>
          )}
          {edit === true && (
            <div>
              <PlanCreateForm plan={plan} />
              <div className="optionButtons">
                <button className="optionButtons_buttons" onClick={closeWinwod}>
                  Х
                </button>
                <button
                  className="optionButtons_buttons"
                  onClick={onDeleteButton}
                >
                  Delete
                </button>
              </div>
            </div>
          )}
        </div>
      )}
    </Draggable>
  );
};
