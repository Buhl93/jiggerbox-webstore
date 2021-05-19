import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useParams, useHistory } from 'react-router-dom'

import {fetchProducts} from './../../redux/Products/products.actions'
import FormSelect from './../forms/FormSelect'

import Product from './Product'
import Line from './../Utils/Line'
import BannerImg from './../../assets/images/other/Component 12 – 1@2x.png'

import './styles.scss'

const mapState = ({ productsData }) => ({
    products: productsData.products
})

const ProductResults = () => {
    const history = useHistory();
    const dispatch = useDispatch();
    const { filterType, filterAlcohol = '' } = useParams();
    const { products } = useSelector(mapState);


    
    useEffect(() => {
        dispatch(
            fetchProducts({ filterType, filterAlcohol })
        );

    }, [filterAlcohol, filterType])

    const handleFilterAlcohol = (e) => {
        const nextFilter = e.target.value;
        history.push(`/products/${filterType}/${nextFilter}`);
    }

    const configFilterAlcohol = {
        defaultValue: filterAlcohol,
        label: '',
        options: [
            {
                value: '',
                name: 'Show all'
            },
            {
                value: 'gin',
                name: 'Gin'
            },
            {
                value: 'rum',
                name: 'Rum'
            },
            {
                value: 'vodka',
                name: 'Vodka'
            }
        ],
        handleChange: handleFilterAlcohol
    }
    

    if (!Array.isArray(products)) return null;
    
    return (
        <div className='products-page-layout section-top-pad'>
            <img className='products-banner-img' src={BannerImg} alt="" />
            <h1 className='products-header'>
                {filterType}
            </h1>
            <h2 className='products-filter-header'>
                {filterAlcohol ? `${filterAlcohol} based` : 'All Cocktails'}
            </h2>
            
            <div className="filter">
                {filterType == 'cocktails' && 
                    <FormSelect {...configFilterAlcohol}/>
                }
            </div>

            <div className="products-line">
                <Line></Line>
            </div>

            {products.length < 1 ? 'No search result.' : 
                <div className='products-layout'>
                {products.map((product, index) => {
                    const { productThumbnail, productName, productPrice } = product;
                    if (!productThumbnail || !productName || typeof productPrice == 'undefined') return null;

                    const configProduct = { ...product };

                    return (
                        <Product key={index} {...configProduct } />
                    )
                })}
                </div>
            }
            

        </div>
    )
}

export default ProductResults
