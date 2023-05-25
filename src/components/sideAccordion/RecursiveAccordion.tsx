import Collapse from "@kunukn/react-collapse";
import React, { useState } from "react";
import "./recursiveAccordion.scss";
import { BsFolder } from "react-icons/bs";
import { getFiles, manipulateDirectory } from "../../store/feature/files/files";
import { useDispatch, useSelector } from "react-redux";
import { fileAction } from "../../store/feature/files/file.actions";

interface Props {
  directory: any;
}

const RecursiveAccordion = ({ directory }: Props) => {
  const [isOpen, setIsOpen] = useState(false);
  const { selectedDir } = useSelector(getFiles);
  const dispatch = useDispatch();
  const setSelectedDir = () => {
    dispatch(
      manipulateDirectory({ type: fileAction.selectDir, data: directory })
    );
  };
  return (
    <div className="accordion mt-2">
      {directory?.subFolders ? (
        <div>
          <div className="d-flex">
            <div className="me-2">
              <BsFolder />
            </div>
            <div onClick={() => setIsOpen((s) => !s)}>{directory?.title}</div>
          </div>
          <Collapse transition="height 0.3s" isOpen={isOpen}>
            {directory?.subFolders?.map((subFolder: any) => (
              <RecursiveAccordion directory={subFolder} />
            ))}
          </Collapse>
        </div>
      ) : (
        <>
          <div
            onClick={setSelectedDir}
            className={`${
              selectedDir?.id === directory?.id ? "text-primary" : ""
            } d-flex`}
          >
            <div className="me-2">
              <BsFolder />
            </div>
            <div>{directory?.title}</div>
          </div>
        </>
      )}
    </div>
  );
};

export default RecursiveAccordion;
