import { createSlice } from "@reduxjs/toolkit";
import { Files } from "../../interfaces";
import { RootState } from "../../store";

const initialState: Files = {};
export const files = createSlice({
  name: "files",
  initialState,
  reducers: {
    setFiles: (state, action) => {
      return;
    },
  },
});

export const { setFiles } = files.actions;
export const getUiState = (state: RootState) => state.ui;
export default files.reducer;
