import { createSlice } from "@reduxjs/toolkit";

export const platesSlice = createSlice({
  name: "plates",
  initialState: {
    selectedCategory: "ALL",
  },
  reducers: {
    filterCategory: (state, action) => {
      state.selectedCategory = action.payload;
    },
  },
});

export const getSelectedCategory = (state) => state.plates.selectedCategory;
export const { filterCategory } = platesSlice.actions;
export default platesSlice.reducer;
