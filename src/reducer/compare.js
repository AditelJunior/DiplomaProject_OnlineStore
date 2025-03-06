const localState = JSON.parse(localStorage.getItem('comparisonStorage'));

const initialState = {
    productsToCompare: localState ? localState.productsToCompare : [],
};

const favouritesReducer = (state = initialState, action) => {
    switch (action.type) {
        case "SET_PRODUCT_TO_COMPARE":
            // remove if clicked second time
            if (state.productsToCompare.find(i => i.id === action.product.id)) {
                let newArr = state.productsToCompare.filter(function (product) {
                    return product.id !== action.product.id;
                });
                return {
                    ...state,
                    productsToCompare: newArr
                }
            } else if (state.productsToCompare.length < 4) {
                return {
                    ...state,
                    productsToCompare: [...state.productsToCompare, action.product]    
                }
            } else {
                return {
                    ...state
                }
            }
        case "REMOVE_PRODUCT_FROM_COMPARE":
            let newArr = state.productsToCompare.filter(function (product) {
                return product.id !== action.id;
            });
            return {
                ...state,
                productsToCompare: newArr
            }
        case "CLEAR_COMPARE_LIST":
            return {
                ...state,
                productsToCompare: []
            }
            default:
                return state;
    }
}

export default favouritesReducer;