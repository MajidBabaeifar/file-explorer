import React from "react";
import SideAccordion from "../components/sideAccordion/SideAccordion";
import DirectoryView from "../components/directoryView/DirectoryView";

const ExplorerWindow = () => {
  return (
    <div className="row">
      <div className="col-2">
        <SideAccordion />
      </div>
      <div className="col-10">
        <DirectoryView />
      </div>
    </div>
  );
};

export default ExplorerWindow;
