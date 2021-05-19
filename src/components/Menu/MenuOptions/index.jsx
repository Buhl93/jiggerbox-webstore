import React from 'react'
import './styles.scss'

const MenuOption = ({menuImg}) => {
    return (
        <div className='menu-item'>
            <img className='menu-img' src={menuImg} alt="menu image"/>
            <div className="menu-fan"></div>
        </div>
    )
}

export default MenuOption
