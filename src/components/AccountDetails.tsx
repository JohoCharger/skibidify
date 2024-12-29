"use client"
import fetch from "node-fetch";
import {useAuth, AuthContextType} from "context/AuthContextProvider";

export default function AccountDetails() {

    const {user} = useAuth() as AuthContextType;

    async function handleCheckout() {
        const token = await user?.getIdToken() || '';
        const res = await fetch('http://localhost:8000/api/payments/create_checkout/', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                user_token: token
            }),
        });
        const data = await res.json();
        console.log(data);
        window.location.href = data.redirect_url;
    }

    return (
        <div className="container min-vh-100">
            <div className="row">
                <div className="col text-center py-3">
                    <h1 className="m-0">Account</h1>
                </div>
            </div>
            <div className="row">
                <div className="col align-content-center">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12">
                                <p className="text-center fs-4 m-0">Logged in as:</p>
                                <p className="text-center fs-4"> johocharger.dev@gmail.com</p>
                            </div>
                            <div className="col-md-12">
                                <p className="m-3 text-center fs-4">Account type: Free</p>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-12">
                                <p className="m-3 text-center fs-4">Free Tokens: 5</p>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-12">
                                <p className="m-3 text-center fs-4">Next tokens in 15h 13min</p>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-12 text-center my-3">
                                <button className="btn btn-warning rounded-3 w-75 text-black-50" type="button">Manage
                                    subscription
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
                <div id="history-column" className="col col-lg-6 col col-12">
                    <section id="history-section">
                        <div className="container">
                            <div className="row">
                                <div className="col">
                                    <h2 className="text-center my-4">History</h2>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col text-center"><textarea
                                    className="text-area-capped border-0 text-area-history" readOnly></textarea></div>
                            </div>
                            <div className="row">
                                <div className="col text-center">
                                    <h4 className="my-5">nothin here yet...</h4>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>
            </div>
        </div>
    )
}