import './Profile.css'
import {Divider} from "@mui/material";
import Feed from "../../components/Feed/Feed";
import {useEffect, useState} from "react";
import fetchUser from "../../api/fetchUser";
import {baseUrl} from "../../shared/baseUrl";
import {useParams} from "react-router-dom";
import UserFollowListModal from "../../components/UserFollowListModal/UserFollowListModal";

const Profile = () => {
    const username = useParams().username
    const [user, setUser] = useState({}) // the current user of this profile
    const [open, setOpen] = useState(false) // modal open or not
    const [isFollowers, setIsFollowers] = useState(null) // decide what modal must display

    /*
    *   Get information about current user
    * */
    useEffect(() => {
        fetchUser(username, false)
            .then(res => setUser(res))
    }, [username])


    /*
    *   Function for modal
    * */
    const handleClick = (isFollowers) => {
        if (isFollowers) setIsFollowers(true)
        else setIsFollowers(false)
        setOpen(true)
    }

    return (
        <main className="profile-container">
            <div className="profile-top">
                <img
                    src={user.profilePicture ? `${baseUrl}images/${user.profilePicture}` : `${baseUrl}images/person/noAvatar.png`}
                    alt={user.username}
                />
                <div>
                    <h3>{user.username}</h3>
                    <div className="user-stats">
                        <span className="pointer-underline"
                              onClick={() => handleClick(true)}>{user.followers?.length} followers</span>
                        <span className="pointer-underline"
                              onClick={() => handleClick(false)}>{user.followings?.length} followings</span>
                    </div>
                    <p>{user.desc}</p>
                </div>
                <div>
                    <h4>User Information</h4>
                    <div className="user-info">
                        <span>City : {user.city}</span>
                        <span>From : {user.from}</span>
                        <span>Relationship : {user.relationship === 1 ? 'Single' : user.relationship === 2 ? 'Married' : '-'}</span>
                    </div>
                </div>
            </div>
            <Divider/>
            <div className="profile-bottom">
                <div className="own-post-container">
                    <Feed username={username} isProfile={true}/>
                </div>
            </div>

            <UserFollowListModal
                open={open}
                setOpen={setOpen}
                isFollowers={isFollowers}
            />

        </main>
    )
}

export default Profile