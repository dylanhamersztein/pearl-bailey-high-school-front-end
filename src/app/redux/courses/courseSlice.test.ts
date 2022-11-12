import reducer, {
  Course,
  setSelectedCourse,
  unsetSelectedCourse,
} from "./courseSlice";

test("should return initial state", () => {
  expect(reducer(undefined, { type: undefined })).toEqual({
    selectedCourse: undefined,
  });
});

test("should set selected course", () => {
  const prevState = { selectedCourse: undefined };
  const selectedCourse: Course = {
    courseStatus: "",
    departmentId: 0,
    description: "",
    id: 0,
    name: "",
    teacherId: 0,
  };

  expect(reducer(prevState, setSelectedCourse(selectedCourse))).toEqual({
    selectedCourse,
  });
});

test("should unset selected course", () => {
  const selectedCourse: Course = {
    courseStatus: "",
    departmentId: 0,
    description: "",
    id: 0,
    name: "",
    teacherId: 0,
  };

  expect(reducer({ selectedCourse }, unsetSelectedCourse())).toEqual({
    selectedCourse: undefined,
  });
});
