import { render, screen } from "@testing-library/react";
import React from "react";
import { ModalDialog } from "./ModalDialog";

test("Renders the title and body when show is true", () => {
  render(
    <ModalDialog show={true} title="This is the title" onHide={() => {}}>
      <h1>content</h1>
    </ModalDialog>
  );
  const titleElement = screen.getByText(/This is the title/i);
  expect(titleElement).toBeVisible();

  const contentElement = screen.getByText(/content/i);
  expect(contentElement).toBeVisible();
});

test("Does not render the title and body when show is false", () => {
  render(
    <ModalDialog show={false} title="This is the title" onHide={() => {}}>
      <h1>content</h1>
    </ModalDialog>
  );
  const titleElement = screen.queryByText(/This is the title/i);
  expect(titleElement).toBeNull();

  const contentElement = screen.queryByText(/content/i);
  expect(contentElement).toBeNull();
});
