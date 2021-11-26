import './Post.css'
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';
import {useEffect, useState} from "react";
import fetchUser from "../../api/fetchUser";
import {format} from 'timeago.js'
import {Link} from "react-router-dom";
import {Avatar, Stack} from "@mui/material";

const Post = ({post}) => {
    const [user, setUser] = useState({})
    const [likeCount, setLikeCount] = useState(post.likes.length)
    const [isLiked, setIsLiked] = useState(false)
    const [commentInput, setCommentInput] = useState("")
    const images = process.env.REACT_APP_SERVER_URI + '/images/'

    useEffect(() => {
        fetchUser(post.userId).then(user => setUser(user))
    }, [post.userId])

    function likeHandler() {
        setIsLiked(!isLiked)
        setLikeCount(isLiked ? likeCount - 1 : likeCount + 1)
    }

    function commentHandler() {

    }

    return (
        <div className="post">
            <div className="post-container">


                {/* -----------------------------profile image, username and date----------------------------------- */}
                <div className="post-top">
                    <Link to={`profile/${user.username}`} className="link">
                        <Stack direction="row" alignItems="center" spacing={2}>
                            <Avatar
                                alt={user.username}
                                src={`${user.profilePicture ? images + user.profilePicture : images + 'person/noAvatar.png'}`}
                            />
                            <h4>{user.username}</h4>
                        </Stack>
                    </Link>
                    <small className="muted">{format(post.createdAt)}</small>
                </div>

                {/* ------------------------------caption and photo------------------------------------------------- */}
                <div className="post-mid">
                    <p>{post?.desc}</p>
                    {post.img ?
                        <img
                            src={images + post.img}
                            alt="post"
                        />
                        :
                        null
                    }
                </div>

                {/* ------------------------likes and comments------------------------------------------------------ */}
                <div className="post-bottom">
                    <div className="post-bottom-gp">
                        <span>{likeCount} likes</span>
                        <span>{post.comment} comments</span>
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