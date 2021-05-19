import React from 'react'

import './styles.scss'

const DeliveryCard = () => {
    return (
        <div className='delivery-card-layout'>
            <h3>Delivery</h3>
            <i className="las la-truck"></i>
            <p>Your order will arrive within 2 - 3 days</p>
            <p><span>Free</span> delivery for orders over $ 79</p>
        </div>
    )
}

export default DeliveryCard
