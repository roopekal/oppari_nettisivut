import { createSlice } from "@reduxjs/toolkit";

export const winelistSlice = createSlice({
   name: "winelist",
   initialState: { value: { listLink: "" } },
   reducers: {
      updateValue: (state, action) => {
         state.value = action.payload;
      },
   },
});

export const { updateValue } = winelistSlice.actions;

export default winelistSlice.reducer;
