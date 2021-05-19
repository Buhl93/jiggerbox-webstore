import React from 'react'

import './styles.scss'

const ContentCard = ({header, image}) => {
    return (
        <div className='content-card-layout'>
            <h3 className='content-card-header'>{header}</h3>
            <img className='content-card-image' src={image} alt="content image"/>
        </div>
    )
}

export default ContentCard
