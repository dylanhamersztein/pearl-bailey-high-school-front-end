import { render, screen } from "@testing-library/react";
import { ResourceForm } from "./ResourceForm";
import { Simulate } from "react-dom/test-utils";
import submit = Simulate.submit;

test("should render child elements correctly", () => {
  render(
    <ResourceForm mode="CREATE" resourceName="Student" onSubmit={() => {}}>
      <h1>content</h1>
    </ResourceForm>
  );

  const childElement = screen.queryByText(/content/);
  expect(childElement).not.toBeNull();
  expect(childElement).toBeVisible();
});

test("should render title correctly based on props", () => {
  render(
    <ResourceForm mode="CREATE" resourceName="Student" onSubmit={() => {}}>
      <h1>content</h1>
    </ResourceForm>
  );

  let childElement = screen.queryByText(/Create Student/);
  expect(childElement).not.toBeNull();
  expect(childElement).toBeVisible();

  render(
    <ResourceForm mode="UPDATE" resourceName="Student" onSubmit={() => {}}>
      <h1>content</h1>
    </ResourceForm>
  );

  childElement = screen.queryByText(/Update Student/);
  expect(childElement).not.toBeNull();
  expect(childElement).toBeVisible();
});

test("should call onSubmit from props", () => {
  let clicked = false;
  render(
    <ResourceForm
      mode="CREATE"
      resourceName="Student"
      onSubmit={() => {
        clicked = true;
      }}
    >
      <h1>content</h1>
    </ResourceForm>
  );

  const submitButton = screen.getByRole("button");
  expect(submitButton).not.toBeNull();
  expect(submitButton).toBeVisible();

  submitButton.click();
  expect(clicked).toBeTruthy();
});
