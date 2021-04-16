import React, { useState, useEffect } from 'react'
import { Link, useHistory } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { resetAllAuthForms, signInWithGoogle } from './../../redux/User/user.actions'

import FormInput from './../forms/FormInput'
import AuthWrapper from './../AuthWrapper'
import Button from './../forms/Button'

const mapState = ({ user }) => ({
    signInSuccess: user.signInSuccess
})

const SignIn = () => {
    const dispatch = useDispatch();
    const history = useHistory();
    const [email, setEmail ] = useState('');
    const [password, setPassword ] = useState('');
    const { signInSuccess } = useSelector(mapState);

    useEffect(() => {
        if (signInSuccess) {
            history.push('/')
            dispatch(resetAllAuthForms());
        }
    }, [signInSuccess])

    const handleSubmit = (e) => {
        e.preventDefault();
    }

    const handleGoogleSignIn = () => dispatch(signInWithGoogle())

    const configAuthWrapper = {
        headline: 'Sign In'
    }

    return (
        <AuthWrapper {...configAuthWrapper}>
            <div className="formWrap">
                <form onSubmit={handleSubmit}>

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

                    <Button>
                        Sign In
                    </Button>
                    
                    <div className="socialSignIn">
                        <Button onClick={handleGoogleSignIn}>
                            Sign in with Google
                        </Button>
                    </div>

                    <div className="resetPassword">
                        <Link to='/recovery'>
                            Reset Password
                        </Link>
                    </div>
                    
                    <div className="signUp">
                        <Link to='/registration'>
                            Create an account
                        </Link>
                    </div>
                </form>
            </div>
            
            
        </AuthWrapper>
    )
}

export default SignIn
