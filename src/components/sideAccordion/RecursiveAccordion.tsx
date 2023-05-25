import Collapse from "@kunukn/react-collapse";
import React, { useState } from "react";

interface Props {
  directory: any;
}

const RecursiveAccordion = ({ directory }: Props) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div>
      {directory?.subFolders ? (
        <>
          <div onClick={() => setIsOpen((s) => !s)}>{directory?.title}</div>
          <Collapse transition="height 0.3s" isOpen={isOpen}>
            {directory?.subFolders?.map((subFolder: any) => (
              <RecursiveAccordion directory={subFolder} />
            ))}
          </Collapse>
        </>
      ) : (
        <div>{directory?.title}</div>
      )}
    </div>
  );
};

export default RecursiveAccordion;
