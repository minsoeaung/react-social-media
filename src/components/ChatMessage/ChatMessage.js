import './ChatMessage.css'
import {Avatar} from "@mui/material";

const ChatMessage = ({ownMessage}) => {
    return (
        <div className={ownMessage ? "chat-message own" : "chat-message"}>
            <Avatar
                src='/assets/person/noAvatar.png'
                sx={{width: 24, height: 24}}
            />
            <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab
                accusamus cumque exercitationem facere
            </p>
        </div>
    )
}

export default ChatMessage