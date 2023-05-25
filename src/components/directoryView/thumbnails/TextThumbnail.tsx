import React, { useState } from "react";
import "./textThumbnail.scss";
import { BsFileEarmarkText } from "react-icons/bs";
import ModalWrapper from "../../common/modalwrapper/ModalWrapper";
import {
  getFiles,
  manipulateDirectory,
} from "../../../store/feature/files/files";
import { useDispatch, useSelector } from "react-redux";
import { fileAction } from "../../../store/feature/files/file.actions";

const TextThumbnail = ({ file }) => {
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
        {file?.text}
      </ModalWrapper>
      <div
        onContextMenu={handleClick}
        onClick={handleClick}
        className={`m-2 file ${
          selectedFiles.includes(file.id) ? "selectedFile" : ""
        }`}
      >
        {}
        <BsFileEarmarkText size={56} />
        <div>{file.title}</div>
      </div>
    </div>
  );
};

export default TextThumbnail;
