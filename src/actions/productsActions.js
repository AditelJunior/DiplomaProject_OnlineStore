export const createProducts = (products, isLoaded) => {
    return {
        type: "CREATE_PRODUCTS",
        products,
        isLoaded
    }
}
export const setSearchQuery = (searchQuery) => {
    return {
        type: "SET_SEARCH_QUERY",
        searchQuery,
    }
}

export const setProductToCompare = (product) => {
    return {
        type: "SET_PRODUCT_TO_COMPARE",
        product
    }
}

export const removeProductFromCompare = (id) => {
    return {
        type: "REMOVE_PRODUCT_FROM_COMPARE",
        id
    }
}
export const clearCompareList = (product) => {
    return {
        type: "CLEAR_COMPARE_LIST",
        product
    }
}

export const toggleFavouriteProduct = (product) => {
    return {
        type: "TOGGLE_FAVOURITE_PRODUCT",
        product
    }
}
export const clearFavouriteList = (product) => {
    return {
        type: "CLEAR_FAVOURITE_LIST",
        product
    }
}


// CART ACTIONS
export const addToCart = (product) => {
    return {
        type: "ADD_PRODUCT_TO_CART",
        product
    }
}
export const removeFromCart = (product) => {
    return {
        type: "REMOVE_PRODUCT_FROM_CART",
        product
    }
}
export const decreaseProduct = (index) => {
    return {
        type: "DECREASE_PRODUCT",
        index
    }
}
export const increaseProduct = (index) => {
    return {
        type: "INCREASE_PRODUCT",
        index
    }
}
export const clearCartList = () => {
    return {
        type: "CLEAR_CART_LIST",
    }
}