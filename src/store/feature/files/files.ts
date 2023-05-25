import { createSlice } from "@reduxjs/toolkit";
import { Files } from "../../interfaces";
import { RootState } from "../../store";
import { directory } from "../../../constants/directory";
import { fileAction } from "./file.actions";

const initialState: Files = {
  directory,
  selectedDir: null,
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
