import './ChatMenu.css'
import {useEffect, useState} from "react";
import {Avatar, Skeleton} from "@mui/material";
import fetchUser from "../../api/fetchUser";
import {baseUrl} from "../../shared/baseUrl";

const ChatMenu = ({conversations, currentUser, setCurrChat}) => {
    return (
        <section className="chatmenu">
            <div className="chatmenu-container">
                {conversations.map(conv => (
                    <div key={conv._id} onClick={() => setCurrChat(conv)}>
                        <Conversation conversation={conv} currentUser={currentUser}/>
                    </div>
                ))}
            </div>
        </section>
    )
}

const Conversation = ({conversation, currentUser}) => {
    const [user, setUser] = useState(null)

    useEffect(() => {
        const friendId = conversation.members.find(member => member !== currentUser._id)

        fetchUser(friendId, true)
            .then(user => setUser(user))
    }, [conversation.members, currentUser._id])

    return (
        <div className="conversation">
            <div className="chat-user">
                {user
                    ?
                    <>
                        {user.profilePicture
                            ? <Avatar src={`${baseUrl}images/${user.profilePicture}`} alt={user.username}/>
                            : <Avatar src='/assets/person/noAvatar.png' alt={user.username}/>
                        }
                        <p>{user.username}</p>
                    </>
                    :
                    <>
                        <Skeleton animation="wave" variant="circular" width={40} height={40}/>
                        <Skeleton animation="wave" height={10} width="50%"/>
                    </>
                }
            </div>
        </div>
    )
}

export default ChatMenu