import {getAuth, signInWithPopup, GoogleAuthProvider} from "firebase/auth";
import {app} from "lib/firebaseConfig";
import "bootstrap-icons/font/bootstrap-icons.css";

import "public/SignIn.css";

export default function SignIn() {

    const provider = new GoogleAuthProvider();

    function googleSignIn() {
        signInWithPopup(auth, provider)
            .then((result) => {
                // This gives you a Google Access Token. You can use it to access the Google API.
                const credential = GoogleAuthProvider.credentialFromResult(result);
                const token = credential.accessToken;
                // The signed-in user info.
                const user = result.user;
                console.log(user)
                // IdP data available using getAdditionalUserInfo(result)
                // ...
            }).catch((error) => {
            // Handle Errors here.
            const errorCode = error.code;
            const errorMessage = error.message;
            // The email of the user's account used.
            const email = error.customData.email;
            // The AuthCredential type that was used.
            const credential = GoogleAuthProvider.credentialFromError(error);
            // ...
        });
    }

    const auth = getAuth(app);

    return (
        <div id="login-box"
             className="d-flex flex-column justify-content-center bg-dark position-absolute start-50 top-50">
            <div id="login-box-header" className="login-box-header bg-dark">
                <h4 id="login-title">Login to skibidify</h4>
            </div>
            <div id="login-box-content" className="login-box-content bg-dark">
                <div className="fb-login box-shadow"></div>
                <div className="gp-login box-shadow">
                    <a id="google-login" className="d-flex flex-row align-items-center social-login-link text-center"
                       href="#"><i className="bi bi-google"></i>Sign In with Google
                    </a>
                </div>
            </div>

            <div className="d-flex flex-row align-items-center login-box-seperator-container">
                <div className="login-box-seperator"></div>
                <div className="login-box-seperator-text">
                    <p id="seperator-text">or</p>
                </div>
                <div className="login-box-seperator"></div>
            </div>

            <div id="email-login" className="email-login bg-dark">
                <input className="email-input form-control" type="email" required placeholder="Email" minLength={6}/>
                <input className="password-input form-control" type="password" required placeholder="Password"
                       minLength={6}/>
            </div>

            <div id="submit-row" className="submit-row">
                <button id="submit-id-submit" className="btn btn-primary d-block box-shadow w-100" type="submit">Login
                </button>
                <div className="d-flex justify-content-between">
                    <div id="form-check-rememberMe" className="form-check form-check-inline">
                        <input id="formCheck-1" className="form-check-input" type="checkbox"
                               name="check"/>
                        <label className="form-check-label" htmlFor="formCheck-1">
                            <span className="label-text">Remember Me</span>
                        </label>
                    </div>
                    <a id="forgot-password-link" href="#">Forgot Password?</a>
                </div>
            </div>

            <div id="login-box-footer" className="login-box-footer">
                <p>Don&#39;t you have an account?<a id="register-link" href="#">Sign Up!</a></p>
            </div>
        </div>
    )
};
