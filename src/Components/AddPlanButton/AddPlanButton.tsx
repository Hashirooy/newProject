import { useState } from "react";
export const AddPlanButton = () => {
  const [openForm, setOpenForm] = useState(false);
  return (
    <div>
      <button>Add Plan</button>
    </div>
  );
};
