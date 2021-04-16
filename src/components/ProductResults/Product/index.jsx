import React from 'react'
import { Link } from 'react-router-dom'
import Button from './../../forms/Button'
import './styles.scss'

const Product = ({ documentID, productThumbnail, productName, productPrice, index }) => {
    if (!documentID || !productName || !productThumbnail || typeof productPrice === undefined ) return null;



    return (
        <Link to={`/product/${documentID}`} >
            <div className='product'>
                <div className="thumb">
                    <img src={productThumbnail} alt={productName} />
                </div>

                <div className="details">
                    <ul>
                        <li>
                            {productName}
                        </li>
                        <li>
                            $ {productPrice}
                        </li>
                        <Link to='/'>
                            <li>
                                <Button>
                                    Add to cart
                                </Button>
                            </li>
                        </Link>
                    </ul>
                </div>
            
            </div>
        </Link>
        
    )
}

export default Product
