import React from "react";
import { render, screen } from "@testing-library/react";
import { StudentPage } from "./StudentPage";

test("Renders the update student button", () => {
  render(<StudentPage />);
  const linkElement = screen.getByText(/Update Student/i);
  expect(linkElement).toBeInTheDocument();
});

test("Renders the create student button", () => {
  render(<StudentPage />);
  const linkElement = screen.getByText(/Create Student/i);
  expect(linkElement).toBeInTheDocument();
});
