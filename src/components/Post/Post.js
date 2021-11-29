import './Post.css'
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';
import {useContext, useEffect, useState} from "react";
import fetchUser from "../../api/fetchUser";
import {format} from 'timeago.js'
import {Link} from "react-router-dom";
import {Avatar, Stack} from "@mui/material";
import {baseUrl} from "../../shared/baseUrl";
import {AuthContext} from "../../context/AuthContext";
import likeAPost from "../../api/likeAPost";

const Post = ({post}) => {
    const [user, setUser] = useState({}) // post owner
    const {user: currUser} = useContext(AuthContext) // post liker ( current user )
    const [likeCount, setLikeCount] = useState(post.likes.length)
    const [isLiked, setIsLiked] = useState(false)
    const [commentInput, setCommentInput] = useState("")

    useEffect(() => {
        fetchUser(post.userId, true).then(user => setUser(user))
    }, [post.userId])

    useEffect(() => {
        setIsLiked(post.likes.includes(currUser._id))
    }, [currUser._id, post.likes])

    async function likeHandler() {
        await likeAPost(post._id, currUser._id)
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
                            {user.profilePicture
                                ? <Avatar src={`${baseUrl}images/${user.profilePicture}`} alt={user.username}/>
                                : <Avatar src='/assets/person/noAvatar.png' alt={user.username}/>
                            }
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
                            src={baseUrl + "images/" + post.img}
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