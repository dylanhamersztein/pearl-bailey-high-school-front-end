import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export type Teacher = {
  id: number;
  firstName: string;
  middleName?: string;
  lastName: string;
  dateOfBirth: string;
};

interface TeachersState {
  selectedTeacher?: Teacher;
}

const initialState: TeachersState = {
  selectedTeacher: undefined,
};

export const teacherSlice = createSlice({
  name: "teachers",
  initialState,
  reducers: {
    setSelectedTeacher: (state, { payload }: PayloadAction<Teacher>) => {
      state.selectedTeacher = payload;
    },
    unsetSelectedTeacher: (state) => {
      state.selectedTeacher = undefined;
    },
  },
});

export const { setSelectedTeacher, unsetSelectedTeacher } =
  teacherSlice.actions;

export default teacherSlice.reducer;
