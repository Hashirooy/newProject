import { usePlanStore } from "../../plan";
import "./buttonFilter.css";
import { PlanSelector } from "../../plan";
import { selectModelList } from "../../plan/selectors/PlanSelector";

export const ButtonFilter = () => {
  const getPlanList = usePlanStore((state) => state.actions.getPlanList);

  const click = () => {
    console.log(getPlanList());
  };
  return (
    <button className="ButtonFilter" onClick={click}>
      Filter
    </button>
  );
};
