import './Profile.css'
import {useParams} from "react-router-dom";
import Post from "../../components/Post/Post";
import {Posts} from "../../dummyData";

const Profile = () => {
    let params = useParams()
    let username = params.username

    return (
        <main className="profile-container">
            <div className="profile-top">
                <img
                    src="/assets/person/3.jpeg"
                />
                <div>
                    <h3>{username}</h3>
                    <div className="user-stats">
                        <span>23 posts</span>
                        <span>23 followers</span>
                        <span>23 followings</span>
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

            <div className="profile-bottom">
                <Post post={Posts}/>
            </div>
        </main>
    )
}

export default Profile