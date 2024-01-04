import { useState } from "react";
import { Plan } from "../plan/core/Plan";
import { ButtonFilter } from "../buttons/buttonFilter/buttonFilter";
import { ButtonSetting } from "../buttons/buttonSetting/buttonSetting";
import { ButtonSort } from "../buttons/buttonSort/buttonSort";
import { PortalExample } from "../modelWindow/PortalExample";
import "./filter.css";
import { selectNumberOfPlans } from "../plan/selectors/PlanSelector";
import { usePlanStore } from "../plan";
import { Deals } from "../Deals/Deals";
import { Members } from "../Members/Members";
import { Tags } from "../Tags/Tags";

type FilterProps = {
  plan: Plan[];
};

export const Filter = ({ plan }: FilterProps) => {
  return (
    <div className="filter">
      <div className="filter__content">
        <Deals />
        <div className="filter__intr">
          <Members />
          <PortalExample />
        </div>
      </div>
      <div className="filter__tools">
        <Tags />
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
