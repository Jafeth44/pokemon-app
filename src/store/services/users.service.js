import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';


export const userApi = createApi({
  reducerPath: 'userAuth',
  baseQuery: fetchBaseQuery({ baseUrl: import.meta.env.VITE_SERVER_URL || `http://localhost:6969` }),
  tagTypes: ['Users'],
  endpoints: (builder) => ({
    getUsersList: builder.query({
      query: () => 'users',
      providesTags: ['Users']
    }),
    registerUser: builder.mutation({
      query: (payload) => ({
        url: 'users/register',
        method: 'POST',
        body: payload
      }),
      invalidatesTags: ['Users']
    }),
    loginUser: builder.mutation({
      query: (payload) => ({
        url: 'users/login',
        method: 'POST',
        body: payload
      }),
      invalidatesTags: ['Users']
    })
  })
})

export const {useGetUsersListQuery, useRegisterUserMutation, useLoginUserMutation} = userApi;