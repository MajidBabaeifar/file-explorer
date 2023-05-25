import React from "react";
import ImageThumbnail from "../thumbnails/ImageThumbnail";
import TextThumbnail from "../thumbnails/TextThumbnail";

interface Props {
  file: any;
}
const FileIcon = ({ file }: Props) => {
  return (
    <span>
      {file?.type === "img" && <ImageThumbnail file={file} />}
      {file?.type === "txt" && <TextThumbnail file={file} />}
    </span>
  );
};

export default FileIcon;
