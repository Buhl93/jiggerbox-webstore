import React from 'react'
import './styles.scss'
import { useSelector, useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'

import { openMenu } from './../../redux/Menu/menu.actions'

const mapState = ({ user }) => ({
    currentUser: user.currentUser
})

const Header = () => {
    const dispatch = useDispatch();
    const { currentUser } = useSelector(mapState);

    return (
        <div className='header'>
            
            <div onClick={() => dispatch(openMenu())}>
                    <i className="las la-bars"></i>
            </div>
            <div className='logo'>
                <Link to='/'>
                    Upstir
                </Link>
            </div>
            <nav className='navigate'>
                <ul>
                    <li>
                        <Link to='/search'>
                            <i className="las la-search"></i>
                        </Link>
                    </li>
                    <li>
                        <Link to='/favorites'>
                            <i className="lar la-heart"></i>
                        </Link>
                    </li>
                    <li>
                        <Link to='/basket'>
                            <i className="las la-shopping-bag"></i>
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
            
        </div>
    )
}

export default Header
