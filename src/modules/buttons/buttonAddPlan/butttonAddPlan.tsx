import "./buttonAddPlan.css";

export const ButtonAddPlan = () => {
  const ButtonAddPlanClick = () => {
    console.log("work");
  };
  return (
    <button className="buttonAddPlan" onClick={ButtonAddPlanClick}>
      <img src="src\assets\plus.svg" />
      Add Plan
    </button>
  );
};
