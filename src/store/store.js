import { configureStore } from "@reduxjs/toolkit";
import {authSlice} from "./slices/authSlice";
import _ from 'lodash';
import { loadState, saveState } from "./helpers/localStorage";
import { userApi } from "./services/users.service";
import { pokemonApi } from "./services/pokemon.service";
import { favoritesSlice } from "./slices/favoritesSlice";

export const store = configureStore({
  preloadedState: loadState(),
  reducer: {
    auth: authSlice.reducer,
    favorites: favoritesSlice.reducer,
    [userApi.reducerPath]: userApi.reducer,
    [pokemonApi.reducerPath]: pokemonApi.reducer,
  },
  middleware: defaultMiddleWare => 
    defaultMiddleWare().concat(userApi.middleware).concat(pokemonApi.middleware)
})

//cada vez que cambie el estado guarda un snapshot en el localStorage
store.subscribe(_.throttle(() => {
  saveState({
    auth: store.getState().auth,
    favorites: store.getState().favorites
  });
}, 1000));