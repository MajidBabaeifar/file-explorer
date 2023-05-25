import React, { useState } from "react";
import ModalWrapper from "../../common/modalwrapper/ModalWrapper";
import { BsCardImage } from "react-icons/bs";
import {
  getFiles,
  manipulateDirectory,
} from "../../../store/feature/files/files";
import { useDispatch, useSelector } from "react-redux";
import { fileAction } from "../../../store/feature/files/file.actions";

const ImageThumbnail = ({ file }) => {
  const [showModal, setShowModal] = useState(false);
  const dispatch = useDispatch();
  const { selectedFiles } = useSelector(getFiles);

  function handleClick(e) {
    e.preventDefault();
    if (e.type === "click") {
      setShowModal(true);
    } else if (e.type === "contextmenu") {
      dispatch(
        manipulateDirectory({
          type: fileAction.toggleSelectFiles,
          data: file?.id,
        })
      );
    }
  }
  return (
    <div>
      <ModalWrapper showModal={showModal} setShowModal={setShowModal}>
        <img className="image-modal" src={file?.url} alt={file?.title} />
      </ModalWrapper>
      <div
        onContextMenu={handleClick}
        onClick={handleClick}
        className={`m-2 file ${
          selectedFiles.includes(file.id) ? "selectedFile" : ""
        }`}
      >
        <BsCardImage size={56} />
        <div>{file.title}</div>
      </div>
    </div>
  );
};

export default ImageThumbnail;
