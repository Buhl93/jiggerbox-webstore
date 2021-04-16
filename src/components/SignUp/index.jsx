import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useHistory } from 'react-router-dom'

import { signUpUser, resetAllAuthForms } from './../../redux/User/user.actions'

import FormInput from './../forms/FormInput'
import AuthWrapper from './../AuthWrapper'
import Button from './../forms/Button'

const mapState = ({ user }) => ({
    signUpSuccess: user.signUpSuccess,
    signUpError: user.signUpError,
})

const SignUp = () => {
    const dispatch = useDispatch();
    const history = useHistory();
    const { signUpSuccess, signUpError } = useSelector(mapState);
    const [displayName, setDisplayName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [errors, setErrors] = useState([]);

    useEffect(() => {
        if (signUpSuccess) {
            resetForms();
            dispatch(resetAllAuthForms());
            history.push('/')
        }
    }, [signUpSuccess]);

    useEffect(() => {
        if (Array.isArray(signUpError) && signUpError > 0) {
            setErrors(signUpError)
        }
    }, [signUpError])

    const resetForms = () => {
        setDisplayName('');
        setEmail('');
        setPassword('');
        setConfirmPassword('');
        setErrors([]);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(signUpUser({
            displayName, 
            email, 
            password, 
            confirmPassword
        }));

    }

    const configAuthWrapper = {
        headline: 'Sign Up'
    }

    return (
        <AuthWrapper {...configAuthWrapper}>
            <div className="formWrap">

                <form onSubmit={handleSubmit}>

                    <FormInput 
                        type='text'
                        name='displayName'
                        value={displayName} 
                        placeholder='Full Name'
                        handleChange={e => setDisplayName(e.target.value)}
                    />

                    <FormInput 
                        type='email'
                        name='email'
                        value={email} 
                        placeholder='Email'
                        handleChange={e => setEmail(e.target.value)}
                    />

                    <FormInput 
                        type='password'
                        name='password'
                        value={password} 
                        placeholder='Password'
                        handleChange={e => setPassword(e.target.value)}
                    />

                    <FormInput 
                        type='password'
                        name='confirmPassword'
                        value={confirmPassword} 
                        placeholder='Confirm Password'
                        handleChange={e => setConfirmPassword(e.target.value)}
                    />      

                    <Button>
                        Sign Up
                    </Button>
                    
                    <div className="signIn">
                        <Link to='/login'>
                            Already have an user?
                        </Link>
                    </div>
                </form>
            </div>
            
            
        </AuthWrapper>
    )
}

export default SignUp
