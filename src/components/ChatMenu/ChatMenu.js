import './ChatMenu.css'
import {useEffect, useState} from "react";
import {Alert, Avatar, Backdrop, CircularProgress, Skeleton, Snackbar} from "@mui/material";
import fetchUser from "../../api/fetchUser";
import {baseUrl} from "../../shared/baseUrl";
import createConversation from "../../api/createConversation";

const ChatMenu = ({conversations, currentUser, currChat, setCurrChat, setReFetch}) => {
    const [searchInput, setSearchInput] = useState("")
    const [isSearching, setIsSearching] = useState(false)
    const [open, setOpen] = useState(false) // snack bar

    const handleKeyDown = async (e) => {
        if (e.key === 'Enter') {
            setIsSearching(true)
            // get userId of receiver and create a conversation
            try {
                const {_id} = await fetchUser(searchInput, false)

                if (_id !== currentUser._id) {
                    await createConversation(currentUser._id, _id)
                    // all success, re fetch the conversations
                    setReFetch(prevState => prevState + 1)
                }

                setSearchInput("")
            } catch (e) {
                setOpen(true)
                setSearchInput("")
            }
            setIsSearching(false)
        }
    }

    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }

        setOpen(false);
    };

    return (
        <section className="chatmenu">
            <div className="chatmenu-container">
                <input
                    type="text"
                    placeholder="Search user to chat..."
                    value={searchInput}
                    onChange={e => setSearchInput(e.target.value)}
                    onKeyDown={handleKeyDown}
                    disabled={isSearching}
                />
                {conversations.map(conv => (
                    <div key={conv._id} onClick={() => setCurrChat(conv)}>
                        <Conversation conversation={conv} currChat={currChat} currentUser={currentUser}/>
                    </div>
                ))}
            </div>


            <Snackbar
                open={open}
                autoHideDuration={6000}
                onClose={handleClose}
                anchorOrigin={{vertical: 'top', horizontal: 'center'}}
            >
                <Alert onClose={handleClose} severity="error" sx={{width: '100%'}}>User does not exist.</Alert>
            </Snackbar>
            <div>
                <Backdrop
                    sx={{color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1}}
                    open={isSearching}
                >
                    <CircularProgress color="inherit"/>
                </Backdrop>
            </div>
        </section>
    )
}

const Conversation = ({conversation, currChat, currentUser}) => {
    const [user, setUser] = useState(null)

    useEffect(() => {
        const friendId = conversation.members.find(member => member !== currentUser._id)

        fetchUser(friendId, true)
            .then(user => setUser(user))
    }, [conversation.members, currentUser._id])

    return (
        <div className="conversation">
            <div className={`chat-user${conversation ? conversation._id === currChat?._id ? " active" : "" : ""}`}>
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