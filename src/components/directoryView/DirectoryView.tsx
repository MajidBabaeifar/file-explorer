import React from "react";
import { useSelector } from "react-redux";
import { getFiles } from "../../store/feature/files/files";
import FolderIcon from "./items/FolderIcon";
import FileIcon from "./items/FileIcon";

const DirectoryView = () => {
  const { selectedDir, deletedFiles } = useSelector(getFiles);
  return (
    <div>
      <div>
        hint*
        <br />
        Click left : open - Click right : select file
      </div>
      <div className="mt-3">
        {selectedDir?.subFolder ? (
          <div>
            {selectedDir?.subFolder?.map(
              (sub: any) =>
                !deletedFiles.includes(sub.id) && <FolderIcon folder={sub} />
            )}
          </div>
        ) : (
          selectedDir?.files?.map(
            (file: any) =>
              !deletedFiles.includes(file.id) && <FileIcon file={file} />
          )
        )}
      </div>
    </div>
  );
};

export default DirectoryView;
