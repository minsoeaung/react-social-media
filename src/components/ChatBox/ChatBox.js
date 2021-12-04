import './ChatBox.css'
import ChatMessage from "../ChatMessage/ChatMessage";
import {Button, TextField} from "@mui/material";
import SendIcon from '@mui/icons-material/Send';
import {useContext, useEffect, useState} from "react";
import fetchMessages from "../../api/fetchMessages";
import sendMsg from "../../api/sendMsg";
import {SocketContext} from "../../context/Socket";

const ChatBox = ({currChat, messages, setMessages, user, inputMsg, setInputMsg}) => {
    const [messagesEnd, setMessagesEnd] = useState(null)
    const socket = useContext(SocketContext);


    /*
    *   Fetch all messages
    * */
    useEffect(() => {
        if (currChat) fetchMessages(currChat._id).then(messages => setMessages(messages))
    }, [currChat, setMessages])


    /*
    *   Scroll to bottom of messages
    * */
    useEffect(() => {
        messagesEnd?.scrollIntoView({behavior: "smooth"})
    }, [messages, messagesEnd])

    /*
    *   Sending message
    * */
    function handleSend() {
        if (inputMsg) {
            const message = {
                conversationId: currChat._id,
                sender: user._id,
                text: inputMsg
            }
            const receiverId = currChat.members.find(member => member !== user._id)

            socket.emit('sendMsg', {
                senderId: user._id,
                receiverId: receiverId,
                text: inputMsg
            })

            sendMsg(message).then(r => setMessages([...messages, r]))

            setInputMsg("")
        }
    }

    return (
        <main className="chatbox">
            <div className="chatbox-container">
                <div className="chatbox-top">
                    {currChat
                        ?
                        <div>
                            {messages.map(msg =>
                                <div key={msg._id}>
                                    <ChatMessage message={msg} ownMessage={msg.sender === user._id}/>
                                </div>
                            )}
                            <div ref={el => setMessagesEnd(el)}/>
                        </div>
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