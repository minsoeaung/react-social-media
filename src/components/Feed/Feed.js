import './Feed.css'
import CreatePost from "../CreatePost/CreatePost";
import Post from "../Post/Post";
import {Posts} from '../../dummyData'

const Feed = () => {
    return (
        <div className="feed">
            <div className="feed-container">
                <CreatePost/>
                {Posts.map(post => <Post key={post.id} post={post}/>)}
            </div>
        </div>
    )
}

export default Feed