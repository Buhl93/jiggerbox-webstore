import React from 'react'
import {useDispatch, useSelector} from 'react-redux'
import { Link } from 'react-router-dom'

import MenuOptions from './../MenuOptions'

import CocktailMenuImg from './../../../assets/images/other/Component 2 – 1.png'
import AccMenuImg from './../../../assets/images/other/Component 3 – 1.png'
import SnackMenuImg from './../../../assets/images/other/Component 4 – 1.png'

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
                <li onClick={() => dispatch(openCocktailMenu())}>
                    <MenuOptions menuImg={CocktailMenuImg} />
                </li>
                <li onClick={() => dispatch(closeMenu())}>
                    <Link to='/products/accessories'>
                        <MenuOptions menuImg={AccMenuImg} />
                    </Link>
                </li>
                <li onClick={() => dispatch(closeMenu())}>
                    <Link to='/products/snacks'>
                        <MenuOptions menuImg={SnackMenuImg} />
                    </Link>
                </li>
            </ul>
        </div>
    )
}

export default DirectoryMenu
