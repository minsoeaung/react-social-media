import './Feed.css'
import CreatePost from "../CreatePost/CreatePost";
import Post from "../Post/Post";
import {Posts} from '../../dummyData'

const Feed = () => {

    /*
    * later on, give the posts to render a feed
    * if it is home, give all user's own posts and his following posts
    * if it is profile, give all user's own posts only
    * */

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