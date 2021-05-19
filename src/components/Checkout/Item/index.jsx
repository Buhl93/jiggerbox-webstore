import React from 'react'
import {useDispatch} from 'react-redux'
import { deleteProduct, decrementProduct, addProduct } from './../../../redux/Cart/cart.actions'
import './styles.scss'

const Item = (product) => {
    const dispatch = useDispatch();
    const { productName, productPrice, productThumbnail, quantity, productContent, documentID } = product;

    const handleAddToCart = (product) => {
        if (!product) return;
        dispatch(
            addProduct(product)        
        )
    }

    const handleDeleteItemFromCart = (product) => {
        if(!product) return;
        dispatch(
            deleteProduct(product)
        )

    }
    const handleDecrementProduct = (product) => {
        if (!product) return;
        dispatch(
            decrementProduct(product)
        )
    }

    return (
        <div className='cart-item-card'>
            <img className='cart-item-thumb' src={productThumbnail} alt='cart-item'/>
            <div className='cart-item-info'>
                <div className='cart-item-name'>
                    {productName}
                </div>
                <div className='cart-item-content'>
                    {productContent && productContent.map((item, index) => {
                        if (index === productContent.length - 1) return `${item}`
                                
                        return `${item}, `
                                
                    })}
                </div>
                <div className='cart-item-price'>
                    $ {productPrice}
                </div>

                <div className='cart-item-amount-control'>
                    <div onClick={() => handleDecrementProduct(product) }>
                        <i className="las la-angle-left"></i>
                    </div>
                    <div>
                        {quantity}
                    </div>
                    <div onClick={() => handleAddToCart(product) }>
                        <i className="las la-angle-right"></i>
                    </div>
                </div>
                
            
                <div className='cart-item-delete' onClick={() => handleDeleteItemFromCart(product)} >
                    <i className="las la-trash"></i>
                </div>
            </div>
            
        </div>
    )
}

export default Item
