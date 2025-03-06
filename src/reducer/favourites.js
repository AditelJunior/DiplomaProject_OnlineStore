const localState = JSON.parse(localStorage.getItem('favouritesStorage'));
const initialState = {
    favouriteProducts: localState ? localState.favouriteProducts : [],
};

const favouritesReducer = (state = initialState, action) => {
    switch (action.type) {
        case "TOGGLE_FAVOURITE_PRODUCT":
            // remove if clicked second time
            if (state.favouriteProducts.find(i => i.id === action.product.id)) {
                let newArr = state.favouriteProducts.filter(function (product) {
                    return product.id !== action.product.id;
                });
                return {
                    ...state,
                    favouriteProducts: newArr
                }
            } else {
                return {
                    ...state,
                    favouriteProducts: [...state.favouriteProducts, action.product]
                    
                }
            }
            case "CLEAR_FAVOURITE_LIST":
                return {
                    ...state,
                    favouriteProducts: []
                }

            default:
                return state;
    }
}

export default favouritesReducer;