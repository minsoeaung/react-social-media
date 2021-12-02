import {Stack} from "@mui/material";
import SideBar from "../../components/SideBar/SideBar";
import ChatMenu from '../../components/ChatMenu/ChatMenu'
import ChatBox from '../../components/ChatBox/ChatBox'
import {AuthContext} from "../../context/AuthContext";
import {useContext, useEffect, useRef, useState} from "react";
import fetchAllConversations from "../../api/fetchAllConversations";
import {io} from "socket.io-client";
import {socketUrl} from "../../shared/socketUrl";

const Chat = () => {
    const [conversations, setConversations] = useState([])
    const [currChat, setCurrChat] = useState(null)
    const [messages, setMessages] = useState([])
    const [inputMsg, setInputMsg] = useState("")
    const [newMsg, setNewMsg] = useState(null) // new msg comes from socket server
    const {user} = useContext(AuthContext)
    const socket = useRef()

    useEffect(() => {
        fetchAllConversations(user._id).then(convData => setConversations(convData))
    }, [user._id])


    /*
    *   Connect to socket server
    * */
    useEffect(() => {
        socket.current = io(socketUrl)
    }, [])


    /*
    *   User going online and getting online fri list
    * */
    useEffect(() => {
        // send userId to server
        socket.current.emit('addUser', user._id)
        // receive online users from server
        socket.current.on('getUsers', users => {
            console.log(users)
        })
    }, [user._id])


    /*
    *   Receive message from socket server
    * */
    useEffect(() => {
        socket.current.on('getMsg', data => {
            setNewMsg({
                sender: data.senderId,
                text: data.text,
                createdAt: Date.now()
            })
        })
    }, [])


    /*
    *   Change messages state if newMsg comes
    * */
    useEffect(() => {
        if (newMsg && currChat?.members.includes(newMsg.sender))
            setMessages(prevState => [...prevState, newMsg])
    }, [currChat, newMsg])


    return (
        <Stack
            direction="row"
            justifyContent="flex-start"
            spacing={2}
            alignItems="stretch"
            width="100%"
            maxWidth="1280px"
            height="calc(100vh-50px)"
            margin="0 auto"
        >
            {/* all the conversations */}
            <ChatMenu
                conversations={conversations}
                currentUser={user}
                setCurrChat={setCurrChat}
            />
            {/* chat messages */}
            <ChatBox
                currChat={currChat}
                messages={messages}
                setMessages={setMessages}
                user={user}
                inputMsg={inputMsg}
                setInputMsg={setInputMsg}
                socket={socket}
            />
            {/* online friends list */}
            <SideBar/>
        </Stack>
    )
}

export default Chat