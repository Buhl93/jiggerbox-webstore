import React, { useEffect } from 'react'
import { auth } from './../../firebase/utils'
import { useSelector } from 'react-redux'
import { useHistory } from 'react-router-dom'

import Line from './../Utils/Line'

import './styles.scss'



const mapState = ({ user }) => ({
    currentUser: user.currentUser
})

const Profile = () => {
    const history = useHistory();
    const { currentUser } = useSelector(mapState);

    useEffect(() => {
        if (!currentUser) {
            history.push('/')
        }
        
    }, [currentUser])
    

    return (
        <div>
            <h2 className='account-headline'>Your Account</h2>
            <div className="account-line">
                <Line />
            </div>
            <div className="account-list-wrap">
                <ul>
                    <li>My orders</li>
                    <div className="account-line-list">
                        <Line />
                    </div>
                    <li>Change Personal Details</li>
                    <div className="account-line-list">
                        <Line />
                    </div>
                    <li>Change Delivery Details</li>
                    <div className="account-line-list">
                        <Line />
                    </div>
                    <li>Returns</li>
                    <div className="account-line-list">
                        <Line />
                    </div>
                    <li>Gift Cards</li>
                    <div className="account-line-list">
                        <Line />
                    </div>
                    <li>Help and Contact</li>
                    <div className="account-line-list">
                        <Line />
                    </div>
                    <div onClick={() => auth.signOut()}>
                        <li>Sign Out</li>
                    </div>
                </ul>
                
            </div>
            
        </div>
    )
}

export default Profile
