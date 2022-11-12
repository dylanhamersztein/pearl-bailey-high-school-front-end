import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/dist/query/react";
import { LIST, providesList } from "../../utils/reduxUtils";
import { Course } from "./courseSlice";

const COURSE = "Course";

export const courseApi = createApi({
  reducerPath: "coursesApi",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:8082/courses" }),
  tagTypes: [COURSE],
  endpoints: (builder) => ({
    getAllCourses: builder.query({
      query: () => "",
      providesTags: (result) => providesList(result, COURSE),
    }),
    getCourseById: builder.query({
      query: (id: number) => `${id}`,
      providesTags: (result) =>
        result ? [{ type: COURSE, id: result.id }] : [],
    }),
    createCourse: builder.mutation<Course, Omit<Course, "id">>({
      query: ({ ...patch }) => ({
        url: "",
        method: "POST",
        body: patch,
      }),
      invalidatesTags: [{ type: COURSE, id: LIST }],
    }),
    updateCourse: builder.mutation<Course, Partial<Course>>({
      query: ({ id, ...patch }) => ({
        url: `/${id}`,
        method: "PATCH",
        body: patch,
      }),
      invalidatesTags: (result: any) =>
        result ? [{ type: COURSE, id: result.id }] : [],
    }),
  }),
});

export const {
  useGetAllCoursesQuery,
  useGetCourseByIdQuery,
  useCreateCourseMutation,
  useUpdateCourseMutation,
} = courseApi;
