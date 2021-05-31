import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import GliderComponent from 'react-glider-carousel'
import Glide, { Slide } from 'react-glidejs';
import Card from './../Card'
import { fetchProducts } from './../../redux/Products/products.actions'
import TestImg from './../../assets/images/cocktails/cocktailHeader.jpg'

import './styles.scss'

const mapState = ({ productsData }) => ({
    products: productsData.products
})

const Glider = () => {
    const dispatch = useDispatch();
    let {products} = useSelector(mapState);

    const popular = true;
    
    useEffect(() => {
        dispatch(
            fetchProducts({ popular })
        );

    }, [])

    const productCards = products.map((product, index) => {
        const { productThumbnail, productName, productPrice, documentID } = product;
        if (!productThumbnail || !productName || typeof productPrice == 'undefined') return null;
    
        const configCard = {
            img: productThumbnail,
            name: productName,
            price: productPrice,
            documentID: documentID
        }
    
        return (
            <figure key={index}>
                <Card {...configCard}/>
            </figure>
        )
                
            
    })

    return (
        <div className='glider-mobile'>
               {productCards.length > 0 && 
               <Glide
                type='carousel'
                perView='1.3'
                gap='20'
                >
                   
                  
                  {productCards}
                    
                    
                </Glide> 
                }
        </div>
            
        
    )
}

/*<GliderComponent
                    settings={{
                        slidesToShow: 1.2,
                        draggable: true,
                        
                    }}
                    
                    hasDots={true}
                    dots={'#dots'}

                ></GliderComponent>
*/

export default Glider
