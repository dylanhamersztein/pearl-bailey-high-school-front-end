import React from "react";
import { render, screen } from "@testing-library/react";
import TeacherPage from "./TeacherPage";

test("Renders the update teacher button", () => {
  render(<TeacherPage />);
  const linkElement = screen.getByText(/Update Teacher/i);
  expect(linkElement).toBeInTheDocument();
});

test("Renders the create teacher button", () => {
  render(<TeacherPage />);
  const linkElement = screen.getByText(/Create Teacher/i);
  expect(linkElement).toBeInTheDocument();
});
