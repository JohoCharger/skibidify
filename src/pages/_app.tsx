import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootswatch/dist/lux/bootstrap.min.css'

import type {AppProps} from 'next/app';
import {useEffect} from "react";

function MyApp({Component, pageProps}: AppProps) {
    useEffect(() => {
        // @ts-expect-error-next-line
        const loadBootstrap = async () => await import('bootstrap/dist/js/bootstrap.bundle.min.js');

        loadBootstrap();
    }, []);

    return (
        <Component {...pageProps} />
    );
}

export default MyApp;