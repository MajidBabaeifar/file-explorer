import Collapse from "@kunukn/react-collapse";
import React, { useState } from "react";
import "./recursiveAccordion.scss";

interface Props {
  directory: any;
}

const RecursiveAccordion = ({ directory }: Props) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="accordion">
      {directory?.subFolders ? (
        <div>
          <div>
            
            <div onClick={() => setIsOpen((s) => !s)}>{directory?.title}</div>
          </div>
          <Collapse transition="height 0.3s" isOpen={isOpen}>
            {directory?.subFolders?.map((subFolder: any) => (
              <RecursiveAccordion directory={subFolder} />
            ))}
          </Collapse>
        </div>
      ) : (
        <div>{directory?.title}</div>
      )}
    </div>
  );
};

export default RecursiveAccordion;
