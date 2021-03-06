import * as actionTypes from "./actionTypes";
import axios from "axios";

//reducer da change sirket i gördüğü zaman biz state i payload da belirtilen
export function changeSirket(sirket) {
  return { type: actionTypes.CHANGE_SIRKET, payload: sirket };
}

export function getSirketSuccess(sirketler) {
  return { type: actionTypes.GET_SIRKET_SUCCES, payload: sirketler };
}

//sirketlerin tümünü getir
export function getSirketler() {
  return function (dispatch) {
 
    let url = "http://localhost:5000/api/sirket";
    return axios.get(url).then((response) => response.data).then(data=> dispatch(getSirketSuccess(data)));
    
  };
}
