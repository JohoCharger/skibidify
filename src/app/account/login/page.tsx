import SignInBox from "components/auth/SignInBox";
import {AuthContextProvider} from "context/AuthContextProvider";
import React from "react";

export default function Page() {
    return (
        <AuthContextProvider>
            <SignInBox/>
        </AuthContextProvider>
    );
}