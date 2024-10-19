import SignUpBox from "components/auth/SignUpBox";
import {AuthContextProvider} from "context/AuthContextProvider";

export default function SignUpPage() {
    return (
        <AuthContextProvider>
            <SignUpBox/>
        </AuthContextProvider>
    );
}