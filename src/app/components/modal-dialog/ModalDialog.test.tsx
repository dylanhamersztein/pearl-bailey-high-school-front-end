import { act, screen } from "@testing-library/react";
import { ModalDialog } from "./ModalDialog";
import { showModal } from "../../redux/appSlice";
import { renderWithProviders } from "../../utils/testUtils";

test("Renders the title and body when show is true", () => {
  renderWithProviders(
    <ModalDialog title="This is the title">
      <h1>content</h1>
    </ModalDialog>,
    {
      preloadedState: {
        app: {
          showModal: true,
        },
      },
    }
  );

  const titleElement = screen.getByText(/This is the title/i);
  expect(titleElement).toBeVisible();

  const contentElement = screen.getByText(/content/i);
  expect(contentElement).toBeVisible();
});

test("Does not render the title and body when show is false", () => {
  renderWithProviders(
    <ModalDialog title="This is the title">
      <h1>content</h1>
    </ModalDialog>
  );

  const titleElement = screen.queryByText(/This is the title/i);
  expect(titleElement).toBeNull();

  const contentElement = screen.queryByText(/content/i);
  expect(contentElement).toBeNull();
});

test("Should appear when showModal action is dispatched", () => {
  const { store } = renderWithProviders(
    <ModalDialog title="This is the title">
      <h1>content</h1>
    </ModalDialog>
  );

  let titleElement = screen.queryByText(/This is the title/i);
  expect(titleElement).toBeNull();

  let contentElement = screen.queryByText(/content/i);
  expect(contentElement).toBeNull();

  act(() => {
    store.dispatch(showModal());
  });

  titleElement = screen.queryByText(/This is the title/i);
  contentElement = screen.queryByText(/content/i);
  expect(titleElement).toBeVisible();
  expect(contentElement).toBeVisible();
});
