import './Feed.css'
import CreatePost from "../CreatePost/CreatePost";
import {useEffect, useState} from "react";
import fetchPosts from "../../api/fetchPosts";
import Post from "../Post/Post";

const Feed = () => {
    const [posts, setPosts] = useState([])

    useEffect(() => {
        fetchPosts('61991652de81364c34bf14db').then(posts => setPosts(posts));
    }, [])

    return (
        <div className="feed">
            <div className="feed-container">
                <CreatePost/>
                {posts.map(post => <Post key={post._id} post={post}/>)}
            </div>
        </div>
    )
}

export default Feed