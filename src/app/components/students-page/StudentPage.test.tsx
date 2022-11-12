import React from "react";
import { act, screen } from "@testing-library/react";
import { StudentPage } from "./StudentPage";
import { renderWithProviders } from "../../utils/testUtils";
import { setSelectedStudent } from "../../redux/student/studentSlice";

test("Renders the update student button as disabled when no student selected", () => {
  renderWithProviders(<StudentPage />);

  const updateStudentButton = screen.getByText(/Update Student/i);
  expect(updateStudentButton).toBeInTheDocument();
  expect(updateStudentButton).toBeDisabled();
});

test("Renders the update student button as enabled when student selected", () => {
  const { store } = renderWithProviders(<StudentPage />);

  act(() => {
    store?.dispatch(
      setSelectedStudent({
        id: 0,
        firstName: "",
        middleName: "",
        lastName: "",
        dateOfBirth: "",
        status: "",
      })
    );
  });

  const updateStudentButton = screen.getByText(/Update Student/i);
  expect(updateStudentButton).toBeInTheDocument();
  expect(updateStudentButton).toBeEnabled();
});

test("Renders the create student button", () => {
  renderWithProviders(<StudentPage />);

  const createStudentButton = screen.getByText(/Create Student/i);
  expect(createStudentButton).toBeInTheDocument();
  expect(createStudentButton).toBeEnabled();
});
