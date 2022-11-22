import React, { createContext, useEffect, useState } from 'react';
import {createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile} from 'firebase/auth'
import app from '../Firebase/firebase.config';
export const AuthContext = createContext()
const auth = getAuth(app)

const googleProvider = new GoogleAuthProvider()

const AuthProvider = ({children}) => {

    const [user ,setUser] = useState({})
    const [loading, setLoadin] = useState(true)
// create user using email password 
const createUser = (email, password) =>{
    setLoadin(true)
    return createUserWithEmailAndPassword(auth, email, password)
}

// create user by google 
const googleSignup = () =>{
    setLoadin(true)
    return signInWithPopup(auth, googleProvider)
}
//login
const hanldeSignIn = (email, password) =>{
    setLoadin(true)
    return signInWithEmailAndPassword(auth, email , password)
}
    // observer 
    useEffect( ()=>{
        const unSubscribe = onAuthStateChanged(auth, currentUser=>{
            console.log(currentUser)
            setUser(currentUser)
            setLoadin(false)
        });
        return () =>{
            return unSubscribe()
        }
    }, [])


//update user 
const updateUser = (userInfo) =>{
    return updateProfile(user, userInfo)
}

    //signOut 
    const logOut = () =>{
        setLoadin(true)
        return signOut(auth)
    }


//authInfo
    const authInfo = {
        createUser , googleSignup, setUser, user , hanldeSignIn
        , logOut , updateUser  ,auth , loading
     }
    return (
        <AuthContext.Provider value={authInfo}>
                    {children}
        </AuthContext.Provider>
       
    );
};

export default AuthProvider;