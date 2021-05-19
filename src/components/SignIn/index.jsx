import React, { useState, useEffect } from 'react'
import { Link, useHistory } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { resetAllAuthForms, signInWithGoogle } from './../../redux/User/user.actions'

import FormInput from './../forms/FormInput'
import AuthWrapper from './../AuthWrapper'
import Button from './../forms/Button'
import Line from './../Utils/Line'
import SigninImg from './../../assets/images/other/SignInImg.png'

import './styles.scss'

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
            <div className="signin-line">
                <Line />
            </div>
            <div className="form-wrap">
                <form onSubmit={handleSubmit}>
                    
                    <FormInput 
                        type='email'
                        name='email'
                        value={email}
                        label='Email'
                        handleChange={e => setEmail(e.target.value)}
                    />

                    <FormInput 
                        type='password'
                        name='password'
                        value={password} 
                        label='Password'
                        handleChange={e => setPassword(e.target.value)}
                    />

                    <div className="reset-password">
                        <Link to='/recovery'>
                            Forgot your password?
                        </Link>
                    </div>

                    <Button className='btn signin-button'>
                        Sign In
                    </Button>
                    
                    
                </form>
                
            </div>
            <Button className="btn social-signin-button" onClick={handleGoogleSignIn}>
                Sign in with Google
            </Button>

            <div className="signin-line">
                <Line />
            </div>

            <h3 className="create-account-header">
                New Here?
            </h3>
                    
            <Button className="btn signup-button">
                <Link to='/registration'>
                    Create an account
                </Link>
            </Button>

            <div>
                <img className="signin-img" src={SigninImg} alt="signin image"/>
            </div>
            
            
        </AuthWrapper>
    )
}

export default SignIn
