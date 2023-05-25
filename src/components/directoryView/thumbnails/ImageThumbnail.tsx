import React, { useState } from "react";
import ModalWrapper from "../../common/modalwrapper/ModalWrapper";
import { BsCardImage } from "react-icons/bs";

const ImageThumbnail = ({ file }) => {
  const [showModal, setShowModal] = useState(false);
  return (
    <div>
      <ModalWrapper showModal={showModal} setShowModal={setShowModal}>
        <img className="image-modal" src={file?.url} alt={file?.title} />
      </ModalWrapper>
      <div onClick={() => setShowModal(true)} className="m-2 file">
        <BsCardImage size={56} />
        <div>{file.title}</div>
      </div>
    </div>
  );
};

export default ImageThumbnail;
