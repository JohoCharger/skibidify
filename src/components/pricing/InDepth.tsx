interface Perk {
    description: string,
    included: boolean,
}

const freePerks: Perk[] = [
    {description: 'Transform custom content', included: true},
    {description: 'Ads', included: false},
    {description: 'Transform custom content', included: true},
]

const proTokensPerks: Perk[] = [
    {description: 'Transform custom content', included: true},
    {description: 'No Ads', included: true},
    {description: 'Generate skibidi content', included: true},
]

const proSubscriptionPerks: Perk[] = [
    {description: 'Transform custom content', included: true},
    {description: 'No Ads', included: true},
    {description: 'Generate skibidi content', included: true},
    {description: 'Priority customer support', included: true},
]

export default function InDepth() {
    return (<div id="features-indepth" className="container row-cols-1">
            <div className="row border-bottom">
                <div className="col align-content-center">
                    <h4 className="fw-bold text-center">Free</h4>
                </div>
                <div className="col align-content-center border-end border-start">
                    <h4 className="fw-bold text-center">Pro tokens</h4>
                </div>
                <div className="col align-content-center">
                    <h4 className="fw-bold text-center">Pro account</h4>
                </div>
            </div>
            <div className="row">
                <div className="col">
                    <p className="m-0 py-3 text-center">
                        <svg className="bi bi-check-square text-success my-2 me-2 check-icon"
                             xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor"
                             viewBox="0 0 16 16">
                            <path
                                d="M14 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1zM2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2z"></path>
                            <path
                                d="M10.97 4.97a.75.75 0 0 1 1.071 1.05l-3.992 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425a.235.235 0 0 1 .02-.022z"></path>
                        </svg>
                        Transform custom content
                    </p>
                </div>
                <div className="col border-end border-start">
                    <p className="m-0 py-3 text-center">
                        <svg className="bi bi-check-square text-success my-2 me-2 check-icon"
                             xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor"
                             viewBox="0 0 16 16">
                            <path
                                d="M14 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1zM2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2z"></path>
                            <path
                                d="M10.97 4.97a.75.75 0 0 1 1.071 1.05l-3.992 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425a.235.235 0 0 1 .02-.022z"></path>
                        </svg>
                        Transform custom content
                    </p>
                </div>
                <div className="col">
                    <p className="m-0 py-3 text-center">
                        <svg className="bi bi-check-square text-success my-2 me-2 check-icon"
                             xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor"
                             viewBox="0 0 16 16">
                            <path
                                d="M14 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1zM2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2z"></path>
                            <path
                                d="M10.97 4.97a.75.75 0 0 1 1.071 1.05l-3.992 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425a.235.235 0 0 1 .02-.022z"></path>
                        </svg>
                        Transform custom content
                    </p>
                </div>
            </div>
            <div className="row">
                <div className="col bg-body-tertiary">
                    <p className="m-0 py-3 text-center">
                        <svg className="bi bi-x-square text-danger my-2 me-2 check-icon"
                             xmlns="http://www.w3.org/2000/svg"
                             width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16">
                            <path
                                d="M14 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1zM2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2z"></path>
                            <path
                                d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708"></path>
                        </svg>
                        Ads
                    </p>
                </div>
                <div className="col border-end border-start bg-body-tertiary">
                    <p className="m-0 py-3 text-center">
                        <svg className="bi bi-check-square text-success my-2 me-2 check-icon"
                             xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor"
                             viewBox="0 0 16 16">
                            <path
                                d="M14 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1zM2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2z"></path>
                            <path
                                d="M10.97 4.97a.75.75 0 0 1 1.071 1.05l-3.992 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425a.235.235 0 0 1 .02-.022z"></path>
                        </svg>
                        Transform custom content
                    </p>
                </div>
                <div className="col bg-body-tertiary">
                    <p className="m-0 py-3 text-center">
                        <svg className="bi bi-check-square text-success my-2 me-2 check-icon"
                             xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor"
                             viewBox="0 0 16 16">
                            <path
                                d="M14 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1zM2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2z"></path>
                            <path
                                d="M10.97 4.97a.75.75 0 0 1 1.071 1.05l-3.992 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425a.235.235 0 0 1 .02-.022z"></path>
                        </svg>
                        Transform custom content
                    </p>
                </div>
            </div>
        </div>
    )
}