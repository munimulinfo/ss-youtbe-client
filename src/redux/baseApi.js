import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
export const baseApi = createApi({
  reducerPath: "baseApi",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:5000/api" }),
  endpoints: (builder) => ({
    getVedioInfo: builder.mutation({
      query: ({ link }) => {
        return {
          url: "/get-video-info",
          method: "POST",
          body: { url: link },
        };
      },
    }),
  }),
});

export const { useGetVedioInfoMutation } = baseApi;
