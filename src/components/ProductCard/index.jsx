import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useParams } from 'react-router-dom'
import { fetchProduct, setProduct } from '../../redux/Products/products.actions';
import Button from './../forms/Button'

const mapState = ({ productsData }) => ({
    product: productsData.product
})

const ProductCard = () => {
    const dispatch = useDispatch();
    const { productID } = useParams();
    const { product } = useSelector(mapState);

    const { productThumbnail, productName, productPrice, productDesc } = product;

    useEffect(() => {
        dispatch(
            fetchProduct(productID)
        );

        return () => {
            dispatch(
                setProduct({})
            )
        }
       
    }, [])

    return (
        <div className='productCard'>
            <div>
                <img src={productThumbnail} alt=""/>
            </div>
            <div>
                <ul>
                    <li>
                        {productName}
                    </li>
                    <li>
                        {productPrice}
                    </li>
                    <li>
                        <div className="btn">
                        <Button>
                            Add to card
                        </Button>
                        </div>
                    </li>
                    <li>
                        <span 
                        className='desc'
                        dangerouslySetInnerHTML={{ __html: productDesc }} />
                    </li>
                </ul>
            </div>
            
        </div>
    )
}

export default ProductCard
