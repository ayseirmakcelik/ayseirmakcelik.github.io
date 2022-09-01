import {configureStore} from "@reduxjs/toolkit";
import cursorStyleReducer from "./reducers/cursorStyle";

const store = configureStore({
  reducer: {
    cursorStyleReducer
  },
  devTools: true
})

export default store