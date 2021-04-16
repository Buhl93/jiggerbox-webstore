import React from 'react'
import {useDispatch, useSelector} from 'react-redux'
import { Link } from 'react-router-dom'

import { closeMenu, openCocktailMenu } from './../../../redux/Menu/menu.actions'

const mapState = ({ menu }) => ({
    menuOpen: menu.menuOpen,
    cocktailMenuOpen: menu.cocktailMenuOpen
})

const DirectoryMenu = () => {
    const dispatch = useDispatch();
    const { menuOpen, cocktailMenuOpen } = useSelector(mapState);

    return (
        <div>
            <ul>
                    
                <li onClick={() => dispatch(openCocktailMenu())}>Cocktail boxes</li>                  
                <Link to='/products/accessories'>
                    <li onClick={() => dispatch(closeMenu())}>Accessories</li>
                </Link>
                    
                <Link to='/products/snacks'>
                    <li onClick={() => dispatch(closeMenu())}>Snacks</li>
                </Link>
                    
            </ul>
        </div>
    )
}

export default DirectoryMenu
