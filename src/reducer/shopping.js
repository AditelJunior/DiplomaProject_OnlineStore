const localState = JSON.parse(localStorage.getItem('shoppingStorage'));

const initialState = {
    products: {},
    isLoaded: false,
};

const shoppingReducer = (state = initialState, action) => {
    switch (action.type) {
        case "CREATE_PRODUCTS":
            let products = action.products;
            let isLoaded = action.isLoaded;

            return {
                ...state,
                products: products,
                isLoaded: [isLoaded]
            }
           
        default:
            return state;
    }
    
}
export default shoppingReducer;