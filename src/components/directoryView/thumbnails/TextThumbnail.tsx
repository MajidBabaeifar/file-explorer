import React, { useState } from "react";
import "./textThumbnail.scss";
import { BsFileEarmarkText } from "react-icons/bs";
import ModalWrapper from "../../common/modalwrapper/ModalWrapper";

const TextThumbnail = ({ file }) => {
  const [showModal, setShowModal] = useState(false);
  return (
    <div>
      <ModalWrapper showModal={showModal} setShowModal={setShowModal}>
        {file?.text}
      </ModalWrapper>
      <div onClick={() => setShowModal(true)} className="m-2 file">
        <BsFileEarmarkText size={56} />
        <div>{file.title}</div>
      </div>
    </div>
  );
};

export default TextThumbnail;
