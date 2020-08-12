export const initialState = {
  isLoading: true,
  isError: false,
  isSuccess: false,
  isProcessing: false,
  isDisabled: false,
  errorMessage: null,
};

export const ACTION = "BUTTON_ACTION";
export function reducer(state, action) {
  switch (action.type) {
    case `${ACTION}_REQUEST`:
      return {
        ...state,
        isProcessing: true,
        isDisabled: true,
      };
    case `${ACTION}_FAILURE`:
      return {
        ...state,
        isProcessing: false,
        isDisabled: true,
        isError: true,
        errorMessage: action.payload,
      };
    case `${ACTION}_SUCCESS`:
      return {
        ...state,
        isProcessing: false,
        isDisabled: true,
        isError: false,
        isSuccess: true,
      };
    case `${ACTION}_RESET`:
      return {
        ...state,
        isProcessing: false,
        isSuccess: false,
        isError: false,
        isDisabled: false,
      };
    default:
      throw new Error();
  }
}

export default reducer;
