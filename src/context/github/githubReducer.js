export default (state, action) => {
  switch (action.type) {
    case "SET_LOADING": {
      return {
        ...state,
        isLoading: true
      };
    }
    case "SEARCH_USERS": {
      return {
        ...state,
        users: action.payload,
        isLoading: false
      };
    }
    case "CLEAR_USERS": {
      return {
        ...state,
        users: [],
        isLoading: false
      };
    }
    case "GET_USER": {
      return {
        ...state,
        user: action.payload,
        isLoading: false
      };
    }
    default: {
      return state;
    }
  }
};
