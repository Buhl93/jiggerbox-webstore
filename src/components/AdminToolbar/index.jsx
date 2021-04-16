import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

import { checkUserIsAdmin } from './../../Utils/checkUserIsAdmin'

import './styles.scss'

const mapState = ( { user }) => ({
    currentUser: user.currentUser
})

const AdminToolbar = () => {
    const { currentUser } = useSelector(mapState);
    const isAdmin = checkUserIsAdmin(currentUser);

    if (!isAdmin) return null;

    return (
        <div className='adminToolbar'>
            <Link to='/admin'>
                <ul>
                    <li>
                        Admin
                    </li>
                </ul>
                
            </Link>
        </div>
    )
}

export default AdminToolbar
