import "./buttonAddPlan.css";

export const ButtonAddPlan = () => {
  const ButtonAddPlanClick = () => {
    console.log("work");
  };
  return (
    <button className="buttonAddPlan" onClick={ButtonAddPlanClick}>
      Add Plan
    </button>
  );
};
