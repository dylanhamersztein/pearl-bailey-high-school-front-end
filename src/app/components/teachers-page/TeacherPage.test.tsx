import { fireEvent, screen } from "@testing-library/react";
import { TeacherPage } from "./TeacherPage";
import { renderWithProviders } from "../../utils/testUtils";

test("Renders the update teacher button", () => {
  renderWithProviders(<TeacherPage />);

  const updateTeacherButton = screen.getByText(/Update Teacher/i);
  expect(updateTeacherButton).toBeInTheDocument();
  expect(updateTeacherButton).toBeDisabled();
});

test("Renders the create teacher button", () => {
  renderWithProviders(<TeacherPage />);

  const createTeacherButton = screen.getByText(/Create Teacher/i);
  expect(createTeacherButton).toBeInTheDocument();
  expect(createTeacherButton).toBeEnabled();
});

test("Shows the teacher form when Create Teacher button is clicked", () => {
  renderWithProviders(<TeacherPage />);

  const createTeacherButton = screen.getByRole("button", {
    name: "Create Teacher",
  });
  expect(createTeacherButton).toBeInTheDocument();
  expect(createTeacherButton).toBeEnabled();

  fireEvent.click(createTeacherButton);

  const teacherFormFirstNameInput = screen.getByLabelText("First Name");
  expect(teacherFormFirstNameInput).toBeVisible();
});
