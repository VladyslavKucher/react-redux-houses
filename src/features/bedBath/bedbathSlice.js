import { createSlice } from "@reduxjs/toolkit";

const bedBathSlice = createSlice({
  name: 'bedBath',
  initialState: {bed: 0, bath: 0},
  reducers: {
    setBed: (bedBath, action) => {
      return {
        ...bedBath,
        bed: action.payload
      }
    },
    setBath: (bedBath, action) => {
      return {
        ...bedBath,
        bath: action.payload
      }
    },
  },
});

export const { setBed, setBath } = bedBathSlice.actions;

export default bedBathSlice.reducer;