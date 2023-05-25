import React from "react";
import SideAccordion from "../components/sideAccordion/SideAccordion";
import DirectoryView from "../components/directoryView/DirectoryView";
import Header from "../components/common/header/Header";

const ExplorerWindow = () => {
  return (
    <div className="explorer-window">
      <div className="row">
        <Header />
      </div>
      <div className="row">
        <div className="col-3">
          <SideAccordion />
        </div>
        <div className="col-9">
          <DirectoryView />
        </div>
      </div>
    </div>
  );
};

export default ExplorerWindow;
