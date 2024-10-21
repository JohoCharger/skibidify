import NavbarAuthButtons from "components/nav/NavbarAuthButtons";
import {AuthContextProvider} from "context/AuthContextProvider";
import Link from "next/link";

export default function Navbar() {
    return (
        <nav className="navbar bg-body py-3 navbar-expand-lg border-bottom border-white">
            <div className="container">
                <Link className="navbar-brand d-flex align-items-center" href="/"><span
                    className="bs-icon-sm bs-icon-rounded bs-icon-primary d-flex justify-content-center align-items-center me-2 bs-icon"></span>
                    <span className="text-white">Skibidi<span className="text-danger">Fy</span></span></Link>
                <button className="navbar-toggler" data-bs-toggle="collapse" data-bs-target="#navcol-4"><span
                    className="visually-hidden">Toggle navigation</span><span className="navbar-toggler-icon"></span>
                </button>
                <div id="navcol-4" className="collapse navbar-collapse flex-grow-0">
                    <ul className="navbar-nav me-auto">
                        <AuthContextProvider><NavbarAuthButtons/></AuthContextProvider>

                    </ul>
                </div>
            </div>
        </nav>
    )
}