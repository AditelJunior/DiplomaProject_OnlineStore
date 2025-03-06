import { createStore } from 'redux'
import allReducers from '../reducer/reducer';

window.onbeforeunload = function() {
  const cartState = store.getState().cart || [];
  const compareState = store.getState().compare;
  const favouritesState = store.getState().favourites;

  localStorage.setItem(
    'cartStorage',
    JSON.stringify(cartState)
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