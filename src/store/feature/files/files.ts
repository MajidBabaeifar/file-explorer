import { createSlice } from "@reduxjs/toolkit";
import { Files } from "../../interfaces";
import { RootState } from "../../store";
import { directory } from "../../../constants/directory";
import { fileAction } from "./file.actions";

const initialState: Files = {
  directory,
  selectedDir: null,
  selectedFiles: [],
  deletedFiles: [],
};
export const files = createSlice({
  name: "files",
  initialState,
  reducers: {
    manipulateDirectory: (state, action) => {
      const { type, data }: { type: string; data: any } = action.payload;
      switch (type) {
        case fileAction.selectDir:
          state.selectedDir = data;
          break;
        case fileAction.toggleSelectFiles:
          if (state.selectedFiles.includes(data)) {
            state.selectedFiles = state.selectedFiles.filter(
              (id) => id !== data
            );
          } else {
            state.selectedFiles = [...state.selectedFiles, data];
          }
          break;
        case fileAction.selectFiles:
          if (state.selectedFiles.includes(data)) {
            return;
          } else {
            state.selectedFiles = [...state.selectedFiles, data].filter(
              (id) => !state.deletedFiles.includes(id)
            );
          }
          break;
        case fileAction.deleteSelectedFiles:
          state.deletedFiles = [...state.deletedFiles, ...state.selectedFiles];
          state.selectedFiles = [];
          break;
        default:
          break;
      }
      return;
    },
  },
});

export const { manipulateDirectory } = files.actions;
export const getFiles = (state: RootState) => state.files;
export default files.reducer;
