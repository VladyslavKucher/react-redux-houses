import { createSlice } from "@reduxjs/toolkit";

const priceSlice = createSlice({
  name: 'price',
  initialState: {min: 0, max: 0},
  reducers: {
    setMinPrice: (price, action) => {
      return {
        ...price,
        min: action.payload
      }
    },
    setMaxPrice: (price, action) => {
      return {
        ...price,
        max: action.payload
      }
    },
  },
});

export const { setMinPrice, setMaxPrice } = priceSlice.actions;

export default priceSlice.reducer;