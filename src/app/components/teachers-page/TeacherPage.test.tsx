import React from "react";
import { screen } from "@testing-library/react";
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
