"use client"

import {useContext, createContext, useState, useEffect} from 'react';
import {
    signInWithPopup,
    signOut,
    onAuthStateChanged,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    GoogleAuthProvider, User
} from 'firebase/auth';
import {auth} from 'lib/firebaseConfig';

// @ts-expect-error-next-line
const AuthContext = createContext();

export interface AuthContextType {
    user: User; // Replace `any` with the actual type of `user`
    googleSignIn: () => void;
    logOut: () => void;
    signUpWithPassword: (email: string, password: string) => void;
    signInWithPassword: (email: string, password: string) => void;
}

// @ts-expect-error-next-line
export const AuthContextProvider = ({children}) => {
    const [user, setUser] = useState(null);

    const googleSignIn = () => {
        signInWithPopup(auth, new GoogleAuthProvider())
            .then((result) => {
                // @ts-expect-error-next-line
                setUser(result.user);
            })
            .catch((error) => {
                console.error(error);
            });
    }

    const logOut = () => {
        signOut(auth)
            .then(() => {
                setUser(null);
            })
            .catch((error) => {
                console.error(error);
            });
    }

    const signUpWithPassword = (email: string, password: string) => {
        createUserWithEmailAndPassword(auth, email, password)
            .then((result) => {
                // @ts-expect-error-next-line
                setUser(result.user);
            })
            .catch((error) => {
                console.error(error);
            });
    }

    const signInWithPassword = (email: string, password: string) => {
        signInWithEmailAndPassword(auth, email, password)
            .then((result) => {
                // @ts-expect-error-next-line
                setUser(result.user);
            })
            .catch((error) => {
                console.error(error);
            });
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
                // @ts-expect-error-next-line
                setUser(user);
            } else {
                setUser(null);
            }
        });
        return () => unsubscribe();
    }, [user]);
    return (
        <AuthContext.Provider value={{user, googleSignIn, logOut, signUpWithPassword, signInWithPassword}}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => useContext(AuthContext);