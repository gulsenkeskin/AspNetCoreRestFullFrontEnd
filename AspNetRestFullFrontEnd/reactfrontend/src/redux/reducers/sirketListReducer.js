import * as actionTypes from "../actions/actionTypes"
import initialState from "./initialState";

//parametre olarak aksiyonu ve state i alır

export default function sirketListReducer(state=initialState.sirketler,action){
    switch (action.type) {
        case actionTypes.GET_SIRKET_SUCCES:
           return action.payload
    
        default:
            return state;
    }
}

