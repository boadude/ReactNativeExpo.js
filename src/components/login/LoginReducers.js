export const initialState = {
  loading: false,
  error: null,
  email: "me@reactnativeexpostarter.com",
  password: "123456789"
};

export default function user(state = initialState, action) {
  switch (action.type) {
    case "USER_LOGIN": {
      if (action.data) {
        return {
          ...state,
          loading: false,
          error: null,
          isAuthenticated: true,
          token: action.data.token
        };
      }

      return state;
    }
    case "USER_LOGOUT": {
      return {
        ...state,
        loading: false,
        isAuthenticated: false,
        token: null
      };
    }
    case "USER_CHANGE_INPUT": {
      if (action.data) {
        return {
          ...state,
          [action.data.name]: action.data.value
        };
      }

      return state;
    }
    default:
      return state;
  }
}
