import "./day.css";
import { DayType } from "./dayType";

import { Plan } from "../Types";
import { useState } from "react";
import { PlanCreateForm } from "../planCreateForm/planCreateForm";

type DayProps = {
  day: DayType;
  planList: Plan[];
};

export const Day = ({ day, planList }: DayProps) => {
  const [edit, setEdit] = useState(false);

  const Edit = () => {
    setEdit((editPrev) => !edit);
  };

  const doubleClick = () => {
    console.log("work");
    setEdit(true);
  };
  return (
    <div className="day">
      <h2>{day.name}</h2>
      {edit === false && (
        <div className="day__planList">
          {planList.map((plan) => (
            <div className="planCard" onDoubleClick={doubleClick}>
              <div className="planCard__title">
                <h3 className="planCard_title--h3">{plan.name}</h3>
                <p>#{plan.id}</p>
              </div>
              <div className="planCard__text">
                <p className="planCard--p">{plan.description}</p>
              </div>
              <div className="planCard_text__data"></div>
            </div>
          ))}
        </div>
      )}
      <div>
        {edit && (
          <div className="PlanCardPlanAction">
            <PlanCreateForm plan={planList} createPlan={doubleClick} />
            <button onClick={Edit}>{edit ? "X" : "Edit"}</button>
          </div>
        )}
      </div>
    </div>
  );
};
