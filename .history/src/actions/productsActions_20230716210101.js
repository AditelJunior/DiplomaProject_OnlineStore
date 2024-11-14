export const createProducts = (products, isLoaded)=>{
    return {
        type: "CREATE_PRODUCTS",
        products,
        isLoaded
    }
}