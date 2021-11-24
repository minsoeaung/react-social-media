import './Post.css'
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import ModeCommentOutlinedIcon from '@mui/icons-material/ModeCommentOutlined';
import {Users} from '../../dummyData'

const Post = ({post}) => {
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
                        <span>{post.like} likes | {post.comment} comments</span>
                    </div>
                    <div className="post-bottom-gp">
                        <FavoriteBorderOutlinedIcon/>
                        <ModeCommentOutlinedIcon/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Post