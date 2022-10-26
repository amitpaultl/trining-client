import React, { useState } from 'react';
import { createContext } from 'react';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, GoogleAuthProvider, signInWithPopup, signInWithRedirect, GithubAuthProvider, updateProfile, onAuthStateChanged, signOut } from "firebase/auth";
import app from '../Firebase/Firebase.int'
import { useEffect } from 'react';
export const AuthProvider = createContext()

const auth = getAuth(app);
    
    const Context = ({children}) => {

    // const creanuser
    const [user, setuser] = useState();

    // lodar 
    const [loder, setLoader] = useState(false)

    // google provider
    const googleprovider = new GoogleAuthProvider();

    // github provider
    const githubprovider = new GithubAuthProvider();

    // email sing up
    const emailsingup = (email,password)=>{
        setLoader(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }
    // email login
    const singinemail = (email,password)=>{
        setLoader(true)
        return signInWithEmailAndPassword(auth, email, password)
    }

    // google sing up
    const googleSingup =()=>{
        setLoader(true)
        return signInWithPopup(auth, googleprovider)
    }

    // google login

    const googlelogin =()=>{
        setLoader(true)
        return signInWithRedirect(auth, googleprovider);
    }

    // githum sing up
    const gitgubSingUp =()=>{
        setLoader(true)
        return signInWithPopup(auth, githubprovider)
    }

    // githum login
    const githubLogin =()=>{
        setLoader(true)
        return signInWithRedirect(auth, githubprovider);
    }

    // profile up date
    const profile =(name)=>{
        return updateProfile(auth.currentUser, { displayName: name})
    }

    // log out
    const logOut =()=>{
        setLoader(true)
         signOut(auth)
    }

    // currentUser
    useEffect(()=>{
        const unsubscribe = onAuthStateChanged(auth, (crentuser) => {
            if (crentuser) {
                // set user
                setuser(crentuser)
                // loding
            }
            setLoader(false)
          });

          return () =>{
            unsubscribe();
          }
    },[])

    // context pass

    const authinfo = {emailsingup,singinemail,googleSingup,googlelogin,gitgubSingUp,githubLogin,profile,user,logOut,loder}
    return (
        <AuthProvider.Provider value={authinfo}>
            {children}
        </AuthProvider.Provider>
    );
};

export default Context;