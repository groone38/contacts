import React from "react";
import ReactDOM from "react-dom";
import classes from "./Modal.module.scss";
import { ModalForm } from "src/entities/ModalForm";
import Close from "../../../shared/img/Close.svg";

interface ModalProps {
  show: boolean;
  setShow: (x: boolean) => void;
}

const root = document.getElementById("react-modals")!;

const Modal = ({ show, setShow }: ModalProps) => {
  if (!show) return null;
  return ReactDOM.createPortal(
    <div className={classes.modal}>
      <div className={classes.overlay}></div>
      <button onClick={() => setShow(false)} className={classes.close_btn}>
        <img src={Close} alt="close" />
      </button>
      <ModalForm setShow={setShow} />
    </div>,
    root
  );
};

export default Modal;
