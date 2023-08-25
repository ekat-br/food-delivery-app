import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  meals: [],
};

const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    setMeals(state, action) {
      state.meals = action.payload;
    },
  },
});

export const { setMeals } = productSlice.actions;
export default productSlice.reducer;
