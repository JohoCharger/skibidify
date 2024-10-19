import SignInBox from "components/auth/SignInBox";
import {AuthContextProvider} from "context/AuthContextProvider";

export default function Login() {
    return (
        <AuthContextProvider>
            <SignInBox/>
        </AuthContextProvider>
    );
}