import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  isLoggedIn: false,
  name: '',
  token: ''
}
export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    login: (state, action) => {
      state.isLoggedIn = true;
      state.name = action.payload.name;
      state.token = action.payload.token;
    },
    logout: (state) => {
      state.isLoggedIn = false;
      state.name = '',
      state.token = ''
    }
  },
})

export const { login, logout } = authSlice.actions;