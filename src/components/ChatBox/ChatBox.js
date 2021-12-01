import './ChatBox.css'
import ChatMessage from "../ChatMessage/ChatMessage";
import {Button, TextField} from "@mui/material";
import SendIcon from '@mui/icons-material/Send';

const ChatBox = () => {
    return (
        <main className="chatbox">
            <div className="chatbox-container">
                <div className="chatbox-top">
                    <ChatMessage/>
                    <ChatMessage ownMessage={true}/>
                    <ChatMessage/>
                    <ChatMessage ownMessage={true}/><ChatMessage/>
                    <ChatMessage ownMessage={true}/><ChatMessage/>
                    <ChatMessage ownMessage={true}/><ChatMessage/>
                    <ChatMessage ownMessage={true}/><ChatMessage/>
                    <ChatMessage ownMessage={true}/><ChatMessage/>
                    <ChatMessage ownMessage={true}/><ChatMessage/>
                    <ChatMessage ownMessage={true}/><ChatMessage/>
                    <ChatMessage ownMessage={true}/><ChatMessage/>
                    <ChatMessage ownMessage={true}/><ChatMessage/>
                    <ChatMessage ownMessage={true}/><ChatMessage/>
                    <ChatMessage ownMessage={true}/><ChatMessage/>
                    <ChatMessage ownMessage={true}/><ChatMessage/>
                    <ChatMessage ownMessage={true}/><ChatMessage/>
                    <ChatMessage ownMessage={true}/><ChatMessage/>
                    <ChatMessage ownMessage={true}/><ChatMessage/>
                    <ChatMessage ownMessage={true}/><ChatMessage/>
                    <ChatMessage ownMessage={true}/><ChatMessage/>
                    <ChatMessage ownMessage={true}/><ChatMessage/>
                    <ChatMessage ownMessage={true}/><ChatMessage/>
                    <ChatMessage ownMessage={true}/><ChatMessage/>
                    <ChatMessage ownMessage={true}/>
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