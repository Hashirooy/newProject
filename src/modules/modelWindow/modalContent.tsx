import { useState } from "react";
import "./modalContent.css";

type ModalContentProps = {
  onClose: () => void;
};

export const ModalContent = ({ onClose }: ModalContentProps) => {
  const [inputValue, setInputValue] = useState("");

  const OnChangeInputValue = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setInputValue(value);
  };
  return (
    <div className="modal">
      <div>
        <p>Choose a day:</p>
        <input type="text" value={inputValue} onChange={OnChangeInputValue} />
      </div>
      <button onClick={onClose}>Close</button>
    </div>
  );
};
