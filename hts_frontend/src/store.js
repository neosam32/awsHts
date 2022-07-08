import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./counterSlice";

// counter: counterReducer,
export default configureStore({
  reducer: {
    token: counterReducer,
  },
});
