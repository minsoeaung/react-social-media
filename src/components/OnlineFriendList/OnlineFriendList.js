import './OnlineFriendList.css'
import {Avatar, Badge} from "@mui/material";
import {baseUrl} from "../../shared/baseUrl";
import {useEffect, useState} from "react";
import fetchFollowings from "../../api/fetchFollowings";

const OnlineFriendList = ({onlineFriendIdList, currentUserId, setCurrChat}) => {
    const [friends, setFriends] = useState([])
    const [onlineFriends, setOnlineFriends] = useState([])

    /*
    *   Get friends data
    * */
    useEffect(() => {
        if (currentUserId)
            fetchFollowings(currentUserId).then(userData => setFriends(userData))
    }, [currentUserId]);


    /*
    *   Store online friends data
    * */
    useEffect(() => {
        if (friends)
            setOnlineFriends(friends.filter(fri => onlineFriendIdList.includes(fri._id)))
    }, [friends, onlineFriendIdList])


    return (
        <section className="online-friend-list">
            {onlineFriends?.map(user => (
                <div key={user._id} className="online-friend-list-item">
                    <Badge
                        color='success'
                        overlap="circular"
                        variant="dot"
                        anchorOrigin={{vertical: 'bottom', horizontal: 'right'}}
                    >
                        {user.profilePicture
                            ? <Avatar src={`${baseUrl}images/${user.profilePicture}`} alt={user.username}/>
                            : <Avatar src='/assets/person/noAvatar.png' alt={user.username}/>
                        }
                    </Badge>
                    <p>{user.username}</p>
                </div>
            ))}
        </section>
    )
}

export default OnlineFriendList