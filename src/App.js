import {BrowserRouter, Navigate, Route, Routes} from "react-router-dom";
import Home from "./views/Home/Home";
import Profile from "./views/Profile/Profile";
import Login from "./views/Login/Login";
import SignUp from "./views/SignUp/SignUp";
import React, {useContext, useEffect, useState} from "react";
import Main from "./views/Main";
import Chat from "./views/chat/Chat";
import {SocketContext} from "./context/Socket";
import {LOGIN_SUCCESS} from "./context/ActionTypes";
import {AuthContext} from "./context/AuthContext";

function App() {
    const [user, setUser] = useState(null)
    const socket = useContext(SocketContext);
    const [onlineFriends, setOnlineFriends] = useState([]) // only include userIds
    const [currChat, setCurrChat] = useState(null)
    const {dispatch} = useContext(AuthContext)
    const [ready, setReady] = useState(false)


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

    /*
    *   Hard coded temporarily
    *   if user exist in localStorage, save it in context
    *   so user don't need to login again
    *   this should not be done this way, will fix later
    * */
    useEffect(() => {
        const loggedInUser = localStorage.getItem('userData')
        if (loggedInUser) {
            const foundUser = JSON.parse(loggedInUser)
            setUser(foundUser)
            dispatch({type: LOGIN_SUCCESS, payload: foundUser})
        }
        setReady(true)
    }, [dispatch])

    return (
        ready &&
        <div>
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
                            <Chat user={user} onlineFriendIdList={onlineFriends} currChat={currChat}
                                  setCurrChat={setCurrChat}/>
                        }/>
                    </Route>

                    <Route path="/login" element={<Login/>}/>
                    <Route path="/signup" element={<SignUp/>}/>

                    <Route path="*" element={<Navigate to='/'/>}/>
                </Routes>
            </BrowserRouter>
        </div>
    )
}

export default App;
