import "./modalContent.css";
import { PlanCreateForm } from "../planCreateForm/planCreateForm";
import { Plan } from "../Types";

type ModalContentProps = {
  onClose: () => void;
  createPlan: (plan: Plan) => void;
};

export const ModalContent = ({ onClose, createPlan }: ModalContentProps) => {
  return (
    <div className="modal">
      <div className="modal-form">
        <h3>Plan create form</h3>
        <PlanCreateForm createPlan={createPlan} />
      </div>
      <button onClick={onClose} className="closeButton">
        Close
      </button>
    </div>
  );
};
