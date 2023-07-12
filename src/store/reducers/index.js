import { setToken } from "../../hooks/token";
import { UPDATE_COMMENT, UPDATE_TOKEN, DELETE_TOKEN } from "../constants";

const initialState = {
  comment: "Привет Redux",
  token: ""
};

export const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_COMMENT:
      return { ...state, comment: action.comment };

    case UPDATE_TOKEN: {
      setToken(action.token);
      return { ...state, token: action.token };
    }

    case DELETE_TOKEN: {
      setToken("");
      return { ...state, token: "" };
    }

    default:
      return state;
  }
};
