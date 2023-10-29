import { ButtonAddPlan } from "../buttons/buttonAddPlan/butttonAddPlan";
import { ButtonFilter } from "../buttons/buttonFilter/buttonFilter";
import { ButtonSetting } from "../buttons/buttonSetting/buttonSetting";
import { ButtonSort } from "../buttons/buttonSort/buttonSort";
import { PortalExample } from "../modelWindow/modelWindow";
import "./filter.css";

export const Filter = () => {
  return (
    <div className="filter">
      <div className="filter__content">
        <h1>DEALS</h1>
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
