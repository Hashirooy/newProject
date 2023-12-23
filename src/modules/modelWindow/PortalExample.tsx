import { useState } from "react";
import { createPortal } from "react-dom";
import { ModalContent } from "./modalContent";
import { Plan } from "../plan/core/Plan";

import "./PortalExample.css";

type PortalExampleProps = {};

export const PortalExample = () => {
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
            showModal={showModal}
          />,
          document.body
        )}
    </>
  );
};
