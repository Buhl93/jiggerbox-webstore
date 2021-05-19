import cartTypes from './cart.types'
import { handleAddToCart, handleDecrementInCart, handleDeleteItemFromCart } from './cart.utils'

const INITIAL_STATE = {
    cartItems: []
}

const cartReducer = (state=INITIAL_STATE, action) => {
    switch (action.type) {
        case cartTypes.ADD_TO_CART:
            return {
                ...state,
                cartItems: handleAddToCart({
                    prevCartItems: state.cartItems,
                    nextCartItem: action.payload
                })
            };
        case cartTypes.DECREMENT_ITEM_AMOUNT:
            return {
                ...state,
                cartItems: handleDecrementInCart({
                    prevCartItems: state.cartItems,
                    clickedCartItem: action.payload
                })
            }
        case cartTypes.DELETE_FROM_CART:
            return {
                ...state,
                cartItems: handleDeleteItemFromCart({
                    prevCartItems: state.cartItems,
                    clickedCartItem: action.payload
                })
            }
        default:
             return state;
    }
}

export default cartReducer