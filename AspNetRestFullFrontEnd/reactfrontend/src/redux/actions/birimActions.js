import * as actionTypes from "./actionTypes";
import axios from "axios";

export function getBirimSuccess(birimler){
    return{type:actionTypes.GET_BIRIM_SUCCESS,payload:birimler}
}

export function getBirimler(){
    return function(dispatch){
        let url = "http://localhost:5000/api/birim";
        return axios.get(url).then((response) => response.data).then(data=> dispatch(getBirimSuccess(data)));
        
    }
}
   
