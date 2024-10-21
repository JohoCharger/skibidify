import {useEffect, useState} from "react";
import React from 'react';
import fetch from "node-fetch";
import {useAuth, AuthContextType} from "context/AuthContextProvider";
import ErrorDisplay from "components/ErrorDisplay";

export default function Transformer() {
    const [transformed, setTransformed] = useState<string>('transformed text will appear here...');
    const [input, setInput] = useState<string>('');
    const [loading, setLoading] = useState<boolean>(false);
    const [errorMessage, setErrorMessage] = useState<string>('');
    const [credits, setCredits] = useState<number>(0);

    const {user} = useAuth() as AuthContextType;

    function switchTab(tabId: string) {
        // Remove active class from all tabs and tab panes
        document.querySelectorAll('.nav-link').forEach(tab => tab.classList.remove('active'));
        document.querySelectorAll('.tab-pane').forEach(pane => pane.classList.remove('active'));

        // Add active class to the selected tab and tab pane
        const tabElement = document.querySelector(`a[href="#${tabId}"]`);
        const tabPane = document.querySelector(`#${tabId}`);
        if (tabElement && tabPane) {
            tabElement.classList.add('active');
            tabPane.classList.add('active');
        }
    }

    useEffect(() => {
        async function fetchCredits() {
            const token = await user?.getIdToken();
            if (token) {
                const queryParams = new URLSearchParams({token});
                fetch('http://localhost:8000/api/users/credits/?' + queryParams, {
                    method: 'GET',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                }).then(response => response.json())
                    .then(json => {
                        setCredits(json.credits);
                    }).catch(() => {
                    setCredits(0);
                });
            }
        }

        fetchCredits();
    }, [user]);

    async function handleSubmit(e: React.MouseEvent<HTMLButtonElement>) {
        e.preventDefault();
        const token = await user?.getIdToken() || '';
        setLoading(true);
        setErrorMessage('');
        switchTab('tab-2');

        const response = await fetch('http://localhost:8000/api/transform/', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(
                {
                    input: input,
                    user_token: token
                }),
        });
        const json = await response.json();
        if (response.status == 400) {
            setErrorMessage(json.error);
            setLoading(false);
        } else {
            setTransformed(json.transformed);
            setCredits(credits - 1);
            setLoading(false);
        }

    }

    return (
        <>
            <div className="row justify-content-center">
                <div className="col col-6">
                    <div>
                        <ul className="nav nav-tabs justify-content-center" role="tablist">
                            <li id="input-tag" className="nav-item me-0 text-center" role="presentation"><a
                                className="nav-link active" role="tab" data-bs-toggle="tab" href="#tab-1">Input</a></li>
                            <li id="output-tag" className="nav-item" role="presentation"><a
                                className="nav-link text-center" role="tab" data-bs-toggle="tab"
                                href="#tab-2">Skibidified</a></li>
                        </ul>
                        <div className="tab-content">
                            <div id="tab-1" className="tab-pane active" role="tabpanel">
                                <textarea className="p-1" value={input} onChange={e => {
                                    setInput(e.target.value)
                                }}>
                                </textarea>
                            </div>
                            <div id="tab-2" className="tab-pane" role="tabpanel">
                                <textarea className="p-1" value={transformed}
                                          readOnly={true}></textarea>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="row justify-content-center">
                <div className="col col-md-6 text-center m-3">

                    <ErrorDisplay errorMessage={errorMessage}/>
                    <button hidden={loading} className="btn btn-dark rounded-3 shadow"
                            type="button"
                            onClick={handleSubmit}>
                        Transform
                    </button>
                    <div hidden={!loading} className="position-absolute start-50 top-50 spinner-border"
                         role="status">
                        <span className="sr-only"></span>
                    </div>
                    <div className="text-white p-2">Free credits: {credits}</div>
                </div>
            </div>
        </>
    )
}