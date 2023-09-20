import { configureStore } from "@reduxjs/toolkit";
import {authSlice} from "./slices/authSlice";
import _ from 'lodash';
import { loadState, saveState } from "./localStorage";

export const store = configureStore({
  preloadedState: loadState(),
  reducer: {
    auth: authSlice.reducer
  },
})

store.subscribe(_.throttle(() => {
  saveState({
    auth: store.getState().auth
  });
}, 1000));