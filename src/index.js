import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Profile from "./views/Profile/Profile";
import Home from "./views/Home/Home";

ReactDOM.render(
    <React.StrictMode>
        <BrowserRouter>

            {/*-------------------------------------------------------*/}

            <Routes>
                <Route path="/" element={<App/>}>
                    {/*  Outlet  */}
                    <Route index element={<Home/>}/>
                    <Route path="/profile/:username" element={<Profile/>}/>
                </Route>

                {/*  no match route  */}
                <Route path="*" element={<main><p>There's nothing here.</p></main>}/>
            </Routes>

            {/*-------------------------------------------------------*/}
        </BrowserRouter>
    </React.StrictMode>,
    document.getElementById('root')
);