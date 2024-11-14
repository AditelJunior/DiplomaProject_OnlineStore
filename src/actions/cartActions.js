export const addToCart = (item) => {
    return {
        type: "ADD_TO_CART",
        item
    }
}
export const removeFromCart = (item) => {
    return {
        type: "REMOVE_FROM_CART",
        item
    }
}
export const decreaseProduct = (item) => {
    return {
        type: "DECREASE_PRODUCT",
        item
    }
}
export const increaseProduct = (item) => {
    return {
        type: "INCREASE_PRODUCT",
        item
    }
}