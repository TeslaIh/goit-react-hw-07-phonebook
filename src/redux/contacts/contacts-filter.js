import { createSlice } from '@reduxjs/toolkit';

export const contactSlice = createSlice({
  name: 'filter',
  initialState: '',

  reducers: {
    changeFilter(state, { payload }) {
      state.filter = payload;
    },
  },
});

export const { changeFilter } = contactSlice.actions;
export default contactSlice.reducer;
export const getFilter = state => state.filter.filter;