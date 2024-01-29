import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
// under the hood it uses RTK query...
// which is the lib for interacting with backend api.. and thunk middleware is built inn..

const baseQuery = fetchBaseQuery({ baseUrl: ""})

export const apiSlice = createApi({
    baseQuery,
    tagTypes: ['User'],
    endpoints: (builder) => ({}),
})