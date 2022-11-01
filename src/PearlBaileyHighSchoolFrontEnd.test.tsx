import React from "react";
import { render, screen } from "@testing-library/react";
import PearlBaileyHighSchoolFrontEnd from "./PearlBaileyHighSchoolFrontEnd";

test("renders Pearl Bailey High School text", () => {
  render(<PearlBaileyHighSchoolFrontEnd />);
  const linkElement = screen.getByText(/Pearl Bailey High School/i);
  expect(linkElement).toBeInTheDocument();
});

test("renders Students text", () => {
  render(<PearlBaileyHighSchoolFrontEnd />);
  const linkElement = screen.getByText(/Students/i);
  expect(linkElement).toBeInTheDocument();
});

test("renders Teachers text", () => {
  render(<PearlBaileyHighSchoolFrontEnd />);
  const linkElement = screen.getByText(/Teachers/i);
  expect(linkElement).toBeInTheDocument();
});

test("renders Courses text", () => {
  render(<PearlBaileyHighSchoolFrontEnd />);
  const linkElement = screen.getByText(/Courses/i);
  expect(linkElement).toBeInTheDocument();
});
