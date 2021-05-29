import React from 'react'

import headerImg from './../../assets/images/cocktails/cocktailHeader.jpg'
import HeaderText from './HeaderText'
import PopularSection from './PopularSection'
import VisionSection from './VisionSection'

import './styles.scss'

const MainPage = () => {
    return (
        <div className='mainpage-layout'>
            <div>
                <img className="headerImg" src={headerImg} alt=""/>
            </div>
            <HeaderText />
            <PopularSection />
            <VisionSection />
        </div>
    )
}

export default MainPage
