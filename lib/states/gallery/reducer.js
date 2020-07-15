export const initialState = {
  current: true,
  duration: 400,
  errorMessage: null,
  items: [],
};

export const ACTION = "GALLERY_ACTION";
export function reducer(state, action) {
  switch (action.type) {
    case `${ACTION}_REQUEST`:
      return {
        ...state,
        current: true,
        duration: 400,
        errorMessage: null,
      };
    default:
      throw new Error();
  }
}

export default reducer;
