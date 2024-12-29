import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootswatch/dist/lux/bootstrap.min.css'
import 'public/globals.css';


export default function RootLayout({children}: { children: React.ReactNode }) {
    return (
        <html lang="en" data-bs-theme="dark">
        <head>
            <title>Skibidify</title>
            <link href="/assets/favicon.ico" rel="icon"/>

            {/* Add any meta tags or links to external stylesheets here */}
        </head>
        <body>
            {children}
        </body>
        </html>
    );
}