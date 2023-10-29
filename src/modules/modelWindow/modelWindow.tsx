import { useState } from "react";
import { createPortal } from "react-dom";
import { ModalContent } from "./modalContent";

import "./modelWindow.css";

export const PortalExample = () => {
  const [showModal, setShowModal] = useState(false);
  return (
    <>
      <button className="addPlanButton" onClick={() => setShowModal(true)}>
        Add plan
      </button>
      {showModal &&
        createPortal(
          <ModalContent onClose={() => setShowModal(false)} />,
          document.body
        )}
    </>
  );
};
