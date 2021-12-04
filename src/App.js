import {BrowserRouter, Navigate, Route, Routes} from "react-router-dom";
import Home from "./views/Home/Home";
import Profile from "./views/Profile/Profile";
import Login from "./views/Login/Login";
import SignUp from "./views/SignUp/SignUp";
import React, {useContext, useEffect, useState} from "react";
import Main from "./views/Main";
import {AuthContext} from "./context/AuthContext";
import Chat from "./views/chat/Chat";
import {SocketContext} from "./context/Socket";

function App() {
    const {user} = useContext(AuthContext)
    const socket = useContext(SocketContext);
    const [onlineFriends, setOnlineFriends] = useState([]) // only include userIds
    const [currChat, setCurrChat] = useState(null)


    /*
   *   User going online and getting online fri list
   * */
    useEffect(() => {
        if (user) {
            // emit 'addUser' event to go online
            socket.emit('addUser', user._id)

            // receive online user list from server and set online friend list
            socket.on('getUsers', onlineUsers => {
                const onlineFriendIdList = user.followings.filter(friId => onlineUsers.some(user => user.userId === friId))
                setOnlineFriends(onlineFriendIdList)
            })
        }
    }, [socket, user])

    return (
        <BrowserRouter>
            <Routes>
                <Route exact path="/" element={user ? <Main/> : <Login/>}>
                    <Route index element={
                        <Home onlineFriendIdList={onlineFriends} setCurrChat={setCurrChat}/>
                    }/>
                    <Route path="/profile/:username" element={
                        <Profile/>
                    }/>
                    <Route path="/chat" element={
                        <Chat onlineFriendIdList={onlineFriends} currChat={currChat} setCurrChat={setCurrChat}/>
                    }/>
                </Route>

                <Route path="/login" element={<Login/>}/>
                <Route path="/signup" element={<SignUp/>}/>

                <Route path="*" element={<Navigate to='/'/>}/>
            </Routes>
        </BrowserRouter>
    );
}

export default App;
