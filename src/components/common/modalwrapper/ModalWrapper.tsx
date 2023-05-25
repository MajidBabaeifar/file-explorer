import React from "react";
import "./modalWrapper.scss";
import { IoIosCloseCircleOutline } from "react-icons/io";

const ModalWrapper = ({ children, showModal, setShowModal }) => {
  return (
    showModal && (
      <div
        onClick={() => {
          setShowModal(false);
        }}
        className="backDrop"
      >
        <div
          onClick={(e) => {
            e.stopPropagation();
          }}
          className="modalPop"
        >
          <div className="header">
            <span onClick={() => setShowModal(false)}>
              <IoIosCloseCircleOutline />
            </span>
          </div>
          {children}
        </div>
      </div>
    )
  );
};

export default ModalWrapper;
