import React, { createContext, useState } from 'react';
import {createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, signInWithPopup} from 'firebase/auth'
import app from '../Firebase/firebase.config';
export const AuthContext = createContext()
const auth = getAuth(app)

const googleProvider = new GoogleAuthProvider()

const AuthProvider = ({children}) => {

    const [user ,setUser] = useState({})

// create user using email password 
const createUser = (email, password) =>{
    return createUserWithEmailAndPassword(auth, email, password)
}

// create user by google 
const googleSignup = () =>{
    return signInWithPopup(auth, googleProvider)
}
    
    const authInfo = {
       createUser , googleSignup, setUser, user 
    }
    return (
        <AuthContext.Provider value={authInfo}>
                    {children}
        </AuthContext.Provider>
       
    );
};

export default AuthProvider;