import React, { createContext, useEffect, useState } from 'react';
import {createUserWithEmailAndPassword, deleteUser, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile} from 'firebase/auth';
import app from '../firebase/firebase.config';
import Loading from '../Pages/Shared/Loading/Loading';


export const AuthContext = createContext();
const auth = getAuth(app)

const AuthProvider = ({children}) => {
    const [user, setUser] = useState({});
    const [loading, setLoading] = useState(true);
    
    const createUser = (email, password) =>{
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    }

    const signIn = (email, password) =>{
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    }

    const updateUser = (userInfo) =>{
        return updateProfile(auth.currentUser, userInfo);
    }
    const providerLogin =(provider)=>{
        setLoading(true)
        return signInWithPopup(auth, provider)
    }


    const logOut = () =>{
        setLoading(true);
        return signOut(auth);
    }

    useEffect( () =>{
        const unsubscribe = onAuthStateChanged(auth, currentUser =>{
            console.log('user observing');
            setUser(currentUser);
            setLoading(false);
        });

        return () => unsubscribe();
    }, [])


 
    const [userFromDB, setUserFromDB] = useState({})

    const [dbUserLoading, setDbUserLoading] = useState(true)

    // if(userFromDB=== undefined){
    //     setDbUserLoading(true)
    // }

    useEffect(()=> {
        fetch(`http://localhost:5000/user?email=${user?.email}`)
        .then(res => res.json())
        .then( data => {
            // console.log('con',data[0]);
           
            setUserFromDB(data[0])
            setDbUserLoading(false)
        })
      },[user?.email])
    //   console.log('final', userFromDB);

         

    const removeUser = ()=>{
        return deleteUser(auth.currentUser)

    }
    
    const authInfo = {
        createUser,
        signIn,
        updateUser,
        logOut,
        user,
        loading,
        setLoading,
        userFromDB,
        dbUserLoading,
        removeUser,
        providerLogin
        
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;