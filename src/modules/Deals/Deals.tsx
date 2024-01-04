import { usePlanStore } from "../plan";
import { selectNumberOfPlans } from "../plan/selectors/PlanSelector";

import "./Deals.css";

export const Deals = () => {
  const numberOfPlans = usePlanStore((state) => selectNumberOfPlans(state));
  return (
    <div className="deals">
      <h1 id="QAdeals">Deals</h1>
      <p className="deals--numDeals">{numberOfPlans}</p>
    </div>
  );
};
