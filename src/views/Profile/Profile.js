import './Profile.css'
import {useParams} from "react-router-dom";
import {Posts} from "../../dummyData";
import Post from "../../components/Post/Post";
import {Divider} from "@mui/material";

const Profile = () => {
    let params = useParams()
    let username = params.username
    const images = process.env.REACT_APP_SERVER_URI + '/images/'

    return (
        <main className="profile-container">
            <div className="profile-top">
                <img
                    src={images + 'person/1.jpeg'}
                    alt="user profile"
                />
                <div>
                    <h3>{username}</h3>
                    <div className="user-stats">
                        <span>23 posts</span>
                        <span className="pointer-underline">23 followers</span>
                        <span className="pointer-underline">23 followings</span>
                    </div>
                    <p>Hello Friends</p>
                </div>
                <div>
                    <h4>User Information</h4>
                    <div className="user-info">
                        <span>City : Yangon</span>
                        <span>From : Yangon</span>
                        <span>Relationship : Single</span>
                    </div>
                </div>
            </div>
            <Divider/>
            <div className="profile-bottom">
                <div className="own-post-container">
                    {Posts.map(post => (
                        <Post key={post.id} post={post}/>
                    ))}
                </div>
            </div>
        </main>
    )
}

export default Profile