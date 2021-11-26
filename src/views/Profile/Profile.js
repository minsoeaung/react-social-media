import './Profile.css'
import {Divider} from "@mui/material";
import Feed from "../../components/Feed/Feed";
import {useEffect, useState} from "react";
import fetchUser from "../../api/fetchUser";
import {baseUrl} from "../../shared/baseUrl";

const Profile = () => {
    const [user, setUser] = useState({})
    const username = 'user1'

    useEffect(() => {
        fetchUser(username, false).then(res => setUser(res))
    }, [username])

    return (
        <main className="profile-container">
            <div className="profile-top">
                <img
                    src={`${baseUrl}images/person/7.jpeg`}
                    alt={user.username}
                />
                <div>
                    <h3>{user.username}</h3>
                    <div className="user-stats">
                        <span>23 posts</span>
                        <span className="pointer-underline">{user.followers?.length} followers</span>
                        <span className="pointer-underline">{user.followings?.length} followings</span>
                    </div>
                    <p>{user.desc}</p>
                </div>
                <div>
                    <h4>User Information</h4>
                    <div className="user-info">
                        <span>City : {user.city}</span>
                        <span>From : {user.from}</span>
                        <span>Relationship : {user.relationship}</span>
                    </div>
                </div>
            </div>


            <Divider/>


            <div className="profile-bottom">
                <div className="own-post-container">
                    <Feed username={username} isProfile={true}/>
                </div>
            </div>

        </main>
    )
}

export default Profile