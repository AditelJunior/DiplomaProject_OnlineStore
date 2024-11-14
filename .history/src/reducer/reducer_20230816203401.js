import shoppingReducer from "./shopping";
import loginReducer from "./login";
import { combineReducers } from "redux";

const allReducers = combineReducers({
  shopping: shoppingReducer,
  // login: loginReducer

})

export default allReducers;