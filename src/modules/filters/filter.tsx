import { useState } from "react";
import { Plan } from "../Types";
import { ButtonFilter } from "../buttons/buttonFilter/buttonFilter";
import { ButtonSetting } from "../buttons/buttonSetting/buttonSetting";
import { ButtonSort } from "../buttons/buttonSort/buttonSort";
import { PortalExample } from "../modelWindow/PortalExample";
import "./filter.css";
import { selectNumberOfPlans } from "../plan/selectors/PlanSelector";
import { usePlanStore } from "../plan";

type FilterProps = {
  plan: Plan[];
};

export const Filter = ({ plan }: FilterProps) => {
  const numberOfPlans = usePlanStore((state) => selectNumberOfPlans(state));
  return (
    <div className="filter">
      <div className="filter__content">
        <div className="filter__deals">
          <h1>Deals</h1>
          <p className="numDeals">{numberOfPlans}</p>
        </div>
        <PortalExample />
      </div>
      <div className="filter__tools">
        <div className="filter__tools-tags">
          <h4>In progress</h4>
          <h4>Completed</h4>
          <h4>Archived</h4>
        </div>
        <div className="filter__tools-buttons">
          <ButtonFilter />
          <ButtonSetting />
          <div className="filter__tools-buttons-line"></div>
          <ButtonSort />
        </div>
      </div>
    </div>
  );
};
