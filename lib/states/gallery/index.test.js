import reducer, { initialState, ACTION } from "./reducer.js";

describe("Gallery reducer", () => {
  test("it handles error", () => {
    expect(
      reducer(initialState, {
        type: `${ACTION}_REQUEST`,
        payload: "Something went wrong",
      })
    ).toMatchObject({
      ...initialState,
      currentItem: true,
      items: [],
      errorMessage: "Something went wrong",
    });
  });
});
