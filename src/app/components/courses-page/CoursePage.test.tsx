import React from "react";
import { render, screen } from "@testing-library/react";
import CoursePage from "./CoursePage";

test("Renders the update teacher button", () => {
  render(<CoursePage />);
  const linkElement = screen.getByText(/Update Course/i);
  expect(linkElement).toBeInTheDocument();
});

test("Renders the create teacher button", () => {
  render(<CoursePage />);
  const linkElement = screen.getByText(/Create Course/i);
  expect(linkElement).toBeInTheDocument();
});
