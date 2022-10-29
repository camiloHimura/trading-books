import { createSlice } from '@reduxjs/toolkit';

const toogleSlice = createSlice({
  name: 'toogle',
  initialState: { isOn: false, fact: undefined },
  reducers: {
    toogle(state) {
      state.isOn = !state.isOn;
    },
  },
});

export const toogleActions = toogleSlice.actions;

export default toogleSlice;
