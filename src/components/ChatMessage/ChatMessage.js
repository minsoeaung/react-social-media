import './ChatMessage.css'
import {Avatar} from "@mui/material";

const ChatMessage = ({message, ownMessage}) => {
    return (
        <div className={ownMessage ? "chat-message own" : "chat-message"}>
            <Avatar
                src='/assets/person/noAvatar.png'
                sx={{width: 24, height: 24}}
            />
            <p>{message.text}</p>
        </div>
    )
}

export default ChatMessage