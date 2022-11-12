import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export type Student = {
  id: number;
  firstName: string;
  middleName: string;
  lastName: string;
  dateOfBirth: string;
  status: string;
};

interface StudentsState {
  selectedStudent?: Student;
}

const initialState: StudentsState = {
  selectedStudent: undefined,
};

export const studentSlice = createSlice({
  name: "students",
  initialState,
  reducers: {
    setSelectedStudent: (state, { payload }: PayloadAction<Student>) => {
      state.selectedStudent = payload;
    },
    unsetSelectedStudent: (state) => {
      state.selectedStudent = undefined;
    },
  },
});

export const { setSelectedStudent, unsetSelectedStudent } =
  studentSlice.actions;

export default studentSlice.reducer;
