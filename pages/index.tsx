import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootswatch/dist/lux/bootstrap.min.css'
import '../public/landing.css';

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
            <div className="row justify-content-center">
                <div className="col col-md-4 text-center col-8">
                    <h5>Input</h5><textarea></textarea>
                </div>
                <div className="col text-center d-none d-md-flex align-items-center justify-content-center">
                    <svg id="arrow" className="bi bi-arrow-right" xmlns="http://www.w3.org/2000/svg" width="1em"
                         height="1em" fill="currentColor" viewBox="0 0 16 16">
                        <path fill-rule="evenodd"
                              d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8"></path>
                    </svg>
                </div>
                <div className="col col-md-4 text-center col-8">
                    <h5>Skibidified</h5><textarea></textarea>
                </div>
            </div>
            <div className="row justify-content-center">
                <div className="col col-md-6 text-center m-3">
                    <button className="btn btn-dark rounded-3 shadow" type="button">Transform</button>
                </div>
            </div>
        </div>
    );
}
