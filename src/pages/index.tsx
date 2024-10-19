import 'public/landing.css';
import 'components/Transformer'
import Transformer from "components/Transformer";
import Navbar from "components/nav/Navbar";
import {AuthContextProvider} from "context/AuthContextProvider";

export default function Home() {
    return (
        <div className="container">
            <Navbar/>
            <div className="row justify-content-center">
                <div className="col col-6 text-center mt-3">
                    <h3>Make your <span className="text-danger">Skibidi</span> come true</h3>
                </div>
            </div>
            <AuthContextProvider><Transformer/></AuthContextProvider>
        </div>
    );
}
