import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';
import { firebaseConfig } from './config';

// Initialize app woth config file
firebase.initializeApp(firebaseConfig);

// export auth and firestore functionalitites
export const auth = firebase.auth();
export const firestore = firebase.firestore();

// Sign in with Google
export const GoogleProvider = new firebase.auth.GoogleAuthProvider();
GoogleProvider.setCustomParameters({ prompt: 'select_account' });

export const handleUserProfile = async (userAuth, additionalData) => {
    // If no user auth object, nothing to handle and will just return imidiatly
    if (!userAuth) return;

    // Get the  user id from the userAuth object, that came from the loginWithGoogle or createUserWithEmailAndPassword function
    const { uid } = userAuth;

    // Create userRef if the user id exists in database - if not, its a new user and snapshot will not exist
    // Returns a reference document attached with get and set methods
    const userRef = firestore.doc(`users/${uid}`);
    // Create a snapshot on whether or not the user is in databse - returns an object with several properties
    const snapshot = await userRef.get();

    // Check whether or not user exists, with build in exists property
    if (!snapshot.exists) {
        try {
            const {displayName, email } = userAuth;
            const timestamp = new Date();
            // create user in database
            await userRef.set({
                displayName,
                email,
                createData: timestamp,
                ...additionalData
            })
        } catch(err) {
            // console.log(err)
        }
    }
    return userRef;
}

