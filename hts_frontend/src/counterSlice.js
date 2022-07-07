import { createSlice } from '@reduxjs/toolkit';

export const counterSlice = createSlice({
  name: 'counter',
  initialState: {
    number: 0,
    username: '',
  },
  reducers: {
    increment: (state, action) => {
      state.number += 1;
      state.username = action.payload;
    },
    decrement: (state, action) => {
      state.number -= 1;
      state.username = action.payload;
    },
    incrementByAmount: (state, action) => {
      state.number += action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { increment, decrement, incrementByAmount } = counterSlice.actions;

export default counterSlice.reducer;
