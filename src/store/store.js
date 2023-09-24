import { configureStore } from "@reduxjs/toolkit";
import {authSlice} from "./slices/authSlice";
import _ from 'lodash';
import { loadState, saveState } from "./helpers/localStorage";
import { userApi } from "./services/users.service";

export const store = configureStore({
  preloadedState: loadState(),
  reducer: {
    auth: authSlice.reducer,
    [userApi.reducerPath]: userApi.reducer,
  },
  middleware: defaultMiddleWare => 
    defaultMiddleWare().concat(userApi.middleware)
  
})

//cada vez que cambie el estado guarda un snapshot en el localStorage
store.subscribe(_.throttle(() => {
  saveState({
    auth: store.getState().auth,
  });
}, 1000));