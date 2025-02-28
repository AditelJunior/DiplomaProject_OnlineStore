// import shoppingReducer from "./shopping";
// import productsLoadReducer from "./productsLoaded";
import favouritesReducer from "./favourites";
import compareReducer from "./compare";
import { combineReducers } from "redux";

const allReducers = combineReducers({
  favourites: favouritesReducer,
  // shopping: shoppingReducer,
  // productLoad: productsLoadReducer,
  compare: compareReducer,
})

export default allReducers;