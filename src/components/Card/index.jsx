import React from 'react'
import { Link } from 'react-router-dom'
import './styles.scss'

const Card = ({img, name, price, documentID}) => {
    return (
            <Link to={`product/${documentID}`}>  
                <div className='card'>
                    <img src={img} alt="cocktail"/>
                    <figcaption className='name'>{name}</figcaption>
                    <figcaption className='price'>$ {price}</figcaption>
                </div>
            </Link>
            
    )
}

export default Card
