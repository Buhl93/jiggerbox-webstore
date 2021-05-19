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
                <p>My orders</p>
                <div className="account-line-list">
                    <Line />
                </div>
                <p>Change Personal Details</p>
                <div className="account-line-list">
                    <Line />
                </div>
                <p>Change Delivery Details</p>
                <div className="account-line-list">
                    <Line />
                </div>
                <p>Returns</p>
                <div className="account-line-list">
                    <Line />
                </div>
                <p>Gift Cards</p>
                <div className="account-line-list">
                    <Line />
                </div>
                <p>Help and Contact</p>
                <div className="account-line-list">
                    <Line />
                </div>
                <div onClick={() => auth.signOut()}>
                    <p>Sign Out</p>
                </div>
            </div>
            
        </div>
    )
}

export default Profile
