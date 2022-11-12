import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/dist/query/react";
import { EndpointBuilder } from "@reduxjs/toolkit/dist/query/endpointDefinitions";
import { LIST, providesList } from "../../utils/reduxUtils";
import { Teacher } from "./teacherSlice";

const TEACHER = "Teacher";

export const teacherApi = createApi({
  reducerPath: "teacherApi",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:8081/teachers" }),
  tagTypes: [TEACHER],
  endpoints: (builder: EndpointBuilder<any, any, any>) => ({
    getAllTeachers: builder.query({
      query: () => "",
      providesTags: (result) => providesList(result, TEACHER),
    }),
    getTeacherById: builder.query({
      query: (id: number) => `${id}`,
      providesTags: (result) =>
        result ? [{ type: TEACHER, id: result.id }] : [],
    }),
    createTeacher: builder.mutation<Teacher, Omit<Teacher, "id">>({
      query: ({ ...patch }) => ({
        url: "",
        method: "POST",
        body: patch,
      }),
      invalidatesTags: [{ type: TEACHER, id: LIST }],
    }),
    updateTeacher: builder.mutation<Teacher, Partial<Teacher>>({
      query: ({ id, ...patch }) => {
        return {
          url: `/${id}`,
          method: "PATCH",
          body: patch,
        };
      },
      invalidatesTags: (result: any) =>
        result ? [{ type: TEACHER, id: result.id }] : [],
    }),
  }),
});

export const {
  useGetAllTeachersQuery,
  useGetTeacherByIdQuery,
  useCreateTeacherMutation,
  useUpdateTeacherMutation,
} = teacherApi;
