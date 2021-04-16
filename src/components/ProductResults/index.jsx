import React, { useEffect} from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useParams, useHistory } from 'react-router-dom'

import {fetchProducts} from './../../redux/Products/products.actions'
import FormSelect from './../forms/FormSelect'

import Product from './Product'

const mapState = ({ productsData }) => ({
    products: productsData.products
})

const ProductResults = () => {
    const history = useHistory();
    const dispatch = useDispatch();
    const { filterType, filterAlcohol, filterTaste } = useParams();
    const { products } = useSelector(mapState);

    const { data } = products;

    
    useEffect(() => {
        dispatch(
            fetchProducts({ filterType, filterAlcohol, filterTaste })
        );

    }, [filterAlcohol, filterType, filterTaste])

    const handleFilterAlcohol = (e) => {
        const nextFilter = e.target.value;
        history.push(`/products/${filterType}/${nextFilter}`);
    }

    const handleFilterTaste = (e) => {
        const nextFilter = e.target.value;

        if (filterAlcohol) {
            history.push(`/products/${filterType}/${filterAlcohol}/${nextFilter}`);
            return;
        }
    }

    const configFilterAlcohol = {
        defaultValue: filterAlcohol,
        label: 'Filter after alcohol type',
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

    const configFilterTaste = {
        defaultValue: filterTaste,
        label: 'Filter after taste profile',
        options: [
            {
                value: '',
                name: 'Show all'
            },
            {
                value: 'sweet',
                name: 'Sweet'
            },
            {
                value: 'sour',
                name: 'Sour'
            },
            {
                value: 'bitter',
                name: 'Bitter'
            }
        ],
        handleChange: handleFilterTaste
    }
    

    if (!Array.isArray(products)) return null;
    
    return (
        <div>
            <h1>
                {filterType}
            </h1>
            
            {filterType == 'cocktails' && 
                <FormSelect {...configFilterAlcohol}/>
                
            }
            {/*<FormSelect {...configFilterTaste}/>*/}
            

            {products.length < 1 ? 'No search result.' : 
                <div className='productResults'>
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
