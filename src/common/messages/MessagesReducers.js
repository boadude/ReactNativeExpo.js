export const initialState = {
  loading: false,
  error: null
};

export default function messages(state = initialState, action) {
  switch (action.type) {
    case "MESSAGES_REPLACE": {
      return {
        ...state,
        loading: action.loading || false,
        error: action.error || null
      };
    }
    default:
      return state;
  }
}
