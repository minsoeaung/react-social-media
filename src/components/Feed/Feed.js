import './Feed.css'
import CreatePost from "../CreatePost/CreatePost";
import useFetchPosts from "../../api/useFetchPosts";
import FeedLoading from "../Loadings/FeedLoading";
import Post from "../Post/Post";
import {useContext} from "react";
import {AuthContext} from "../../context/AuthContext";

const Feed = ({username, isProfile}) => {
    const {isLoading, posts} = useFetchPosts(username, isProfile)
    const {user} = useContext(AuthContext)

    return (
        <div className="feed">
            <div className="feed-container">
                {username === user.username ? <CreatePost/> : null}
                {isLoading
                    ? <FeedLoading/>
                    : posts.map(post => <Post key={post._id} post={post}/>)
                }

            </div>
        </div>
    )
}

export default Feed