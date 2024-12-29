import NavbarAuthButtons from "components/nav/NavbarAuthButtons";
import {AuthContextProvider} from "context/AuthContextProvider";
import Link from "next/link";
import Logo from "components/Logo";

export default function Navbar() {
    return (
        <header>
            <nav className="navbar navbar-expand-md bg-dark py-3" data-bs-theme="dark">
                <div className="container"><a className="navbar-brand d-flex align-items-center" href="#">
                    <Logo/>
                    <span>SKIBIDI<span
                        className="text-warning">FY</span></span></a>
                    <button className="navbar-toggler" data-bs-toggle="collapse" data-bs-target="#navcol-5"><span
                        className="visually-hidden">Toggle navigation</span><span
                        className="navbar-toggler-icon"></span></button>
                    <div id="navcol-5" className="collapse navbar-collapse">
                        <ul className="navbar-nav ms-auto">
                            <li className="nav-item"><Link className="nav-link active" href="/">About</Link></li>
                            <li className="nav-item"><Link className="nav-link" href="transform">Transform</Link>
                            </li>
                            <li className="nav-item"><Link className="nav-link" href="pricing">Pricing</Link></li>
                        </ul>
                        <AuthContextProvider><NavbarAuthButtons/></AuthContextProvider>
                    </div>
                </div>
            </nav>
        </header>
    )
}