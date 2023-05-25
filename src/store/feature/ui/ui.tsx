import { createSlice } from "@reduxjs/toolkit";
import { Ui } from "../../interfaces";
import { RootState } from "../../store";

const initialState: Ui = {
  modalIconsList: [],
};
export const ui = createSlice({
  name: "ui",
  initialState,
  reducers: {
    setUi: (state, action) => {
      return;
    },
  },
});

export const { setUi } = ui.actions;
export const getUiState = (state: RootState) => state.ui;
export default ui.reducer;
