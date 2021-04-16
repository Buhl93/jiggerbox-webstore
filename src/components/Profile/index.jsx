import React, { useEffect } from 'react'
import { auth } from './../../firebase/utils'
import { useSelector } from 'react-redux'
import { useHistory } from 'react-router-dom'

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
            <h2>Account</h2>
            <span onClick={() => auth.signOut()}>
                Sign out
            </span>
        </div>
    )
}

export default Profile
