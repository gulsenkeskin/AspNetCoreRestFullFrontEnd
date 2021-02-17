import * as actionTypes from "./actionTypes";
import axios from "axios";

export function getBirimSuccess(birimler) {
  return { type: actionTypes.GET_BIRIM_SUCCESS, payload: birimler };
}

//EKLEME
export function createBirimSuccess(birim) {
  return { type: actionTypes.CREATE_BIRIM_SUCCESS, payload: birim };
}

//birim güncelleme
export function updateBirimSuccess(birim) {
  return { type: actionTypes.UPDATE_BIRIM_SUCCESS, payload: birim };
}

//BİRİM SİLME
export function removeBirimSuccess(birim) {
  return { type: actionTypes.REMOVE_BIRIM, payload: birim };
}

export function removeBirim(birim) {
  return function (dispatch) {
    let url = "http://localhost:5000/api/birim/" + birim.birimId;
    return axios.delete(url);
    // .then((response) => dispatch(removeBirimSuccess(response.data)))
    // .catch(error => {
    //   throw(error);
    // });
  };
}

export function saveBirimApi(birim) {
  return fetch("http://localhost:5000/api/birim", {
    method: birim.birimId ? "PUT" : "POST",
    headers: { "content-type": "application/json" },
    body: JSON.stringify(birim),
  })
    .then(handleResponse)
    .catch(handleError);
}
export function saveBirim(birim) {
  return function (dispatch) {
    return saveBirimApi(birim)
      .then((savedBirim) => {
        birim.birimId
          ? dispatch(updateBirimSuccess(savedBirim))
          : dispatch(createBirimSuccess(savedBirim));
      })
      .catch((error) => {
        throw error;
      });
  };
}

// export function saveBirimApi(birim) {
//   return axios("http://localhost:5000/api/birim", {
//     method: birim.birimId ? "put" : "post",
//     headers: { "content-type": "application/json" },
//     body: JSON.stringify(birim),
//   })
//     .then(handleResponse)
//     .catch(handleError);
// }

// export function saveBirim(birim) {
//   return function (dispatch) {
//     return saveBirimApi(birim)
//       .then((savedBirim) => {
//         birim.birimId
//           ? dispatch(updateBirimSuccess(savedBirim))
//           : dispatch(createBirimSuccess(savedBirim));
//       })
//       .catch((error) => {
//         throw error;
//       });
//   };
// }

export function getBirimler(sirketId) {
  return function (dispatch) {
    if (sirketId) {
      let url = "http://localhost:5000/api/sirket/" + sirketId + "/birim";
      return axios
        .get(url)
        .then((response) => response.data.birims)
        .then((data) => dispatch(getBirimSuccess(data)));
    } else {
      let url = "http://localhost:5000/api/birim";
      return axios
        .get(url)
        .then((response) => response.data)
        .then((data) => dispatch(getBirimSuccess(data)));
    }
  };
}

export async function handleResponse(response) {
  if (response.ok) {
    return response.json();
  
    // console.log(response.data);

  }
  const error = await response.text();
  throw new Error(error);
}

export function handleError(error) {
  console.error("Bir hata oluştu");
  throw error;
}
