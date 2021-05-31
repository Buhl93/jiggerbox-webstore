import React from 'react'
import GliderComponent from 'react-glider-carousel'
import Glide, { Slide } from 'react-glidejs';

import './styles.scss'

const GliderSnap = ({img}) => {

    const arr = [1,2,3];

    return (
        <>
            <div className='glider-mobile'>
                {arr.length > 0 && 
                    <Glide
                    type='carousel'
                    perView='1.3'
                    gap='20'
                    >
                    
                    <img src={img} alt="" />
                    <img src={img} alt="" />
                    
                        
                        
                    </Glide> 
                    }
            </div>
            <div className='glider-web'>
                {arr.length > 0 && 
                    <Glide
                    type='carousel'
                    perView='4'
                    gap='20'
                    >
                        
                    <img src={img} alt="" />
                    <img src={img} alt="" />
                        
                            
                            
                    </Glide> 
                }
            </div>
        </>
            
        
    )
}

export default GliderSnap
