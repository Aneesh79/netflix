import { SET_URL } from "./actions";

const initialState = {
  url: "",
};

function reducer(state = initialState, action) {
  switch (action.type) {
    case SET_URL:
      return {
        url: action.url,
      };

    default:
      return state;
  }
}

export default reducer;
