import "./modalWindow.css";

type ModalProps = {
  showModal: boolean;
  children: React.ReactNode;
};

export const ModalWindow = ({ showModal, children }: ModalProps) => {
  return (
    <div className={showModal ? "modal active" : "modal"}>
      <div className="modal-content">{children}</div>
    </div>
  );
};
