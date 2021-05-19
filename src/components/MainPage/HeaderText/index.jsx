import React from 'react'
import { Link } from 'react-router-dom'
import Button from './../../forms/Button'
import Line from './../../Utils/Line'

import './styles.scss'

const HeaderText = () => {
    return (
        <div className='header-text-layout'>
            <h1 className='headline'>Spirit in a box</h1>
            <p>We create wonderful cocktail boxes designed for you to mix at home.</p>
            <Link to='/products/cocktails/'>
                <Button>
                    Browse our selection
                </Button> 
            </Link>
             
            <div className="header-text-line">
            <Line /> 
            </div>
             
        </div>
    )
}

export default HeaderText
