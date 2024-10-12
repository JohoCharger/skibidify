import {useState} from "react";
import React from 'react';
import fetch from "node-fetch";

export default function Transformer() {
    const [transformed, setTransformed] = useState<string>('');
    const [input, setInput] = useState<string>('');

    async function handleSubmit(e: React.MouseEvent<HTMLButtonElement>) {
        e.preventDefault();

        const data = await fetch('http://localhost:3000/api/openai', {
            method: 'POST',
            body: JSON.stringify(
                {
                    text: input
                }),
        });

        const json = await data.json();
        setTransformed(json.text);
    }

    return (
        <>
            <div className="row justify-content-center">
                <div className="col col-md-4 text-center col-8">
                    <h5>Input</h5><textarea value={input} onChange={e => {
                    setInput(e.target.value)
                }}/>
                </div>
                <div className="col text-center d-none d-md-flex align-items-center justify-content-center">
                    <svg id="arrow" className="bi bi-arrow-right" xmlns="http://www.w3.org/2000/svg" width="1em"
                         height="1em" fill="currentColor" viewBox="0 0 16 16">
                        <path fillRule="evenodd"
                              d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8"></path>
                    </svg>
                </div>
                <div className="col col-md-4 text-center col-8">
                    <h5>Skibidified</h5>
                    <textarea value={transformed} readOnly={true}/>
                </div>
            </div>
            <div className="row justify-content-center">
                <div className="col col-md-6 text-center m-3">
                    <button className="btn btn-dark rounded-3 shadow"
                            type="button"
                            onClick={handleSubmit}>
                        Transform
                    </button>
                </div>
            </div>
        </>
    )
}