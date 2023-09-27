import { Plan } from "../Types";
import "./PlanList.css";

type PlanListProps = {
  planList: Plan[];
};

export const PlanList = ({ planList }: PlanListProps) => {
  return (
    <div>
      {planList.map((item) => (
        <div className="planList">
          <h2 className="planTitle">{item.name}</h2>
          <p className="plan">{item.discription}</p>
        </div>
      ))}
    </div>
  );
};
