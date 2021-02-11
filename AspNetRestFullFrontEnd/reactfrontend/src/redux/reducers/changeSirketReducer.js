import * as actionTypes from "../actions/actionTypes"
import initialState from "./initialState";

//parametre olarak aksiyonu ve state i alır

export default function changeSirketReducer(state=initialState.currentSirket,action){
    switch (action.type) {
        case actionTypes.CHANGE_SİRKET:
           return action.payload
    
        default:
            return state;
    }
}