import './ChatMenu.css'
import ChatUser from "../ChatUser/ChatUser";

const ChatMenu = () => {
    return (
        <section className="chatmenu">
            <div className="chatmenu-container">
                <ChatUser />
                <ChatUser />
                <ChatUser />
                <ChatUser />
            </div>
        </section>
    )
}

export default ChatMenu