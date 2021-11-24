import './Post.css'
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';
import {Users} from '../../dummyData'
import {useState} from "react";

const Post = ({post}) => {
    const [likeCount, setLikeCount] = useState(post.like)
    const [isLiked, setIsLiked] = useState(false)
    const [commentInput, setCommentInput] = useState("")

    function likeHandler() {
        setIsLiked(!isLiked)
        setLikeCount(isLiked ? likeCount - 1 : likeCount + 1)
    }

    function commentHandler() {

    }

    return (
        <div className="post">
            <div className="post-container">

                {/* profile image, username and date */}
                <div className="post-top">
                    <div>
                        <img
                            src={`assets/${Users.find(user => user.id === post.userId)?.profilePicture}`}
                            alt="post image"
                        />
                        <h4>{Users.find(user => user.id === post.userId)?.username}</h4>
                    </div>
                    <small>{post.date}</small>
                </div>

                {/* caption and photo */}
                <div className="post-mid">
                    <p>{post?.desc}</p>
                    <img
                        src={`assets/${post.photo}`}
                        alt="post"
                    />
                </div>

                {/* likes and comments */}
                <div className="post-bottom">
                    <div className="post-bottom-gp">
                        <span>{likeCount} likes | {post.comment} comments</span>
                    </div>
                    <div className="post-bottom-gp">
                        {isLiked ?
                            <FavoriteIcon onClick={likeHandler} className="pointer"/>
                            :
                            <FavoriteBorderIcon onClick={likeHandler} className="pointer"/>
                        }
                        <input
                            type="text"
                            placeholder="Add a comment..."
                            value={commentInput}
                            onChange={e => setCommentInput(e.target.value)}
                        />
                        <button onClick={commentHandler}>POST</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Post