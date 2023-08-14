import React from "react";
import ReactDOM from "react-dom";
import classes from "./Modal.module.scss";
import { ModalForm } from "src/widgets/ModalForm";
import { FaX } from "react-icons/fa6";

interface ModalProps {
  show: boolean;
  setShow: (value: boolean) => void;
}

const root = document.getElementById("react-modals")!;

const Modal = ({ show, setShow }: ModalProps) => {
  if (!show) return null;
  return ReactDOM.createPortal(
    <div className={classes.modal}>
      <div className={classes.overlay} onClick={() => setShow(false)}></div>
      <button onClick={() => setShow(false)} className={classes.close_btn}>
        <FaX />
      </button>
      <ModalForm setShow={setShow} />
    </div>,
    root
  );
};

export default Modal;
