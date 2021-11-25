import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Profile from "./views/Profile/Profile";
import Home from "./views/Home/Home";
import Login from "./views/Login/Login";

ReactDOM.render(
    <React.StrictMode>
        <BrowserRouter>

            {/*-------------------------------------------------------*/}

            <Routes>
                <Route exact path="/" element={<App/>}>
                    {/*  Outlet  */}
                    <Route index element={<Home/>}/>
                    <Route path="/profile/:username" element={<Profile/>}/>
                </Route>

                <Route path="/login" element={<Login/>}/>

                {/*  no match route  */}
                <Route path="*" element={<main><p>There's nothing here.</p></main>}/>
            </Routes>

            {/*-------------------------------------------------------*/}
        </BrowserRouter>
    </React.StrictMode>,
    document.getElementById('root')
);