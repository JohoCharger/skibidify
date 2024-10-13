import SignUpBox from "components/SignUpBox";
import {AuthContextProvider} from "context/AuthContextProvider";

export default function SignUpPage() {
    return (
        <AuthContextProvider>
            <SignUpBox/>
        </AuthContextProvider>
    );
}