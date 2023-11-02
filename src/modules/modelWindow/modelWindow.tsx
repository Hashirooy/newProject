import { useState } from "react";
import { createPortal } from "react-dom";
import { ModalContent } from "./modalContent";
import { Plan } from "../Types";

import "./modelWindow.css";

type PortalExampleProps = {
  createPlan: (plan: Plan) => void;
};

export const PortalExample = ({ createPlan }: PortalExampleProps) => {
  const [showModal, setShowModal] = useState(false);
  return (
    <>
      <button className="addPlanButton" onClick={() => setShowModal(true)}>
        Add plan
      </button>
      {showModal &&
        createPortal(
          <ModalContent
            onClose={() => setShowModal(false)}
            createPlan={createPlan}
          />,
          document.body
        )}
    </>
  );
};
