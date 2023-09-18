import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const api = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:5000/api/v1" }),
  endpoints: (builder) => ({
    getAllBooks: builder.query({
      query: (queryParams) =>
        `/books?${new URLSearchParams(queryParams).toString()}`,
    }),
    listNewBook: builder.mutation({
      query: ({ data, accessToken }) => ({
        url: `/books/list-book`,
        method: "POST",
        body: data,
        headers: {
          Authorization: accessToken,
        },
      }),
    }),
    editBook: builder.mutation({
      query: ({ id, data, accessToken }) => ({
        url: `/books/${id}`,
        method: "PATCH",
        body: data,
        headers: {
          Authorization: accessToken,
        },
      }),
    }),
    getSingleBook: builder.query({
      query: (id) => `/books/${id}`,
    }),
    postReview: builder.mutation({
      query: ({ id, data, accessToken }) => ({
        url: `/books/reviews/${id}`,
        method: "PATCH",
        body: data,
        headers: {
          Authorization: accessToken,
        },
      }),
    }),
    createUser: builder.mutation({
      query: (data) => ({
        url: `/users/signup`,
        method: "POST",
        body: data,
      }),
    }),
    userLogin: builder.mutation({
      query: (data) => ({
        url: `/users/login`,
        method: "POST",
        body: data,
      }),
    }),
  }),
});

export const {
  useGetAllBooksQuery,
  useListNewBookMutation,
  useEditBookMutation,
  useGetSingleBookQuery,
  usePostReviewMutation,
  useUserLoginMutation,
  useCreateUserMutation,
} = api;
