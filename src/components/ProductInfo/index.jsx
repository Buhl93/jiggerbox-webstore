import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useParams } from 'react-router-dom'
import { handleAddToCart } from '../../redux/Cart/cart.utils';
import { fetchProduct, setProduct } from '../../redux/Products/products.actions';
import { addProduct } from '../../redux/Cart/cart.actions';
import Button from '../forms/Button'

import GliderSnap from './../Glider/GliderSnap'
import Line from './../Utils/Line'
import ContentCard from './../ContentCard'
import testImg from './../../assets/images/cocktails/cocktailHeader.jpg'
import DeliveryCard from './../Utils/DeliveryCard'
import BannerImg from './../../assets/images/other/Component 12 – 1@2x.png'

import './styles.scss'

const mapState = ({ productsData }) => ({
    product: productsData.product
})

const ProductCard = () => {
    const dispatch = useDispatch();
    const { productID } = useParams();
    const { product } = useSelector(mapState);

    const { productThumbnail, productName, productPrice, productDesc } = product;

    console.log(product);

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


    const handleAddToCart = (product) => {
        if (!product) return null;
        dispatch(addProduct(product));
    }

    const arr = [1, 2, 3, 4, 5];

    const configContentCard = {
        header: 'Content header',
        image: testImg
    }

    return (
        <div className='product-info'>
            <div className='web-view'>
                <div className='product-info-glider'>
                    <GliderSnap img={productThumbnail}/>
                </div>
                <div className='product-info-wrapper'>
                    <img className='product-info-banner' src={BannerImg} alt="" />
                    <h2 className='product-info-name'>
                        {productName}
                    </h2>
                    
                    <div className='flex'>
                        <p className='product-info-price'><span>Price:</span> $ {productPrice} <span id='vats-text'>incl. VATS</span></p>
                        <Button className="btn product-info-btn" onClick={() => handleAddToCart(product)}>
                            Buy
                        </Button>
                        
                    </div>
                    
                    <div className="product-info-description">
                        <h3 className='description-header'>Description</h3>
                        <span 
                        className='description-text'
                        dangerouslySetInnerHTML={{ __html: productDesc }} 
                        />
                    </div>
                </div>
            </div>
                    <div className="product-info-line">
                        <Line />
                    </div>
                    <div className="product-info-content">
                        <h3 className='content-header'>What you get</h3>
                        <div className='box-content'>
                            {arr.map((item, index) => (
                                
                                <div key={index}>
                                    <ContentCard {...configContentCard}/>
                                </div>
                                
                            ))}
                        </div>
                    </div>
                    <div className="product-info-line">
                        <Line />
                    </div>
                
            
            
            <div className="delivery-card">
                <DeliveryCard />
            </div>
            
        </div>
    )
}

export default ProductCard
