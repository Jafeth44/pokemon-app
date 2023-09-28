import { createSlice } from "@reduxjs/toolkit"

const initialState = {
  userId: '',
  postList: []
}

export const favoritesSlice = createSlice({
  name: 'favorites',
  initialState,
  reducers: {
    setFavorites: (state, action) => {
      state.userId = action.payload.userId,
      state.postList = action.payload.postList
    }
  }
})

export const {setFavorites} = favoritesSlice.actions;