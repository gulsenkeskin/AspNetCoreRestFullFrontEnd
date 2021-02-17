import * as actionTypes from "../actions/actionTypes";
import initialState from "./initialState";

//parametre olarak aksiyonu ve state i alır

export default function birimListReducer(
  state = initialState.birimler,
  action
) {
  switch (action.type) {
    case actionTypes.GET_BIRIM_SUCCESS:
      return action.payload;

    // default:
    //   return state;

    case actionTypes.REMOVE_BIRIM:
      //paremetreyle gönderilen id den farklı olanları yeni bir array yap
     const newState = state.filter(
        (b) => b.birimId !== action.payload.birimId
      );
      return newState;

    default:
      return state;
  }
}
