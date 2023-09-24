import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  isLoggedIn: false,
  name: '',
  uid: '',
  profilePicture: ''
}
export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    login: (state, action) => {
      state.isLoggedIn = true;
      state.name = action.payload.name;
      state.uid = action.payload.uid;
      state.profilePicture = action.payload.profilePicture;
    },
    logout: (state) => {
      state.isLoggedIn = false;
      state.name = '';
      state.uid = '';
      state.profilePicture = '';
    }
  },
})

export const { login, logout } = authSlice.actions;