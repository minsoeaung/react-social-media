import {Stack} from "@mui/material";
import SideBar from "../../components/SideBar/SideBar";
import ChatMenu from '../../components/ChatMenu/ChatMenu'
import ChatBox from '../../components/ChatBox/ChatBox'
import {AuthContext} from "../../context/AuthContext";
import {useContext, useEffect, useState} from "react";
import fetchAllConversations from "../../api/fetchAllConversations";

const Chat = () => {
    const [conversations, setConversations] = useState([])
    const [currChat, setCurrChat] = useState(null)
    const [messages, setMessages] = useState([])
    const {user} = useContext(AuthContext)

    useEffect(() => {
        fetchAllConversations(user._id).then(convData => setConversations(convData))
    }, [user._id])

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
            <ChatMenu conversations={conversations} currentUser={user} setCurrChat={setCurrChat}/>
            {/* chat messages */}
            <ChatBox currChat={currChat} messages={messages} setMessages={setMessages} user={user}/>
            {/* online friends list */}
            <SideBar/>
        </Stack>
    )
}

export default Chat