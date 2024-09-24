import {Html, Head, Main, NextScript} from 'next/document';

export default function Document() {
    return (
        <Html lang="en" data-bs-theme="dark"> {/* Custom attribute in <html> */}
            <Head>
                {/* Custom meta tags or link tags for styles */}
            </Head>
            <body>
                <Main/> {/* Renders the page content */}
                <NextScript/> {/* Loads Next.js scripts */}
            </body>
        </Html>
    );
}