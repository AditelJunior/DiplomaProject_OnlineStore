import { createStore } from 'redux'
import allReducers from '../reducer/reducer';

window.onbeforeunload = function(e) {
  const shoppingState = store.getState().shopping;
  const compareState = store.getState().compare;
  const favouritesState = store.getState().favourites;
  const productLoadState = store.getState().productLoad;

  localStorage.setItem(
    'shoppingStorage',
    JSON.stringify(shoppingState)
  );
  localStorage.setItem(
    'comparisonStorage',
    JSON.stringify(compareState)
  );
  localStorage.setItem(
    'favouritesStorage',
    JSON.stringify(favouritesState)
  );
};

const store = createStore(
  allReducers,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
export default store;