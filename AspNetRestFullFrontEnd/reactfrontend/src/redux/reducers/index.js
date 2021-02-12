import { combineReducers } from "redux";
import changeSirketReducer from "./changeSirketReducer";
import { sirketListReducer } from "./sirketListReducer";

const rootReducer = combineReducers({
  changeSirketReducer,
  sirketListReducer
});
