import { renderWithProviders } from "../../utils/testUtils";
import { screen } from "@testing-library/react";
import { TeacherForm } from "./TeacherForm";

test("Should render the firstName input correctly", async () => {
  renderWithProviders(<TeacherForm />);

  const firstNameInput = await screen.findByLabelText("First Name");

  expect(firstNameInput).toBeVisible();
});

test("Should render the middleName input correctly", async () => {
  renderWithProviders(<TeacherForm />);

  const middleNameInput = await screen.findByLabelText("Middle Name");

  expect(middleNameInput).toBeVisible();
});

test("Should render the lastName input correctly", async () => {
  renderWithProviders(<TeacherForm />);

  const lastNameInput = await screen.findByLabelText("Last Name");

  expect(lastNameInput).toBeVisible();
});

test("Should render the dateOfBirth input correctly", async () => {
  renderWithProviders(<TeacherForm />);

  const dateOfBirthInput = await screen.findByLabelText("Date of Birth");

  expect(dateOfBirthInput).toBeVisible();
});

test("Should render the create teacher button correctly", async () => {
  renderWithProviders(<TeacherForm />);

  const createTeacherButton = await screen.findByRole("button", {
    name: "Create Teacher",
  });

  expect(createTeacherButton).toBeVisible();
  expect(createTeacherButton).toBeEnabled();
});
