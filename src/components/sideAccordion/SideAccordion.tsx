import React from "react";
import "./sideAccordion.scss";
import RecursiveAccordion from "./RecursiveAccordion";
import { directory } from "../../constants/directory";

const SideAccordion = () => {
  return (
    <div className="side-accordion">
      {directory.map((dir: any) => (
        <div key={dir.id}>
          <RecursiveAccordion directory={dir} />
        </div>
      ))}
    </div>
  );
};

export default SideAccordion;
