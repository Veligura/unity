import React, {FC, useEffect} from 'react';
import {
    Link as RouterLink, Route
} from 'react-router-dom'
import Link from '@mui/material/Link'
import {Routes, Navigate} from "react-router-dom";
import './App.css';

import {ToProjectList} from "./ToProjectList";
import {publish} from "./messages";
import {ViewAccessToken} from "./ViewAccessToken";
import {ScanProduct} from './ScanProduct'
import {InitParams} from "./InitParams";
import {Box} from "@mui/material";

function App() {
    useEffect(() => {
        //@ts-ignore
        window.sendMessage = (data: any) => publish(data)
    }, [])
    return (
        <div className="App">
            <header className="App-header">
                <div className="links">
                    <Link
                        component={RouterLink}
                        to="access-token">
                        Access token
                    </Link>
                    <Link
                        component={RouterLink}
                        to="init-params">
                        Initial Params
                    </Link>
                    <Link
                        component={RouterLink}
                        to="scan-product">
                        Scan product
                    </Link>
                    <Link
                        component={RouterLink}
                        to="project-list">
                        To project list
                    </Link>
                </div>
            </header>
            <Box mx={10}>
                <Routes>
                    <Route path="access-token" element={<ViewAccessToken/>}/>
                    <Route path="scan-product" element={<ScanProduct/>}/>
                    <Route path="project-list" element={<ToProjectList/>}/>
                    <Route path="init-params" element={<InitParams/>}/>
                    <Route path="/" element={<Navigate to={"access-token"}/>}/>
                </Routes>
            </Box>
        </div>
    );
}

export default App;
