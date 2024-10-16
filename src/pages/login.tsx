import SignInBox from "components/SignInBox";
import {AuthContextProvider} from "context/AuthContextProvider";

export default function Login() {
    return (
        <AuthContextProvider>
            <SignInBox/>
        </AuthContextProvider>
    );
}