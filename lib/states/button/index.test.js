import reducer, { initialState, ACTION } from "./reducer.js";

describe("Button reducer", () => {
  test("it handles error", () => {
    expect(
      reducer(initialState, {
        type: `${ACTION}_FAILURE`,
        payload: "Something went wrong",
      })
    ).toMatchObject({
      ...initialState,
      isDisabled: true,
      isError: true,
      errorMessage: "Something went wrong",
    });
  });

  test("it handles a requested action", () => {
    expect(
      reducer(initialState, {
        type: `${ACTION}_REQUEST`,
      })
    ).toMatchObject({
      ...initialState,
      isProcessing: true,
      isDisabled: true,
    });
  });

  test("it handles a successful action", () => {
    expect(
      reducer(initialState, {
        type: `${ACTION}_SUCCESS`,
      })
    ).toMatchObject({
      ...initialState,
      isSuccess: true,
      isDisabled: true,
      isProcessing: false,
    });
  });

  test("it handles a reset action", () => {
    expect(
      reducer(initialState, {
        type: `${ACTION}_RESET`,
      })
    ).toMatchObject(initialState);
  });
});
