import React from "react";
import { render, screen } from "@testing-library/react";
import { NavBar } from "./NavBar";
import { BrowserRouter, Route, Routes } from "react-router-dom";

test("should render the brand", () => {
  renderNavBar();

  const studentsElement = screen.queryByText(/Pearl Bailey High School/i);
  expect(studentsElement).toBeVisible();
});

test("should render the students link", () => {
  renderNavBar();

  const studentsElement = screen.queryByText(/Students/i);
  expect(studentsElement).toBeVisible();
});

test("should render the teachers link", () => {
  renderNavBar();

  const studentsElement = screen.queryByText(/Teachers/i);
  expect(studentsElement).toBeVisible();
});

test("should render the courses link", () => {
  renderNavBar();

  const studentsElement = screen.queryByText(/Courses/i);
  expect(studentsElement).toBeVisible();
});

const renderNavBar = () => {
  render(
    <BrowserRouter>
      <Routes>
        <Route path="*" element={<NavBar />} />
      </Routes>
    </BrowserRouter>
  );
};
