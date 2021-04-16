import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import './styles.scss'

import { closeMenu, closeCocktailMenu } from './../../redux/Menu/menu.actions'

import DirectoryMenu from './DirectoryMenu'
import CocktailsMenu from './CocktailsMenu'

const mapState = ({ menu }) => ({
    menuOpen: menu.menuOpen,
    cocktailMenuOpen: menu.cocktailMenuOpen
})

const Menu = () => {
    const dispatch = useDispatch();
    const { menuOpen, cocktailMenuOpen } = useSelector(mapState);

    return (
        <div>
            <div className={menuOpen ? "menuWindow menuOpen" : "menuWindow menuClose" }>
                { 
                cocktailMenuOpen && 
                    <div onClick={() => dispatch(closeCocktailMenu())}>
                        <i className="las la-arrow-left"></i>
                    </div>
                }
                <div onClick={() => dispatch(closeMenu())}>
                    <i className="las la-times"></i>
                </div>
                
                { cocktailMenuOpen ? <CocktailsMenu /> : <DirectoryMenu />}
                

            </div> 
        </div>
    )
}

export default Menu
