import reducer, { hideModal, showModal } from "./appSlice";

test("should return initial state", () => {
  expect(reducer(undefined, { type: undefined })).toEqual({
    showModal: false,
  });
});

test("should set show modal to true", () => {
  expect(reducer(undefined, showModal())).toEqual({
    showModal: true,
  });
});

test("should set show modal to false", () => {
  expect(reducer({ showModal: true }, hideModal())).toEqual({
    showModal: false,
  });
});
