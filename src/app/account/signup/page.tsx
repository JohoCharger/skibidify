import SignUpBox from "components/auth/SignUpBox";
import {AuthContextProvider} from "context/AuthContextProvider";
import React from "react";

export default function SignUpPage() {
    return (
        <AuthContextProvider>
            <SignUpBox/>
        </AuthContextProvider>
    );
}