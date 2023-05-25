import React from "react";
import "./header.scss";
import { BsTrash } from "react-icons/bs";
import { BsUpload } from "react-icons/bs";
import { BiSelectMultiple } from "react-icons/bi";
import {
  getFiles,
  manipulateDirectory,
} from "../../../store/feature/files/files";
import { useSelector, useDispatch } from "react-redux";
import { fileAction } from "../../../store/feature/files/file.actions";

const Header = () => {
  const dispatch = useDispatch();
  const { selectedDir, selectedFiles } = useSelector(getFiles);
  const selectAll = () => {
    selectedDir?.files?.map((item) =>
      dispatch(
        manipulateDirectory({ type: fileAction.selectFiles, data: item.id })
      )
    );
  };
  const deleteFiles = () => {
    dispatch(manipulateDirectory({ type: fileAction.deleteSelectedFiles }));
  };
  return (
    <div className="main-header">
      <div>
        <span className="me-2">directory : {selectedDir?.title}</span>
      </div>
      <div
        onClick={deleteFiles}
        className={`c-pointer ${
          selectedFiles.length > 0 ? "text-danger" : "text-secondary"
        }`}
      >
        <span className="me-2">delete {selectedFiles.length} files</span>
        <BsTrash size={20} />
      </div>
      <div className="c-pointer" onClick={selectAll}>
        <span className="me-2">select all</span>
        <BiSelectMultiple size={20} />
      </div>
      <div className="c-pointer">
        <span className="me-2">upload here</span>
        <BsUpload size={20} />
      </div>
    </div>
  );
};

export default Header;
