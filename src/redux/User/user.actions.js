import userTypes from './user.types'
import { auth, GoogleProvider, handleUserProfile } from './../../firebase/utils'

export const setCurrentUser = user => ({
    type: userTypes.SET_CURRENT_USER,
    payload: user
})
export const resetAllAuthForms = () => ({
    type: userTypes.RESET_AUTH_FORMS
})

export const signInUser = ({ email, password}) => async dispatch => {
    try {
        // Pass email and password to firebase auth function
        await auth.signInWithEmailAndPassword(email, password);
        //
        dispatch({
            type: userTypes.SIGN_IN_SUCCESS,
            payload: true
        })
    } catch(err) {
        // console.log(err)
    }
}

export const signUpUser = ({displayName, email, password, confirmPassword}) => async dispatch => {
    // if passwords dont match, dispatch error message ready to be displayed for user
    if (password !== confirmPassword) {
        const err = ['Passwords does not match'];
        // pass error to redux store
        dispatch({
            type: userTypes.SIGN_UP_ERROR,
            payload: err
        })
        return;
    }

    // if passwords match    
    try {
        const { user } = await auth.createUserWithEmailAndPassword(email, password); // deconstruct user from the method returned

        // handle user profile, displayName passed as additional data (firebase utils file)
        await handleUserProfile(user, { displayName });
        dispatch({
            type: userTypes.SIGN_UP_SUCCESS,
            payload: true
        })

    } catch(err) {
        // console.log(err)
    }
}

export const resetPassword = ({ email }) => async dispatch => {
    const config = {
        url: 'http://localhost:3000/login'
    }

    try {
        await auth.sendPasswordResetEmail(email, config)
            .then(() => {
                dispatch({
                    type: userTypes.RESET_PASSWORD_SUCCESS,
                    payload: true
                })
            }).catch(() => {
                const err = ['Email not found. Please try again'];
                dispatch({
                    type: userTypes.RESET_PASSWORD_ERROR,
                    payload: err
                })
            })
    } catch(err) {
        // console.log(err)
    }
}

// Google sign in
export const signInWithGoogle = () => async dispatch => {
    try {
        await auth.signInWithPopup(GoogleProvider)
            .then(() => {
                dispatch({
                    type: userTypes.SIGN_IN_SUCCESS,
                    payload: true
                });
            });
    } catch(err) {
        // console.log(err)
    }
}