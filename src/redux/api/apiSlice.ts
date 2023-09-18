import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { selectAccessToken } from "../selectors";
import { RootState } from "../store";

export const api = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:5000/api/v1",
    prepareHeaders: (headers, { getState }) => {
      const state = getState() as RootState;
      const accessToken = selectAccessToken(state);
      if (accessToken) {
        headers.set("Authorization", accessToken);
      }
      return headers;
    },
  }),
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

    deleteBook: builder.mutation({
      query: ({ id, accessToken }) => ({
        url: `/books/${id}`,
        method: "DELETE",
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

    addToWishList: builder.mutation({
      query: ({ id, accessToken }) => ({
        url: `/users/wishlist/${id}`,
        method: "PATCH",
        headers: {
          Authorization: accessToken,
        },
      }),
    }),

    deleteFromWishlist: builder.mutation({
      query: ({ id, accessToken }) => ({
        url: `/users/wishlist/delete/${id}`,
        method: "PATCH",
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

    getProfile: builder.query({
      query: (accessToken) => ({
        url: `/users/get-profile`,
        method: "GET",
        headers: {
          Authorization: accessToken,
        },
      }),
    }),
  }),
});

export const {
  useGetAllBooksQuery,
  useListNewBookMutation,
  useEditBookMutation,
  useDeleteBookMutation,
  useAddToWishListMutation,
  useGetSingleBookQuery,
  usePostReviewMutation,
  useUserLoginMutation,
  useCreateUserMutation,
  useGetProfileQuery,
  useDeleteFromWishlistMutation,
} = api;
