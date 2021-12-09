import {Stack} from "@mui/material";
import SideBar from "../../components/SideBar/SideBar";
import ChatMenu from '../../components/ChatMenu/ChatMenu'
import ChatBox from '../../components/ChatBox/ChatBox'
import {useContext, useEffect, useState} from "react";
import fetchAllConversations from "../../api/fetchAllConversations";
import {SocketContext} from "../../context/Socket";

const Chat = ({user, onlineFriendIdList, currChat, setCurrChat}) => {
    const [conversations, setConversations] = useState([])
    const [messages, setMessages] = useState([])
    const [inputMsg, setInputMsg] = useState("")
    const [newMsg, setNewMsg] = useState(null) // new msg comes from socket server
    const [reFetch, setReFetch] = useState(1) // use to re-fetch all conversations
    const socket = useContext(SocketContext);

    useEffect(() => {
        fetchAllConversations(user._id).then(convData => setConversations(convData))
    }, [user._id, reFetch])


    /*
    *   Receive message from socket server
    * */
    useEffect(() => {
        socket.on('getMsg', data => {
            setNewMsg({
                sender: data.senderId,
                text: data.text,
                createdAt: Date.now()
            })
        })
    }, [socket])


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
                currChat={currChat}
                setCurrChat={setCurrChat}
                setReFetch={setReFetch}
            />
            {/* chat messages */}
            <ChatBox
                currChat={currChat}
                messages={messages}
                setMessages={setMessages}
                user={user}
                inputMsg={inputMsg}
                setInputMsg={setInputMsg}
            />
            {/* online friends list */}
            <SideBar
                onlineFriendIdList={onlineFriendIdList}
                currentUserId={user._id}
                setCurrChat={setCurrChat}
            />
        </Stack>
    )
}

export default Chat