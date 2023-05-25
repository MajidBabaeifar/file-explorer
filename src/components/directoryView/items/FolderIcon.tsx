import React from "react";
import { BsFolder } from "react-icons/bs";

interface Props {
  folder: any;
}
const FolderIcon = ({ folder }: Props) => {
  return (
    <div>
      <BsFolder />
      <div>{folder.title}</div>
    </div>
  );
};

export default FolderIcon;
