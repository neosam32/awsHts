import { createSlice } from "@reduxjs/toolkit";
/*
export const counterSlice = createSlice({
  name: "counter",
  initialState: {
    number: 0,
    username: "",
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
*/
export const tokenSlice = createSlice({
  name: "token",
  initialState: {
    grantType: "",
    accessToken: "",
    refreshToken: "",
    accessTokenExpiresIn: "",
    email: "",
    brId: "",
  },
  reducers: {
    setGrantType: (state, action) => {
      state.grantType = action.payload;
    },
    setAccessToken: (state, action) => {
      state.accessToken = action.payload;
    },
    setRefreshToken: (state, action) => {
      state.refreshToken = action.payload;
    },
    setAccessTokenExpiresIn: (state, action) => {
      state.accessTokenExpiresIn = action.accessTokenExpiresIn;
    },
    setEmail: (state, action) => {
      state.email = action.email;
    },
    setBrId: (state, action) => {
      state.brId = action.brId;
    },
  },
});
// Action creators are generated for each case reducer function
export const {
  setGrantType,
  setAccessToken,
  setRefreshToken,
  setAccessTokenExpiresIn,
  setEmail,
  setBrId,
} = tokenSlice.actions;

export default tokenSlice.reducer;
