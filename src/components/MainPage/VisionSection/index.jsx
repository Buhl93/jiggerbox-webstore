import React from 'react'
import FriendlyCocktails from './../../../assets/images/other/friendlyCocktails.png'
import './styles.scss'

const VisionSection = () => {
    return (
        <div className='our-vision-layout'>
            <h3 className='headline'>Our Vision</h3>
            <img className='visionImg' src={FriendlyCocktails} alt="Friendly cocktails"/>
            <p className='vision-paragraph'>
                At Jiggerbox we are passinate about quality and local ingredients - We dare to experiment with different tasting experiences and combinations.
                <br/><br/>
                 Our cocktail boxes are the complete package, and they contain everything you need to create beautiful and deliciouse drinks for you and your loved ones. 
                 <br/><br/>
                 All ingredients has been packed carefully, together with a recipe that will take you through the necceassry steps, and it doesn't matter if you are a seasoned cocktail mixer, or it's your first time.
            </p>
        </div>
    )
}

export default VisionSection
