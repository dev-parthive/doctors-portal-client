import React, { createContext, useEffect, useState } from 'react';
import {createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut} from 'firebase/auth'
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
//login
const hanldeSignIn = (email, password) =>{
    return signInWithEmailAndPassword(auth, email , password)
}
    // observer 
    useEffect( ()=>{
        const unSubscribe = onAuthStateChanged(auth, currentUser=>{
            console.log(currentUser)
            setUser(currentUser)
            
        });
        return () =>{
            return unSubscribe()
        }
    }, [])
    //signOut 
    const logOut = () =>{
        return signOut(auth)
    }


//authInfo
    const authInfo = {
        createUser , googleSignup, setUser, user , hanldeSignIn
        , logOut
     }
    return (
        <AuthContext.Provider value={authInfo}>
                    {children}
        </AuthContext.Provider>
       
    );
};

export default AuthProvider;