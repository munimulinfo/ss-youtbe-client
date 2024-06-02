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
    downloadVedio: builder.mutation({
      query: ({ id, resu }) => {
        return {
          url: "/download",
          method: "POST",
          body: { url: id, quality: "" },
        };
      },
    }),
  }),
});

export const { useGetVedioInfoMutation, useDownloadVedioMutation } = baseApi;
