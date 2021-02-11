import * as actionTypes from "./actionTypes"

//reducer da change sirket i gördüğü zaman biz state i payload da belirtilen
export function changeSirket(sirket){
    return{type:actionTypes.CHANGE_SİRKET,payload: sirket}
}