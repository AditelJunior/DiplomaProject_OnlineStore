export const createProducts = (products, isLoaded)=>{
    return {
        type: "CREATE_PRODUCTS",
        products,
        isLoaded
    }
}
export const setSearchQuery = (searchQuery)=>{
    return {
        type: "SET_SEARCH_QUERY",
        searchQuery,
    }
}