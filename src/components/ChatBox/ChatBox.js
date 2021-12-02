import './ChatBox.css'
import ChatMessage from "../ChatMessage/ChatMessage";
import {Button, TextField} from "@mui/material";
import SendIcon from '@mui/icons-material/Send';
import {useEffect} from "react";
import fetchMessages from "../../api/fetchMessages";
import sendMsg from "../../api/sendMsg";

const ChatBox = ({currChat, messages, setMessages, user, inputMsg, setInputMsg}) => {
    useEffect(() => {
        if (currChat) {
            fetchMessages(currChat._id)
                .then(messages => setMessages(messages))
        }
    }, [currChat, setMessages])

    function handleSend() {
        const message = {
            conversationId: currChat._id,
            sender: user._id,
            text: inputMsg
        }
        sendMsg(message)
            .then(r => setMessages([...messages, r]))
        setInputMsg("")
    }

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
                        value={inputMsg}
                        onChange={e => setInputMsg(e.target.value)}
                    />
                    <Button
                        variant="contained"
                        endIcon={<SendIcon/>}
                        onClick={handleSend}
                    >
                        Send
                    </Button>
                </div>
            </div>
        </main>
    )
}

export default ChatBox