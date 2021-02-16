import { combineReducers } from "redux";
import changeSirketReducer from "./changeSirketReducer";
import sirketListReducer from "./sirketListReducer";
import birimListReducer from "./birimListReducer";
import saveBirimReducer from "./saveBirimReducer";

const rootReducer = combineReducers({
  changeSirketReducer,
  sirketListReducer,
  birimListReducer,
  saveBirimReducer,
});

export default rootReducer;
