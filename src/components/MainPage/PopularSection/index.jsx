import React from 'react'

import Glider from './../../Glider'
import Line from './../../Utils/Line'

import './styles.scss'

const PupularSection = () => {
    

    return (
        <div className='popluar-section-layout'>
            <h2 className='headline'>Most popular choices</h2>
            <Glider />
            <div className='popular-section-line'>
                <Line />
            </div>
            
            
        </div>
    )
}

export default PupularSection
