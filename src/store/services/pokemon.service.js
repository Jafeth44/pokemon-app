import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/dist/query/react";


export const pokemonApi = createApi({
  reducerPath: 'pokemonData',
  baseQuery: fetchBaseQuery({ baseUrl: import.meta.env.VITE_SERVER_URL || 'http://localhost:6969' }),
  tagTypes: ['Pokemon'],
  endpoints: (builder) => ({
    getPokeFavList: builder.mutation({
      query: (payload) => ({
        url: 'posts',
        method: 'POST',
        body: payload
      }),
      providesTags: ['Pokemon']
    })
  })
}) 

export const {useGetPokeFavListMutation} = pokemonApi;