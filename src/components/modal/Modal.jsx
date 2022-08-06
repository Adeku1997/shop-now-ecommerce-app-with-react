import React, { useState } from "react";
import "./modal.styles.scss";

const Modal = ({ show, setShow }) => {
  return (
    <div className="modal-container" show={show}>
      <p>not integrated with a payment service yet </p>
      <button className="modal-btn" onClick={() => setShow(false)}>
        close
      </button>
    </div>
  );
};

export default Modal;
