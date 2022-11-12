import reducer, {
  setSelectedStudent,
  Student,
  unsetSelectedStudent,
} from "./studentSlice";

test("should return initial state", () => {
  expect(reducer(undefined, { type: undefined })).toEqual({
    selectedStudent: undefined,
  });
});

test("should set selected student", () => {
  const selectedStudent: Student = {
    dateOfBirth: "25/01/1994",
    firstName: "Dylan",
    lastName: "Hamersztein",
    middleName: "Something",
    status: "PROSPECT",
    id: 1,
  };
  expect(
    reducer({ selectedStudent: undefined }, setSelectedStudent(selectedStudent))
  ).toEqual({
    selectedStudent,
  });
});

test("should unset selected student", () => {
  const selectedStudent: Student = {
    dateOfBirth: "25/01/1994",
    firstName: "Dylan",
    lastName: "Hamersztein",
    middleName: "Something",
    status: "PROSPECT",
    id: 1,
  };
  expect(
    reducer({ selectedStudent }, setSelectedStudent(selectedStudent))
  ).toEqual({
    selectedStudent,
  });

  expect(reducer({ selectedStudent }, unsetSelectedStudent())).toEqual({
    selectedStudent: undefined,
  });
});
