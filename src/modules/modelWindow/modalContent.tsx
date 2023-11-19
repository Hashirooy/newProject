import "./modalContent.css";
import { PlanCreateForm } from "../planCreateForm/planCreateForm";
import { Plan } from "../Types";
import { ModalWindow } from "./modalWindow";

type ModalContentProps = {
  onClose: () => void;
  showModal: boolean;
};

export const ModalContent = ({ onClose, showModal }: ModalContentProps) => {
  return (
    <ModalWindow showModal={showModal}>
      <div className="modal-form">
        <h3>Plan create form</h3>
        <PlanCreateForm />
      </div>
      <button onClick={onClose} className="closeButton">
        Close
      </button>
    </ModalWindow>
  );
};
