import React from 'react'

import './styles.scss'

const AuthWrapper = ({ headline, children}) => {
    return (
        <div className='auth-wrapper section-top-pad'>
            <div className='auth-headline'>
                {headline && <h2>{headline}</h2>}
            </div>
            <div className='children'>
                {children && children}
            </div>
            
        </div>
    )
}

export default AuthWrapper
