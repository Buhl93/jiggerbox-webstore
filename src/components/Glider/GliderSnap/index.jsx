import React from 'react'
import GliderComponent from 'react-glider-carousel'

import './styles.scss'

const GliderSnap = ({img}) => {

    const arr = [1,2,3];

    return (
        <div className='gliderSnap'>
                
                <GliderComponent
                    settings={{
                        slidesToShow: 1,
                        slidesToScroll: 1,
                        scrollLock: true

                        
                    }}
                    

                >
                    {arr.map((item, index) => 
                            <figure key={index}>
                                <img src={img} alt="Cocktail images"/>
                            </figure>
                        )
                    }
                    
                    
                    
                </GliderComponent>
                

                <div id='dots' className="glider-dots"></div> 
        </div>
            
        
    )
}

export default GliderSnap
