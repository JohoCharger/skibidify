import Navbar from "components/nav/Navbar";
import {AuthContextProvider} from "context/AuthContextProvider";
import AccountDetails from "components/AccountDetails";

export default function AccountPage() {
    return (
        <div>
            <Navbar/>
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col col-6 text-center mt-3">
                        <h3>Account</h3>
                    </div>
                </div>
            </div>
            <AuthContextProvider><AccountDetails/></AuthContextProvider>
        </div>
    );
}