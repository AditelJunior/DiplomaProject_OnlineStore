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

export const addProductToFavourites = (product) => {
    return {
        type: "ADD_PRODUCT_TO_FAVOURITES",
        product
    }
}
export const clearFavouriteList = (product) => {
    return {
        type: "CLEAR_FAVOURITE_LIST",
        product
    }
}
