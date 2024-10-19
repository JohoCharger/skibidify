import {useAuth, AuthContextType} from "context/AuthContextProvider";
import Link from "next/link";
import React, {useState} from "react";
import ErrorDisplay from "components/ErrorDisplay";

import "bootstrap-icons/font/bootstrap-icons.css";
import "public/signup.css"
import "public/loginbox.css"

export default function SignUpBox() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [rememberMe, setRememberMe] = useState(true);

    const [errorMessage, setErrorMessage] = useState("");

    const {googleSignIn, signUpWithPassword} = useAuth() as AuthContextType;

    function handleGoogleSignUp() {
        googleSignIn(setErrorMessage);
    }

    function handleEmailSignUp() {
        signUpWithPassword(email, password, setErrorMessage);
    }

    return (
        <div id="login-box"
             className="d-flex flex-column justify-content-center bg-dark position-absolute start-50 top-50">
            <div className="login-box-header bg-dark">
                <h4 id="signup-title">Sign up to skibidify</h4>
            </div>
            <div className="login-box-content bg-dark">
                <div className="fb-login box-shadow"></div>
                <div className="gp-login box-shadow">
                    <a id="google-signup" className="d-flex flex-row align-items-center social-login-link text-center"
                       href="#" onClick={handleGoogleSignUp}>
                        <i className="bi bi-google"></i>Sign Up with Google
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
            <div id="email-login-container" className="email-login bg-dark">
                <input className="email-input form-control" type="email" required placeholder="Email" minLength={6}
                       value={email} onChange={e => setEmail(e.target.value)}/>
                <input className="password-input form-control" type="password" required placeholder="Password"
                       minLength={6} value={password} onChange={e => setPassword(e.target.value)}/>
                <input className="password-input form-control" type="password" required placeholder="Confirm password"
                       minLength={6} value={confirmPassword} onChange={e => setConfirmPassword(e.target.value)}/>
            </div>
            <div id="submit-row-container" className="submit-row">
                <button id="submit-id-submit" className="btn btn-primary d-block box-shadow w-100" type="submit"
                        onClick={handleEmailSignUp}>Sign up
                </button>
                <div className="d-flex justify-content-center">
                    <div id="form-check-rememberMe" className="form-check form-check-inline">
                        <input id="formCheck-1" className="form-check-input" type="checkbox"
                               style={{cursor: "pointer"}} name="check"
                               checked={rememberMe} onChange={() => setRememberMe(!rememberMe)}/>
                        <label className="form-check-label" htmlFor="formCheck-1">
                            <span className="label-text">Remember Me</span>
                        </label>
                    </div>
                </div>
                <ErrorDisplay errorMessage={errorMessage}/>
            </div>
            <div id="login-box-footer" className="login-box-footer">
                <p style={{marginBottom: "0px"}}>Already have an account?<Link id="register-link" href="/login">Sign
                    in!</Link></p>
            </div>
        </div>
    )
}