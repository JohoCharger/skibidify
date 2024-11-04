import Navbar from "components/nav/Navbar";
import {AuthContextProvider} from "context/AuthContextProvider";
import AccountDetails from "components/AccountDetails";

export default function AccountPage() {
    return (
        <div>
            <div className="container">
                <Navbar/>
                <div className="row justify-content-center">
                    <div className="col col-6 text-center mt-3">
                        <h3>Account</h3>
                    </div>
                </div>
                <AuthContextProvider><AccountDetails/></AuthContextProvider>
            </div>
        </div>
    );
}