import cartReducer from "./cart";
// import productsLoadReducer from "./productsLoaded";
import favouritesReducer from "./favourites";
import compareReducer from "./compare";
import { combineReducers } from "redux";

const allReducers = combineReducers({
  favourites: favouritesReducer,
  cart: cartReducer,
  // productLoad: productsLoadReducer,
  compare: compareReducer,
})

export default allReducers;