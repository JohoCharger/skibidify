import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootswatch/dist/lux/bootstrap.min.css'
import SignIn from "components/SignIn";
import {AuthContextProvider} from "context/AuthContextProvider";

export default function Login() {
    return (
        <AuthContextProvider>
            <SignIn/>
        </AuthContextProvider>
    );
}