import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootswatch/dist/lux/bootstrap.min.css'
import 'public/landing.css';
import 'components/Transformer'
import Transformer from "components/Transformer";

export default function Home() {
    return (
        <div className="container">
            <div className="row justify-content-center p-3">
                <div className="col col-6 text-center">
                    <h1>Skibidi<span className="text-danger">Fy</span></h1>
                </div>
            </div>
            <div className="row justify-content-center">
                <div className="col col-6 text-center">
                    <h3>Make your <span className="text-danger">Skibidi</span> come true</h3>
                </div>
            </div>
            <Transformer/>
        </div>
    );
}
