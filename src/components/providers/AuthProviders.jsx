import React, { createContext, useEffect, useState } from 'react';
import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, onAuthStateChanged } from "firebase/auth";
import app from '../../firebase/firebase.config';


export const AuthContext = createContext(null);
const auth = getAuth(app);

const AuthProviders = ({ children }) => {
    // const user = { displayName: 'Rabbi' }
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    const createUser = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    }

    const loginUser = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    }

    const logOut = () => {
        return signOut(auth);
    }

    //observer user auth state
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser => {
            setUser(currentUser);
            setLoading(false);
        }));

        //stop observing while unmounting
        return () => {
            return unsubscribe();
        }
    }, [])


    const authInfo = {
        user,
        loading,
        createUser,
        loginUser,
        logOut,
    }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthProviders;