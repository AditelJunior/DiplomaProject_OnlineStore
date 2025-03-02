const localState = JSON.parse(localStorage.getItem('cartStorage')) || [];
const initialState = {
    cartProducts: localState.cartProducts || [],
};

const favouritesReducer = (state = initialState, action) => {
    switch (action.type) {
        case "ADD_PRODUCT_TO_CART":
            // remove if clicked second time
            if (state.cartProducts.find(i => i.id === action.product.id)) {
                let newArr = state.cartProducts.filter(function (product) {
                    return product.id !== action.product.id;
                });
                return {
                    ...state,
                    cartProducts: newArr,
                }
            } else {
                action.product.quantity = 1;
                return {
                    ...state,
                    cartProducts: [...state.cartProducts, action.product]
                    
                }
            }
            break;
        case "REMOVE_PRODUCT_FROM_CART":
            // remove product from cart
                let newArr = state.cartProducts.filter(function (product) {
                    return product.id !== action.product.id;
                });
                return {
                    ...state,
                    cartProducts: newArr
                }
            break
        case "DECREASE_PRODUCT":
            if(state.cartProducts[action.index].quantity === 1) {
                state.cartProducts = state.cartProducts.filter(function (product, index) {
                    return index !== action.index;
                });

            } else {
                state.cartProducts[action.index].quantity = state.cartProducts[action.index].quantity - 1;
                
            }
            return {
                ...state,
                cartProducts: [...state.cartProducts],
            }
            break
        case "INCREASE_PRODUCT":
            state.cartProducts[action.index].quantity = state.cartProducts[action.index].quantity + 1;
            return {
                ...state,
                cartProducts: [...state.cartProducts],
            }
            break
        case "CLEAR_CART_LIST":
            return {
                ...state,
                cartProducts: [],
            }

        default:
            return state;
    }
}

export default favouritesReducer;