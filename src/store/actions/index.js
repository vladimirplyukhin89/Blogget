import { UPDATE_COMMENT, UPDATE_TOKEN, DELETE_TOKEN } from "../constants";
import { getToken } from "../../hooks/token";

export const updateComment = comment => ({
  type: UPDATE_COMMENT,
  comment
});

export const updateToken = token => ({
  type: UPDATE_TOKEN,
  token: getToken()
});

export const deleteToken = () => ({
  type: DELETE_TOKEN
});
