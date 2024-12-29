"use client"

import {useAuth, AuthContextType} from "context/AuthContextProvider";
import Link from "next/link";

export default function NavbarAuthButtons() {

    const {user} = useAuth() as AuthContextType;

    if (user) {
        return (
            <li className="nav-item">
                <Link className="btn btn-primary ms-md-2" role="button" href="/account">Account</Link>
            </li>
        )
            ;
    } else {
        return (
            <li className="nav-item">
                <Link className="btn btn-primary ms-md-2" role="button" href="/login">Sign in</Link>
            </li>
        );
    }
}