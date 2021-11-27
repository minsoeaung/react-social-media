import {BrowserRouter, Navigate, Route, Routes} from "react-router-dom";
import Home from "./views/Home/Home";
import Profile from "./views/Profile/Profile";
import Login from "./views/Login/Login";
import SignUp from "./views/SignUp/SignUp";
import React, {useContext} from "react";
import Main from "./views/Main";
import {AuthContext} from "./context/AuthContext";

function App() {
    const {user} = useContext(AuthContext)

    return (
        <BrowserRouter>
            <Routes>
                <Route exact path="/" element={user ? <Main/> : <Login/>}>
                    <Route index element={<Home/>}/>
                    <Route path="/profile/:username" element={<Profile/>}/>
                </Route>

                <Route path="/login" element={<Login/>}/>
                <Route path="/signup" element={<SignUp/>}/>

                <Route path="*" element={<Navigate to='/'/>}/>
            </Routes>
        </BrowserRouter>
    );
}

export default App;
