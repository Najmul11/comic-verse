import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { selectAccessToken } from "../selectors";
import { RootState } from "../store";

export const api = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:5000/api/v1",
    // learned this later, no need to send header everytime if we set prepare header, headers will be attached by default
    prepareHeaders: (headers, { getState }) => {
      const state = getState() as RootState;
      const accessToken = selectAccessToken(state);
      if (accessToken) {
        headers.set("Authorization", accessToken);
      }
      return headers;
    },
  }),
  tagTypes: ["wishlist", "books"],
  endpoints: (builder) => ({
    getAllBooks: builder.query({
      query: (queryParams) => ({
        url: `/books?${new URLSearchParams(queryParams).toString()}`,
        method: "GET",
      }),
      providesTags: ["books"],
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
      invalidatesTags: ["books"],
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
      invalidatesTags: ["books"],
    }),

    deleteBook: builder.mutation({
      query: ({ id, accessToken }) => ({
        url: `/books/${id}`,
        method: "DELETE",
        headers: {
          Authorization: accessToken,
        },
      }),
      invalidatesTags: ["books"],
    }),

    getSingleBook: builder.query({
      query: (id) => ({
        url: `/books/${id}`,
        method: "GET",
      }),
      providesTags: ["books"],
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
      invalidatesTags: ["books"],
    }),

    addToWishList: builder.mutation({
      query: ({ id, accessToken }) => ({
        url: `/users/wishlist/${id}`,
        method: "PATCH",
        headers: {
          Authorization: accessToken,
        },
      }),
      invalidatesTags: ["wishlist"],
    }),

    deleteFromWishlist: builder.mutation({
      query: ({ id, accessToken }) => ({
        url: `/users/wishlist/delete/${id}`,
        method: "PATCH",
        headers: {
          Authorization: accessToken,
        },
      }),
      invalidatesTags: ["wishlist"],
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
      providesTags: ["wishlist"],
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
