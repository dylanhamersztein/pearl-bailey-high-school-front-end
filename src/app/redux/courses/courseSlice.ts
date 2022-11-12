import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export type Course = {
  id: number;
  name: string;
  teacherId: number;
  departmentId: number;
  description: string;
  courseStatus: string;
};

interface CoursesState {
  selectedCourse?: Course;
}

const initialState: CoursesState = {
  selectedCourse: undefined,
};

const courseSlice = createSlice({
  name: "courses",
  initialState,
  reducers: {
    setSelectedCourse: (state, { payload }: PayloadAction<Course>) => {
      state.selectedCourse = payload;
    },
    unsetSelectedCourse: (state) => {
      state.selectedCourse = undefined;
    },
  },
});

export const { setSelectedCourse, unsetSelectedCourse } = courseSlice.actions;

export default courseSlice.reducer;
