export default function HeroBanner() {
    return (
        <section id="leading-hero" className="py-4 py-xl-5 vh-100">
            <div className="container h-100">
                <div className="row h-100">
                    <div
                        className="col-md-10 col-xl-8 text-center d-flex d-sm-flex d-md-flex justify-content-center align-items-center mx-auto justify-content-md-start align-items-md-center justify-content-xl-center">
                        <div>
                            <h2 className="text-uppercase fw-bold mb-3">Transform Your Ideas Into <span
                                className="text-warning">SKIBIDI</span> With AI</h2>
                            <p className="mb-4"><br/>Generate high-quality skibidi for blogs, ads, emails, and more in
                                seconds. In combination with our affordable plans, you will be able to kickstart your
                                brainrotting process.</p>
                            <button className="btn btn-primary fs-5 me-2 py-2 px-4 rounded-3" type="button">Get
                                started
                            </button>
                            <button className="btn fs-5 py-2 px-4 btn-warning rounded-3" type="button">How does it
                                work?
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}