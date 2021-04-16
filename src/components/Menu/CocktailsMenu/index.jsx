import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

import { closeMenu } from './../../../redux/Menu/menu.actions'

const CocktailsMenu = () => {
    const dispatch = useDispatch();

    return (
        <div>
            <ul>
                <Link to='/products/cocktails'>
                    <li onClick={() => dispatch(closeMenu())}>All cocktails</li>
                </Link>
                <li>Sweet cocktails</li>
                <li>Sour cocktails</li>
                <li>Bitter cocktails</li>
                <li>Coffe cocktails</li>
                <li>Creamy cocktails</li>
                <p>By Alcohol</p>
                <li>Gin</li>
                <li>Rum</li>
                <li>Vodka</li>
                <li>Tequila</li>
                <li>Vermuth</li>
                <li>Scnapps</li>
            </ul>
        </div>
    )
}

export default CocktailsMenu
