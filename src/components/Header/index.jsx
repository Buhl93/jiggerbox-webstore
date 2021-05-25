import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import { selectCartItemsCount } from './../../redux/Cart/cart.selectors'

import './styles.scss'

import { openMenu } from './../../redux/Menu/menu.actions'

const mapState = (state) => ({
    currentUser: state.user.currentUser,
    totalNumCartItems: selectCartItemsCount(state)
})

const Header = () => {
    const dispatch = useDispatch();
    const { currentUser, totalNumCartItems } = useSelector(mapState);

    return (
        <header className='header'>
            
            <div className="menu-opener" onClick={() => dispatch(openMenu())}>
                    <i className="las la-bars"></i>
            </div>
            <div className='logo'>
                <Link to='/'>
                    Jiggerbox
                </Link>
            </div>
            <div className='menu-nav'>
                <ul>
                    <li>Cocktails</li>
                    <li>Accessories</li>
                    <li>Snacks</li>
                </ul>
            </div>
            <nav className='navigate'>
                <ul className='nav-list'>
                    <li>
                        <Link to='/favorites'>
                            <i className="lar la-heart"></i>
                        </Link>
                    </li>
                    <li>
                        <Link to='/my-cart'>
                            <div className='my-cart-wrap'>
                                <i className="las la-shopping-bag"></i>
                                {totalNumCartItems > 0 &&
                                <div className='item-count'>
                                    {totalNumCartItems}
                                </div> 
                                }
                            </div>
                        </Link>
                    </li>
                    {!currentUser && (
                        <li>
                        <Link to='/login'>
                            <i className="las la-user"></i>
                        </Link>
                    </li>
                    )}
                    {currentUser && (
                        <li>
                        <Link to='/account'>
                            <i className="las la-user"></i>
                        </Link>
                    </li>
                    )}
                    
                </ul>
            </nav>
            
        </header>
    )
}

export default Header
