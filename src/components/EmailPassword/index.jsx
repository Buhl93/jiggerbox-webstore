import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useHistory } from 'react-router-dom'
import FormInput from './../forms/FormInput'
import Button from './../forms/Button'
import AuthWrapper from '../AuthWrapper'

import { resetPassword } from './../../redux/User/user.actions'

const mapState = ({ user }) => ({
    resetPasswordSuccess: user.resetPasswordSuccess,
    resetPasswordError: user.resetPasswordError
})

const EmailPassword = () => {
    const dispatch = useDispatch();
    const history = useHistory();
    const { resetPasswordSuccess, resetPasswordError } = useSelector(mapState);
    const [email, setEmail ] = useState('')

    useEffect(() => {
        if (resetPasswordSuccess) {
            history.push('./login');
        }
    }, [resetPasswordSuccess])

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(resetPassword({ email }));
        
    }

    const configAuthWrapper = {
        headline: 'Recover Password'
    }

    return (
        <AuthWrapper {...configAuthWrapper}>
            <div className='formWrap'>
                <form onSubmit={handleSubmit}>
                    <FormInput 
                        type='email'
                        name='email'
                        value={email} 
                        placeholder='Email'
                        handleChange={e => setEmail(e.target.value)}
                    />
                    <Button>
                        Recover password
                    </Button>
                </form>
            </div>
        </AuthWrapper>
    )
}

export default EmailPassword
