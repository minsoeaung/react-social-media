import './ChatUser.css'
import {Avatar} from "@mui/material";

const ChatUser = () => {
    return (
        <div className="conversation">
            <div className="chat-user">
                <Avatar
                    src="assets/person/noAvatar.png"
                    alt="chat user"
                />
                <p>Username</p>
            </div>
        </div>
    )
}

export default ChatUser