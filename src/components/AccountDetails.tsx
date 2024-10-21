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
        <button className="btn btn-dark rounded-3 shadow" type="button" onClick={handleCheckout}>Click this to
            test
            checkout functionality
        </button>
    )
}