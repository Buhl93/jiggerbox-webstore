import cartTypes from './cart.types'

export const addProduct = (nextCartItem) => ({
    type: cartTypes.ADD_TO_CART,
    payload: nextCartItem
})

export const deleteProduct = (clickedCartItem) => ({
    type: cartTypes.DELETE_FROM_CART,
    payload: clickedCartItem
})

export const decrementProduct = (clickedCartItem) => ({
    type: cartTypes.DECREMENT_ITEM_AMOUNT,
    payload: clickedCartItem
})