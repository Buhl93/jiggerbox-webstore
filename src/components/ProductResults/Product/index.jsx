import React from 'react'
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import Button from './../../forms/Button'
import { addProduct } from './../../../redux/Cart/cart.actions'
import './styles.scss'

const Product = (product) => {
    const dispatch = useDispatch();
    const { documentID, productThumbnail, productName, productPrice, productContent} = product;
    if (!documentID || !productName || !productThumbnail || typeof productPrice === undefined ) return null;

    const handleAddToCart = (product) => {
        if (!product) return;
        dispatch(
            addProduct(product)        
        )
    }

    return (
            <div className='product'>
                <Link to={`/product/${documentID}`} >
                <div className="thumb">
                    <img src={productThumbnail} alt={productName} />
                </div>
                </Link>

                <div className="details">
                    <ul>
                        <Link to={`/product/${documentID}`} >
                        <li className='product-name'>
                            {productName}
                        </li>
                        <li className='product-content'>
                            {productContent && productContent.map((item, index) => {
                                if (index === productContent.length - 1) return `${item}`
                                
                                return `${item}, `
                                
                            })}
                        </li>
                        <li className='product-price'>
                            $ {productPrice}
                        </li>
                        </Link>
                        <Button className='btn buy-button' onClick={() => handleAddToCart(product)}>
                            Buy
                        </Button>
                        
                    </ul>
                </div>
            
            </div>
        
        
    )
}



export default Product
