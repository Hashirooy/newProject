import { usePlanStore } from "../../plan";
import "./buttonFilter.css";
import { PlanSelector } from "../../plan";
import { selectModelList } from "../../plan/selectors/PlanSelector";

export const ButtonFilter = () => {
  const list = usePlanStore((state) => selectModelList(state));
  const click = () => {
    console.log(list);
  };

  return (
    <button className="ButtonFilter" onClick={click}>
      Filter
    </button>
  );
};
