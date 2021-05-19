import React from 'react'
import { useSelector } from 'react-redux'
import Product from './../ProductResults/Product'
import Button from './../../components/forms/Button'
import { useHistory } from 'react-router-dom'
import { selectCartItemsCount } from './../../redux/Cart/cart.selectors'

import Item from './Item'
import Line from './../Utils/Line'
import DeliveryCard from './../Utils/DeliveryCard'

import './styles.scss'

const mapState = (state) => ({
    cartItems: state.cartData.cartItems,
    totalNumCartItems: selectCartItemsCount(state)
})

const Checkout = () => {
    const history = useHistory();
    const { cartItems, totalNumCartItems } = useSelector(mapState);

    

    const accumulatedPrice = cartItems.reduce((acc, item) => {
            const priceOfUniqueItem = item.productPrice * item.quantity;
            return acc + priceOfUniqueItem
        }, 0)

    let delivery = 0;
    
    if (accumulatedPrice < 80) {
       delivery = 15;
    } 

    if (!Array.isArray(cartItems)) return null;

    return (
        <div className='section-top-pad'>
            <h2 className='checkout-header'>
                Your Basket
            </h2>
            
            <div className='checkout-line'>
                <Line />
            </div>
            <div className="checkout-items-amount">
                {totalNumCartItems === 0 ? 'Your cart is empty' : `${totalNumCartItems} ${totalNumCartItems > 1 ? 'products' : 'product'}`}
            </div>
            <ul>
            {
                cartItems.map((cartItem, index) => {
                    
    
                    const configItem = {...cartItem};
                    
                    return (
                        <li>
                            <Item {...configItem}/>
                        </li>
                    )
                })
            }
            </ul>
            <div className='checkout-line'>
                <Line />
            </div>
            <Button className='btn checkout-continue-shop-button' onClick={() => history.goBack()}>
                Continue Shopping
            </Button>
            <div className="payment-methods">
                <h3>
                    We Accept
                </h3>
            </div>
            <div className="checkout-total-price">
                <h3>
                    Total Price
                </h3>
                <div>
                    Subtotal: $ { accumulatedPrice }
                </div>
                <div>
                    Delivery: $ { delivery }
                </div>
                <div>
                    Total price (inc. VAT): $ { accumulatedPrice + delivery }
                </div>
                <Button>
                    Proceed to payment
                </Button>
            </div>
            <DeliveryCard />
           
                
            
            
             
        </div>
    )
}

export default Checkout
