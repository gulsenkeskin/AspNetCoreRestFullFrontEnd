import { combineReducers } from "redux";
import changeSirketReducer from "./changeSirketReducer";
import sirketListReducer from "./sirketListReducer";
import birimListReducer from "./birimListReducer";

const rootReducer = combineReducers({
  changeSirketReducer,
  sirketListReducer,
  birimListReducer,
});

export default rootReducer;
