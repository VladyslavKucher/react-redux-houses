import { createSlice } from "@reduxjs/toolkit";

const saleRentSlice = createSlice({
  name: 'saleRent',
  initialState: '',
  reducers: {
    setSaleRent: (state, action) => {
      return action.payload;
    },
  },
});

export const { setSaleRent } = saleRentSlice.actions;

export default saleRentSlice.reducer;

