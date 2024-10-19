"use client"

import {useAuth, AuthContextType} from "context/AuthContextProvider";
import Link from "next/link";

export default function NavbarAuthButtons() {

    const {user, logOut} = useAuth() as AuthContextType;

    if (user) {
        return (
            <>
                <li className="nav-item">
                    <Link className="nav-link text-white me-2" href="/account">Account</Link>
                </li>
                <li className="nav-item">
                    <a className="nav-link text-white" onClick={logOut}>Sign Out</a>
                </li>
            </>
        )
            ;
    } else {
        return (
            <>
                <li className="nav-item">
                    <Link className="nav-link text-white me-2" href="/login">Sign In</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link text-white" href="/signup">Register</Link>
                </li>
            </>
        );
    }
}