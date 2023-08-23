import { createSlice } from "@reduxjs/toolkit";

const typeSlice = createSlice({
  name: 'type',
  initialState: '',
  reducers: {
    setType: (state, action) => {
      return action.payload;
    },
  },
});

export const { setType } = typeSlice.actions;

export default typeSlice.reducer;
