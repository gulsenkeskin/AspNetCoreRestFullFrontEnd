import * as actionTypes from "../actions/actionTypes";
import initialState from "./initialState";

export default function changeSirketReducer(
  state = initialState.seciliSirket,
  action
) {
  switch (action.type) {
    case actionTypes.CHANGE_SIRKET:
      return action.payload;
    default:
      return state;
  }
}

