const initialState = {
    products: {},
    isLoaded: false,
    cart: [],
    searchQuery: '',
    totalPrice: 0
};

const shoppingReducer = ( state = initialState, action) => {
    switch (action.type) {
        case "SET_SEARCH_QUERY":
            let search = action.searchQuery;
            // check if the action id exists in the addedItems
            console.log(' -- search query -- ')
            console.log(products);

            return {
                ...state,
                searchQuery: search,
            }
        break;
        case "CREATE_PRODUCTS":
            let products = action.products;
            let isLoaded = action.isLoaded;
            // check if the action id exists in the addedItems
            console.log('_______CREATE PRODUCTS_______')
            console.log(products);

            return {
                ...state,
                products: products,
                isLoaded: [isLoaded]
            }
        break;
        case "ADD_TO_CART":
            let selectedItem = action.item;
            // check if the action id exists in the addedItems
            console.log(selectedItem);
            let existed_item = state.cart.find(item => item.id == action.item.id)
            if(existed_item) {
                
                return {
                    ...state, 
                }
            } else {
                console.log('doesnt exists');

                selectedItem.quantity = 1;
                //calculating the total
                let newTotal = state.totalPrice + selectedItem.price 
                
                return {
                    ...state,
                    cart: [...state.cart, selectedItem],
                    totalPrice : newTotal
                }
                
            }
        break;
        case "REMOVE_FROM_CART":
            let itemToRemove = state.cart.find(item => action.item.id === item.id)

            if (itemToRemove) {
                let new_items = state.cart.filter(item => action.item.id !== item.id)
            
                //calculating the total
                let newTotal = state.total - (itemToRemove.price * itemToRemove.quantity )
                console.log(itemToRemove)
                return{
                    ...state,
                    cart: new_items,
                    totalPrice: newTotal
                }   
            } else {
                return {
                    ...state
                }
            }
        break;
        case "DECREASE_PRODUCT":
            console.log('decr')
            let itemToDecrease = state.cart.find(item=> action.item.id === item.id)
            let newTotal = state.totalPrice - itemToDecrease.price;

            if(itemToDecrease.quantity === 1){
                let new_items = state.cart.filter(item =>item.id !== action.item.id)
                console.log('quantitty is 1');
                console.log(new_items);
                return{
                    ...state,
                    cart: new_items,
                    totalPrice: newTotal
                }
            } else if (itemToDecrease.quantity>1){
                console.log('quantitty more than 1');

                const index = state.cart.findIndex(item => item.id === action.item.id );
                let newCart = [...state.cart]
                newCart[index].quantity -= 1
                return{
                    ...state,
                    cart: newCart,
                    totalPrice: state.totalPrice - newTotal
                }
            }
        break;
        case "INCREASE_PRODUCT":
            console.log('incr')
            const index = state.cart.findIndex(item => item.id == action.item.id );
            let newCart = [...state.cart]
            newCart[index].quantity += 1;

            return {
                ...state,
                cart: newCart,
                totalPrice:  state.totalPrice + newCart[index].price,
            }
        break;
        case "CLEARALL":
            return {
                ...state,
                cart: []
            }
        break;
        default:
            return state;
    }
}
export default shoppingReducer;