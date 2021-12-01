import './ChatBox.css'
import ChatMessage from "../ChatMessage/ChatMessage";
import {Button, TextField} from "@mui/material";
import SendIcon from '@mui/icons-material/Send';
import {useEffect} from "react";
import fetchMessages from "../../api/fetchMessages";

const ChatBox = ({currChat, messages, setMessages, user}) => {
    useEffect(() => {
        if (currChat) {
            fetchMessages(currChat._id)
                .then(messages => setMessages(messages))
        }
    }, [currChat, setMessages])

    return (
        <main className="chatbox">
            <div className="chatbox-container">
                <div className="chatbox-top">
                    {currChat
                        ?
                        messages.map(msg =>
                            <ChatMessage message={msg} key={msg._id} ownMessage={msg.sender === user._id}/>
                        )
                        :
                        <div className="no-conversation">
                            <img src='assets/doge.png' alt='doge'/>
                            <small>Find or select a person to start chatting...</small>
                        </div>
                    }
                </div>
                <div className="chatbox-bottom">
                    <TextField
                        fullWidth
                        required
                        multiline
                        placeholder="Message..."
                        color='info'
                        size='small'
                    />
                    <Button variant="contained" endIcon={<SendIcon/>}>
                        Send
                    </Button>
                </div>
            </div>
        </main>
    )
}

export default ChatBox