import './Post.css'
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import ModeCommentOutlinedIcon from '@mui/icons-material/ModeCommentOutlined';

const Post = () => {
    return (
        <div className="post">
            <div className="post-container">

                {/* user profile image and caption */}
                <div className="post-top">
                    <img
                        src="/assets/person/1.jpeg"
                    />
                    <p>username</p>
                </div>

                {/* image */}
                <div className="post-mid">
                    <p>Lorem ipsum dolor sit amet.</p>
                    <img
                        src="/assets/post/3.jpeg"
                    />
                </div>

                {/* like and comments */}
                <div className="post-bottom">
                    <div className="post-bottom-gp">
                        <span>1181 likes | 664 comments</span>
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