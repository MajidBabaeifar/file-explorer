import React from "react";
import { useSelector } from "react-redux";
import { getFiles } from "../../store/feature/files/files";
import FolderIcon from "./items/FolderIcon";
import FileIcon from "./items/FileIcon";

const DirectoryView = () => {
  const { selectedDir } = useSelector(getFiles);
  return (
    <div>
      <div className="mt-3">
        {selectedDir?.subFolder ? (
          <div>
            {selectedDir?.subFolder?.map((sub: any) => (
              <FolderIcon folder={sub} />
            ))}
          </div>
        ) : (
          selectedDir?.files?.map((file: any) => <FileIcon file={file} />)
        )}
      </div>
    </div>
  );
};

export default DirectoryView;
