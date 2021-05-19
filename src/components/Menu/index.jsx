import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'

import Line from './../Utils/Line'

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
        <div className={menuOpen ? "menuWindow menuOpen" : "menuWindow menuClose" }>
            <div className='menu-window-header'>            
                <div onClick={() => dispatch(closeCocktailMenu())}>
                    <i className={cocktailMenuOpen ? "las la-arrow-left" : "las la-arrow-left hide-arrow"}></i>
                </div>
                <h3 className='headline'>{cocktailMenuOpen ? 'Cocktails' : 'Menu'}</h3>
                <div onClick={() => dispatch(closeMenu())}>
                    <i className="las la-times"></i>
                </div>
                

            </div>
            <Line />
            <div className='menu-window-content'>
                { cocktailMenuOpen ? <CocktailsMenu /> : <DirectoryMenu />}
            </div>
            <div className="menu-line">
                <Line />
            </div>
            <div className='menu-help'>
                <p>Help</p>
            </div>
            
            
        </div> 
    )
}

export default Menu
