import React, { ReactNode } from "react";
import { ModalProps } from "../lib/definitions";

const Modal = ({ isOpen, onClose, children }: ModalProps) => {
  const modalClass = isOpen ? "block" : "hidden";

  return (
    <div
      className={`fixed inset-0  bg-opacity-50 ${modalClass}`}
      onClick={onClose}
    >
      <div className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2  p-4 flex flex-col items-center justify-center shadow-[rgba(7,_65,_210,_0.1)_0px_9px_30px] gap-3">
        {children}
      </div>
    </div>
  );
};

export default Modal;
