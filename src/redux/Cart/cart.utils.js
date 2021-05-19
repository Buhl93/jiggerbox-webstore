
// Checks whether nextItem is already in prevItems, returns boolean
export const existingCartItem = ({ prevCartItems, nextCartItem }) => {
    return prevCartItems.find( cartItem => cartItem.documentID === nextCartItem.documentID );
}

// Handles when new item is added to cart, depending on whether the item is already in the cart
export const handleAddToCart = ({ prevCartItems, nextCartItem }) => {
    const quantityIncrement = 1;
    // true or false statement if item is already in cart
    const cartItemExists = existingCartItem({ prevCartItems, nextCartItem })

    // If item is already in cart, increment quantity counter
    if (cartItemExists) {
        // If it exists in cart increment if not, return and keep looping
        return prevCartItems.map( cartItem => 
            cartItem.documentID === nextCartItem.documentID
            ? {
                ...cartItem,
                quantity: cartItem.quantity + quantityIncrement
            } : cartItem
        )
    }

    // If item is not i cart, add item to cart with quantity 1
    return [
        ...prevCartItems,
        {
            ...nextCartItem,
            quantity: quantityIncrement
        }
    ]
}

export const handleDecrementInCart = ({ prevCartItems, clickedCartItem }) => {
    const quantityDecrement = 1;

    // If quantity falls below 1, delete item from cart
    if (clickedCartItem.quantity === 1) {
        return prevCartItems.filter( cartItem => cartItem.documentID !== clickedCartItem.documentID )
    }

    // Decrement quantity by one for matching item
    return prevCartItems.map( cartItem => 
        cartItem.documentID === clickedCartItem.documentID ? { ...cartItem, quantity: cartItem.quantity - quantityDecrement } : cartItem

    )
}

export const handleDeleteItemFromCart = ({ prevCartItems, clickedCartItem }) => {
    // Delete matching item
    return prevCartItems.filter( cartItem => cartItem.documentID !== clickedCartItem.documentID )
}