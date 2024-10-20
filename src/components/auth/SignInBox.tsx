import React, {useState} from "react";
import {useAuth, AuthContextType} from "context/AuthContextProvider";

import "bootstrap-icons/font/bootstrap-icons.css";
import "public/signin.css";
import Link from "next/link";
import ErrorDisplay from "components/ErrorDisplay";

export default function SignInBox() {
    const [password, setPassword] = useState("");
    const [email, setEmail] = useState("");
    const [rememberMe, setRememberMe] = useState(true);
    const [errorMessage, setErrorMessage] = useState("");

    const {googleSignIn, signInWithPassword} = useAuth() as AuthContextType;

    function handlePasswordSignIn() {
        signInWithPassword(email, password, setErrorMessage);
    }

    function handleGoogleSignIn() {
        googleSignIn(setErrorMessage);
    }

    return (
        <div id="login-box"
             className="d-flex flex-column justify-content-center bg-dark position-absolute start-50 top-50">
            <div id="login-box-header" className="login-box-header bg-dark">
                <h4 id="login-title">Login to skibidify</h4>
            </div>
            <div id="login-box-content" className="login-box-content bg-dark">
                <div className="fb-login box-shadow"></div>
                <div className="gp-login box-shadow">
                    <a id="google-login"
                       className="d-flex flex-row align-items-center social-login-link text-center"
                       href="#" onClick={handleGoogleSignIn}><i className="bi bi-google"></i>Sign In with Google
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
                <input className="email-input form-control" type="email" required placeholder="Email"
                       minLength={6} value={email} onChange={(e) => setEmail(e.target.value)}/>
                <input className="password-input form-control" type="password" required placeholder="Password"
                       minLength={6} value={password} onChange={(e) => setPassword(e.target.value)}/>
            </div>

            <div id="submit-row" className="submit-row">
                <button id="submit-id-submit" className="btn btn-primary d-block box-shadow w-100"
                        type="submit" onClick={handlePasswordSignIn}>Login
                </button>
                <div className="d-flex justify-content-between">
                    <div id="form-check-rememberMe" className="form-check form-check-inline">
                        <input id="formCheck-1" className="form-check-input" type="checkbox"
                               name="check" checked={rememberMe} onChange={() => setRememberMe(!rememberMe)}/>
                        <label className="form-check-label" htmlFor="formCheck-1">
                            <span className="label-text">Remember Me</span>
                        </label>
                    </div>
                    <a id="forgot-password-link" href="#">Forgot Password?</a>
                </div>
                <ErrorDisplay errorMessage={errorMessage}/>
            </div>

            <div id="login-box-footer" className="login-box-footer">
                <p>Don&#39;t have an account?<Link id="register-link" href="/signup">Sign Up!</Link></p>
            </div>
        </div>
    )
};
