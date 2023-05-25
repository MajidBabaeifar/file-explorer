import React from "react";
import SideAccordion from "../components/sideAccordion/SideAccordion";
import DirectoryView from "../components/directoryView/DirectoryView";

const ExplorerWindow = () => {
  return (
    <div className="row">
      <div className="col-3">
        <SideAccordion />
      </div>
      <div className="col-9">
        <DirectoryView />
      </div>
    </div>
  );
};

export default ExplorerWindow;
