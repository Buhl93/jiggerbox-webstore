import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useHistory } from 'react-router-dom'

import MenuOptions from './../MenuOptions'
import CocktailMenuImg from './../../../assets/images/cocktails/cocktailHeader.jpg'
import AllkindsImg from './../../../assets/images/other/Component 6 – 1.png'
import GinImg from './../../../assets/images/other/Component 5 – 1.png'
import RumImg from './../../../assets/images/other/Component 7 – 1.png'
import VodkaImg from './../../../assets/images/other/Component 8 – 1.png'

import { closeMenu } from './../../../redux/Menu/menu.actions'

const CocktailsMenu = () => {
    const history = useHistory();
    const dispatch = useDispatch();

    const handleFilterAlcohol = (alcoholFilter) => {
        history.push(`/products/cocktails/${alcoholFilter}`);
    }

    return (
        <div>
            <ul>
                <li onClick={() => dispatch(closeMenu())}>
                    <Link to='/products/cocktails/'>
                        <MenuOptions menuImg={AllkindsImg} />
                    </Link>
                </li>
                <li onClick={() => {
                    handleFilterAlcohol('gin');
                    dispatch(closeMenu());
                }}>
                    <MenuOptions menuImg={GinImg} />
                </li>
                <li onClick={() => {
                    handleFilterAlcohol('rum');
                    dispatch(closeMenu());
                }}>
                    <MenuOptions menuImg={RumImg} />
                </li>
                <li onClick={() => {
                    handleFilterAlcohol('vodka');
                    dispatch(closeMenu());
                }}>
                    <MenuOptions menuImg={VodkaImg} />
                </li>
            </ul>
        </div>
    )
}

export default CocktailsMenu
