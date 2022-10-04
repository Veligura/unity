import React from 'react';
import ReactDOM from 'react-dom/client';
import {
    createBrowserRouter, Navigate,
    RouterProvider,
} from "react-router-dom";
import './index.css';
import reportWebVitals from './reportWebVitals';
import App from "./App";
import theme from './theme'
import {ThemeProvider} from "@emotion/react";
import {CssBaseline} from "@mui/material";


const router = createBrowserRouter([
    {
        path: "/app",
        element: <App/>,

    },
    {
        path: "/",
        element: <Navigate replace to="/app" />
    }
]);

const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);

root.render(
    <React.StrictMode>
        <ThemeProvider theme={theme}>
            {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
            <CssBaseline/>
            <RouterProvider router={router}/>
        </ThemeProvider>
    </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
