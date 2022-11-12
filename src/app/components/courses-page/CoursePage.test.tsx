import { screen } from "@testing-library/react";
import { CoursePage } from "./CoursePage";
import { renderWithProviders } from "../../utils/testUtils";

test("Renders the update course button correctly", () => {
  renderWithProviders(<CoursePage />);

  const updateCourseButton = screen.getByText(/Update Course/i);
  expect(updateCourseButton).toBeInTheDocument();
  expect(updateCourseButton).toBeDisabled();
});

test("Renders the create course button", () => {
  renderWithProviders(<CoursePage />);

  const createCourseButton = screen.getByText(/Create Course/i);
  expect(createCourseButton).toBeInTheDocument();
  expect(createCourseButton).toBeEnabled();
});
