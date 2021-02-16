import * as actionTypes from "../actions/actionTypes";
import initialState from "./initialState";


export default function saveBirimReducer(
  state = initialState.savedBirim,
  action
) {
  switch (action.type) {
    case actionTypes.UPDATE_BIRIM_SUCCESS:
      return action.payload;
    case actionTypes.CREATE_BIRIM_SUCCESS:
        return action.payload;
    default:
      return state;
  }
}
