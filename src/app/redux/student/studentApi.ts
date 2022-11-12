import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/dist/query/react";
import { Student } from "./studentSlice";

const STUDENT = "Student";
const LIST = "LIST";

const providesList = <R extends { id: number }[], T extends string>(
  res: R | undefined,
  type: T
) => [{ type, id: LIST }, ...(res || []).map(({ id }) => ({ type, id }))];

export const studentApi = createApi({
  reducerPath: "studentsApi",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:8080/students" }),
  tagTypes: [STUDENT],
  endpoints: (builder) => ({
    getAllStudents: builder.query({
      query: () => "",
      providesTags: (result, error, arg) => providesList(result, STUDENT),
    }),
    getStudentById: builder.query({
      query: (id: number) => `/${id}`,
      providesTags: (result) =>
        result ? [{ type: STUDENT, id: result.id }] : [],
    }),
    createStudent: builder.mutation<Student, Omit<Student, "id">>({
      query: ({ ...patch }) => ({
        url: "",
        method: "POST",
        body: patch,
      }),
      invalidatesTags: [{ type: STUDENT, id: LIST }],
    }),
    updateStudent: builder.mutation<Student, Partial<Student>>({
      query: ({ id, ...patch }) => {
        return {
          url: `/${id}`,
          method: "PATCH",
          body: patch,
        };
      },
      invalidatesTags: (result: any) =>
        result ? [{ type: STUDENT, id: result.id }] : [],
    }),
  }),
});

export const {
  useGetAllStudentsQuery,
  useGetStudentByIdQuery,
  useCreateStudentMutation,
  useUpdateStudentMutation,
} = studentApi;
