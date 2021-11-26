import './Feed.css'
import CreatePost from "../CreatePost/CreatePost";
import useFetchPosts from "../../api/useFetchPosts";
import FeedLoading from "../FeedLoading/FeedLoading";
import Post from "../Post/Post";

const Feed = ({username, isProfile}) => {
    const {isLoading, error, posts} = useFetchPosts(username, isProfile)

    return (
        <div className="feed">
            <div className="feed-container">
                <CreatePost/>
                {isLoading
                    ? <FeedLoading/>
                    : posts.map(post => <Post key={post._id} post={post}/>)
                }

            </div>
        </div>
    )
}

export default Feed