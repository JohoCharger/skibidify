"use client"

import {useRouter} from "next/navigation"
import {useContext, createContext, useState, useEffect} from 'react';
import {
    signInWithPopup,
    signOut,
    onAuthStateChanged,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    GoogleAuthProvider, User,
    setPersistence,
    browserLocalPersistence,
    browserSessionPersistence
} from 'firebase/auth';
import {auth} from 'lib/firebaseConfig';

// @ts-expect-error-next-line
const AuthContext = createContext();

export interface AuthContextType {
    user: User; // Replace `any` with the actual type of `user`
    googleSignIn: (setErrorMessage: (value: (((prevState: string) => string) | string)) => void) => void;
    logOut: () => void;
    signUpWithPassword: (email: string, password: string, setErrorMessage: (value: (((prevState: string) => string) | string)) => void) => void;
    signInWithPassword: (email: string, password: string, setErrorMessage: (value: (((prevState: string) => string) | string)) => void) => void;
    rememberMe: () => void;
    dontRememberMe: () => void;
}

interface ErrorFunction {
    (arg0: string): void;
}

function handleError(code: string, errorFunction: ErrorFunction) {
    switch (code) {
        case "auth/invalid-email":
            errorFunction("Invalid email address");
            break;
        case "auth/user-not-found":
            errorFunction("Email or password is incorrect");
            break;
        case "auth/wrong-password":
            errorFunction("Email or password is incorrect");
            break;
        case "auth/invalid-credential":
            errorFunction("Email or password is incorrect");
            break;
        case "auth/email-already-in-use":
            errorFunction("Email is already in use");
            break;
        case "auth/weak-password":
            errorFunction("Password is too weak");
            break;
        default:
            console.log(code);
            errorFunction("An error occurred");
    }
}


// @ts-expect-error-next-line
export const AuthContextProvider = ({children}) => {
    const [user, setUser] = useState(null);
    const provider = new GoogleAuthProvider();
    const router = useRouter()

// @ts-expect-error-next-line
    async function createDatabaseAccount(user) {
        const idToken = await user.getIdToken();
        const response = await fetch("http://localhost:8000/api/users/create/", {
            method: 'POST',
            mode: 'cors',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                token: idToken,
            }),
        });
        console.log(response);
    }

    const googleSignIn = (errorFunction: ErrorFunction) => {
        signInWithPopup(auth, provider)
            .then((result) => {
                // @ts-expect-error-next-line
                setUser(result.user);
                createDatabaseAccount(result.user);
                router.push("/");
            })
            .catch((error) => {
                handleError(error.code, errorFunction);
            });
    }

    const logOut = (errorFunction: ErrorFunction) => {
        signOut(auth)
            .then(() => {
                setUser(null);
            })
            .catch((error) => {
                handleError(error.code, errorFunction);
            });
    }

    const signUpWithPassword = (email: string, password: string, errorFunction: ErrorFunction) => {
        createUserWithEmailAndPassword(auth, email, password)
            .then((result) => {
                // @ts-expect-error-next-line
                setUser(result.user);
                createDatabaseAccount(result.user);
                router.push("/");
            })
            .catch((error) => {
                handleError(error.code, errorFunction);
            });
    }

    const signInWithPassword = (email: string, password: string, errorFunction: ErrorFunction) => {
        signInWithEmailAndPassword(auth, email, password)
            .then((result) => {
                // @ts-expect-error-next-line
                setUser(result.user);
                router.push("/");
            })
            .catch((error) => {
                handleError(error.code, errorFunction);
            });
    }

    const rememberMe = async () => {
        await setPersistence(auth, browserLocalPersistence);
    }

    const dontRememberMe = async () => {
        await setPersistence(auth, browserSessionPersistence);
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
        <AuthContext.Provider
            value={{user, googleSignIn, logOut, signUpWithPassword, signInWithPassword, rememberMe, dontRememberMe}}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => useContext(AuthContext);